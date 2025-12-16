import serverless from 'serverless-http';
import app from '../Backend/src/app.js';
import connectDB from '../Backend/src/config/database.js';

// Ensure DB connection once for serverless cold starts
let isConnected = false;
const ensureDB = async () => {
  if (!isConnected) {
    await connectDB();
    isConnected = true;
  }
};

await ensureDB();

const handler = serverless(app);

export default handler;
