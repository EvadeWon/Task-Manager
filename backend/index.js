import express from "express";
const app=express();
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js'
import cors from 'cors'
import connectDb from "./db.js";
dotenv.config();
app.use(cors())
app.use(express.json())
const port=process.env.PORT || 5000;

//db connection
connectDb();

app.use("/api/user",userRoutes)

app.listen(port,()=>{
    console.log(`server is running at port ${port}`)
})