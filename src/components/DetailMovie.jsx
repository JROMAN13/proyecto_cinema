import React from 'react'
import { useEffect, useState} from "react";
import { Link, useParams, useNavigate } from 'react-router-dom'
import { getAllCinemas, getCinema, getFuntionAll} from "../services/cinemaServices";
import {formatDate, urlBaseImage} from '../services/helpers';
import { getMovie, getTrailerMovie, getVideoMovie, getMovieDuration } from "../services/movieServices";


const DetailMovie = ({cinema,onFuntionMovieInfo}) => {
  const {idPelicula} = useParams();
  
  const [movies1, setMovies1] = useState([]);
  const [funtionMovie, setFuntionMovie] = useState([]);
  const navigate = useNavigate();

  const buildYouTubeVideoURL = (videoKey) => {
    return `https://www.youtube.com/watch?v=${videoKey}`;
  };
  const idPeliculaVerdadero = String(idPelicula.substring(1));
  console.log(idPeliculaVerdadero);
  const [duration, setDuration] = useState([]);
  const [videoMovie, setVideoMovie] = useState([]);
  const [idCinema, setIdCinema] = useState(cinema)
  // const [idCinema, setIdCinema] = useState(() => {
  //   const saved = localStorage.getItem("idSelectedCinema");
  //   const initialValue = saved ? JSON.parse(saved) : "345sdfcg";
  //   return initialValue;
  // });

  const [hourSelected, setHourSelected] = useState(false);


  const handleHourSelection = () => {
    setHourSelected(true);
  };

  


  function obtenerIDVideoYouTube(url) {
    // Patrones de expresiones regulares para extraer el ID del video de diferentes tipos de URL de YouTube
    const patrones = [
        /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/,
        /^([a-zA-Z0-9_-]{11})$/
    ];

    // Iterar a través de los patrones y extraer el ID del video
    for (const patron of patrones) {
        const coincidencia = url.match(patron);
        if (coincidencia && coincidencia[1]) {
            return coincidencia[1];
        }
    }

    // Si no se encontró ningún ID de video
    return null;
  }
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Verifica si el ID de la película está definido antes de hacer la llamada a la función getMovie
        if (idPeliculaVerdadero) {
          console.log('ID de la película:', idPeliculaVerdadero);
          const data = await getMovie(idPeliculaVerdadero);
          const data2 = await getVideoMovie(idPeliculaVerdadero);
          const data3 = await getCinema(idCinema);
          setMovies1(data);
          setVideoMovie(data2);
          setIdCinema(data3);

        } else {
          console.log('El ID de la película no está definido.');
        }
      } catch (error) {
        console.error('Error fetching cinemas data:', error);
      }
    };
    fetchData();
  }, [idPeliculaVerdadero]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const datos = await getFuntionAll();
        setFuntionMovie(datos);
      } catch (error) {
        console.error('Error fetching cinemas data:', error);
      }
    };
    fetchData();
  }, []);

  const funtionMovieInfo1 = funtionMovie.filter((elemento) => elemento.movie_id == idPeliculaVerdadero);
  
  if (funtionMovieInfo1.length > 0) {
    onFuntionMovieInfo(funtionMovieInfo1[0]);
  }

  let dateFuntion = "";
  let hourFuntion = "";
  if (funtionMovieInfo1.length > 0 ) {
    dateFuntion = funtionMovieInfo1[0].date;
    hourFuntion = funtionMovieInfo1[0].schedule;
    console.log(funtionMovieInfo1[0].date);
  } else {
    console.error('No se encontraron elementos en funtionMovieInfo1.');
  }

  console.log(idCinema);

 
  let year= String(movies1.release_date).substring(0,4);
  let country2 = "";
  if (movies1.production_countries && movies1.production_countries.length > 0) {
    country2 = movies1.production_countries[0].iso_3166_1;
  } else {
    console.log("La propiedad production_countries está indefinida o vacía.");
  }
  let genreString = "";
  if (movies1.genres && Array.isArray(movies1.genres)) {
    const genreNames = movies1.genres.map(objeto => objeto.name);
    genreString = genreNames.join(', ');
  } else {
    console.error('La propiedad movies1.genres está indefinida o no es un array.');
  }

  let linkVideo = "";
  if (videoMovie.results && videoMovie.results.length > 0) {
    linkVideo = buildYouTubeVideoURL(videoMovie.results[0].key);
  } else {
    console.error('videoMovie.results está indefinido o no tiene elementos.');
  }
  let linkEmbed;
  const videoID = obtenerIDVideoYouTube(linkVideo);
  if (videoID) {
    linkEmbed = `https://www.youtube.com/embed/${videoID}`;
    console.log(linkEmbed); // Esto imprimirá el enlace de inserción del video de YouTube
  } else {
    console.error('No se pudo encontrar el ID del video de YouTube en la URL proporcionada.');
  }

  

  
console.log(movies1)


  
  return (
    <section className="w-full mt-7 flex">
      <div className='w-1/2 h-full flex-col mx-3'>
        <div className='w-full flex justify-evenly'>
          <img src={`${urlBaseImage}${movies1.poster_path}`} alt={`Movie ${movies1.title}`} className="w-30 h-56 mr-9 content-center"/>
          <div className='w-full'>
          <h4 className='font-epilogue text-2xl font-bold rgb(23 26 31)'> {movies1.title}</h4>
          <h6 className='font-inter'>{movies1.original_title} ({country2} , {year})</h6>
          <div className='flex flex-row  w-3/20 mt-4 items-center'>
            <p className='bg-gray-600 text-white text-center content-center flex justify-center gap-6 items-center w-full  rounded-md mr-3'> B </p>
            <p className='bg-gray-900 text-white w-1/3 text-center content-center flex  justify-center gap-6 items-center w-full rounded-md mr-3'>{movies1.runtime} min</p>
            <p className='bg-blue-900 text-white w-1/3 text-center content-center flex justify-center gap-6 items-center w-full  rounded-md mr-3 text-sm'> {genreString}</p>
            </div>
          
          
          </div>
          </div>
          <div className='flex-col w-full h-full'>
          <h6 className='font-inter text-base mt-7 mb-3 font-bold'>Trailer</h6>
          <iframe width="550" height="315" src={linkEmbed} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          <h6 className='font-bold my-3'>Sipnosis</h6>
          <p className='w-full text-lg font-normal font-inter text-justify'>{movies1.overview}</p>
          </div>
      </div>
      <div className='w-1/2 flex-col mx-2 self-start'>
        <h1 className='font-epilogue text-2xl font-bold'>
          Horarios disponibles - {dateFuntion}
        </h1>
        <br></br>
        <h6 className='font-roboto text-lg font-normal'>Elige el horario que prefieras.</h6>
        
        <h6 className='font-inter text-lg font-bold capitalize'>{idCinema.name}</h6>
        <br></br>
        <button onClick={handleHourSelection} className={`w-14 font-roboto text-lg font-normal border border-black rounded-md ${hourSelected ? 'bg-gray-300 active:bg-gray-400' : ''} flex items-center justify-center`} >
          {hourFuntion}
        </button>
        <br></br>
        
        <Link to='/selectTickets' className={`w-80 my-3 text-lg font-normal rounded-full ${hourSelected ? 'bg-gray-300 hover:bg-gray-400' : 'bg-gray-200 cursor-not-allowed'} shadow-md`} disabled={!hourSelected}>
            Seleccionar los boletos
          </Link>
        
        
      </div>
   
      
      
    </section>
    
  )
};

export default DetailMovie;
