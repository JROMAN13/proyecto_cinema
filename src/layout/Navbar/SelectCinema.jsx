import React, { useEffect, useState } from 'react'
import { getAllCinemas } from '../../services/cinemaServices';

const INITIALSELECTION= localStorage.getItem("selectedCinemaId") ?? 0

if (INITIALSELECTION==0) localStorage.removeItem("selectedCinemaId")

const SelectCinema = (props) => {
    const [cinemas, setCinemas] = useState([])
    const [selectedCinema,setSelectedCinema]=useState(INITIALSELECTION)

    useEffect(()=>{
       getAllCinemas().then((response)=>{
        // console.log(response);
        setCinemas(response);
        }).catch((error)=> console.error(error));
    },[])

    const updateProps=(selection)=>{
      localStorage.setItem("selectedCinemaId", selection);
      props.getCinemaSelected(selection)
    }

    const handleSelectChange = (event) => {
      console.log(event.target.value);
      setSelectedCinema(event.target.value);  
      updateProps(event.target.value)  
    };

  return (
    <form className="md:order-2">
          <label htmlFor="cinemas" className="block mb-2 text-base font-semibold text-gray-text textSecundary ">Cines cercanos</label>
          <select id="cinemas" className="bg-transparent border border-gray-text text-gray-text textSecundary text-sm rounded-lg focus:ring-blue-button focus:border-blue-button block w-full p-2.5" onChange={handleSelectChange} value={selectedCinema} >
            <option value={0}>Seleccione cine</option>
            {
                cinemas.map((cinema,index)=>
                // {console.log(cinema.name)}
                <option key={index} value={cinema.id}>{cinema.name}</option>
                )
            }
          </select>
    </form>
  )
}

export default SelectCinema

