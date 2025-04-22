import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";


const app= express();

app.use(cors({
    origin:process.origin.CORS_ORIGIN,
    credentials:true,

}))

//three major configuration
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16k"}))
app.use(express.static("public"))




export {app}