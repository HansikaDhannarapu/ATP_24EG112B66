# Week 7 – MERN Blog Application Capstone Project

## Overview

This week focused on building a full-stack Blog Application using the MERN stack.
The project includes authentication, article management, protected routes, frontend pages, backend APIs, and database integration.


# What I Have Done

* Built REST APIs using Express.js
* Developed frontend pages using React.js
* Implemented JWT authentication
* Added protected routes
* Connected MongoDB database
* Built article creation and editing features
* Implemented role-based access control
* Added login and registration features
* Integrated frontend with backend APIs



# Backend Description

## APIs

### UserAPI.js

Handles user registration, login, profile handling, and authentication.

### AuthorAPI.js

Manages author operations such as creating, editing, deleting, and viewing articles.

### AdminAPI.js

Handles admin-related functionalities and management operations.

### CommonAPI.js

Contains shared API functionalities used across the application.



## Configuration Files

### multer.js

Handles file upload configuration.

### cloudinary.js

Contains Cloudinary setup configuration.

### cloudinaryUpload.js

Handles image uploads to Cloudinary.



## Middleware

### verifyToken.js

Verifies JWT tokens and protects private routes.

### errorHandler.js

Handles server-side and validation errors.


## Models

### UserModel.js

Schema for user information and authentication data.

### ArticleModel.js

Schema for blog articles and article details.



## Core Backend

### server.js

Main server configuration and API route integration.



# Frontend Description

## Authentication Components

### Login.jsx

Login page for users and authors.

### Register.jsx

Registration page for new users.

### ProtectedRoute.jsx

Restricts unauthorized access to protected pages.

### Unauthorized.jsx

Displays unauthorized access messages.



## Article Components

### Articles.jsx

Displays all blog articles.

### ArticleByID.jsx

Displays a single article in detail.

### WriteArticle.jsx

Used for creating new articles.

### EditArticle.jsx

Allows authors to edit articles.

### AuthorArticles.jsx

Displays articles written by the logged-in author.



## User & Admin Components

### UserProfile.jsx

Displays user profile details.

### AuthorProfile.jsx

Displays author dashboard and information.

### AdminProfile.jsx

Displays admin dashboard.

### UserList.jsx

Displays all registered users.

### AuthorsList.jsx

Displays all authors dynamically.


## Layout Components

### Header.jsx

Navigation bar component.

### Footer.jsx

Footer section component.

### RootLayout.jsx

Main layout wrapper for the application.

### Home.jsx

Landing page of the blog application.



## State Management

### authStore.js

Handles authentication and global state management.



# Key Learnings

* Full-stack MERN application development
* JWT authentication and authorization
* Protected route handling
* REST API development
* Frontend and backend integration
* MongoDB and Mongoose operations
* State management in React
* File upload handling
* Role-based access control
* Dynamic UI rendering
