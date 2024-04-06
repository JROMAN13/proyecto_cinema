import React, { useState } from 'react'
import Layout from './layout/Layout'
import CardList from './components/CardList'
import { Route, Routes } from 'react-router'
import Seats from './components/Seats'
import SelectTickets from './components/SelectTickets'
import DetailMovie from './components/DetailMovie'
import PaymentMethod from './pages/payment/PaymentMethod'
import SuccessPage from './components/SuccessPage'
import TicketCard from './components/CodeQr'

const INITIALCINEMA = localStorage.getItem("idSelectedCinema") ?? null;
const INITIALDATE = localStorage.getItem("idSelectedDate");

const AppRoutes = () => {
  const [dataRecibida,setDataRecibida]=useState({ cinema: INITIALCINEMA, date: INITIALDATE })
  const handleSelection = (data) => {
    setDataRecibida(data);
  };

  const [funtionSelected,setFuntionSelected]=useState("")
  const handleIdFuntion = (data) => {
    setFuntionSelected(data);
  };

  return (
    <>
      <Routes>
        <Route element={<Layout handleSelection={handleSelection}/>}>
          <Route index element={<CardList dataSelected={dataRecibida}/>}></Route>
          <Route path="details/:idPelicula" element={<DetailMovie cinema={dataRecibida.cinema} onFuntionMovieInfo={handleIdFuntion} />}/>
          <Route path='seats' element={<Seats/>}></Route>
          <Route path='selectTickets' element={<SelectTickets idFunction={funtionSelected.id}/>}></Route>
          <Route path="/payment" element={<PaymentMethod idFunction={funtionSelected.id}/>}></Route>
          <Route path="/checkout" element={<SuccessPage/>}></Route>
          <Route path="/codPay" element={<TicketCard/>}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
