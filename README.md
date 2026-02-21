# Project Title: Angular User Dashboard Application

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.1.4.

## Description
This project is a simple User Dashboard application built with Angular and Bootstrap for styling. It allows admin to add user, display them, along with proper sorting,filtering and Searching. The application demonstrates basic User Data display operations and new user adding form using the template-driven approach.

## Table of Contents
*   [Features](#features)
*   [Technologies Used](#technologies-used)
*   [Prerequisites](#prerequisites)
*   [Development Server](#development-server)
*   [Usage](#usage)
 


## Features
*   User Dashboard List UserName,Email,Class,Section,Creation Date
*   Features Like 
       - Double-click → Sort Ascending
       - Double-click again → Sort Descending
       - Visual arrow indicator shown
*   Add new User with validation.
       - "+ Add User" button opens modal
       - Required field validation
       - Email validation
       - Created Date auto-generated
       - Table updates dynamically
       - Success message displayed
       - Data persists after page refresh (LocalStorage)
*   Proper Pagination and Tabular Data Display
*   Simple and responsive UI using Bootstrap.

  

## Technologies Used
*   [Angular CLI](https://cli.angular.io/)
*   [Node.js](https://nodejs.org) & [npm](https://www.npmjs.com)
*   TypeScript
*   Local Storage(for persistance)
*   Bootstrap
*   HTML & CSS

## Prerequisites
Ensure you have [Node.js and npm](https://nodejs.org) installed on your machine.
Verify the installation by running these commands in your terminal:
node -v
npm -v

## Development Server
To start a local development server, run:-

ng serve

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Usage

Works Best as an admin managing panel with adding new user and keeping track of all users present in an organization.

 src/                                                                                                            
├── app/                                                                                                            
├── models/                                                                                                                             
   ├── user.model.ts                                                                                                                                                                       
├── data/                                                                                                                                                                                 
   ├── mock-users.ts                                                                                                                                                                  
├── users/                                                                                                                                                                                 
   ├── users.component.ts                                                                                                            
   ├── users.component.html                                                                                                        
   ├── users.component.css                                                                                                                                                                 
 app.component.ts





//New User Listing

<img width="1366" height="725" alt="Screenshot (513)" src="https://github.com/user-attachments/assets/0aedd6d3-ef99-4d56-b500-c032dadd513f" />



//User list dashboard with pagination and Filter

<img width="1366" height="689" alt="Screenshot (506)" src="https://github.com/user-attachments/assets/523e01fb-2fa1-4f5c-b20f-994ece5415c3" />



//Adding New User

<img width="1366" height="726" alt="Screenshot (508)" src="https://github.com/user-attachments/assets/cbf30e07-941e-4c5e-9d03-91ad1dc592f4" />



//Cateory Filter

<img width="1366" height="673" alt="Screenshot (503)" src="https://github.com/user-attachments/assets/e368bb1c-e326-43bb-8e98-2590d2683f0d" />



