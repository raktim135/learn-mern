// require('dotenv').config()
import dotenv from "dotenv";

import mongoose from "mongoose";
import connectDB from "./db/index.js";

import express from "express";
import { app } from "./app.js";
// const app = express();


dotenv.config({
    path: './env'
});

connectDB()
.then((result) => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`App runnig on https://127.0.0.1:${process.env.PORT}`);
    })
}).catch((err) => {
    console.log("DB Connection error: ", err)
});