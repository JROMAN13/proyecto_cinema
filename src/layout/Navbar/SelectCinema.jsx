import React, { useEffect, useState } from 'react'
import { getAllCinemas } from '../../services/cinemaServices';

const SelectCinema = () => {
    const [cinemas, setCinemas] = useState([])
    const [selectedCinema,setSelectedCinema]=useState("")
    useEffect(()=>{
       getAllCinemas().then((response)=>{
        // console.log(response);
        setCinemas(response);
        }).catch((error)=> console.error(error));
    },[])

    // const getCinemaSelected =()=>{
    //   try {
    //     setSelectedCinema()
    //   } catch (error) {
    //     console.log(error)
    //     return null
    //   }
    // }

  return (
    <form className="md:order-2">
          <label htmlFor="countries" className="block mb-2 text-base font-semibold text-gray-text textSecundary ">Cines cercanos</label>
          <select id="countries" className="bg-transparent border border-gray-text text-gray-text textSecundary text-sm rounded-lg focus:ring-blue-button focus:border-blue-button block w-full p-2.5">
            <option>Seleccione cine</option>
            {
                cinemas.map((cinema,index)=>
                // {console.log(cinema.name)}
                <option key={index} value={cinema.name}>{cinema.name}</option>
                )
            }
          </select>
    </form>
  )
}

export default SelectCinema
