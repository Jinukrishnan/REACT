import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CardContent from '@mui/material/CardContent';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import TabletAndroidIcon from '@mui/icons-material/TabletAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link,useParams,useNavigate } from "react-router-dom";
import React, { useEffect ,useState} from 'react';
const Details = () => {
    const [getuserdata,setUserData]=useState([])
    const {id}=useParams("")
   const navigate=useNavigate()
    console.log(id);
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
         setUserData(data)
        
        }

      }
      const deleteUser=async (id)=>{
        console.log(id);
            fetch(`http://localhost:3001/api/deleteuser/${id}`,
            {method:"DELETE",headers:{"Content-Type":"application/json"}}
            ).then((res2)=>{
                if(res2.status===422)
                {
                    console.log("error");
                }
                else
                {
                    console.log("deleted");
                    navigate("/")
                }
            })
         

      }

      useEffect(()=>{
        getData ();
      },[])
    return (
        <div className='container'>
            <h1 style={{ fontWeight: 400 }}>Welcome Jinu Krishnan</h1>
            <Card sx={{ maxWidth: 600 }}>
                <CardContent>
                <div className='add_btn'>
                               <Link to={`/edit/${getuserdata._id}`}> <button className='btn btn-primary mx-2'><EditIcon /></button></Link>
                            
                               <button className='btn btn-danger' onClick={()=>{deleteUser(getuserdata._id)}}><DeleteIcon /></button>
                          
                            </div>
                    <div className="row">
                        <div className="left_view col-lg-6 col-md-6 col-12">
                            <img src="/profile.jpg" style={{ width: 50 }} alt="profile" />
                            <h3 className='mt-3'>Name : <span>{getuserdata.name}</span></h3>
                            <h3 className='mt-3'>Age : <span>{getuserdata.age}</span></h3>
                            <p className='mt-3'><MailOutlineIcon />Email : <span >{getuserdata.email}</span></p>
                            <p className='mt-3'> <WorkOutlineIcon />Occupation : <span>{getuserdata.work}r</span></p>
                        </div>
                        <div className="right_view col-lg-6 col-md-6 col-12">
                            
                            <p className='mt-5'><TabletAndroidIcon /> Mobile : <span>{getuserdata.mobile}</span></p>
                            <p className='mt-3'><LocationOnIcon /> Location : <span>{getuserdata.add}</span></p>
                            <p className='mt-3'>Description  : <span>{getuserdata.desc}</span></p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default Details
