import React, { useEffect, useState } from "react";
import { getInfoRoom, getFuntion, getCinemaRoomType } from "../services/cinemaServices";
import Asientos from "./Carousel";
import { NavLink } from "react-router-dom";

const Seats = ({ idFunction = `b3876ac` }) => {
  const [funtion, setfuntion] = useState({});
  const [typeRoom, setTypeRoom] = useState("");
  const [room, setRoom] = useState({});
  useEffect(() => {
    getFuntion(idFunction)
      .then((response) => {
        // console.log(response);
        setfuntion(response);
      })
      .catch((e) => console.error(e));
  }, [idFunction]);

  useEffect(() => {
    if (Object.entries(funtion).length) {
      getCinemaRoomType(funtion.cinema_id,funtion.idroom)
        .then((response) => {
            // console.log("responseType:",response)
            setTypeRoom(response);
        })
        .catch((e) => console.error(e));
    }
  }, [funtion]);

  useEffect(() => {
    if (Object.entries(typeRoom).length) {
      getInfoRoom(typeRoom.type)
        .then((response) => {
          // console.log("typesal", response);
          setRoom(response);
        })
        .catch((e) => console.error(e));
    }
  }, [typeRoom]);

  return (
    <section className="flex mt-20 px-10 justify-between">
      <section className="w-7/12 px-2">
        <h2 className="textSecundary font-bold text-base">
          Selecciona tus asientos
        </h2>
        <p>Para cambiar tu lugar asignado da click en el asiento deseado</p>
        <section className=" flex px-2 mt-4">
          <div className="flex mr-8 ">
            <svg
              className="w-7 fill-yellow-400 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path d="M64 160C64 89.3 121.3 32 192 32H448c70.7 0 128 57.3 128 128v33.6c-36.5 7.4-64 39.7-64 78.4v48H128V272c0-38.7-27.5-71-64-78.4V160zM544 272c0-20.9 13.4-38.7 32-45.3c5-1.8 10.4-2.7 16-2.7c26.5 0 48 21.5 48 48V448c0 17.7-14.3 32-32 32H576c-17.7 0-32-14.3-32-32H96c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V272c0-26.5 21.5-48 48-48c5.6 0 11 1 16 2.7c18.6 6.6 32 24.4 32 45.3v48 32h32H512h32V320 272z" />
            </svg>
            <p className="textPrimary text-gray-text md:text-base sm:text-sm">
              Selecionado
            </p>
          </div>
          <div className="flex mr-8">
            <svg
              className="w-7 fill-red-700 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path d="M64 160C64 89.3 121.3 32 192 32H448c70.7 0 128 57.3 128 128v33.6c-36.5 7.4-64 39.7-64 78.4v48H128V272c0-38.7-27.5-71-64-78.4V160zM544 272c0-20.9 13.4-38.7 32-45.3c5-1.8 10.4-2.7 16-2.7c26.5 0 48 21.5 48 48V448c0 17.7-14.3 32-32 32H576c-17.7 0-32-14.3-32-32H96c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V272c0-26.5 21.5-48 48-48c5.6 0 11 1 16 2.7c18.6 6.6 32 24.4 32 45.3v48 32h32H512h32V320 272z" />
            </svg>
            <p className="textPrimary text-gray-text md:text-base sm:text-sm">
              Ocupado
            </p>
          </div>
          <div className="flex">
            <svg
              className="w-7 fill-blue-700 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path d="M64 160C64 89.3 121.3 32 192 32H448c70.7 0 128 57.3 128 128v33.6c-36.5 7.4-64 39.7-64 78.4v48H128V272c0-38.7-27.5-71-64-78.4V160zM544 272c0-20.9 13.4-38.7 32-45.3c5-1.8 10.4-2.7 16-2.7c26.5 0 48 21.5 48 48V448c0 17.7-14.3 32-32 32H576c-17.7 0-32-14.3-32-32H96c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V272c0-26.5 21.5-48 48-48c5.6 0 11 1 16 2.7c18.6 6.6 32 24.4 32 45.3v48 32h32H512h32V320 272z" />
            </svg>
            <p className="textPrimary text-gray-text md:text-base sm:text-sm">
              Disponible
            </p>
          </div>
        </section>
        <section className="mt-4 pt-8 border-t-4 border-gray-text">
          {/* <button className="flex justify-center">
            <svg
              className="w-7  fill-yellow-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path d="M64 160C64 89.3 121.3 32 192 32H448c70.7 0 128 57.3 128 128v33.6c-36.5 7.4-64 39.7-64 78.4v48H128V272c0-38.7-27.5-71-64-78.4V160zM544 272c0-20.9 13.4-38.7 32-45.3c5-1.8 10.4-2.7 16-2.7c26.5 0 48 21.5 48 48V448c0 17.7-14.3 32-32 32H576c-17.7 0-32-14.3-32-32H96c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V272c0-26.5 21.5-48 48-48c5.6 0 11 1 16 2.7c18.6 6.6 32 24.4 32 45.3v48 32h32H512h32V320 272z" />
            </svg>
            <p className="absolute text-xs">A2</p>
          </button> */}
          <Asientos typeRoom={room} cantidadBoletos={5} precio={30}/>
        </section>
      </section>
      <aside className="w-4/12">
        <div className="max-w-sm p-6 bg-[#F4F4F4FF] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Resumen de compra</h5>
            
            <div className="flex flex-col items-center  md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-1/4  h-1/2 p-1" src="" alt="img"/>
                <div>
                    <div className="flex flex-row justify-start leading-normal">
                        <h5 className="mr-1 text-base font-bold text-gray-900 dark:text-white">Pelicula: </h5>
                        <p className=" font-normal text-gray-700 dark:text-gray-400">movie{}</p>
                    </div>
                    <div className="flex flex-row justify-start leading-normal">
                        <h5 className="mr-1 text-base font-bold text-gray-900 dark:text-white">Complejo: </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">cinema{}</p>
                    </div>
                    <div className="flex flex-row justify-start leading-normal">
                        <h5 className="mr-1 text-base font-bold text-gray-900 dark:text-white">Fecha: </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">{funtion.date}</p>
                    </div>
                    <div className="flex flex-row justify-start leading-normal">
                        <h5 className="mr-1 text-base font-bold text-gray-900 dark:text-white">Funcion: </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">{funtion.schedule}</p>
                    </div>
                    <div className="flex flex-row justify-start leading-normal">
                        <h5 className="mr-1 text-base font-bold text-gray-900 dark:text-white">Boletos: </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">tickets{}</p>
                    </div>                
                    <div className="flex flex-row justify-start leading-normal">
                        <h5 className="mr-1 text-base font-bold text-gray-900 dark:text-white">Numero de sala: </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">{funtion.idroom}</p>
                    </div>                
                    <div className="flex flex-row justify-start leading-normal">
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
    </section>
  );
};

export default Seats;
