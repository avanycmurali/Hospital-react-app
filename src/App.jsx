import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import RegisterPatient from './components/RegisterPatient'
import SearchPatient from './components/SearchPatient'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RegisterPatient/>
      <SearchPatient/>
    </>
  )
}

export default App
