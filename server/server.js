import dotenv from 'dotenv';
import http from 'http'
dotenv.config();

import cookieParser from 'cookie-parser';
import express from 'express';


import cors from 'cors';

import { Server } from "socket.io";
import { initSocket } from './sockets/socket.js';
import connectDB from './config/db.js';
import userRouter from './routes/userRoutes.js';



const app = express()
const server = http.createServer(app);



connectDB()


app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log("🌐 Incoming request origin:", req.headers.origin);
  next();
});



const allowedOrigins = [
  process.env.FRONTEND_URL,
];

const io = new Server(server, {
  cors: {
    origin: allowedOrigins,
    credentials: true,
  },
});

initSocket(io)

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
          callback(null, true);
        } else {
          callback(new Error("Not allowed by CORS"));
        }
      }, 
    credentials: true, 
}))

app.get('/', (req, res) => {
    res.send("API is working");
})

app.use('/api/user', userRouter)


server.listen(3000, () => {
    console.log("Server is running on PORT 3000");
})
