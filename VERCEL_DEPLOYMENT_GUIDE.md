# 📤 GitHub Push & Vercel Deployment Guide

## ⚠️ Repository Creation Required

The repository `capstone-final-crimelens` doesn't exist yet on GitHub. You need to create it first.

---

## Step 1: Create GitHub Repository (Manual)

### 1.1 Go to GitHub
1. Visit [GitHub.com](https://github.com)
2. Sign in with **rrmoon816-cpu** account

### 1.2 Create New Repository
1. Click **"+"** (top right) → **New repository**
2. Fill in:
   - **Repository name**: `capstone-final-crimelens`
   - **Description**: `Crime Management Portal - Full Stack Application with Vercel Deployment`
   - **Public**: ✅ Yes
   - **Initialize**: ❌ Leave ALL unchecked
3. Click **"Create repository"**

### 1.3 You'll see instructions - Copy the commands

GitHub will show you the push commands. Follow the next section instead.

---

## Step 2: Push to GitHub (From Your Machine)

Run these commands in PowerShell:

```powershell
cd "C:\Users\Rishav Raj\Downloads\Capstone-Project-1-main"

git branch -M main

git push -u origin main
```

**You may be prompted to authenticate.** If so:
- Select "Sign in with your browser" 
- Or use GitHub CLI if installed

---

## Step 3: Verify on GitHub

After push completes, visit:
```
https://github.com/rrmoon816-cpu/capstone-final-crimelens
```

You should see:
✅ All files uploaded
✅ 7 commits visible
✅ README.md displaying
✅ Folders properly structured

---

## ✨ Now Set Up Vercel Deployment

### What is Vercel?
Vercel is a platform for deploying:
- ✅ Frontend (HTML/CSS/JS) - **Free**
- ✅ Backend (Node.js API) - **Free tier available**

Your full stack can be deployed for **FREE**!

---

## 🚀 Deploy Frontend to Vercel

### Option A: Deploy via Vercel Dashboard (Recommended)

#### 3.1 Sign up on Vercel
1. Visit [Vercel.com](https://vercel.com)
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"**
4. Authorize Vercel to access your GitHub account

#### 3.2 Create Frontend Project
1. Click **"New Project"** on dashboard
2. Select **"Import Git Repository"**
3. Find and click `capstone-final-crimelens`
4. **Framework Preset**: Select **"Other"** (for vanilla JS)
5. **Root Directory**: Set to `Capstone project1/CrimeLens`
6. **Build Command**: Leave empty
7. **Output Directory**: Leave empty
8. Click **"Deploy"**

#### 3.3 Configure Environment
- No environment variables needed for frontend
- Deploy will complete in 1-2 minutes

#### 3.4 Your Frontend URL
Vercel will give you a URL like:
```
https://capstone-final-crimelens.vercel.app
```

---

### Option B: Deploy Backend to Vercel

#### 3.5 Create API Project
1. Click **"New Project"** again
2. Select **"Import Git Repository"**
3. Same repository: `capstone-final-crimelens`
4. **Framework Preset**: Select **"Node.js"**
5. **Root Directory**: Set to `Capstone project1/Backend CP1`
6. **Environment Variables**: Add these:
   ```
   MONGODB_URI=mongodb+srv://rrmoon816_db_user:Moonji02@cluster0.vhzpdv1.mongodb.net/cp1_database?retryWrites=true&w=majority
   PORT=3000
   ```
7. Click **"Deploy"**

#### 3.6 Your Backend URL
Vercel will give you a URL like:
```
https://capstone-final-crimelens-api.vercel.app
```

---

## 📝 Create Vercel Configuration Files

### For Backend: Create `vercel.json`

Location: `Capstone project1/Backend CP1/vercel.json`

```json
{
  "version": 2,
  "builds": [
    {
      "src": "Backend/src/index.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "Backend/src/index.js"
    }
  ],
  "env": {
    "NODE_ENV": "production"
  }
}
```

---

## 🔧 Update Configuration for Production

### Update API Config for Production

Update `Capstone project1/CrimeLens/api-config.js`:

```javascript
// API Configuration
const API_CONFIG = {
    // Use environment variable or fallback to localhost
    BASE_URL: window.location.hostname === 'localhost' 
        ? 'http://localhost:4000/api/v1'
        : 'https://capstone-final-crimelens-api.vercel.app/api/v1',
    ENDPOINTS: {
        REGISTER: '/users/register',
        LOGIN: '/users/login',
        LOGOUT: '/users/logout',
        CREATE_POST: '/posts/create'
    }
};

// Helper function to make API calls
async function apiCall(endpoint, method = 'GET', data = null) {
    try {
        const options = {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            }
        };

        if (data) {
            options.body = JSON.stringify(data);
        }

        const response = await fetch(API_CONFIG.BASE_URL + endpoint, options);
        const result = await response.json();

        return {
            success: response.ok,
            status: response.status,
            data: result
        };
    } catch (error) {
        console.error('API Error:', error);
        return {
            success: false,
            error: error.message
        };
    }
}

// Export for use in other files
window.API_CONFIG = API_CONFIG;
window.apiCall = apiCall;
```

---

## 📋 Complete Deployment Checklist

### Before Deployment
- [ ] GitHub repository created
- [ ] Code pushed to GitHub main branch
- [ ] vercel.json created in Backend CP1
- [ ] api-config.js updated with production URL
- [ ] .env file has MongoDB URI

### GitHub
- [ ] Visit repo: `https://github.com/rrmoon816-cpu/capstone-final-crimelens`
- [ ] All files visible
- [ ] Commits showing

### Vercel Frontend
- [ ] Vercel account created
- [ ] Frontend project deployed
- [ ] URL working: `https://capstone-final-crimelens.vercel.app`
- [ ] Can load login page

### Vercel Backend
- [ ] Backend project deployed
- [ ] Environment variables set
- [ ] API accessible
- [ ] MongoDB connection working

### Final Testing
- [ ] Frontend loads
- [ ] Can register user
- [ ] Can login with registered credentials
- [ ] Can logout
- [ ] API calls working

---

## 🌐 Final URLs (After Deployment)

| Service | URL |
|---------|-----|
| GitHub Repo | `https://github.com/rrmoon816-cpu/capstone-final-crimelens` |
| Frontend (Vercel) | `https://capstone-final-crimelens.vercel.app` |
| Backend API (Vercel) | `https://capstone-final-crimelens-api.vercel.app/api/v1` |

---

## 🔗 Connect Frontend to Deployed Backend

The `api-config.js` file now automatically:
- Uses localhost for development (`npm run dev`)
- Uses Vercel URL for production (after deployment)

No code changes needed! ✅

---

## 📊 Deployment Architecture

```
GitHub Repository
    ↓
    ├── Frontend ────→ Vercel (Frontend)
    │                 ↓
    │                 https://capstone-final-crimelens.vercel.app
    │
    └── Backend ─────→ Vercel (API)
                      ↓
                      https://capstone-final-crimelens-api.vercel.app
                      ↓
                      MongoDB Atlas
```

---

## 💰 Vercel Pricing

✅ **Free Tier Includes:**
- Unlimited deployments
- Automatic HTTPS
- Global CDN
- Serverless Functions
- 10GB/month bandwidth

**Cost**: $0 per month for this project

---

## 🚨 Common Issues & Fixes

### Frontend Loads But Can't Call API
**Cause**: CORS issue or wrong API URL
**Fix**: 
1. Check api-config.js has correct BASE_URL
2. Add CORS headers to Backend/src/app.js:
```javascript
app.use(cors({
    origin: '*',
    credentials: true
}));
```

### MongoDB Connection Failed
**Cause**: .env not set in Vercel
**Fix**:
1. Go to Vercel project settings
2. Add environment variables:
   - `MONGODB_URI`: Your connection string
3. Redeploy

### Blank Page on Frontend
**Cause**: Root directory not set correctly
**Fix**:
1. Go to Vercel project settings
2. Root Directory: `Capstone project1/CrimeLens`
3. Redeploy

---

## 📱 Test Your Deployment

### From Your Phone or Another Computer

1. Visit: `https://capstone-final-crimelens.vercel.app`
2. Try to register
3. Try to login
4. Check browser console (F12) for errors

---

## 🎯 Next Steps (In Order)

1. ✅ Create GitHub repository (DO THIS MANUALLY)
2. ✅ Push code to GitHub from terminal
3. ✅ Create vercel.json file
4. ✅ Update api-config.js (already provided above)
5. ✅ Sign up on Vercel
6. ✅ Deploy Frontend
7. ✅ Deploy Backend
8. ✅ Test both deployments
9. ✅ Share your project!

---

## 💡 Pro Tips

### Tip 1: Custom Domain
After deployment, you can add custom domain:
- Vercel Settings → Domains
- Add your own domain name

### Tip 2: CI/CD Pipeline
Every push to GitHub will automatically redeploy!
- Change code locally
- Push to GitHub
- Vercel auto-deploys in 1-2 minutes

### Tip 3: Monitoring
Monitor your deployments:
- Vercel Dashboard shows all deployments
- See logs for any errors
- Rollback to previous version if needed

### Tip 4: Performance
Vercel provides:
- Automatic image optimization
- Edge caching
- Global CDN
- ~50ms response times worldwide

---

## 🎉 You're Almost Done!

Your CrimeLens project is ready to be deployed globally!

**Summary:**
- ✅ GitHub: All code committed
- ✅ Vercel: Ready for deployment (just need to create repo and deploy)
- ✅ MongoDB: Already connected
- ✅ Frontend: Ready to deploy
- ✅ Backend: Ready to deploy

**Next Action**: Create the GitHub repository and push!

---

**Status**: ✅ Ready for GitHub & Vercel Deployment
**Last Updated**: December 16, 2025
