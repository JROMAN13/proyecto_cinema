import axios from "axios"
import endpoint from "./endpoint";


export const getAllMovies=async()=>{

    try {
        const {data}=await axios.get(endpoint.getAllMovies);
        return data.results
        
    } catch (error) {
        console.error(error);
        return []
    }
}

export const getMovie=async(idMovie)=>{
    try {
        const {data}=await axios.get(endpoint.getMovie(idMovie));
        return data
        
    } catch (error) {
        console.error(error);
        return null
    }
}
export const getMovieDuration=async(idMovie)=>{
    try {
        const {data}=await axios.get(endpoint.getMovie(idMovie));
        return data.runtime
        
    } catch (error) {
        console.error(error);
        return null
    }
}

export const getTrailerMovie=async(idMovie)=>{
    try {
        const {data}= await axios.get(endpoint.getVideoMovie(idMovie));
        return data.results.find((item)=>item.type.toLowerCase()=='trailer')        
    } catch (error) {
        console.error(error);
        return []
    }
}

export const getMoviesGenres = async () =>{
    try {
        const {data} = await axios.get(endpoint.getGenresMovies);
        return data.genres    
    } catch (error) {
        console.error(error);
        return [];
    }
}