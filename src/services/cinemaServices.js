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
export const getFuntionAll = async()=>{
    try {
        const {data}= await axios.get(endpoint.getFuntionAll);
        return data
        
    } catch (error) {
        console.error(error);
        return []
    }
}


export const getFuntion=async(idCinema)=>{
    try {
        const {data}=await axios.get(endpoint.getFuntion(idCinema));
        return data;
        
    } catch (error) {
        console.error(error);
        return []
    }
}


export const getCinema= async(idCinema)=>{
    try {
        const {data}=await axios.get(endpoint.getCinema(idCinema));
        return data
        
    } catch (error) {
        console.error(error);
        return []
    }
}

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

