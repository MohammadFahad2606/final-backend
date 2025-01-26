# Node.js CRUD Backend Boilerplate

A backend boilerplate for a CRUD application with user authentication, product management, and image upload.

---

## Features

- **User Authentication:** Secure user registration and login using JWT.
- **Product Management:** Full CRUD functionality for products.
- **Image Upload:** Upload and manage product images using Cloudinary.
- **Error Handling:** Centralized error handling middleware for clean and consistent error responses.
- **Database:** MongoDB integration with Mongoose for schema-based data modeling.
- **Environment Variables:** Secure sensitive data with `.env` configuration.

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/MohammadFahad2606/Final-hackathon-Night.git
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory and add the following variables:

```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

### 4. Start the Server

To start the server in development mode:

```bash
npm run dev
```

The server will run on `http://localhost:5000`.

---

## Folder Structure

```
project-root/
│
├── controllers/          # Contains controller logic
│   ├── productController.js
│   └── userController.js
│
├── middleware/           # Middleware for authentication, error handling, and image upload
│   ├── authMiddleware.js
│   ├── errorMiddleware.js
│   └── imageMiddleware.js
│
├── models/               # Mongoose models for database schemas
│   ├── Product.js
│   └── User.js
│
├── routes/               # API routes for users and products
│   ├── productRoutes.js
│   └── userRoutes.js
│
├── .env                  # Environment variables
├── index.js             # Main entry point of the application
├── package.json          # Dependencies and scripts
└── README.md             # Documentation
```

---

## API Documentation

### User APIs

1. **Register User**

   - **URL:** `POST /api/users/register`
   - **Description:** Registers a new user.
   - **Request Body:**
     ```json
     {
       "name": "string",
       "email": "string",
       "password": "string"
     }
     ```
   - **Response:**
     ```json
     {
       "_id": "string",
       "name": "string",
       "email": "string",
       "token": "string"
     }
     ```

2. **Login User**
   - **URL:** `POST /api/users/login`
   - **Description:** Authenticates a user and returns a token.
   - **Request Body:**
     ```json
     {
       "email": "string",
       "password": "string"
     }
     ```
   - **Response:**
     ```json
     {
       "_id": "string",
       "name": "string",
       "email": "string",
       "token": "string"
     }
     ```

### Product APIs

1. **Get All Products**

   - **URL:** `GET /api/products`
   - **Description:** Fetches all products.
   - **Response:**
     ```json
     [
       {
         "_id": "string",
         "name": "string",
         "description": "string",
         "price": "number",
         "image": "string",
         "createdAt": "date",
         "updatedAt": "date"
       }
     ]
     ```

2. **Get Product by ID**

   - **URL:** `GET /api/products/:id`
   - **Description:** Fetches a specific product by ID.
   - **Response:**
     ```json
     {
       "_id": "string",
       "name": "string",
       "description": "string",
       "price": "number",
       "image": "string",
       "createdAt": "date",
       "updatedAt": "date"
     }
     ```

3. **Create Product**

   - **URL:** `POST /api/products`
   - **Description:** Creates a new product (protected).
   - **Request Headers:**
     ```
     Authorization: Bearer <token>
     ```
   - **Request Body:**
     ```json
     {
       "name": "string",
       "description": "string",
       "price": "number"
     }
     ```
   - **Response:**
     ```json
     {
       "_id": "string",
       "name": "string",
       "description": "string",
       "price": "number",
       "image": "string",
       "createdAt": "date",
       "updatedAt": "date"
     }
     ```

4. **Update Product**

   - **URL:** `PUT /api/products/:id`
   - **Description:** Updates an existing product (protected).
   - **Request Headers:**
     ```
     Authorization: Bearer <token>
     ```
   - **Request Body:**
     ```json
     {
       "name": "string",
       "description": "string",
       "price": "number"
     }
     ```
   - **Response:**
     ```json
     {
       "_id": "string",
       "name": "string",
       "description": "string",
       "price": "number",
       "image": "string",
       "createdAt": "date",
       "updatedAt": "date"
     }
     ```

5. **Delete Product**
   - **URL:** `DELETE /api/products/:id`
   - **Description:** Deletes a product by ID (protected).
   - **Request Headers:**
     ```
     Authorization: Bearer <token>
     ```
   - **Response:**
     ```json
     {
       "message": "Product removed"
     }
     ```


