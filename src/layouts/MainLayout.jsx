import React from 'react'
import { Navbar } from '../components/NavBar'
import { Outlet } from 'react-router-dom'

export const MainLayout = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    </>
  )
}
