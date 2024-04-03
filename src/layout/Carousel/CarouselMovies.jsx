import React, { useEffect, useState } from 'react'
import { getAllMovies, getMovie, getMovieDuration, getMoviesGenres } from '../../services/movieServices';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {formatDate,urlBaseImage} from '../../services/helpers'


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
    const [selectedImage, setSelectedImage] = useState(2);
    const [runtime,setRuntime]=useState("")
    const [genres,setGenres]=useState("");

    useEffect(() => {
        getAllMovies().then(
            (response) => {
                // console.log(response)
                setMovies(response)
            }
        ).catch(
            (error) => console.error(error)
        )
        
    }, []);

    useEffect(() => {
        if (movies.length) {
            agregarDuracionPelicula(movies).then((response) => {
            //   console.log(response);
              setMovies(response);
            });
        }
    },[movies])

    
    useEffect(()=>{
        getMoviesGenres().then(
            (response)=>{
                // console.log(response)
                setGenres(response)
            }
        ).catch((e)=>console.error(e))
    },[]);

    const agregarDuracionPelicula = async (listaPelicula) => {
        try {
            for (const pelicula of listaPelicula) {
                const duracion = await getMovieDuration(pelicula.id)
                pelicula.runtime = duracion;
            }
        } catch (error) {
            console.log(error);
        } finally {
            return listaPelicula;
        }
    }

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
        setSelectedImage(index);
        setShowAdditionalSection(true);
    }
    

    return (
        <>
        <div className='w-full'>
            <div className='md:mt-20 sm:mt-10'>
                <Slider {...settings}>
                     {movies.map((movie, index) => {
                        return (
                            <div key={index} className={`image-container ${selectedImage === index ? 'selected' : ''} rounded-lg`}   onClick={() => handleClick(index,movie.id)}>
                                <img src={`${urlBaseImage}${movie.poster_path}`} alt={`Movie ${index}`} className='image rounded-lg ' /> 
                                <div className='w-[inherit] md:h-2/4 sm:h-full bg-[#050505a0] absolute  flex flex-col justify-center items-center md:top-2/4 sm:top-0 rounded-lg bg-[#05050552] '>
                                    <h2 className='mt-1 mx-7 textPrimary text-center md:text-2xl sm:text-base sm:mx-2 font-bold text-white '>{movie.title}</h2>
                                    <p className='mx-6 px-5 mt-1 md:text-base sm:text-sm sm:px-1 sm:mx-1 text-center textSecundary text-white'>Título en inglés: {movie.original_title}</p>
                                    <h3 className='mx-7 px-5 mt-2 md:text-base sm:text-sm sm:px-1 sm:mx-1 s:mt-1 text-center textSecundary text-white'>Estreno: {new Date(movie.release_date).toLocaleDateString('es-ES', formatDate)}</h3>
                                    <h3 className= 'mx-2 mb-2 px-5 md:text-base sm:text-sm sm:px-1 sm:mx-1 text-center textSecundary text-white'>Género: {
                                        findNameGenres(movie.genre_ids,genres)
                                    
                                    }</h3>
                                {selectedImage === index && (
                                        <div className='mb-2 w-full flex-wrap flex flex-row justify-center gap-2'>
                                            <p className='textSecundary px-2 py-1 bg-white md:text-xs sm:text-xs '>{movie.adult==false ? "Para todo publico" : 'Mayores de 18'}</p>
                                            {/* <p className='textSecundary px-2 py-1 bg-white md:text-xs sm:text-xs'>115min</p> */}
                                            <p className='textSecundary px-2 py-1 bg-white md:text-xs sm:text-xs'>{movie.runtime} min</p>
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



export default CarouselMovies;
