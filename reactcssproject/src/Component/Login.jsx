import React from 'react'
import './Login.css'

export default function Login() {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [error,setError]=useState({})
    
    useEffect(()=>{
        validateForm()
    },[username,password])
    
    const validateForm=()=>{
        const error={}

   if (username.trim() ===''){
       error.username= 'Username is required'
   }

   if (password.trim() ===''){
       error.password='Password is required'
   }

   setError(error)
   }
   const handleSubmit=(event)=>{
    event.preventDefault()

    if (Object.keys(error).length ===0){
    console.log('form submitted:',{username,password})
   }
   else{
    console.log('form is invalid:',error)
   }
}
   
    const handleUsernameChange=(event)=>{
        setUsername(event.target.value)
    }

    const handlePasswordChange=(event)=>{
        setPassword(event.target.value)
    }

   
  return (
    <div>
        <form onSubmit={handleSubmit}>
       <u><b><h1>LOGIN FORM</h1></b></u> <br />
      <label htmlFor="user" className="for">Username:</label>
      <input type="text" value={username} onChange={handleUsernameChange} id='user'/><br /><br />
      {error.username && <div style={{color:'red'}}>{error.username}</div>}
      <label htmlFor="pass" className="for">Password:</label>
      <input type="password" value={password} onChange={handlePasswordChange} id='pass' /><br /><br />
      {error.password && <div style={{color:'red'}}>{error.password}</div>}
      <button type='submit'>submit</button>
      </form>
    </div>
    
  )
}

