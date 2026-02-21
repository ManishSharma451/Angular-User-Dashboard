import { User } from '../models/user.model';

export const USERS: User[] = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  firstName: 'First' + (i + 1),
  lastName: 'Last' + (i + 1),
  class: ['1', '2', '3', '4', '5'][i % 5],
  section: ['A', 'B', 'C'][i % 3],
  email: `user${i + 1}@gmail.com`,
  createdDate: new Date(2025, i % 12, (i % 28) + 1)
}));
