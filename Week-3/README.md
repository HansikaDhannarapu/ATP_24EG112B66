# MERN Stack Course – Week 3

## Topics Covered

### Day 6 Topics

* Middlewares
* Built-in & Custom Middlewares
* App-level & Route-level Middleware
* Multiple APIs
* Introduction to MongoDB
* MongoDB CRUD Operations

### Day 7 Topics

* Connecting REST API with MongoDB Database
* MongoDB Native Driver vs Mongoose ODM
* Creating Schema & Model
* Schema Validations and Indexing
* USER REST API Implementation
* Hashing Password
* Error Handling Middleware
* Handling Unavailable Resources
* Running Validators During Update Operations

---

# Assignments Structure

## Backend with MongoDB Integration

### Express Server with MongoDB Connection

Created an Express.js backend server and connected it with MongoDB using Mongoose ODM.

Implemented:

* Environment configuration using `.env`
* Database connection setup
* Express middleware configuration
* API routing structure

---

## User REST API Implementation

Developed complete CRUD operations for users:

* Create User
* Read All Users
* Read Logged-in User
* Update User
* Delete User

Integrated MongoDB collections using Mongoose models and schemas.

---

## Product REST API Implementation

Built Product APIs with functionalities such as:

* Product Creation
* Reading All Products
* Reading Product by ID
* Updating Products
* Deleting Products

Applied MongoDB operations using Mongoose methods.

---

## Schema and Model Creation

Created Mongoose schemas and models with validation rules such as:

* Required fields
* Minimum and maximum length validations
* Unique field constraints
* Minimum and maximum numeric validations

Learned how schemas define the structure of MongoDB documents.

---

## Middleware Implementation

Implemented different types of middleware:

### Built-in Middleware

* `express.json()`
* `cookie-parser`

### Custom Middleware

Created custom middleware for:

* Request processing
* Token verification
* Route protection

### Error Handling Middleware

Implemented centralized error handling middleware for:

* Validation errors
* Cast errors
* Server-side errors

---

## Authentication and Authorization

Implemented user authentication system using:

* `bcryptjs` for password hashing
* `jsonwebtoken (JWT)` for token generation
* Protected routes using token verification middleware
* Cookie-based authentication

Learned how login authentication and route protection work in backend applications.

---

## Nested Documents and References

Created nested schemas for cart functionality using:

* Nested documents
* Object references with `ref`
* Population using `populate()`

Learned how relationships are handled in MongoDB using Mongoose.

---

## Environment Variables using `.env`

Configured sensitive application data using `.env` file such as:

* Port number
* Database URL
* Secret key

Learned secure configuration handling in backend applications.

---

# Additional Concepts Practiced

### MongoDB CRUD Operations

Practiced:

* `find()`
* `findOne()`
* `findById()`
* `findOneAndUpdate()`
* `findByIdAndDelete()`
* `findOneAndDelete()`

### Route Protection

Learned how protected APIs restrict access only to authenticated users using middleware.

### Validators During Update Operations

Used `runValidators:true` to apply schema validation rules during update requests.

### Handling Unavailable Resources

Implemented proper responses for unavailable users and products using status codes and conditional checks.

---

# What I Learned This Week

* Working with MongoDB and Mongoose
* Connecting backend applications with databases
* Creating schemas and models
* MongoDB CRUD operations
* Middleware concepts and implementation
* Built-in and custom middleware usage
* App-level and route-level middleware
* Password hashing using bcrypt
* JWT authentication and authorization
* Protected API routes
* Error handling middleware
* Nested documents and references
* Environment variable management using `.env`
* Backend architecture with modular APIs
* Validation and secure backend development
