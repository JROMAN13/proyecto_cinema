import React from 'react'
import Layout from './layout/Layout'
import CardList from './components/CardList'
import Seats from './components/Seats'
import Asientos from './components/Carousel'
import SelectTickets from './components/SelectTickets'
import PaymentMethod from './pages/payment/PaymentMethod';
import { Route, Routes } from 'react-router'

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout></Layout>}>
          <Route index element={<CardList/>}></Route>
          <Route path='seats' element={<Seats/>}></Route>
          <Route path='select_tickets' element={<SelectTickets/>}></Route>
          <Route path='s' element={<Asientos/>}></Route>
          <Route path="/payment" element={<PaymentMethod></PaymentMethod>}></Route>
        </Route>
        {/* <Route index element={<Card></Card>}></Route> */}
      </Routes>
    </>
  )
}

export default AppRoutes
