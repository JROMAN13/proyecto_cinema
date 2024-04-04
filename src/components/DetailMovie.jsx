import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { getAllCinemas, getFuntion } from "../services/cinemaServices";
import {formatDate, urlBaseImage} from '../services/helpers'
import { getAllMovies, getTrailerMovie, getVideoMovie,getMovieDuration } from "../services/movieServices";


const DetailMovie = () => {
  const { idPelicula } = useParams();
  let idPeliculaVerdadero = String(idPelicula.substring(1));
  const [movies, setMovies] = useState([]);
  const [cinemasData, setCinemasData] = useState(null);
  const [funcionesPeli, setFuncionesPeli] = useState(null);
  const [videoMovie, setVideoMovie] = useState([]);
  const [duration, setDuration] = useState([]);

  useEffect(() => {
    getAllMovies()
      .then((response) => {
        console.log(response);
        setMovies(response);
      })
      .catch((error) => console.error(error));
  }, []);

 


  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllCinemas();
        const data2 = await getFuntion(idPeliculaVerdadero);
        setCinemasData(data);
        setFuncionesPeli(data2);
      } catch (error) {
        console.error('Error fetching cinemas data:', error);
      }
    };
    fetchData();
  }, []);

  
  useEffect(() => {
    getTrailerMovie(idPeliculaVerdadero).then((response) => {
        console.log(response);
        setVideoMovie(response);
      })
      .catch((error) => console.error(error));
  }, [idPeliculaVerdadero]);
  
  useEffect(() => {
    getMovieDuration(idPeliculaVerdadero).then((response) => {
        console.log(response);
        setDuration(response);
      })
      .catch((error) => console.error(error));
  }, [idPeliculaVerdadero]);

  const buildYouTubeVideoURL = (videoKey) => {
    return `https://www.youtube.com/watch?v=${videoKey}`;
  };
  
  // Obtener la URL del video de YouTube utilizando la función
  const videoURL = buildYouTubeVideoURL(videoMovie.key);
  console.log(videoURL);
  {/*
  
  
  const idFuncion = funcionesPeli.filter((elemento) => elemento.movie_id == idPeliculaVerdadero);
console.log(idFuncion); */}
  return (
  <>
  <div>
 
    <h1>{idPeliculaVerdadero}</h1>
  </div>
  </>
    
  )
};

export default DetailMovie;
