const dotenv = require('dotenv')
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const bookRoutes = require('./routes/books.routes')
dotenv.config()

const url = process.env.MONGO_URL 
console.log(url)

// Usamos express para los middlewares 
const app = express();
app.use(bodyParser.json()) // Parseador de Bodies
app.use('/books', bookRoutes)

//Acá conectaremos la base de datos:
mongoose.connect(url, { dbName: process.env.MONGO_DB_NAME })
const db = mongoose.connection;


const port = process.env.PORT 
console.log(port)

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})