import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const uri = process.env.MONGODB_URI;
        if (!uri) {
            console.error('MONGODB_URI is not defined. Please add it to your .env file.');
            process.exit(1);
        }

        console.log('Attempting MongoDB connection...');
        const connectionInstance = await mongoose.connect(uri);
        console.log(`MongoDB connected: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error('MongoDB connection failed:', error.message || error);
        process.exit(1);
    }
};

export default connectDB;