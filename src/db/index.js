// src/db/index.js
import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';  // Import DB_NAME from constants.js
// import dotenv from 'dotenv';

// Load environment variables from .env file
// dotenv.config();

const connectDB = async () => {
    try {
        // Connect to MongoDB using the environment variable and DB_NAME
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\nMongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection error", error);
        process.exit(1);  // Exit the process with an error code if the connection fails
    }
};

//connectDB();

export default connectDB
