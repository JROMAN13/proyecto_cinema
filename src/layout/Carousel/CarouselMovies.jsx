import React, { useEffect, useState } from 'react'
import { getAllMovies } from '../../services/movieServices';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselMovies = () => {
    const [movies,setMovies]=useState([]);
    const urlBaseImage = "https://image.tmdb.org/t/p/w300_and_h450_bestv2";
    useEffect(()=>{
        getAllMovies().then(
           (response)=>{
            console.log(response)
            setMovies(response)
           }
        ).catch(
            (error)=> console.error(error)
        )
    },[])
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
  return (
    <div className='w-3/4 m-auto bg-black'>
        <div className='mt-20'>
        <Slider {...settings}>
            {
                movies.map(
                    (movie,index)=>(
                        // console.log(`${urlBaseImage}${movie.poster_path}`)
                        // console.log("movie",movie.poster_path)
                        <>
                            <div key={index} className='bg-white h-[450px] text-black rounder-xl'>
                                <div className='h-56 rounder-t-xl bg-indigo-500 flex justify-center items-center'>
                                <img src={`${urlBaseImage}${movie.poster_path}`} className='h-44 w-44 rouded full' />
                                </div>
                                <div></div>
                            </div>
                       
                        </>
                    )
                )
            }
         </Slider>
        </div>
      
    </div>
  )
}

export default CarouselMovies
