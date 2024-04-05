import React from 'react'
import 'flowbite';
import icon from '../../assets/Icons.png'
import { useLocation } from 'react-router-dom';
import FilterMoviesAvailable from './FilterMoviesAvailable';

const Navbar = () => {
  const location=useLocation();

  //useeffect mostrar los filtros if path=home
  return (
    <>
    <nav className="bg-black border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={icon} className="h-8" alt="Flowbite Logo" />
            <span className="textPrimary self-center text-xl font-medium whitespace-nowrap text-gray-200">CINE COLOMBIA</span>
        </a>
        <div className="flex items-center md:order-3 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
              <span className="sr-only">Open user menu</span>
              <div className="relative w-10 h-10 overflow-hidden bg-blue-button rounded-full">
                  <svg className="absolute w-12 h-12 text-white -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
              </div>
            </button>
            <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                </li>
              </ul>
            </div>
            <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
          </button>
        </div>
        <div className="items-center  hidden w-2/4 md:flex md:w-auto md:order-1" id="navbar-user">
          <ul className={`flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-black md:space-x-4 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-black ${location.pathname === "/" ? 'block':'hidden'} `}>      
            <li>
              <a href="#" className="block py-2 px-4 text-white rounded-full bg-blue-button">Acción</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 text-white rounded-full bg-blue-button">Terror</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 text-white rounded-full bg-blue-button">Ciencia Ficcción</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 text-white rounded-full bg-blue-button">Comedia</a>
            </li>
          </ul>
        </div>
          <FilterMoviesAvailable/>
      </div>
    </nav>
    </>
  )
}

export default Navbar
