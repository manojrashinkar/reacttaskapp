# React CRUD with PHP API and MySQL

This project demonstrates how to create a simple CRUD (Create, Read, Update, Delete) application using React for the frontend, PHP for the backend API, and MySQL for the database.

## Tutorial Content Covered
- Introduction to ReactJs and setting up the development environment with Create React App.
- Installation of NodeJs, NPM, and Homebrew.
- Setting up routing in React using the `react-router-dom` package.
- Creating a database in PHPMyAdmin and designing a form in a React component.
- Creating PHP APIs and consuming them using Axios, while handling CORS issues on localhost.
- Connecting to a MySQL database using PDO, accessing React form data, and saving it in the database.
- Implementing a GET PHP API and consuming it in React using Axios to list data in a table component.
- Loading user details for an edit form and creating a PHP PUT API to update user data.
- Implementing a DELETE PHP API, consuming it using Axios, and deleting a user from the database.

## Usage
1. Clone the repository.
2. Set up your MySQL database using PHPMyAdmin or any other MySQL administration tool.
3. Update the database connection details in the PHP files according to your MySQL setup.
4. Start the PHP server.
5. Start the React development server.
6. Access the application through your browser.

## Installation and Setup
1. Install NodeJs, NPM, and Homebrew if you haven't already.
2. Install Create React App globally using NPM: `npm install -g create-react-app`.
3. Install required packages for React using `npm install`.
4. Ensure PHP is installed on your server.
5. Start your PHP server.
6. Start your React development server.

## File Structure
- `public/`: Contains the public files.
- `src/`: Contains the React application files.
  - `components/`: Contains React components.
  - `api/`: Contains PHP API files.
  - `App.js`: Main React application component.
  - `index.js`: Entry point of the React application.
  - Other React and PHP files as per the tutorial.

## To Run the Frontend 

- in root directory of frontend run command npm install and project can be run on port 3000 by npm start command 