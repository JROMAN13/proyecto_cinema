import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './layout/Header.jsx'
import SelectCinema from './layout/Navbar/SelectCinema.jsx'
import SelectDate from './layout/Navbar/SelectDate.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Header></Header>
    {/* <SelectDate/> */}
  </React.StrictMode>,
)
