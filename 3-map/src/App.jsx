import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Maps from './component/Maps'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Maps/>
    </>
  )
}

export default App
