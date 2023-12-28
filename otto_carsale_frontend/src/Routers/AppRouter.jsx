import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from '../Layout/MainLayout'
import Home from '../pages/Home/Home'
import Categorypage from '../pages/categories/Categorypage'

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainLayout/>} >
                <Route index element={<Home/>} />
                <Route path="category" element={<Categorypage/>} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter