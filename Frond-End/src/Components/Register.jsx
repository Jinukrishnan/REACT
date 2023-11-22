import React, { useState } from 'react'
import { NavLink,useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate= useNavigate();
  const [inp,setINP]=useState({
    name:"",
    email:"",
    age:"",
    mobile:"",
    work:"",
    add:"",
    desc:""

  })



  const setdata=(e)=>{
      console.log(e.target.value);
      const {name,value}=e.target;
      setINP((preval)=>{
        return{
          ...preval,
          [name]:value
        }
      })
    }  
        const addinpData=async(e)=>{
          e.preventDefault();
          const {name,email,age,mobile,work,add,desc}=inp;
          const res=await fetch("http://localhost:3001/api/register",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
              name,email,age,mobile,work,add,desc
            })
          });
          const data=await res.json();
          console.log(data);
          if(res.status===404||!data)
          {
            alert("error")
            console.log("error");
          }
          else{
            alert("Data Added");
            console.log("Data Added");
            navigate("/")
          }
          setINP({
            name:"",
    email:"",
    age:"",
    mobile:"",
    work:"",
    add:"",
    desc:""
          })

        }
  return (
    <div className='container '>
      <NavLink to="/">Home</NavLink>
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
          <button className='btn btn-primary' onClick={addinpData}>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Register
