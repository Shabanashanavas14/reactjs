import React from 'react'
import './Header.css'

export default function Header() {
  return (
   
    <header>
     <nav class="navbar">
         <div class="container">
             <div class="header">
                 <h4>Travel Explorer</h4>   
             </div>
             <ul class="navbar-nav">
                 <li><a href="home.html">Login</a></li>
                 <li><a href="#">Designation</a></li>
                 <li><a href="#">Contact</a></li>
             </ul>
         </div>
     </nav>
 </header>
  )
}
