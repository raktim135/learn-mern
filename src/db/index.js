import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        console.log(`Trigerred DB connection file...`);
        const url = `${process.env.MONGODB_URL}/${DB_NAME}`;
        console.log(`URL is: ${url}`);
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        // const connectionInstance = await mongoose.connect(`mongodb+srv://tpludos:FQr7eQTCJuJ906oV@cluster0.antjfyk.mongodb.net/tpludo`);
        console.log(`\n Mongo DB connected!! DB HOST: ${connectionInstance}`);
    }
    catch(err){
        console.log("Connection error: ", err);
        process.exit(1);
    }
}

export default connectDB;