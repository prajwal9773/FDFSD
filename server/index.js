import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import morgan from "morgan";
import {dbConnection} from "./utils/index.js"
import { errorHandler, routeNotFound } from "./middlewares/errorMiddlewares.js";
import routes from "./routes/index.js"
import fs from "fs"
import path from "path";
// Import Redis client
import redisClient from "./utils/redis.js";


dotenv.config();


dbConnection();


const PORT = process.env.PORT || 8800

const app = express()

app.use(cors({
  origin: [
      "http://localhost:3000", 
      "http://localhost:3001", 
      "http://localhost", 
      "http://localhost:80"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));


app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cookieParser());
const logStream = fs.createWriteStream(path.join("logs", "access.log"), { flags: "a" });

app.use(morgan("dev", { stream: logStream }));  

app.use("/api", routes);

app.use(routeNotFound)
app.use(errorHandler)

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('Received SIGINT. Performing graceful shutdown...');
  await redisClient.quit();
  process.exit(0);
});

app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`);
})