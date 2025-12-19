import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const connectDb=()=>{
     try{
        mongoose.connect(process.env.MONGODB_URL); //" mongodb://127.0.0.1:27017/sece_todo"
        console.log("db has been Connected");
     }catch(err){
        console.error(err);
     }
}

export default connectDb;