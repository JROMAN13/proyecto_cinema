import React, { useEffect, useState } from 'react';
import { getAllMovies } from '../../services/movieServices';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './CarouselMovies.css'; // Importa tu archivo CSS donde definirás los estilos

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
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const [showAdditionalSection, setShowAdditionalSection] = useState(false);
    const [movies, setMovies] = useState([]);
    const urlBaseImage = "https://image.tmdb.org/t/p/w300_and_h450_bestv2";

    useEffect(() => {
        getAllMovies()
            .then(response => {
                console.log(response);
                setMovies(response);
            })
            .catch(error => console.error(error));
    }, []);

    function handleClick(index) {
        setSelectedImageIndex(index);
        setShowAdditionalSection(true);
    }

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
        <div className='w-full'>
            <div className='mt-20'>
                <Slider {...settings}>
                    {movies.map((movie, index) => {
                        return (
                            <div key={index} className={`image-container ${selectedImageIndex === index ? 'selected' : ''}`} onClick={() => handleClick(index)}>
                                <img src={`${urlBaseImage}${movie.poster_path}`} alt={`Movie ${index}`} className='image' />
                            </div>
                        );
                    })}
                </Slider>
            </div>
            {selectedImageIndex !== null && (
                <div className='additional-section'>
                    {/* Contenido adicional que se muestra cuando se hace clic en una imagen */}
                </div>
            )}
        </div>
    );
};

export default CarouselMovies;
