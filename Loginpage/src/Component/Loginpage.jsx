import React from 'react'
import './Loginpage.css'

export default function Loginpage() {
  return (
    <div className='body'>
      <form>
            <input type="text"  placeholder='Username' /><br /><br />
            <input type="text" placeholder='Password' /><br /><br />
            <button type='submit'>Login</button><br />
            <p>Not registered? <span className='create'>Create an account</span></p>
      </form>
    </div>
  )
}
