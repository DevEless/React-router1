import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../Nav/Nav'

function RootLayout() {
  return (
    <div>
    <Nav/>
    <Outlet />
    </div>
  )
}

export default RootLayout