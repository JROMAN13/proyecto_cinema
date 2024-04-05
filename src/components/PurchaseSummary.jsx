import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { getMovie} from '../services/movieServices'
import { getCinema} from '../services/cinemaServices'
import { urlBaseImage } from '../services/helpers'

const PurchaseSummary = ({funtion,tickets,selectedSeats,showRoom}) => {
    // const [idMovie,setIdMovie]=useState("");
    const idMovie=funtion?.movie_id
    const idCinema=funtion?.cinema_id
    // const [idCinema,setIdCinema]=useState({});
    const [movie,setMovie]=useState({});
    const [cinema,setCinema]=useState({});

    // useEffect(()=>{
    //     setIdMovie(funtion?.movie_id);
    //     setIdCinema(funtion?.cinema_id);
    // },[])

    useEffect(()=>{
        if(idMovie){
            getMovie(idMovie).then(
                (response)=>{
                    console.log(idMovie)
                    console.log("movie",response)
                    setMovie(response)
                }
            ).catch(
                (e)=>console.log(e)
            )
        }
    },[idMovie]);

    useEffect(()=>{
        getCinema(idCinema).then(
            (response)=>{
                console.log(idCinema)
                console.log("cinema",response)
                setCinema(response)
            }
        ).catch(
            (e)=>console.log(e)
        )
    },[idCinema]);

  return (
    <aside className="w-4/12">
        <div className="max-w-sm p-6 bg-[#F4F4F4FF] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Resumen de compra</h5>
            
            <div className="flex flex-col items-center  md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-1/4  h-1/2 p-1" src={`${urlBaseImage}${movie?.poster_path}`} alt="img"/>
                <div>
                    <div className="flex flex-row justify-start leading-normal">
                        <h5 className="mr-1 text-base font-bold text-gray-900 dark:text-white">Pelicula: </h5>
                        <p className=" font-normal text-gray-700 dark:text-gray-400">{movie?.title}</p>
                    </div>
                    <div className="flex flex-row justify-start leading-normal">
                        <h5 className="mr-1 text-base font-bold text-gray-900 dark:text-white">Complejo: </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">{cinema?.name}</p>
                    </div>
                    <div className="flex flex-row justify-start leading-normal">
                        <h5 className="mr-1 text-base font-bold text-gray-900 dark:text-white">Fecha: </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">{funtion.date}</p>
                    </div>
                    <div className="flex flex-row justify-start leading-normal">
                        <h5 className="mr-1 text-base font-bold text-gray-900 dark:text-white">Funcion: </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">{funtion.schedule}</p>
                    </div>
                    <div className={`flex flex-row justify-start leading-normal ${tickets? 'block':'hidden'}`}>
                        <h5 className={`mr-1 text-base font-bold text-gray-900 dark:text-white `}>Boletos: </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">tickets{}</p>
                    </div>                
                    <div className={`flex flex-row justify-start leading-normal  ${showRoom? 'block':'hidden'}`}>
                        <h5 className="mr-1 text-base font-bold text-gray-900 dark:text-white">Numero de sala: </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">{funtion.idroom}</p>
                    </div>                
                    <div className={`flex flex-row justify-start leading-normal  ${selectedSeats? 'block':'hidden'}`}>
                        <h5 className="mr-1 text-base font-bold text-gray-900 dark:text-white">Asientos: </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">{}</p>
                    </div>                
                </div>
            </div>

            <p className="mt-3 font-normal text-gray-700 dark:text-gray-400">Se realizar cargo por servicio por cada boleto dentro de la orden</p>
            <div className="my-5 flex flex-row justify-between leading-normal">
                <h5 className="mr-1 text-base font-bold text-gray-900 dark:text-white">Total(IVA incluido): </h5>
                <h5 className="mr-1 text-base font-bold text-gray-900 dark:text-white">${}</h5>
            </div>  
            <NavLink to="#" className="w-full inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-button rounded-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Continuar
            </NavLink>
        </div>
      </aside>
  )
}

export default PurchaseSummary
