import axios from "axios";
import endpoint from "./endpoint";
import { getMovie } from "./movieServices";

export const getAllCinemas=async()=>{
    try {
        const {data}=await axios.get(endpoint.getAllCinemas);
        return data
        
    } catch (error) {
        console.error(error);
        return []
    }
}

export const getFuntion=async(idFuntion)=>{
    try {
        const {data}=await axios.get(endpoint.getFuntion(idFuntion));
        return data
        
    } catch (error) {
        console.error(error);
        return []
    }
}

export const getCinema=async(idCinema)=>{
    try {
        const {data}=await axios.get(endpoint.getCinema(idCinema));
        return data
        
    } catch (error) {
        console.error(error);
        return []
    }
}


export const getMoviesByIdCinema = async (cinemaId) => {
    try {
      const {data} = await axios.get(endpoint.getFuntionsbyCinema(cinemaId));
      const movieIds = data.map(func => func.movie_id);
      const movies = await Promise.all(movieIds.map(movieId =>getMovie(movieId)));
      console.log(movies)
  
      return movies;
    } catch (error) {
      console.error('Error al obtener las películas del cine:', error);
      return [];
    }
  };

export const getCinemaRoomType=async(idCinema,idRoom)=>{
    try {
        const {data}=await axios.get(endpoint.getCinema(idCinema));
        const typeRoom= data.rooms.find(
            (item) => item.idroom === idRoom
        );
        return typeRoom
        
    } catch (error) {
        console.error(error);
        return ""
    }
}
export const getInfoRoom=async(idTypeRoom)=>{
    try {
        const {data}=await axios.get(endpoint.getTypeRoom(idTypeRoom));
        return data
        
    } catch (error) {
        console.error(error);
        return []
    }
}
