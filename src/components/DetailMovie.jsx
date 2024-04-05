import React from 'react'
import { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom'
import { getAllCinemas, getFuntion } from "../services/cinemaServices";
import {formatDate, urlBaseImage} from '../services/helpers';
import { getMovie, getTrailerMovie, getVideoMovie, getMovieDuration } from "../services/movieServices";


const DetailMovie = () => {
  const {idPelicula} = useParams();
  const [movies1, setMovies1] = useState([]);
  const buildYouTubeVideoURL = (videoKey) => {
    return `https://www.youtube.com/watch?v=${videoKey}`;
  };
  const idPeliculaVerdadero = String(idPelicula.substring(1));
  console.log(idPeliculaVerdadero);
  const [duration, setDuration] = useState([]);
  const [videoMovie, setVideoMovie] = useState([]);

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
          setMovies1(data);
          setVideoMovie(data2);
        } else {
          console.log('El ID de la película no está definido.');
        }
      } catch (error) {
        console.error('Error fetching cinemas data:', error);
      }
    };
    fetchData();
  }, [idPeliculaVerdadero]);

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
    <section className="w-full h-full flex-row my-8">
      <div className='w-1/2 flex-col mx-7'>
        <div className='flex justify-evenly'>
          <img src={`${urlBaseImage}${movies1.poster_path}`} alt={`Movie ${movies1.title}`} className="w-36 h-56 mr-9"/>
          <div>
          <h4 className='font-epilogue text-2xl font-bold rgb(23 26 31)'>{movies1.title}</h4>
          <h6 className='font-inter'>{movies1.original_title}({country2}, {year})</h6>
          <div className='flex flex-row gap-x-12px w-3/4'>
            <p className='bg-gray-600 text-white w-1/3 text-center'> B </p>
            <p className='bg-gray-900 text-white w-1/3 text-center'>{movies1.runtime} min</p>
            <p className='bg-blue-900 text-white w-1/3 text-center'> {genreString}</p>
            </div>
          
          
          </div>
          </div>
          <div className='flex-col'>
          <h6 className='font-inter text-base mt-7 mb-3 font-bold'>Trailer</h6>
          <iframe width="560" height="315" src={linkEmbed} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <h6 className='font-bold my-3'>Sipnosis</h6>
          <p className='text-lg font-normal font-inter text-justify'>{movies1.overview}</p>
          </div>
      </div>
      <div className='w-1/2 flex-col mx-4'>
        <h1>
          Horarios disponibles -
        </h1>
      </div>
    </section>

  )
};

export default DetailMovie;
