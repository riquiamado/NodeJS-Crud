const mongoose = require('mongoose')

const booksSchema = new mongoose.Schema({
   title:{
       type:String,
       required:true,
       trim:true
   },
   author:{
       type:String,
       required:true,
       trim:true
   },
   genre:{
    type:String,
    required:true,
    trim:true
   },
   publicacion_date:{
    type:String,
   }
})

module.exports= mongoose.model('Books',booksSchema)