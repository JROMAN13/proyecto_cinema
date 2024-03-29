import React, { useEffect, useState } from 'react'
import { getAllMovies } from '../../services/movieServices';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "transparent", marginRight: "30px", zIndex: 1,width:"30px", height: "100%", color: "transparent", opacity: "0" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "transparent", marginLeft: "30px", zIndex: 1,width:"30px", height: "100%", color: "transparent", opacity: "0" }}
            onClick={onClick}
        />
    );
}

const CarouselMovies = () => {

    const [movies, setMovies] = useState([]);
    const [showAdditionalSection, setShowAdditionalSection] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(2);
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

    // function handleClick(idImage) {

    //     const imageSelected= document.getElementById(idImage);
    //     imageSelected.classList.add("imgActive")
    //     console.log("imagen seleccionada", imageSelected)
    // }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    function handleClick(index) {
        setSelectedImageIndex(index);
        setShowAdditionalSection(true);
    }

    return (
        <>
        <div className='w-full'>
            <div className='mt-20'>
                <Slider {...settings}>
                    {/* {
                        movies.map(
                            (movie, index) => {
                                // console.log(`${urlBaseImage}${movie.poster_path}`)
                                // console.log("movie",movie.poster_path)
                                const idImage = `image${index}`
                                return (
                                    <div id={idImage} key={index} className='border border-blue-700 bg-white h-80 text-black rounder-xl' onClick={() => handleClick(idImage)}>
                                        {/* <div className='h-80 border border-gray-text rounder-t-xl  flex justify-center items-center' >
                                            <img  src={`${urlBaseImage}${movie.poster_path}`} onClick={() => handleClick(idImage)} className='w-full rouded full hover:cursor-pointer ' />
                                        </div> }
                                    </div>

                                );
                            })
                    } */}
                     {movies.map((movie, index) => {
                        return (
                            <div key={index} className={`image-container ${selectedImageIndex === index ? 'selected' : ''} rounded-lg`} onClick={() => handleClick(index)}>
                                <img src={`${urlBaseImage}${movie.poster_path}`} alt={`Movie ${index}`} className='image rounded-lg ' />
                                {selectedImageIndex === index && (
                                    <div className='additional-section'>
                                       <p className='text-red-500 font-semiblod'>movie</p>
                                    </div>
                                )}
                            </div>

                        );
                    })}
                </Slider>
            </div>
            
        </div>
        </>
    )
}



export default CarouselMovies
