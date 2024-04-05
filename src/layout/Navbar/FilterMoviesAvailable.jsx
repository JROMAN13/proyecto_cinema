import React, { useState } from 'react'
import SelectCinema from './SelectCinema';
import SelectDate from './SelectDate';
import { formatDateBackend } from '../../services/helpers';

const INITIALCINEMA= localStorage.getItem("idSelectedCinema") ?? 0
if (INITIALCINEMA==0) localStorage.removeItem("idSelectedCinema")

const INITIALDATE= localStorage.getItem("idSelectedDate") ?? ''
if (INITIALDATE=='') localStorage.removeItem("idSelectedDate")

const FilterMoviesAvailable = () => {
    const [selectedCinema, setSelectedCinema] = useState(INITIALCINEMA);
    const [selectedDate, setSelectedDate] = useState(INITIALDATE);

    const bringCinemaSelected= (data) =>{
        setSelectedCinema(data);
        localStorage.setItem("idSelectedCinema",data)
    }

    const bringDateSelected= (data) =>{
        const dateFormater= new Date (data).toLocaleDateString('es-ES', formatDateBackend)
        setSelectedDate(dateFormater);
        localStorage.setItem("idSelectedDate",dateFormater)
    }

    return (
        <div className='md:order-2 flex items-center '>
            <SelectCinema getCinemaSelected={bringCinemaSelected}/>
            <SelectDate getDateSelected={bringDateSelected}/>
        </div>    
    )
}

export default FilterMoviesAvailable
