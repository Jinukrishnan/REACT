import React, { useEffect, useState } from 'react'
import './Detail.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'
const Detail = () => {
  const {id}=useParams("");
  const [filmdata,setFilmdata]=useState([])
  console.log(filmdata);
  console.log(id);

  const getData=async()=>{
    const res=await axios.post(`http://localhost:3001/api/film/${id}`)
     const data=res.data;
  if(res.status==404||!data)
  {
    console.log("error");
  }  
  else
  {
    console.log("data get");
    setFilmdata(data)
    // console.log(data);
  }

  }
  useEffect(()=>{
      getData();
  },[])
  return (
    <>
        {
      filmdata.map((data)=>{
        return(
          <>
          <div className='parent'>
          <img src={data.banner} alt="img" />
          <div className='child'>
                  <img src={data.pic} alt="img" />
                 <div className='asd'>
                 <h1>{data.mname}</h1>
                  <h4>Rating:{data.rating}</h4>
                  <h4>vote:{data.vote}</h4> 
                  <h4>language:{data.lang}</h4>
                  <h4>Duration:{data.duration}</h4>
                  <h4>Type:{data.mtype}</h4>
                 </div>    
          </div>
      </div>
          </>
        )
      })
    }
    </>
  )
}

export default Detail