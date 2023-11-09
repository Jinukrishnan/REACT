import schema from "./user.model.js"

export function addUser(req,res){
   try {
    console.log(req.body);
    let{mname,rating,vote,mview,lang,duration,mtype,pic,banner}=req.body;
    res.status(201).send(schema.create({mname,rating,vote,mview,lang,duration,mtype,pic,banner}))
    
   } catch (error) {
        res.status(404).send(error)
   }
}
export function displayUser(req,res)
{
   try {
      schema.find().then((data)=>{
         res.status(200).send(data)
      }).catch((error)=>{
         res.status(404).send(error)
      })
   } catch (error) {
      console.log(error);
   }
}

 export async function filmData(req,res)
 {
   try {
      const {id}=req.params
      console.log(id);
      const data=await schema.find({_id:id})
      console.log(data);
      res.status(200).send(data)
   } catch (error) {
      res.status(422).send(error)
   }
 }
