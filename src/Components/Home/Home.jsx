import React, { useEffect,useState } from 'react'
import "./Home.css"
export default function Home() {
    //Set up
    const timeoutRef = React.useRef(null);
    let [currIndex,updateIndex] = useState(0);

    function resetTimeout() {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }
    //Settings
    let names= ["JASON","TIGER","EATER"];

    useEffect(()=>{
        timeoutRef.current = setTimeout(()=>{
            if(currIndex < 2){
                updateIndex(currIndex+1)
            }
            else{
                updateIndex(0)
            }
        },1000)
    },[currIndex])
  return (
    <div className='hero'>
       <h1>{names[currIndex]}</h1>
    </div>
  )
}
