import mongoose from "mongoose";

const schema=new mongoose.Schema({
    name:{
        type:String
        
    },
    email:{
        type:String
       
    
    },
    age:{
        type:Number,
       
    },
    mobile:{
        type:Number,

    },
    work:{
        type:String,

    },
    add:{
        type:String,

    },
    desc:{
        type:String,

    }
})

export default mongoose.model.Users||mongoose.model("User",schema)