import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import FrontendJenkinsSteps from './Frontend'

function App() {
  const [count, setCount] = useState(0)

  return (
    <FrontendJenkinsSteps/>
  )
}

export default App
