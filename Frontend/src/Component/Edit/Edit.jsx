import React, { useState } from 'react';
import './Edit.css';
function Edit(){
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


const onHandleClick=(e)=>{
e.preventDefault();
console.log("Movie Name :", val.mname);
console.log("Rating     :", val.rating);
console.log("Vote       :", val.vote);
console.log("Movie View :", val.view);
console.log("Language   :", val.lang);
console.log("Duration   :", val.duration);
console.log("Movie Type :", val.mtype);
console.log("Picture    :", val.pic);
console.log("Banner     :", val.banner);

}


return (
      <div className='main'>
          <h1 className='reg'>Edit Movie Here...!</h1>
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
                    <input className="form-control" value={val.pic}  name='pic' type="file" id="formFile" onChange={onHandleChange}/>
                  </div>
                  <div className="mb-3 col-md-6 text-dark">
                    <label className="form-label" >Banner</label>
                    <input className="form-control" value={val.banner} name='banner'  type="file" id="formFileMultiple" multiple onChange={onHandleChange}/>
                  </div>
        
                  <div className="col-12 text-center p-5">
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </div>
               </form>
       </div>

     ) 
}

export default Edit