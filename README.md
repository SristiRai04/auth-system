# Authentication & Authorization System

## Overview

This project is a backend Authentication & Authorization system built using Node.js, Express.js, MongoDB, JWT, and bcrypt.

It provides:

* User Registration
* User Login
* JWT Authentication
* Role-Based Authorization
* CRUD Operations

---

## Technologies Used

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT
* bcrypt

---

## User Roles

### Admin

* View all users
* Delete users

### Student

* Register
* Login
* View profile
* Update profile

---

## Installation

```bash
npm install
```

---

## Environment Variables

Create a `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

---

## Run Project

```bash
node server.js
```

---

## API Endpoints

### Register

```bash
POST /api/auth/register
```

### Login

```bash
POST /api/auth/login
```

### Get Profile

```bash
GET /api/auth/profile
```

### Update Profile

```bash
PUT /api/auth/profile
```

### Get All Users (Admin)

```bash
GET /api/auth/users
```

### Delete User (Admin)

```bash
DELETE /api/auth/user/:id
```

---

## Features

* Secure password hashing
* JWT authentication
* Protected routes
* Role-based access control

---

## Author

Sristi Rai
