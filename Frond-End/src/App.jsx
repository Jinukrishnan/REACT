import React from 'react'
import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Register from './Components/Register';
// import {Switch,Route} from 'react-router-dom';
// import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Edit from './Components/Edit';
import Details from './Components/Details';
function App() {
  // const router=createBrowserRouter([
  //   {
  //     path:"/",
  //     element:<Home/>
  //   },
  //   {
  //     path:"/register",
  //     element:<Register/>
  //   },
  //   {
  //     path:"/edit/:id",
  //     element:<Edit/>
  //   },
  //   {
  //     path:"/view/:id",
  //     element:<Details/>
  //   },
  // ])

  return (
    <>
   
    {/* <React.StrictMode>
    
      <RouterProvider router={router}/>
    </React.StrictMode> */}
    <BrowserRouter>
    <Navbar/>
        <Routes>
              
              <Route path='/' Component={Home} />
              <Route path='/register' Component={Register} />
              <Route path='/edit/:id' Component={Edit} />
              <Route path='/view/:id' Component={Details} />
        </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
