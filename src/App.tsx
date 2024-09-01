import { Route, Routes } from 'react-router-dom'
import './App.css'
import { About, Contact, Projects, Skills } from './pages'

function App() {

  return (
    <>
      <Routes>
        {/* Add your routes here */}
        <Route path='/' element={<About/>}/>
        <Route path='/Skills' element={<Skills/>}/>
        <Route path='/Projects' element={<Projects/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default App
