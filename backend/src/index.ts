import express from "express";
import cors from "cors";
import dotenv from  "dotenv"
import otpRoutes from './routes/otpRoutes'; 

dotenv.config()
const app=express();

app.use(express.json());

const corsOptions = {
    origin: ['http://localhost:5173', 'https://otp-sms-system.vercel.app'], 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization'], 
    credentials: true 
  };
  
  // Use CORS middleware with options
app.use(cors(corsOptions));
app.use("/api",otpRoutes);

app.get("/",(req,res)=>{
    res.send("hello")
})

const PORT = process.env.PORT 
app.listen(PORT,()=>{
    console.log("Server connected at PORT "+ PORT)
})