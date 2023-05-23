import express from 'express';
import http from 'http';
import cors from 'cors';
import './connection.js'
import {router as userRouter} from './routes/userRoutes.js';
import {router as productRouter} from './routes/productRoutes.js';
import {router as imagesRouter} from './routes/imagesRoutes.js';
const app = express();
const corsOptions = {
    origin: "https://ecommern-app-frontend1.onrender.com" // frontend URI (ReactJS)
}
app.use(express.json());
app.use(cors(corsOptions));
app.use(cors());
app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use('/users' , userRouter);
app.use('/products' , productRouter);
app.use('/images' , imagesRouter);

app.listen(8080 , () => {console.log("Listening...")})