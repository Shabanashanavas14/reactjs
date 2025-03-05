import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Componentindex from './Component/Componentindex'
import PropsIndex from './Component/PropsIndex'
import HooksComponent from './hooks/HooksComponent'
import Login from './hooks/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1>This is Another Example of react project</h1>
      <Componentindex  content="hello" p="this props" />
      <PropsIndex h1="HI REACT" p="This is Props functions" />
      <PropsIndex h1="using some packages" p="This is a content" />
      <HooksComponent /> */}
      <Login />

    </>
  )
}

export default App
