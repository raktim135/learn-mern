// require('dotenv').config()
import dotenv from "dotenv";
import { app } from "./app.js";

dotenv.config({
    path: './env'
});

app.listen(process.env.PORT || 8000, () => {
    console.log(`App runnig on https://127.0.0.1:${process.env.PORT}`);
})
