import React from 'react'
import './Home.css'
import { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import {Link} from 'react-router-dom'
const Home = () => {

    const [filmdata,setFilmdata]=useState([])
    console.log(filmdata)
    const getFilmData=async()=>{
        const res=await axios.get("http://localhost:3001/api/display")
        const data=res.data;
      if(res.status==404||!data)
      {
        console.log("error");
      }  
      else
      {
        console.log("data get");
        
        setFilmdata(data)
      }
        
      
       
        
        
    }

    useEffect(()=>{
        getFilmData();
    },[])
  return (
    <div >
        <h1 className='head'>FILM FEST</h1>
        <div className='grid'>

            {
                filmdata.map((data,ind)=>{
                    // console.log(data.mname);
                   return(
                    <>
                       <Link to={`/Detail/${data._id}`}>
                       <div className="img1">
                            <img src={data.pic} alt="img"/>
                            <p className='name'>{data.mname}</p>
                        </div>   
                       </Link>               
                    </>
                   )
                })
            }
           
            
           
           
           
        </div>
    </div> 
  )
}

export default Home