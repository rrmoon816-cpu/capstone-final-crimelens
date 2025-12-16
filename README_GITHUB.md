# CrimeLens - Crime Management Portal

## 📋 Project Overview

**CrimeLens** is a comprehensive web application designed for visualizing and managing crime data. It provides users with easy access to crime-related information, emergency resources, and government portals for law enforcement and public safety management.

### Key Features:
- 🔐 **User Authentication** - Secure registration and login system
- 📊 **Crime Data Visualization** - Interactive displays of crime statistics
- 🚨 **Emergency Resources** - Quick access to emergency contacts and services
- 🔗 **Government Links** - Direct access to central and state government portals
- 👤 **User Dashboard** - Personalized user experience with profile management
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices

---

## 🏗️ Project Structure

```
Capstone-Final-CrimeLens/
├── Capstone project1/
│   ├── Backend CP1/
│   │   ├── Backend/
│   │   │   └── src/
│   │   │       ├── config/
│   │   │       │   ├── constants.js
│   │   │       │   └── database.js
│   │   │       ├── controllers/
│   │   │       │   ├── user.controller.js
│   │   │       │   └── post.controller.js
│   │   │       ├── models/
│   │   │       │   ├── user.model.js
│   │   │       │   └── post.model.js
│   │   │       ├── routes/
│   │   │       │   ├── user.route.js
│   │   │       │   └── post.route.js
│   │   │       ├── app.js
│   │   │       └── index.js
│   │   ├── package.json
│   │   ├── .env (create with your MongoDB URI)
│   │   └── README.md
│   │
│   └── CrimeLens/
│       ├── HTML Pages/
│       │   ├── login.html
│       │   ├── home.html
│       │   ├── about.html
│       │   ├── contact.html
│       │   ├── emergency.html
│       │   ├── central-links.html
│       │   └── state-links.html
│       │
│       ├── CSS Styles/
│       │   ├── login.css
│       │   ├── home.css
│       │   ├── about.css
│       │   ├── contact.css
│       │   ├── emergency.css
│       │   ├── central-links.css
│       │   └── state-links.css
│       │
│       ├── JavaScript/
│       │   ├── api-config.js (API configuration)
│       │   ├── login.js
│       │   ├── home.js
│       │   ├── about.js
│       │   ├── contact.js
│       │   ├── emergency.js
│       │   ├── central-links.js
│       │   └── state-links.js
│       │
│       └── Assets/
│           ├── logo.jpg
│           └── images/
│
├── SETUP_GUIDE.md (Local development setup)
├── CONNECTION_REPORT.md (Frontend-Backend connection details)
└── README.md (this file)
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB Atlas account (for database)
- Git

### Installation & Setup

#### 1. Clone the Repository
```bash
git clone https://github.com/rrmoon816-cpu/capstone-final-crimelens.git
cd capstone-final-crimelens
```

#### 2. Backend Setup
```bash
cd "Capstone project1/Backend CP1"
npm install
```

#### 3. Environment Configuration
Create a `.env` file in `Capstone project1/Backend CP1/`:
```env
PORT=4000
MONGODB_URI=mongodb+srv://your_username:your_password@your_cluster.mongodb.net/cp1_database?retryWrites=true&w=majority
```

#### 4. Start the Backend Server
```bash
npm run dev
```
Expected output:
```
Server is running on port: 4000
MongoDB connected: [your_cluster].mongodb.net
```

#### 5. Run the Frontend
- Navigate to `Capstone project1/CrimeLens/`
- Open `login.html` in your browser
- Or use VS Code Live Server extension

---

## 🔗 API Endpoints

### Base URL
```
http://localhost:4000/api/v1
```

### User Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/users/register` | Register new user |
| POST | `/users/login` | User login |
| POST | `/users/logout` | User logout |

### Posts
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/posts/create` | Create new post |

---

## 🛠️ Technology Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ORM
- **Bcrypt** - Password hashing
- **CORS** - Cross-origin resource sharing
- **Dotenv** - Environment variable management

### Frontend
- **HTML5** - Markup structure
- **CSS3** - Styling and responsive design
- **Vanilla JavaScript** - Client-side logic
- **Fetch API** - HTTP requests to backend

---

## 📝 Key Features Implemented

### Authentication System
- User registration with username, email, password, and phone
- Secure password hashing using bcrypt
- Login validation and error handling
- Session management with localStorage
- Logout functionality

### User Interface
- Responsive navigation bar
- Login/Register toggle form
- Home dashboard with user welcome message
- Multiple information pages (About, Contact, Emergency)
- Direct links to government portals

### Database Integration
- MongoDB Atlas connection
- User model with validation
- Post model for content management
- Timestamp tracking for all records

---

## 🧪 Testing the Application

### 1. Test User Registration
```
1. Open login.html in browser
2. Click "Register" tab
3. Fill in:
   - Username: testuser
   - Email: test@example.com
   - Password: password123
   - Phone: 9876543210
4. Click Register button
5. Check browser console for success message
```

### 2. Test User Login
```
1. Use the registered credentials
2. Click "Login" button
3. Should redirect to home.html
4. Username should display in navbar
```

### 3. Test Logout
```
1. Click "Logout" button on home page
2. Should redirect back to login.html
3. localStorage should be cleared
```

---

## ⚠️ Important Notes

### Security Considerations
1. **Environment Variables**: Never commit `.env` file with real credentials
2. **CORS**: Currently set to allow all origins (`*`) - restrict this in production
3. **Password Hashing**: All passwords are hashed with bcrypt before storage
4. **Database Security**: Use MongoDB Atlas IP whitelist in production

### Development vs Production
- This setup is configured for **local development**
- For production deployment:
  - Restrict CORS to specific domains
  - Use environment-specific configurations
  - Implement JWT token authentication
  - Add rate limiting
  - Enable HTTPS
  - Add input validation and sanitization

---

## 📚 Documentation

- [SETUP_GUIDE.md](SETUP_GUIDE.md) - Detailed local development setup
- [CONNECTION_REPORT.md](CONNECTION_REPORT.md) - Frontend-Backend connection analysis
- [Capstone project1/Backend CP1/README.md](Capstone project1/Backend CP1/README.md) - Backend documentation

---

## 🤝 Contributing

If you'd like to contribute to this project:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add YourFeature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

---

## 👨‍💻 Author

**Rishav Raj**
- GitHub: [@rrmoon816-cpu](https://github.com/rrmoon816-cpu)
- Email: rrmoon816@gmail.com

---

## 📄 License

This project is licensed under the ISC License - see the LICENSE file for details.

---

## 🔗 Useful Links

- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Express.js Documentation](https://expressjs.com/)
- [Mongoose Documentation](https://mongoosejs.com/)
- [MDN Web Docs](https://developer.mozilla.org/)

---

## 📞 Support

For issues or questions:
1. Check the documentation files
2. Review existing GitHub issues
3. Create a new issue with detailed description
4. Contact: rrmoon816@gmail.com

---

## ✅ Project Checklist

- ✅ Frontend and Backend connected
- ✅ MongoDB integrated
- ✅ User authentication implemented
- ✅ API endpoints configured
- ✅ Local development environment ready
- 🔄 Deployment pipeline (coming soon)
- 🔄 Advanced features (coming soon)

---

**Last Updated**: December 16, 2025

**Status**: ✅ Ready for Development and Deployment
