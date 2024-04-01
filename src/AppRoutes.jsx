import React from "react";
import Layout from "./layout/Layout";
import CardList from "./components/CardList";
import PaymentMethod from './pages/payment/PaymentMethod';
import { Route, Routes } from "react-router";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout></Layout>}>
          <Route index element={<CardList></CardList>}></Route>
          <Route path="/payment" element={<PaymentMethod></PaymentMethod>}></Route>
        </Route>
        {/* <Route index element={<Card></Card>}></Route> */}
      </Routes>
    </>
  );
};

export default AppRoutes;
