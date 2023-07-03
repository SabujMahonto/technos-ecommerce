

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Products from './Pages/Products'
import Card from './Pages/Card'
import NotFound from './Pages/NotFound'

function App() {

  return (
    <>
    <div className="app min-h-screen bg-gray-50 text-gray-700">
       <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/card' element={<Card/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
    </div>
      <Footer/>
    </>
  )
}


export default App
