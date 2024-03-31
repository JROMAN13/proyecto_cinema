import React from 'react'
import Navbar from './Navbar/Navbar'
import CarouselMovies from './Carousel/CarouselMovies'

const Header = () => {
  return (
    <header className='bg-black'>
      <Navbar/>
      <CarouselMovies/>
    </header>
  )
}

export default Header
