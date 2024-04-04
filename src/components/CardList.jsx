import React, { useEffect, useState } from "react";
import { getAllMovies, getMovieDuration, getMoviesGenres } from "../services/movieServices";
import {formatDate, urlBaseImage} from '../services/helpers'
import {NavLink } from "react-router-dom";
import { getMoviesByIdCinema } from "../services/cinemaServices";

const CardList = () => {
  const idCinema=localStorage.getItem(("selectedCinemaId")) || '';
  const [movies, setMovies] = useState([]);
  const [movieRuntime, setMovieRuntime] = useState("");
  const [movieId, setMovieId] = useState("");
  const [genres,setGenres]=useState("");

  if(idCinema== 0){
    localStorage.removeItem("selectedCinemaId")
  }
  
  useEffect(() => {
    if(idCinema){
      console.log(idCinema);
      getMoviesByIdCinema(idCinema)
      .then((response) => {
        setMovies(response);
      })
      .catch((error) => console.error(error));
    }
  }, [idCinema]);
  
  useEffect(()=>{
    getMoviesGenres().then(
        (response)=>{
            // console.log(response)
            setGenres(response)
        }
    ).catch((e)=>console.error(e))
  },[]);

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

  useEffect(() => {
    agregarDuracionPelicula(movies).then((response) => {
      console.log("duracion",response);
      setMovieRuntime(response);
    });
  },[movies])

  const agregarDuracionPelicula = async (pelicula) => {
    try {
      const duracion = await getMovieDuration(pelicula.id)
      pelicula.runtime = duracion;
      return duracion
    } catch (error) {
        console.log(error);
    } 
  }

 
  return (
    <div className="mt-10 mx-10">
        <h1 className="mb-5 textPrimary">EN CARTELERA</h1>
        <div className="mt-10 flex flex-row flex-wrap justify-between gap-4">
        {movies.length>0? movies.map((movie, index) => {
          const genresMovie=movie.genre_ids ?? movie.genres;
          return (
            <div key={index} className=" w-1/5 mb-5 rounded-lg dark:bg-gray-800 dark:border-gray-700">
                <NavLink to={`/details/:${movie.id}`}>
                    <img src={`${urlBaseImage}${movie.poster_path}`} alt={`Movie ${index}`} className="w-full  rounded-lg"/>
                </NavLink>
                <div className="mt-2 text-sm">
                    <NavLink to={`/details/:${movie.id}`}>
                        <h3 className="textSecundary text-lg font-semibold tracking-tight text-gray-text dark:text-white">{movie.title}</h3>
                    </NavLink>
                    <p className="mt-2 font-normal text-gray-text dark:text-gray-400 textPrimary">Título en inglés: {movie.original_title}</p>
                    <p className="mt-1 font-normal text-gray-text dark:text-gray-400 textPrimary">Estreno: {new Date(movie.release_date).toLocaleDateString('es-ES', formatDate)}</p>
                    <h3 className= 'mt-1 font-normal text-gray-text dark:text-gray-400 textPrimary '>Género: {
                      findNameGenres(genresMovie,genres)
                    }
                    </h3>
                    <div className='mt-3 w-full flex-wrap flex flex-row justify-center gap-2'>
                        <p className='textPrimary px-2 py-1 bg-[#EAEAEAFF] text-neutral-900 md:text-xs sm:text-xs'>{movie.adult==false ? "Para todo publico" : 'Mayores de 18'}</p>
                        <p className='textPrimary px-2 py-1 bg-[#EAEAEAFF] text-neutral-900 md:text-xs sm:text-xs'>{movie.runtime} min</p>
                    </div>
                </div>
            </div>
          );
         }):<div>Selecione un cinema para cargar cartelera...</div>
        }
        </div>
      
    </div>
  );
};

export default CardList;
