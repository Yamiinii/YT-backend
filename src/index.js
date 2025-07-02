import dotenv from 'dotenv';
import connectDB from './db/index.js';
import app from './app.js';

// dotenv.config({
//     path:'/.env'
// });
//above is not working
dotenv.config()
//CONNECTING DB  BY CONNECTING DB USING ANOTHER FILE

//it is an async function so it will return a promise
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running at Port: ${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.error("MongoDB connection failed !!!",error)
})

// Catch server-level errors like port in use, etc.
app.on("error",(error)=>{
    console.error("🚨 App-level error:", error);
    throw error;
})
















// APPROACH OF CONNECTING DB THROUGH INDEX FILE 
/*
// function connectDB(){}

// connectDB()
//IIFE
//;(asyn ()=>{})()
    //started with semicolon because if in the prev line ; is missing then it can problematic so this was is practiced
import express from "express"
const app= express()


(async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/$
            {DB_NAME}`)
        app.on("error",(error)=>{
            console.log("ERR: ",error)
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    }catch(error){
        console.error("ERROR: ",error)
        throw err
    }
})()
*/