import express from "express";
import env from 'dotenv';
import connect from "./conn.js";
import cors from 'cors';
import router from './router.js';
env.config()
const app=express();
app.use(cors());
app.use(express.json());
app.use('/api',router)
connect().then(()=>{
    
app.listen(process.env.PORT,()=>{
    console.log(`server start at port ${process.env.PORT}`);
    })
}).catch((error)=>{
console.log(error);
})
