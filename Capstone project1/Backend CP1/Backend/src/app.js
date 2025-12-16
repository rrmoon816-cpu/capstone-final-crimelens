import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();   // Create an Express app

// Get __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Enable CORS for all routes
app.use(cors({
    origin: '*', // Allow all origins during development. In production, specify your frontend URL
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the public folder (frontend)
// This makes the frontend accessible at root URL
app.use(express.static(path.join(__dirname, '../../public')));

//routes import
import userRouter from './routes/user.route.js';
import postRouter from './routes/post.route.js'


//routes declaration
app.use('/api/v1/users', userRouter);
app.use('/api/v1/posts', postRouter)

// Serve index.html for SPA routing (any route not matching API will serve index.html)
app.get('*', (req, res) => {
    // If the request is for an API route, don't serve index.html
    if (req.path.startsWith('/api/v1')) {
        return res.status(404).json({ message: 'API route not found' });
    }
    // Serve the index.html for all other routes (frontend SPA routing)
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

//example route: http://localhost:4000/api/v1/users/register

export default app;