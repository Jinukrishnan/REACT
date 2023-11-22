import React, { useEffect, useState } from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom'
const Home = () => {
    const [getuserdata,setUserData]=useState([])
    console.log(getuserdata);

    const getData=async(e)=>{
       
        const res=await fetch("http://localhost:3001/api/getdata",{
          method:"GET",
          headers:{"Content-Type":"application/json"}
        });
        const data=await res.json();
        console.log(data);
        if(res.status===404||!data)
        {
         
          console.log("error");
        }
        else{
         setUserData(data)
          console.log("Get Data");
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
                    getData();
                }
            })
         

      }

      useEffect(()=>{
        getData ();
      },[])
    return (
        <div className='mt-5'>
            <div className="container">
                <div className="add_btn mt-2 mb-2">
                    <Link to="/register" className='btn btn-warning text-light'>Add Data</Link>
                </div>
                <table className="table">
                    <thead>
                        <tr className='table-dark'>
                            <th scope="col">ID</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Job</th>
                            <th scope="col">Number</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        getuserdata.map((data,ind)=>{
                            return(
                                <>
                                     <tr >
                            <th scope="row" key={data.id}>{data.id}</th>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.work}</td>
                            <td>{data.mobile}</td>
                            <td className='d-flex justify-content-evenly'>
                               <Link to={`/view/${data._id}`}> <button className='btn btn-success'><RemoveRedEyeIcon/></button></Link>
                                <Link to={`edit/${data._id}`}><button className='btn btn-primary'><EditIcon/></button></Link>
                                <button className='btn btn-danger' onClick={()=>{deleteUser(data._id)}}><DeleteIcon/></button>
                            </td>
                        </tr>
                                </>
                            )
                        })
                       }
                        


                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home
