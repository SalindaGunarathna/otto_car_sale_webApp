import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from '../components/footer/Footer'
import { Header } from '../components/header/Header'

const MainLayout = () => {
  return (
    <div className= "w-screen h-screen overflow-x-hidden overflow-y-visible">
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default MainLayout