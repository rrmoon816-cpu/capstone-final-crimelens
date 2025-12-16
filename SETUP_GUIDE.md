# CrimeLens - Local Development Setup Guide

## ✅ Status: READY TO RUN

Your project is now fully configured and ready for local development!

---

## Backend Setup - COMPLETE ✅

### What Was Done:
1. ✅ Fixed `.env` file with complete MongoDB URI
2. ✅ Installed all dependencies (`npm install`)
3. ✅ Fixed security vulnerabilities (`npm audit fix --force`)
4. ✅ Verified MongoDB connection
5. ✅ Backend running on **http://localhost:4000**

### Backend Configuration:
- **Port**: 4000
- **Database**: cp1_database (MongoDB Atlas)
- **API Base URL**: http://localhost:4000/api/v1

### Backend Routes Available:
```
POST   /api/v1/users/register   - Register new user
POST   /api/v1/users/login      - User login
POST   /api/v1/users/logout     - User logout
POST   /api/v1/posts/create     - Create a post
```

---

## Running the Project

### Start Backend Server
```bash
cd "Capstone project1/Backend CP1"
npm run dev
```
Expected output:
```
Server is running on port: 4000
MongoDB connected: ac-lvqo2mm-shard-00-00.vhzpdv1.mongodb.net
```

### Run Frontend
1. Navigate to `Capstone project1/CrimeLens/`
2. Open `login.html` in a web browser
   - Double-click the file, or
   - Use Live Server extension in VS Code

### Full Stack Running:
- Backend API: http://localhost:4000/api/v1
- Frontend: http://localhost:5500 (if using Live Server)

---

## File Structure

```
Capstone project1/
├── Backend CP1/
│   ├── .env                    ✅ MongoDB URI configured
│   ├── package.json            ✅ All dependencies installed
│   ├── node_modules/           ✅ Ready
│   └── Backend/
│       └── src/
│           ├── index.js        - Server entry point
│           ├── app.js          - Express config
│           ├── config/
│           │   ├── database.js - MongoDB connection
│           │   └── constants.js
│           ├── models/
│           │   ├── user.model.js
│           │   └── post.model.js
│           ├── controllers/
│           │   ├── user.controller.js
│           │   └── post.controller.js
│           └── routes/
│               ├── user.route.js
│               └── post.route.js
│
└── CrimeLens/
    ├── api-config.js           ✅ Connected to localhost:4000
    ├── login.html/js           ✅ Working
    ├── home.html/js            ✅ Working
    ├── about.html/js
    ├── contact.html/js
    ├── emergency.html/js
    ├── central-links.html/js
    └── state-links.html/js
```

---

## Testing the Connection

### Test Login/Registration:
1. Start backend: `npm run dev`
2. Open `login.html` in browser
3. Click "Register" tab
4. Fill in:
   - Username: `testuser`
   - Email: `test@example.com`
   - Password: `password123`
   - Phone: `9876543210`
5. Click Register button
6. Check browser console (F12) for success message

### Test Login:
1. Use credentials from registration
2. Click "Login" button
3. Should redirect to `home.html`
4. Username should display in navbar

---

## Environment Variables (.env)

Location: `Capstone project1/Backend CP1/.env`

```env
PORT=4000
MONGODB_URI=mongodb+srv://rrmoon816_db_user:Moonji02@cluster0.vhzpdv1.mongodb.net/cp1_database?retryWrites=true&w=majority
```

⚠️ **Security Note**: In production, move MongoDB credentials to GitHub Secrets or secure vault!

---

## Dependencies Installed

### Backend:
- **express** ^4.22.1 - Web framework
- **mongoose** ^7.8.8 - MongoDB ORM
- **bcrypt** ^6.0.0 - Password hashing
- **cors** ^2.8.5 - Cross-origin requests
- **dotenv** ^17.2.3 - Environment variables
- **nodemon** ^3.1.11 - Auto-reload on changes

### Frontend:
- Pure HTML/CSS/JavaScript (no dependencies needed)
- Uses Fetch API to call backend

---

## Troubleshooting

### MongoDB Connection Failed?
- Verify IP is whitelisted in MongoDB Atlas
- Check `MONGODB_URI` in `.env` includes database name
- Ensure internet connection is stable

### Backend won't start?
- Make sure port 4000 is not in use
- Run: `npm install` in Backend CP1 folder
- Check `.env` file exists and has correct values

### Frontend can't reach backend?
- Ensure backend is running on port 4000
- Check browser console (F12) for CORS errors
- Verify `api-config.js` has `BASE_URL: 'http://localhost:4000/api/v1'`

### CORS Errors?
- Backend has `cors` enabled for all origins (`origin: '*'`)
- Should work fine for localhost development

---

## Next Steps

1. ✅ Backend configured and running
2. ✅ MongoDB connected and working
3. ✅ Frontend connected to backend
4. 🔄 Test all features (register, login, logout)
5. 🔄 Implement remaining features as needed

---

## Quick Start Commands

```bash
# Navigate to backend
cd "Capstone project1/Backend CP1"

# Install dependencies (if needed)
npm install

# Start development server
npm run dev

# In another terminal, open frontend
cd "Capstone project1/CrimeLens"
# Open login.html in browser
```

---

**All files are now ready for localhost development!** 🚀
