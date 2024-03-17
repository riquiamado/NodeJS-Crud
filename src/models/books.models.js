import mongoose from 'mongoose';

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

export default mongoose.model('Books',booksSchema)