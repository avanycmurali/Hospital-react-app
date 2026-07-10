import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import RegisterPatient from './components/RegisterPatient'
import SearchPatient from './components/SearchPatient'
import DischargePatient from './components/DischargePatient'
import ViewPatient from './components/ViewPatient'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/'element={<RegisterPatient/>}/>
        <Route path='/search'element={<SearchPatient/>}/>
        <Route path='/delete'element={<DischargePatient/>}/>
        <Route path='/view'element={<ViewPatient/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
