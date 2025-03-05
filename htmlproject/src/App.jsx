import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Html_pro from './HTML/Html_pro'
import Heand from './HTML/Heand'
import Footer from './HTML/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Heand/>
     <Html_pro />
     <Footer/>

      
    </>
  )
}

export default App
