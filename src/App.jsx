

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Products from './Pages/Products'
import Card from './Pages/Card'

function App() {

  return (
    <>
   <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/card' element={<Card/>}/>
      </Routes>
   <Footer/>
    </>
  )
}


export default App
