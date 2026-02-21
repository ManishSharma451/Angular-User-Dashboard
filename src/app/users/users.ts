import { Component, OnInit } from '@angular/core';
import { USERS } from '../data/mock-users';
import { User } from '../models/user.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


type SortColumn = 'firstName' | 'lastName' | 'class' | 'section' | 'createdDate';

@Component({
  selector: 'app-users',
  standalone:true,
   imports: [FormsModule,CommonModule],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users implements OnInit {

  bootstrap: any;
  modalInstance: any;
  users: User[] = [];
  filteredUsers: User[] = [];
  paginatedUsers: User[] = [];
  filterFirstName = '';
  filterLastName = '';
  filterClass = '';
  filterSection = '';
  sortColumn: SortColumn | null = null;
  sortDirection: 'asc' | 'desc' = 'asc';
  currentPage = 1;
  pageSize = 10;
  totalPages = 1;
  successMessage: string = '';

  ngOnInit(): void {
    const savedUsers = localStorage.getItem('users');

     if (savedUsers) {
         this.users = JSON.parse(savedUsers);
        } else {
         this.users = [...USERS];
         this.saveToLocalStorage();
  }
    this.applyAll();
  }

  applyAll(): void {
    this.applyFilters();
    this.applySorting();
    this.setupPagination();
  }

  applyFilters(): void {
    this.filteredUsers = this.users.filter(user =>
      user.firstName.toLowerCase().includes(this.filterFirstName.toLowerCase()) &&
      user.lastName.toLowerCase().includes(this.filterLastName.toLowerCase()) &&
      (this.filterClass ? user.class === this.filterClass : true) &&
      (this.filterSection ? user.section === this.filterSection : true)
    );

    this.currentPage = 1;
  }

  sort(column: SortColumn): void {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }

    this.applySorting();
    this.setupPagination();
  }

  applySorting(): void {
    if (!this.sortColumn) return;

    this.filteredUsers.sort((a, b) => {
      const valueA = a[this.sortColumn!];
      const valueB = b[this.sortColumn!];

      if (valueA < valueB) return this.sortDirection === 'asc' ? -1 : 1;
      if (valueA > valueB) return this.sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }

  setupPagination(): void {
    this.totalPages = Math.ceil(this.filteredUsers.length / this.pageSize);
    this.updatePage();
  }

  updatePage(): void {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.paginatedUsers = this.filteredUsers.slice(start, end);
  }

  goToPage(page: number): void {
    this.currentPage = page;
    this.updatePage();
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePage();
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePage();
    }
  }

  saveToLocalStorage(): void {
  localStorage.setItem('users', JSON.stringify(this.users));
}


addUser(form: any): void {

  const formValue = form.value;

  const userToAdd: User = {
    id: this.users.length > 0
      ? Math.max(...this.users.map(u => u.id)) + 1
      : 1,
    firstName: formValue.firstName,
    lastName: formValue.lastName,
    class: formValue.class,
    section: formValue.section,
    email: formValue.email,
    createdDate: new Date()
  };

  this.users.push(userToAdd);
  this.saveToLocalStorage();
  this.applyAll();

  this.currentPage = Math.ceil(this.filteredUsers.length / this.pageSize)
  this.updatePage();
  form.resetForm();
  // alert("User Added !");
  this.closeModal();

}


closeModal(): void {
  const modalElement = document.getElementById('addUserModal');
  const modalInstance = this.bootstrap.Modal.getInstance(modalElement);
  modalInstance?.hide();
}


}
