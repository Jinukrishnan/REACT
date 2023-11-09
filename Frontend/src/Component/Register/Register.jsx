import React, { useState } from 'react'
import './Register.css'
import axios from 'axios'

function Register(){
  const [val,setVal]=useState({
        mname:'',
        rating:'',
        vote:'',
        view:'',
        lang:'',
        duration:'',
        mtype:'',
        pic:'',
        banner:''

  })

  const onHandleChange=(e)=>{
    
      setVal((pre)=>{
        return {...pre,[e.target.name]:e.target.value}
    })
  }


const onHandleClick=async(e)=>{
  e.preventDefault();
  const {mname,rating,vote,view,lang,duration,mtype,pic,banner}=val;
  console.log("Movie Name :", mname);
  console.log("Rating     :", rating);
  console.log("Vote       :", vote);
  console.log("Movie View :", view);
  console.log("Language   :", lang);
  console.log("Duration   :", duration);
  console.log("Movie Type :", mtype);
  console.log("picture    :", pic);
  console.log("Banner     :", banner);


console.log("-------------------------");
  console.log(e.target[7]);
console.log("-------------------------");
  console.log(e.target[8]);
const pict=await converBase64(e.target[7].files[0]);
console.log(pict);
setVal(pre=>({...pre,pic:pict}))
const bnr=await converBase64(e.target[8].files[0]);
setVal(pre=>({...pre,banner:bnr}))
console.log(bnr);
//   fetch("http://localhost:3001/api/add",{method:"POST",headers:{"Content-Type":"application/json"},
//   body:JSON.stringify({mname,rating,vote,view,lang,duration,mtype,pic,banner})
  
// })
// // .then(res=>res.json())
// .then((data)=>{
//   if(res.stats==201)
//   {alert("Data Added");}
// })
// .catch(()=>{"Data not added"})

try {
 const res= await axios.post("http://localhost:3001/api/add",{mname,rating,vote,view,lang,duration,mtype,pic,banner});
 return res

} catch (error) {
  return error
}
  

}
function converBase64(file){
  return new Promise((res,rej)=>{
      const fileReader=new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload=()=>{
          res(fileReader.result)
      }
      fileReader.onerror=(error)=>{
          rej(error)
      }
  })
}

  return (
          <div className='main '>
              <div className='container'>
              <h1 className='reg'>Register Movie Here...!</h1>
                  <form className="row g-3" onSubmit={onHandleClick}>
                      <div className="col-md-6 text-dark">
                        <label className="form-label">Movie Name</label>
                        <input type="text"  value={val.mname} name='mname' className="form-control" id="inputEmail4" onChange={onHandleChange} />
                      </div>
                      <div className="col-md-6 text-dark">
                        <label  className="form-label">Rating</label>
                        <input type="text" value={val.rating}  name='rating' className="form-control" id="inputPassword4" onChange={onHandleChange}/>
                      </div>
                      <div className="col-md-6 text-dark">
                        <label className="form-label">Vote</label>
                        <input type="text" value={val.vote}  name='vote' className="form-control" id="inputEmail4" onChange={onHandleChange}/> 
                      </div>
                      <div className="col-md-6 text-dark">
                        <label  className="form-label">Movie View</label>
                        <input type="text" value={val.view} name='view' className="form-control" id="inputPassword4" onChange={onHandleChange}/>
                      </div>
                      <div className="col-md-6 text-dark">
                        <label  className="form-label">Language</label>
                        <input type="text" value={val.lang}  name='lang' className="form-control" id="inputEmail4" onChange={onHandleChange}/>
                      </div>
                      <div className="col-md-6 text-dark">
                        <label  className="form-label">Duration</label>
                        <input type="text" value={val.duration} name='duration' className="form-control"  id="inputPassword4" onChange={onHandleChange}/>
                      </div>
                      <div className="col-md-6 text-dark">
                        <label  className="form-label">Movie Type</label>
                        <input type="text" value={val.mtype}  name='mtype' className="form-control" id="inputEmail4"  onChange={onHandleChange}/>
                      </div>
                      <div className="mb-3 col-md-6 text-dark">
                        <label className="form-label">Picture</label>
                        <input className="form-control"   name='pic' type="file" id="formFile" />
                      </div>
                      <div className="mb-3 col-md-6 text-dark">
                        <label className="form-label" >Banner</label>
                        <input className="form-control"  name='banner'  type="file" id="formFileMultiple" multiple />
                      </div>
            
                      <div className="col-12 text-center p-5">
                        <button type="submit" className="btn btn-primary">Register</button>
                      </div>
                   </form>
              </div>
           </div>

         ) 
}

export default Register