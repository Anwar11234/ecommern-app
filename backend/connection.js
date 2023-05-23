import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config()
const connectionStr = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PW}@cluster0.33v2mgd.mongodb.net/ecommern?retryWrites=true&w=majority`;
mongoose.connect(connectionStr , {useNewUrlparser:true})
.then(() => console.log("Connected to mongodb"))
.catch((err) => console.log(err))

mongoose.connection.on('error' , err => console.log(err))