import React from 'react'
import { Route, Routes } from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css'
import PrivateRoute from '../src/components/Routes/Private'
import About from './components/Layout/About'
import Contact from './components/Layout/Contact'
import PageNotFound from './components/Layout/PageNotFound'
import Policy from './components/Layout/Policy'
import AdminRoute from './components/Routes/AdminRoute'
import AdminDashboard from './pages/Admin/AdminDashboard'
import CreateCategory from './pages/Admin/CreateCategory'
import CreateProducts from './pages/Admin/CreateProducts'
import Users from './pages/Admin/Users'
import HomePage from './pages/HomePage'
import Forgotpassword from './pages/auth/Forgotpassword'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Dashboard from './pages/user/Dashboard'
import Orders from './pages/user/Orders'
import Profile from './pages/user/Profile'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/dashboard' element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/orders" element={<Orders />} />
          <Route path="user/profile" element={<Profile />} />
        </Route>
        <Route path='/dashboard' element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProducts />} />
          <Route path="admin/users" element={<Users />} />
        </Route>
        <Route path='/register' element={<Register />} />
        <Route path='/forgot-password' element={<Forgotpassword />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/policy' element={<Policy />} />
        <Route path='/*' element={<PageNotFound />} />
      </Routes>
    </>


  )
}

export default App