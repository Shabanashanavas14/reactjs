import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/header'
import CssIndex from './Component/CssIndex'
import Footer from './Component/footer'
import Login from './Component/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
     <CssIndex />
      <Footer />
      <nav>

      </nav>
    </>
  )
}

export default App
