import axios from "axios";
import endpoint from "./endpoint";

export const getAllCinemas=async()=>{

    try {
        const {data}=await axios.get(endpoint.getAllCinemas);
        return data
        
    } catch (error) {
        console.error(error);
        return []
    }
}
