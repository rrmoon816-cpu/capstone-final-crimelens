## Unified Deployment - Frontend + Backend Combined

### Overview
This is now a **unified full-stack package** where the Express backend serves both:
1. **Frontend UI** - Static files from the `public/` folder
2. **API Routes** - RESTful API endpoints at `/api/v1/*`

### Folder Structure
```
Backend CP1/
├── public/                    # Frontend static files (served as root)
│   ├── index.html            # Login page (entry point)
│   ├── home.html, about.html, contact.html, etc.
│   ├── *.css                 # All stylesheets
│   ├── *.js                  # All scripts
│   ├── api-config.js         # Auto-detects localhost vs Vercel
│   └── *.jpg                 # Image assets
│
├── api/index.js              # Serverless wrapper for Vercel
├── Backend/src/
│   ├── app.js                # Express app (serves public + API routes)
│   ├── index.js              # Local server entry
│   ├── config/
│   │   ├── constants.js
│   │   └── database.js
│   ├── controllers/
│   │   ├── user.controller.js
│   │   └── post.controller.js
│   ├── models/
│   │   ├── user.model.js
│   │   └── post.model.js
│   └── routes/
│       ├── user.route.js
│       └── post.route.js
├── package.json
├── .env                      # MongoDB URI (not in git)
└── vercel.json               # Vercel configuration
```

### How It Works

#### Local Development (localhost:4000)
```bash
npm install
npm run dev
```
- Opens on **http://localhost:4000**
- Serves frontend from `/public/` folder
- API routes at `http://localhost:4000/api/v1/*`
- `api-config.js` auto-detects localhost and routes API calls accordingly

#### Vercel Deployment (Production)
- **Single Repository** → Single Deploy
- No need to deploy frontend and backend separately
- Vercel runs the serverless function in `api/index.js`
- Express backend serves both frontend and API
- `api-config.js` auto-detects production and routes to Vercel API

### API Endpoints
- `POST /api/v1/users/register` - Register a new user
- `POST /api/v1/users/login` - Login
- `POST /api/v1/users/logout` - Logout
- `POST /api/v1/posts/create` - Create a new post

### How to Deploy to Vercel

1. **Connect Repository:**
   - Go to [Vercel Dashboard](https://vercel.com)
   - Click "Add New Project"
   - Import the GitHub repository `capstone-final-crimelens`

2. **Set Root Directory:**
   - In Project Settings → General
   - Set "Root Directory" to: `Capstone project1/Backend CP1`

3. **Environment Variables:**
   - Add `MONGODB_URI` in Vercel Settings
   - Value: `mongodb+srv://rrmoon816_db_user:Moonji02@cluster0.vhzpdv1.mongodb.net/cp1_database?retryWrites=true&w=majority`

4. **Deploy:**
   - Click "Deploy"
   - Vercel automatically detects `vercel.json` and builds/deploys

### Key Changes

**Modified Files:**
- `Backend/src/app.js` - Now serves static files from `public/` folder before API routes
- `Backend/src/index.js` - Unchanged (still imports and runs app.js)
- `api/index.js` - Serverless wrapper (already added in previous setup)
- `vercel.json` - Already configured for serverless deployment
- `package.json` - Already has `serverless-http` dependency

**New Structure:**
- **`public/`** folder contains entire frontend (HTML, CSS, JS, images)
- All files copied from `CrimeLens/` folder
- Frontend routes to API via `api-config.js` (auto-detects environment)

### Testing

**Local:**
```bash
cd "Capstone project1/Backend CP1"
npm run dev
# Visit http://localhost:4000 in browser
# Should see login page
# API calls to /api/v1/* routes work
```

**Production (after Vercel deployment):**
- Visit your Vercel deployment URL
- Should see login page
- API calls automatically route to Vercel serverless API

### Auto-Detection Logic

The `api-config.js` file handles environment detection:
```javascript
BASE_URL: window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
    ? 'http://localhost:4000/api/v1'
    : 'https://capstone-final-crimelens-api.vercel.app/api/v1'
```

- **Local dev:** API calls go to `localhost:4000`
- **Vercel:** API calls go to Vercel deployment URL

### Benefits of Unified Deployment

✅ **Single Deploy** - One repository, one deployment  
✅ **Simplified Management** - No separate frontend/backend deploys  
✅ **Cost Efficient** - One Vercel project instead of two  
✅ **Faster Development** - Test both frontend and backend together locally  
✅ **Better Performance** - Same origin eliminates CORS complexity  
✅ **Easy Scaling** - Both frontend and API scale together  

### Deployment Checklist

- [x] Frontend files copied to `public/`
- [x] Express app configured to serve static files
- [x] API routes preserved at `/api/v1/*`
- [x] Serverless wrapper (`api/index.js`) ready
- [x] `vercel.json` configured
- [x] `api-config.js` with auto-detection
- [x] Code pushed to GitHub
- [ ] Verify root directory in Vercel: `Capstone project1/Backend CP1`
- [ ] Verify MONGODB_URI in Vercel environment variables
- [ ] Deploy to Vercel and test
