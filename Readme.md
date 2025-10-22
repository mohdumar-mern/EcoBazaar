# 🛍️ EcoBazaar - E-commerce REST API

EcoBazaar is a complete E-commerce backend built using the MERN Stack (Node.js, Express.js, MongoDB).
It includes user authentication, role-based authorization, product management, and secure password reset functionality.
---

## 🚀 Features🧑‍💻 User Features

- Register new users
- Login with JWT-based authentication
- Logout securely (clears token cookie)
- Forgot password (reset link via email or API response)
- Reset password using secure token
- Passwords are hashed using bcrypt

## 🔐 Admin Features

- Role-based access control (RBAC) to control access to admin routes
- Admin can view, add, update, and delete products
- Manage users and product listings

## 📦 Product Features

- Product CRUD operations
- Search functionality by name or category
- Filtering by category
- Pagination support
- Linked with user (via reference ID)


## ⚙️ Installation & Setup

### 1️⃣ Clone the repository:

```bash
git clone https://github.com/<your-username>/EcoBazaar.git
cd EcoBazaar
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Create .env file in the root directory

```bash
PORT=8080
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EXPIRED_COOKIES=7
NODE_ENV=development
```

### 4️⃣ Run the server

```bash
npm run dev
```

## 📖 Documentation

EcoBazaar/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── productController.js
│   └── userController.js
│
├── middleware/
│   ├── authMiddleware.js
│   └── errorHandlingMiddleware.js
│
├── models/
│   ├── userModel.js
│   └── productModel.js
│
├── routes/
│   ├── productRoutes.js
│   └── userRoutes.js
│
├── utils/
│   ├── handleError.js
│   └── generateToken.js
│
├── app.js
├── server.js
└── package.json

## Authentication Flow

- User registers → password hashed using bcrypt
- Login → JWT generated and stored in HTTP-only cookie
- Auth middleware → verifies token for protected routes
- Role-based middleware → ensures only admins can access admin routes

## 🔑 Forgot & Reset Password Flow

- User requests password reset using email
- Backend generates a secure reset token using crypto
- The token and expiry time are saved in the DB
- Reset link (/password/reset/:token) is sent via email or response
- User resets password → token is verified and password updated


## 🌐 API Endpoints

| Method | Endpoint                        | Description                                 | Access        |
| ------ | ------------------------------- | ------------------------------------------- | ------------- |
| POST   | `/api/v1/register`              | Register new user                           | Public        |
| POST   | `/api/v1/login`                 | Login user                                  | Public        |
| POST   | `/api/v1/logout`                | Logout user                                 | Authenticated |
| POST   | `/api/v1/password/forgot`       | Request password reset token                | Public        |
| PUT    | `/api/v1/password/reset/:token` | Reset password using token                  | Public        |
| GET    | `/api/v1/products`              | Get all products (search/filter/pagination) | Public        |
| POST   | `/api/v1/admin/products`        | Add product                                 | Admin         |
| PUT    | `/api/v1/admin/products/:id`    | Update product                              | Admin         |
| DELETE | `/api/v1/admin/products/:id`    | Delete product                              | Admin         |


## Author

👤 Mohd Umar


- 👉 [Mohd Umar](https://github.com/mohdumar123)
- 👉 [Portfolio](https://mohdumar123.github.io/Portfolio/)
- 👉 [LinkedIn](https://mohdumar123.github.io/Portfolio/)


## 📜 License

This project is licensed under the MIT License.