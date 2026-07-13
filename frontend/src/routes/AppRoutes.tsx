import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import DashboardLayout from '../layout/DashboardLayout'
import Dashboard from '../components/dashboard/Dashboard'
import SearchPapers from '../pages/SearchPapers'

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/register' element={<RegisterPage/>}></Route>
        <Route element={<DashboardLayout/>}>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        
        </Route>
        <Route path='/dashboard/search' element={<SearchPapers/>}></Route>
      </Routes>
    </div>
  )
}

export default AppRoutes
