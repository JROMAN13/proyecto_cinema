import React, { useEffect, useState } from "react";
import { getAllMovies } from "../services/movieServices";
import {formatDate, urlBaseImage} from '../services/helpers'

const CardList = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getAllMovies()
      .then((response) => {
        console.log(response);
        setMovies(response);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="mt-10 mx-5">
        <h1 className="mb-5 textPrimary">EN CARTELERA</h1>
        <div className="mt-10 flex flex-row ">
        {movies.map((movie, index) => {
          return (
            <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img src={`${urlBaseImage}${movie.poster_path}`} alt={`Movie ${index}`} className="rounded-t-lg"/>
                </a>
                <div className="p-2">
                    <a href="#">
                        <h3 className="textSecundary mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white">{movie.title}</h3>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Título en inglés: {movie.original_title}</p>
                    <h3 className='mx-7 px-5 mt-2 md:text-base sm:text-sm sm:px-1 sm:mx-1 s:mt-1 text-center textSecundary text-white'>Estreno: {new Date(movie.release_date).toLocaleDateString('es-ES', formatDate)}</h3>
                </div>
            </div>
          );
         })
        }
        </div>
      
    </div>
  );
};

export default CardList;
