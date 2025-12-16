# Backend-Frontend Integration Guide

## Overview
This guide explains how the CrimeLens frontend has been connected to the backend API.

## Changes Made

### 1. Backend Fixes and Improvements

#### app.js
- ✅ Added CORS middleware to allow cross-origin requests from frontend
- ✅ Added `express.urlencoded()` middleware for form data parsing
- Package: `cors` added to dependencies

#### user.controller.js
- ✅ Fixed login controller to properly validate passwords using bcrypt
- ✅ Added email and password validation
- ✅ Added password comparison using `user.comparePassword()` method

#### post.controller.js
- ✅ Fixed syntax error (missing closing brace in if statement)

#### package.json
- ✅ Added `cors` package as dependency

### 2. Frontend Integration

#### New Files Created

**api-config.js**
- Central configuration for all API endpoints
- Base URL: `http://localhost:4000/api/v1`
- Reusable `apiCall()` function for making API requests
- Endpoints defined:
  - `/users/register` - User registration
  - `/users/login` - User login
  - `/users/logout` - User logout
  - `/posts/create` - Create new post

#### Updated Files

**login.html**
- ✅ Added script reference to `api-config.js`

**login.js**
- ✅ Added login form submission handler with API integration
- ✅ Added registration form submission handler with API integration
- ✅ Stores user data in localStorage on successful login
- ✅ Redirects to home page after successful login
- ✅ Shows error messages for failed attempts

**home.html**
- ✅ Added script reference to `api-config.js`
- ✅ Added user info display area in navbar

**home.js**
- ✅ Added user authentication check on page load
- ✅ Displays logged-in username in navbar
- ✅ Added logout functionality with API call
- ✅ Clears localStorage on logout

## How to Run

### Backend Setup

1. Navigate to backend directory:
```bash
cd "Capstone project1/Backend CP1"
```

2. Install dependencies (including CORS):
```bash
npm install
```

3. Make sure `.env` file exists with:
```
PORT=4000
MONGODB_URI=your_mongodb_connection_string
```

4. Start the backend server:
```bash
npm run dev
```

The backend will run on `http://localhost:4000`

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd "Capstone project1/CrimeLens"
```

2. Open `login.html` in a browser or use a local server:
```bash
# Option 1: Using Python
python -m http.server 3000

# Option 2: Using Node.js http-server
npx http-server -p 3000

# Option 3: Using VS Code Live Server extension
# Right-click on login.html and select "Open with Live Server"
```

3. Access the frontend at `http://localhost:3000/login.html`

## API Endpoints

### User Endpoints

**POST** `/api/v1/users/register`
```json
Request:
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "password123"
}

Response (201):
{
  "message": "User registered successfully",
  "user": {
    "id": "user_id",
    "email": "john@example.com",
    "username": "john_doe"
  }
}
```

**POST** `/api/v1/users/login`
```json
Request:
{
  "email": "john@example.com",
  "password": "password123"
}

Response (200):
{
  "message": "Login successful",
  "user": {
    "id": "user_id",
    "email": "john@example.com",
    "username": "john_doe"
  }
}
```

**POST** `/api/v1/users/logout`
```json
Request:
{
  "email": "john@example.com"
}

Response (200):
{
  "message": "Logout successful"
}
```

### Post Endpoints

**POST** `/api/v1/posts/create`
```json
Request:
{
  "name": "Post Title",
  "description": "Post description"
}

Response (201):
{
  "message": "Post created successfully",
  "post": {
    "_id": "post_id",
    "name": "Post Title",
    "description": "Post description",
    "createdAt": "timestamp",
    "updatedAt": "timestamp"
  }
}
```

## Features Implemented

### Authentication Flow
1. User registers via registration form
2. User data stored in MongoDB with hashed password
3. User logs in with email/password
4. Password validated using bcrypt
5. User info stored in localStorage
6. User redirected to home page
7. Username displayed in navbar
8. User can logout (clears localStorage and redirects to login)

### Error Handling
- Validation errors shown in alerts
- API errors caught and displayed
- Missing fields validation
- Duplicate email check
- Invalid credentials handling

## Testing the Integration

1. Start the backend server
2. Start the frontend server
3. Open browser to frontend URL
4. Click "Register" button
5. Fill in registration form (username, email, password, phone)
6. Click Register button
7. You should see "Registration successful" alert
8. Fill in login form (email as username, password)
9. Click Login button
10. You should be redirected to home page with username displayed
11. Click Logout to test logout functionality

## Notes

- **CORS**: Currently set to allow all origins (`*`). For production, change this to specific frontend URL in `app.js`
- **Password Security**: Passwords are hashed using bcrypt before storage
- **LocalStorage**: User data stored client-side. Consider using JWT tokens for production
- **Error Messages**: Currently shown as alerts. Consider using better UI components
- **Phone Number**: Captured in registration but not stored in backend model (can be added if needed)

## Next Steps (Optional Improvements)

1. Add JWT token-based authentication
2. Add password strength validation
3. Add email verification
4. Add "Remember Me" functionality
5. Add password reset feature
6. Create protected routes that require authentication
7. Add user profile page
8. Integrate post creation with user authentication
9. Add better error UI (toasts/modals instead of alerts)
10. Add loading states during API calls
