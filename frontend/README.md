# shoeshop-v2

**shoeshop-v2** is an e-commerce platform built for selling shoes. This project leverages modern web development tools and technologies, including React for the frontend, Express and MongoDB for the backend, and Redux Toolkit with Async Thunk for state management. It also includes admin functionalities for product and user management.

---

## Features

### User Features
- **Browse Products**: View available shoes with details and images.
- **Search and Filter**: Quickly find specific products using search and filter options.
- **User Authentication**: Secure user registration and login system.
- **Cart Management**: Add products to your cart and manage quantities.
- **Order Placement**: Checkout functionality to place orders.
- **Notifications**: Toast notifications for actions like adding to the cart or successful orders.

### Admin Functionalities
- **Product Management**: Add, update, and delete products.
- **User Management**: View, promote, and delete user accounts.
- **Order Management**: Monitor and manage orders from customers.

---

## Tech Stack

### Frontend
- **React**: For building user interfaces.
- **Redux Toolkit with Async Thunk**: For managing application state and handling asynchronous actions.
- **Bootstrap & React-Bootstrap**: For responsive and modern UI components.
- **Axios**: For making HTTP requests.

### Backend
- **Express**: Server-side framework for handling API requests.
- **MongoDB**: NoSQL database for data storage.
- **Mongoose**: ODM for MongoDB.
- **jsonwebtoken**: For secure authentication.
- **bcryptjs**: For password hashing.

### Dev Tools
- **Nodemon**: Automatic server restart during development.
- **Concurrently**: For running both client and server simultaneously during development.

---

## Installation

### Prerequisites
- Node.js installed on your machine.
- MongoDB installed and running.

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/shoeshop-v2.git
   cd shoeshop-v2

# Backend dependencies
npm install

# Frontend dependencies
cd frontend
npm install

# Seed the database with sample data
npm run data:import

# Run both server and client
npm run dev
