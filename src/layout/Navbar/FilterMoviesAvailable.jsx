import React, { useState } from 'react'
import SelectCinema from './SelectCinema';
import SelectDate from './SelectDate';

const FilterMoviesAvailable = () => {
    const [selectedCinema, setSelectedCinema] = useState("");
    const bringCinemaSelected= (data) =>{
        setSelectedCinema(data);
        console.log("data",data,"sel",selectedCinema)
    }
    return (
        <div>
            <SelectCinema getCinemaSelected={bringCinemaSelected}/>
            <SelectDate/>
        </div>    
    )
}

export default FilterMoviesAvailable
