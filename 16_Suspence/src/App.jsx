import { useState, Suspense, lazy } from 'react'

import { Routes, Route, BrowserRouter } from 'react-router-dom';

import './App.css'
// import Scomp from './Scomp';
// import Asd from './asd';

function App() {
  console.log("App");
 let Scomp=lazy(()=>setData(import("./Scomp")))
 let Asd=lazy(()=>setData(import("./asd")))

  return (
    <>

      <BrowserRouter>
        <Suspense fallback={<h1>loading...</h1>}>
          <Routes>
            <Route path='/' element={<Scomp />} />
            <Route path='/asd' element={<Asd />} />
          </Routes>
        </Suspense>

      </BrowserRouter>

    </>
  )
}

async function setData(comp){
  await new Promise((res)=>setTimeout(res,3000))
  return comp
}

export default App
