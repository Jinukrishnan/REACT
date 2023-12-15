import { useState,Suspense,lazy } from 'react';
// import Scomponent from './Scomponent';
import './App.css'

function App() {
  console.log("App cmp");
  const [count, setCount] = useState(false);


  let Scomponent = lazy(() => setDelay(import("./Scomponent")));

  return (
    <>
     <Suspense fallback={<h2>Loading...</h2>}>
     {count && <Scomponent />}
     </Suspense>
     <button onClick={() => setCount(!count)}>show</button>
    </>
  )
}

export default App


async function setDelay(cmp) {
  await new Promise(res => setTimeout(res,2000));
  return cmp;
}