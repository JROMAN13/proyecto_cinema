import React, { useEffect, useState } from 'react'
import { getAllMovies } from '../../services/movieServices';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { left } from '@popperjs/core';


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "transparent", marginRight: "30px", zIndex: 1, height: "100%", color: "transparent", opacity: "0" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "transparent", marginLeft: "30px", zIndex: 1, height: "100%", color: "transparent", opacity: "0" }}
            onClick={onClick}
        />
    );
}



const CarouselMovies = () => {

    function handleClick(idImage) {

        const imageSelected= document.getElementById(idImage);
        console.log(imageSelected);     
    }
    
    const [movies, setMovies] = useState([]);
    const urlBaseImage = "https://image.tmdb.org/t/p/w300_and_h450_bestv2";
    useEffect(() => {
        getAllMovies().then(
            (response) => {
                console.log(response)
                setMovies(response)
            }
        ).catch(
            (error) => console.error(error)
        )
    }, [])
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };


    return (
        <div className='w-full bg-black'>
            <div className='mt-20'>
                <Slider {...settings}>
                    {
                        movies.map(
                            (movie, index) => {
                                // console.log(`${urlBaseImage}${movie.poster_path}`)
                                // console.log("movie",movie.poster_path)


                                const idImage = `image${index}`
                                return (
                                    <div key={index} className='bg-white h-[100%] text-black rounder-xl'>
                                        <div className='h-90 rounder-t-xl  flex justify-center items-center' >
                                            <img id={idImage} src={`${urlBaseImage}${movie.poster_path}`} onClick={() => handleClick(idImage)} className='w-full rouded full hover:cursor-pointer ' />
                                        </div>
                                        <div></div>
                                    </div>

                                );
                            })
                    }
                </Slider>
            </div>

        </div>
    )
}



export default CarouselMovies
