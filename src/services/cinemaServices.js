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

export const getFuntion=async(idFuntion)=>{
    try {
        const {data}=await axios.get(endpoint.getFuntion(idFuntion));
        return data
        
    } catch (error) {
        console.error(error);
        return []
    }
}
export const getInfoRoom=async(idTypeRoom)=>{
    try {
        const {data}=await axios.get(endpoint.getTypeRoom(idTypeRoom));
        console.log("data",data)
        return data
        
    } catch (error) {
        console.error(error);
        return []
    }
}
