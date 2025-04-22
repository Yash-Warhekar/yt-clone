// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import { app } from "./app.js";


dotenv.config({
    path:'./env'
})

const port=process.env.PORT || 8000;
connectDB()
.then(()=>{
    app.listen(port, ()=>{
        console.log(`server is running at port : ${process.env.PORT}`)
     app.on('error',(error)=>{
        console.error('error: ',error)
        throw error
    })
}
   
)
})
.catch((err)=>{
    console.log('mongo db connection failed!!!',err);
})















/*

//used iffi method and used async await to connect to db and inside async
//function we used try and catch to handle errors
import express from "express";

const app= express();
;( async()=>{
    try{
        await mongoose.contect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        app.on("error",(error)=>{
            console.log("error",error);
            throw error;
        })
    
        app.listen(process.env.PORT,()=>{
            console.log(`app is listening on port ${process.env.PORT}`);
        })

    }catch{
        console.error("Error",e);
        throw e;
    }
})()
    */