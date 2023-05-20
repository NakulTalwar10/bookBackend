const express= require('express')
const { addBooks, getBooks, deleteBooks, updateBooks } = require('../controller/bookController')
const Router = express.Router()

Router.post('/add-books',addBooks)
Router.get('/get-books',getBooks)
Router.delete('/delete-books/:id',deleteBooks)
Router.put('/update-books/:id',updateBooks)

module.exports=Router