import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Bg from './img/bg.jpg'

const Layout = () => {
  return (
    <div>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 0,
          backgroundImage: `url(${Bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.3,
          pointerEvents: "none",
        }}
      />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <Outlet />
      </div>
    </div>
  )
}

export default Layout;