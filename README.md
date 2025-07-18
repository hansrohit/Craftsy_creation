# 🛍️ Craftsy Creations – Handmade Marketplace

A Virtual Marketplace for artisans to list, manage, and sell their handmade creations directly to customers. The application supports artisan/customer logins, product management, cart, orders, secure payments, and personalized profiles.

---

## 📑 Table of Contents

- [Features](#features)
- [Tech Stack & Packages](#tech-stack--packages)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [🔙 Backend](#-backend)
- [🎨 Frontend](#-frontend)
- [🚀 Usage](#-usage)

---

## ✅ Features

- Artisan & Customer Authentication (JWT + bcrypt.js)
- Artisan dashboard to manage listings
- Product listings with categories
- Cart & Order system for customers
- **Redux Toolkit** for global state management
- Responsive UI with Tailwind CSS

---

## 🧱 Tech Stack & Packages

### 🖥 Frontend
- **React.js**
- **Tailwind CSS**
- **React Router DOM**
- **Redux Toolkit** for state management

#### Main Frontend Packages:
- `axios`
- `react-router-dom`
- `@reduxjs/toolkit`
- `react-redux`
- `tailwindcss`

---

### 🔙 Backend
- **Node.js + Express**
- **MongoDB + Mongoose**
- **JWT** – Authentication & Session

#### Main Backend Packages:
- `express`
- `mongoose`
- `jsonwebtoken`
- `bcryptjs`
- `cookie-parser`
- `cors`
- `dotenv`

---

## 🗂 Project Structure
```bash
    Craftsy_creation/
    │
    ├── CC-backend/
    │   ├── middleware/
    │   ├── models/
    │   │   ├── cartModel.js
    │   │   ├── orderModel.js
    │   │   ├── productModel.js
    │   │   └── userModel.js
    │   ├── routes/
    │   │   ├── cartRoutes.js
    │   │   ├── orderRoutes.js
    │   │   ├── productRoutes.js
    │   │   └── userRoutes.js
    │   ├── .env
    │   ├── .gitignore
    │   ├── config.js
    │   ├── index.js
    │   ├── package.json
    │   └── package-lock.json
    │
    └── CC-frontend/
        ├── src/
        │   ├── assets/
        │   ├── components/
        │   │   ├── CartCard.jsx
        │   │   ├── Navbar.jsx
        │   │   └── ProductCard.jsx
        │   ├── Layout/
        │   │   └── WebLayout.jsx
        │   ├── pages/
        │   │   ├── Cart.jsx
        │   │   ├── Home.jsx
        │   │   ├── Login.jsx
        │   │   ├── Orders.jsx
        │   │   ├── ProductDisplay.jsx
        │   │   ├── Signin.jsx
        │   │   └── UserDetails.jsx
        │   ├── services/
        │   │   └── api.js
        │   ├── state/
        │   │   └── store.js   // Redux store
        │   ├── App.jsx
        │   ├── main.jsx
        │   └── .env
        ├── .gitignore
        └── package.json


```
---

### ⚙️ Setup Instructions
1. Clone the repository
   ```bash
   git clone https://github.com/hansrohit/Craftsy_creation.git

2. Navigate to root
   ```bash
   cd Craftsy-Creations

3. Install dependencies
    ```bash
    npm install (in both backend/ and frontend/ folders)
    
4. Create .env file:
   ```bash
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret

---

### 🚀 Usage
- Register or log in as an artisan or customer.

**Artisan can:**

- Add and manage handmade products

- View and manage orders

**Customer can:**

- Browse listed handmade items

- Add items to cart and place orders

- Profile and session management with persistent login.

