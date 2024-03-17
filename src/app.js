
import dotenv from 'dotenv';
import express from 'express';
import booksRouter from './routes/books.routes.js';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

dotenv.config()
 const url = 'mongodb://RiquiAmado:123456@localhost:27017'
// const url = process.env.MONGO_URL;
const dbname= "books"
console.log(url)

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use("/books",booksRouter)

mongoose.connect(url,{dbName: dbname})
const db = mongoose.connection;

const PORT =  3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})