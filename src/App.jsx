import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ParentComp from './ParentComp'


function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   // task 3
   <ParentComp/>
  
   </>
  )
}

export default App
