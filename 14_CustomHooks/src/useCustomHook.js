import { useState } from "react";


const useCustomHook=(inhook)=>{
    const [val,setVal]=useState(inhook)
    const increment=()=>{
        setVal(val+1)
    }
    const decrement=()=>{
        setVal(val-1)
    }
    return{
        val,increment,decrement
    }
}
export default useCustomHook