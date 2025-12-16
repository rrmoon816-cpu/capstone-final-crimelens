import express from 'express';
import cors from 'cors';

const app = express();   // Create an Express app

// Enable CORS for all routes
app.use(cors({
    origin: '*', // Allow all origins during development. In production, specify your frontend URL
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes import
import userRouter from './routes/user.route.js';
import postRouter from './routes/post.route.js'


//routes declaration
app.use('/api/v1/users', userRouter);
app.use('/api/v1/posts', postRouter)

//example route: http://localhost:4000/api/v1/users/register

export default app;