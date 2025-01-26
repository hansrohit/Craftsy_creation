import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const WebLayout = () => {
  return (
    <div className='h-screen w-screen overflow-x-hidden overflow-y-hidden'>
      <div className='h-[10%] w-full'><Navbar /></div>
      <div className='h-[90%] w-full'><Outlet /></div>
    </div>
  )
}

export default WebLayout