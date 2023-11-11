import mongoose from 'mongoose'

export default async function connect(){
    const URI=process.env.DB_URL+process.env.DB_NAME;
    console.log(URI);
    const db=await mongoose.connect(URI);
    
    console.log("database connected");
    return db;
}



