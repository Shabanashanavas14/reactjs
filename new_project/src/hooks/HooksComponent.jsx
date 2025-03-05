import React, { useEffect, useState } from 'react'

const HooksComponent = () => {
    const[count,setCount]=useState(0)
    useEffect(()=>{
        document.title=`you clicked ${count} times `
    })
  return (
    <div>
      <p>you Clicked {count} time</p>
      <button onClick={()=> setCount(count+1)}>
      click me
      </button>
      <button onClick={()=>setCount(count-1)}>
        Click Me
      </button>
    </div>

  )
}

export default HooksComponent

