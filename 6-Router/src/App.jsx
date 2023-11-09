import Todo from "./Component/Todo"
import Navbar from "./Component/Navbar/Navbar"
import About from "./Component/About/About"
import { BrowserRouter,Route,Routes } from "react-router-dom"
function App() {


  return (
    
     <BrowserRouter>
     <Navbar/>
          <Routes>
              <Route path="/" Component={Todo}/>
              <Route path="/about" Component={About}/>
          </Routes>
     </BrowserRouter>
    
  )
}

export default App
