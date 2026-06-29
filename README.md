# User Management Dashboard

## Overview

User Management Dashboard is a React.js web application built for managing user records in a clean and responsive dashboard interface. The project supports authentication, protected routing, user listing, searching, filtering, sorting, pagination, adding users, editing users, deleting users, and logout confirmation.

The project uses the JSONPlaceholder REST API for initial user data. Because JSONPlaceholder is a mock API and does not permanently save changes, the application stores updated user data in Local Storage after create, update, and delete operations.

---

## Setup Process

Follow this setup process before running the project.

### 1. Check Node.js and npm

Before running this project, make sure Node.js and npm are installed on your system.

You can check them by running:

```bash
node -v
npm -v
```

### 2. Open the project folder

Open the `user_management` folder in VS Code or any code editor.

Project folder:

```text
user_management
```

### 3. Install project dependencies

Run this command from the project root folder:

```bash
npm install
```

This installs all required dependencies used in this project, including:

- React
- React DOM
- Vite
- Axios
- React Router DOM
- Tailwind CSS
- @tailwindcss/vite
- Oxlint

---

## Run Process

Follow this run process after completing the setup.

### 1. Start the development server

Run:

```bash
npm run dev
```

This starts the Vite development server.

### 2. Open the application in browser

After starting the server, open the local URL shown in the terminal.

Default Vite URL:

```text
http://localhost:5173
```

### 3. Login to the dashboard

Use the following login credentials:

- Username: `Admin`
- Password: `admin@123`

After successful login, the application navigates to the User Management Dashboard.

### 4. Run lint check

To check code quality using Oxlint, run:

```bash
npm run lint
```

### 5. Build the project for production

To create a production build, run:

```bash
npm run build
```

The production-ready output is generated inside the `dist` folder.

### 6. Preview the production build

To preview the production build locally, run:

```bash
npm run preview
```

---

## Login Details

Use the following credentials to access the dashboard:

- Username: `Admin`
- Password: `admin@123`

If a user tries to open the dashboard directly without login, the application redirects to the login page. After successful login, the user is navigated to the home dashboard.

---

## Features

- Admin login page with username and password validation
- Protected home route using React Router
- Session-based login state using Session Storage
- Logout button in the dashboard header
- Logout confirmation popup with Yes and No actions
- View users in a responsive table
- Add new user details
- Edit existing user details
- Delete user details with confirmation popup
- Display serial numbers correctly after deleting users
- Search users by first name, last name, email, or department
- Filter users by first name, last name, email, and department
- Sort users by first name, last name, email, and department
- Pagination with multiple page size options
- Client-side form validation
- Duplicate email validation
- Loading and error states
- Local Storage support for persistent user changes
- Responsive UI for desktop, tablet, and mobile screens

---

## Technologies and Libraries Used

### Frontend

- React.js
- JavaScript
- HTML5
- Vite

### Styling

- Tailwind CSS
- Tailwind CSS utilities are used instead of separate normal CSS files
- Responsive design, gradients, shadows, hover effects, popups, and animations are implemented using Tailwind classes

### Libraries

- Axios
- React Router DOM
- React Hooks
- Tailwind CSS
- @tailwindcss/vite
- Oxlint

### API

- JSONPlaceholder REST API

API endpoint:

```text
https://jsonplaceholder.typicode.com/users
```

---

## Project Structure

```text
user_management
|
|-- public
|
|-- src
|   |-- api
|   |   |-- userService.js
|   |
|   |-- assets
|   |   |-- hero.png
|   |   |-- react.svg
|   |   |-- vite.svg
|   |
|   |-- components
|   |   |-- ConfirmDelete.jsx
|   |   |-- ConfirmLogout.jsx
|   |   |-- FilterPopup.jsx
|   |   |-- Header.jsx
|   |   |-- LoginPage.jsx
|   |   |-- Pagination.jsx
|   |   |-- ProtectedRoute.jsx
|   |   |-- SearchBar.jsx
|   |   |-- UserForm.jsx
|   |   |-- UserRow.jsx
|   |   |-- UserTable.jsx
|   |
|   |-- utils
|   |   |-- validators.js
|   |
|   |-- App.jsx
|   |-- AppRouter.jsx
|   |-- index.css
|   |-- main.jsx
|
|-- .gitignore
|-- .oxlintrc.json
|-- index.html
|-- package.json
|-- package-lock.json
|-- vite.config.js
|-- README.md
```

---

## Main Functionalities

### Authentication

The application has a login page with fixed admin credentials. React Router is used to protect the dashboard route. If the user is not logged in, the app redirects to the login page.

### User Management

The dashboard allows users to view, add, edit, and delete users. After a user is deleted, the displayed serial numbers are updated automatically so the table continues in proper order.

### Search, Filter, Sort, and Pagination

Users can search, filter, and sort by first name, last name, email, and department. Pagination is available with page size options such as 10, 25, 50, and 100.

### Form Validation

The user form validates required fields, name length, alphabet-only names, valid email format, unique email, and department selection.

### Local Storage

Local Storage is used to keep user data available after page refresh. The application updates Local Storage when a user is added, updated, or deleted.

### Logout

The dashboard includes a red Logout button. When clicked, a confirmation popup is shown with a red No button and a green Yes button. If logout is confirmed, the session authentication value is removed and the user is redirected to the login page.

---

## Error Handling

The project handles:

- Loading state while user data is being fetched
- User-friendly message if initial user loading fails
- API add, update, and delete failures
- Local saving when mock API operations cannot permanently persist data
- Validation messages for empty or invalid form fields
- Duplicate email validation
- Invalid login credentials
- Confirmation dialogs before delete and logout actions

---

## UI and Styling

The project styling is implemented with Tailwind CSS instead of separate normal CSS styling files.

UI highlights include:

- Responsive dashboard layout
- Gradient header
- Modern login page
- Styled search and filter sections
- Responsive user table
- Add and edit user modal
- Delete confirmation modal
- Logout confirmation modal
- Button hover effects
- Smooth popup animations
- Mobile-friendly layout

---

## Future Enhancements

- Connect the project with a real backend API
- Add role-based access control
- Add password encryption and secure authentication
- Add dashboard statistics
- Add toast notifications
- Add dark mode
- Add user profile image upload
- Export users to Excel or PDF
- Import users using CSV
- Add unit testing and integration testing
- Add server-side search, filter, sorting, and pagination

---

## Author

**Shiva Koppula**

B.Tech Computer Science Engineering

Siddhartha Institute of Technology and Sciences

Email: [shivakoppulagoud@gmail.com](mailto:shivakoppulagoud@gmail.com)

Location: Ranga Reddy, Telangana

---

## Thank You

Thank you for reviewing this User Management Dashboard project. This project demonstrates React.js fundamentals, protected routing, REST API integration, CRUD operations, Local Storage persistence, form validation, responsive Tailwind CSS styling, and modern frontend development practices.
