import Navbar from '../layout/Navbar/Navbar'
import CarouselMovies from '../layout/Carousel/CarouselMovies'
import React from 'react'
import { Outlet} from 'react-router-dom'


const Layout = () => {
  return (
    <>
    <header className='bg-black'>
      <Navbar/>
      <CarouselMovies/>
    </header>
    <Outlet/>
    </>
  )
}

export default Layout
