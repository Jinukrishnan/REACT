import mongoose from "mongoose";


const productSchema=new mongoose.Schema({
    name:{type:String},
    price:{type:String},
    poster:{type:Object},
    banner:{type:Array},

})


export default mongoose.model.Products||mongoose.model('Product',productSchema)