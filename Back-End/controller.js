
import schema from './user.model.js';

// export function getData(req,res){
//     console.log("controller");
// }
export async function setData(req,res){
    // console.log(req.body);
    try {
        const {name,email,age,mobile,work,add,desc}=req.body; 
        console.log(name,email,age,mobile,work,add,desc);
        // console.log(name,email,age,mobile,work,add,desc);
        // if(!(name && email && age && mobile && work && add && desc))
        // {
        //     res.status(404).send("Plz fill the information")
        // }
        //  const preuser=await schema.users.find({email:email});
        //  preuser.then((data)=>{console.log(data)}).catch((er)=>{console.log("asdsd");})
        // if(preuser){
        //     res.status(404).send("user already present");
        // }
        // else{
            // adduser=new useres({name,email,age,mobile,work,add,desc})
         
        // }
        // await adduser.save();
        res.status(201).send( schema.create({name,email,age,mobile,work,add,desc}))
        // console.log(adduser);
    } catch (error) {
        res.status(404).send(error);
    }
}
export async function getData(req,res){
    try {
           schema.find().then((data)=>{
            console.log(data);
            res.status(200).send(data)
           }).catch((error)=>{
            console.log(error);
            res.status(404).json(error)
           })
    } catch (error) {
        res.status(404).json(error)
    }
}

// get individual user
   export async function getUser(req,res){
        try {
            console.log(req.params);
            const {id}=req.params;
            const userdata=await schema.findOne({_id:id})
            console.log(userdata);
            res.status(201).json(userdata);
            // schema.find()
            // .then((user)=>{
            //     return user.filter((us)=>{return us._id==id})})
            // .then((u)=>{console.log(u[0].name);})
                
        } catch (error) {
            res.status(404).json(error);
        }
      
   }

   //update user data

   export async function updateUser(req,res){
    try {

        const {id}=req.params;
        const updateduser=await schema.findByIdAndUpdate(id,req.body,{
            new:true
        })
        console.log(updateduser);
        res.status(201).json(updateduser)
        
    } catch (error) {
        console.log(error);
        res.status(422).json(error)
    }
   }

   export async function deleteUser(req,res){
    try {

        const {id}=req.params;
        console.log(id);
        const deleteuser=await schema.findByIdAndDelete({_id:id})
        console.log(deleteuser);
        res.status(201).json(deleteUser)
        
    } catch (error) {
        console.log(error);
        res.status(422).json(error)
    }
   }