const express = require('express')
require('dotenv').config()
const app = express()
const mongoose = require('mongoose');
const cors = require('cors');
const Router = require('./router/bookRoutes');



app.use(cors())
app.use(express.json());

app.use('/api/books',Router)

const PORT = process.env.PORT || 2000



app.listen(process.env.PORT, () => {
    console.log(`listen PORT=>${PORT}`)
})

mongoose.connect(process.env.MONGO_URL, {
    dbName: process.env.DB_NAME
})
    .then(() => console.log("Connected to Mongo DB"))
    .catch((err) => console.log(err))

mongoose.connection.on('connecter', () => {
    console.log("Connected to DB");
})
mongoose.connection.on('error', (err) => {
    console.log("Error Connecting to DB", err);
})
