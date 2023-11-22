import React,{useEffect, useState} from 'react'
import { Link,useParams, useNavigate } from 'react-router-dom'
const Edit = () => {
  const navigate = useNavigate();
    const [inp,setINP]=useState({
        name:"",
        email:"",
        age:"",
        mobile:"",
        work:"",
        add:"",
        desc:""
      
      })
      const {id}=useParams("")
      console.log("asd"+id);
      
        const setdata=(e)=>{
            console.log(e.target.value);
            const {name,value}=e.target;
            setINP((preval)=>{
                console.log(preval);
              return{
                ...preval,
                [name]:value
              }
            })
        }
        const getData=async()=>{
       
          const res=await fetch(`http://localhost:3001/api/getuser/${id}`,{
            method:"GET",
            headers:{"Content-Type":"application/json"}
          });
          const data=await res.json();
         
          if(res.status===404||!data)
          {
           
            console.log("error");
          }
          else{
           setINP(data)
          console.log(data);
          
          }
          
        }
        useEffect(()=>{
          getData();
        },[])
        const updateUser=async (e)=>{
            e.preventDefault();
            const {name,email,age,mobile,work,add,desc}=inp
            const res2=await fetch(`http://localhost:3001/api//updateuser/${id}`,{
              method:"PATCH",
              headers:{
                "Content-Type":"application/json"
              },
              body:JSON.stringify({
                name,email,age,mobile,work,add,desc
              })
            })
            const data2 =await res2.json();
            console.log(data2);
            if(res2.status===422 || !data2)
            {
              alert("fill the data")
            }
            else{
              alert("data added")
              navigate("/");
            
            }
        }

  return (
    <div className='container '>
    <Link to="/">Home</Link>
    <form className='mt-4'>
      <div className="row ">
        <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
          <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
          <input type="text" value={inp.name}  onChange={setdata}  name='name' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
          <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
          <input type="email" value={inp.email} onChange={setdata}  name='email' className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
          <label htmlFor="exampleInputPassword1" className="form-label">Age</label>
          <input type="text" value={inp.age} onChange={setdata}  name='age' className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
          <label htmlFor="exampleInputPassword1" className="form-label">Mobile</label>
          <input type="text" value={inp.mobile} onChange={setdata}  name='mobile' className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
          <label htmlFor="exampleInputPassword1" className="form-label">Work</label>
          <input type="text" value={inp.work} onChange={setdata}  name='work' className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
          <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
          <input type="text" value={inp.add} onChange={setdata}  name='add' className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3 col-lg-12 col-md-12 col-sm-12">
          <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
          <textarea value={inp.desc} onChange={setdata} name="desc"  className='form-control' id="" cols="30" rows="10"></textarea>
        </div>
        <button className='btn btn-primary' onClick={updateUser} >Submit</button>
      </div>
    </form>
  </div>
  )
}

export default Edit
