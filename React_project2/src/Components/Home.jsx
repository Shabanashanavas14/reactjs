import React from 'react'

export default function Home() {
  const myStyle={
    color:"red",
    backgroundColor:"Blue",
    padding:"10px",
    fontFamily:"Sans-Serif"
  }
  return (
    <div>
      <h1 style={myStyle}>Welcome to Home page</h1>
      <p>Add a little style</p>
    </div>
  )
}
