import Navbar from '../layout/Navbar/Navbar'
import CarouselMovies from '../layout/Carousel/CarouselMovies'
import React from 'react'
import { Outlet} from 'react-router-dom'


const Layout = (props) => {
  return (
    <>
      <header className="bg-black">
        <Navbar handleSelection={props.handleSelection} />
        <CarouselMovies />
      </header>
      <Outlet></Outlet>
    </>
  );
};

export default Layout
