import dotenv from 'dotenv';
import app from './app.js';
import connectDB from './config/database.js';

// Load environment variables from .env located at the process current working directory
dotenv.config();

const startServer = async () => {
    try {
        await connectDB();

        app.on("error", (error) => {
            console.log("ERROR", error);
            throw error;

        }); 

        const port = process.env.PORT || 8000;
        app.listen(port, () => {
            console.log(`Server is running on port: ${port}`);
        });
    } catch (error) {
        console.log("MongoDB connection failed!!", error);
    }
}    

startServer();