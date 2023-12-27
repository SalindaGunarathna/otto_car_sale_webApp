import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from '../Layout/MainLayout'
import Home from '../pages/Home/Home'
import { Test } from '../components/Test'

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainLayout/>} >
                <Route index element={<Home/>} />
                <Route path="test" element={<Test/>} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter