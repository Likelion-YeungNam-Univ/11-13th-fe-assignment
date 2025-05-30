import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Bg from './img/bg.jpg'

const Layout = () => {
  return (
    <div>
      <div
        className="fixed top-0 left-0 w-screen h-screen z-0 bg-cover bg-center opacity-30 pointer-events-none"
        style={{ backgroundImage: `url(${Bg})` }}
      />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <Outlet />
      </div>
    </div>
  )
}

export default Layout;