import React, { useEffect, useState } from 'react'
import { getAllCinemas } from '../../services/cinemaServices';

const SelectCinema = () => {
    const [cinemas, setCinemas] = useState([])
    useEffect(()=>{
       getAllCinemas().then((response)=>{
        // console.log(response);
        setCinemas(response);
        }).catch((error)=> console.error(error));
    },[])

  return (
    <form className="md:order-2">
          <label htmlFor="countries" className="block mb-2 text-base font-semibold text-gray-text textSecundary ">Select an option</label>
          <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option>Cines cercanos</option>
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
