import React, { useEffect, useState } from 'react'
import SelectCinema from './SelectCinema';
import SelectDate from './SelectDate';
import { formatDateBackend } from '../../services/helpers';

// const INITIALCINEMA= localStorage.getItem("idSelectedCinema") ?? 0
// if (INITIALCINEMA==0) localStorage.removeItem("idSelectedCinema")

// const INITIALDATE= localStorage.getItem("idSelectedDate") ?? ''
// if (INITIALDATE=='') localStorage.removeItem("idSelectedDate")
const INITIALCINEMA = localStorage.getItem("idSelectedCinema") ?? 0;
const INITIALDATE = localStorage.getItem("idSelectedDate") ?? "";

const FilterMoviesAvailable = (props) => {
  const [selectData,setSelectData]=useState({
    cinema:INITIALCINEMA,
    date:INITIALDATE,
  })
  const bringCinemaSelected = (data) => {
    // setSelectedCinema(data);
    setSelectData({ ...selectData, cinema: data });
    props.handleSelection(selectData)
    // console.log("cine",data)
  };

  const bringDateSelected = (data) => {
      // const dateFormater = new Date(data).toLocaleDateString(
      //   "es-ES",
      //   formatDateBackend
      // );
      // setSelectedDate(dateFormater);
      // localStorage.setItem("idSelectedDate", dateFormater);
      setSelectData({ ...selectData, date: data });
      props.handleSelection(selectData)
      console.log("fecha",data)
    };
    useEffect(() => {
      props.handleSelection(selectData);
    }, [selectData]);

  return (
    <div className="md:order-2 flex items-center ">
      <SelectCinema getCinemaSelected={bringCinemaSelected} />
      <SelectDate getDateSelected={bringDateSelected} />
    </div>
  );
};

export default FilterMoviesAvailable
