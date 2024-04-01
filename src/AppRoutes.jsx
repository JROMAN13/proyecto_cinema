import React from 'react'
import Layout from './layout/Layout'
import CardList from './components/CardList'
import { Route, Routes } from 'react-router'

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout></Layout>}>
          <Route index element={<CardList></CardList>}>
          </Route>
        </Route>
        {/* <Route index element={<Card></Card>}></Route> */}
      </Routes>
    </>
  )
}

export default AppRoutes
