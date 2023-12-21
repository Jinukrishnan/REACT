import * as RH from './RequestHandler.js'
import { Router } from 'express'
import multer from 'multer'

const storage=multer.diskStorage({
    destination:"./products",
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})
const upload=multer({storage:storage})

const tester = (req, res, next) => {
    console.log(req.body);
    next();
}

const router=Router()

router.route('/add').post(upload.fields([{name:'poster',maxCount:1},tester,{name:"banner"}]),RH.addProduct);



export default router
