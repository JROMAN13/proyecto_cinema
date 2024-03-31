import React, { useEffect, useState } from 'react'
import { getAllMovies, getMovie, getMoviesGenres } from '../../services/movieServices';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import formatDate from '../../services/helpers'


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

    const [genres,setGenres]=useState("")
    useEffect(() => {
        getAllMovies().then(
            (response) => {
                console.log(response)
                setMovies(response)
            }
        ).catch(
            (error) => console.error(error)
        )
    }, []);
    

    useEffect(()=>{
        getMoviesGenres().then(
            (response)=>{
                // console.log(response)
                setGenres(response)
            }
        ).catch((e)=>console.error(e))
    },[]);

    // const getMovieDetails = async( idMovie) =>{
    //     try {
    //         const data=  await getMovie(idMovie)
    //         return data.runtime
    //     } catch (error) {
    //         console.error(error)
    //         return ""
    //     }
    // }

    const findNameGenres= (idsGenres,data) =>{
        let namesGenres = "";
        for (let id of idsGenres) {
            const genre = data.find(genre => genre.id === id)     ;
            if (genre) {
                namesGenres += `${genre.name}, `;
            }
        }
        namesGenres=namesGenres.slice(0,-2);
        return namesGenres
    }

    const settings = {
        dots: false,
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
                     {movies.map((movie, index) => {
                        return (
                            <div key={index} className={`image-container ${selectedImageIndex === index ? 'selected' : ''} rounded-lg`}   onClick={() => handleClick(index)}>
                                <img src={`${urlBaseImage}${movie.poster_path}`} alt={`Movie ${index}`} className='image rounded-lg ' /> 
                                <div className='w-[inherit] bg-[#050505a0] absolute  flex flex-col justify-center items-center md:top-2/4 sm:top-0 rounded-lg bg-[#05050552] '>
                                    <h2 className='textPrimary text-center md:text-2xl sm:text-lg font-bold text-white '>{movie.title}</h2>
                                    <p className='px-5 mt-1 md:text-base sm:text-sm text-center textSecundary text-white'>Título en inglés: {movie.original_title}</p>
                                    <h3 className='px-5 mt-2 md:text-lg sm:text-base text-center textSecundary text-white'>Estreno: {new Date(movie.release_date).toLocaleDateString('es-ES', formatDate)}</h3>
                                    <h3 className= 'px-5 md:text-lg sm:text-base text-center textSecundary text-white'>Género: {
                                        findNameGenres(movie.genre_ids,genres)
                                    
                                    }</h3>
                                {selectedImageIndex === index && (
                                        <div className='additional-section flex-wrap mt-2'>
                                            <p className='p-2 mx-2 bg-white text-sm'>{movie.adult==false ? "Para todo publico" : 'Mayores de 18'}</p>
                                            {/* <p className='p-2 mx-2 bg-white text-sm '>{getMovieDetails(movie.id)}</p> */}
                                        </div>
                                )}
                                </div>
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
