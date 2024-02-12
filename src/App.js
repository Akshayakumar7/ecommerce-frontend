import React from 'react'
import { Route, Routes } from "react-router-dom"
import HomePage from './pages/HomePage'
import About from './components/Layout/About'
import Contact from './components/Layout/Contact'
import Policy from './components/Layout/Policy'
import PageNotFound from './components/Layout/PageNotFound'
import Register from './pages/Auth/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/policy' element={<Policy />} />
        <Route path='/*' element={<PageNotFound />} />
      </Routes>
    </>


  )
}

export default App