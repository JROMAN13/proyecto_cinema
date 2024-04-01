import React, { useEffect, useState } from "react";
import { getInfoRoom, getFuntion } from "../services/cinemaServices";

const Seats = ({ idFunction = `b3876ac` }) => {
    const [funtion, setfuntion] = useState({});
    const [room, setRoom]=useState({})
    useEffect(() => {
    getFuntion(idFunction)
      .then((response) => {
        console.log(response);
        setfuntion(response);
      })
      .catch((e) => console.error(e));
    }, [idFunction]);
    
  useEffect(() => {
    if (Object.entries(funtion).length) {
      console.log(funtion);
      const idRoom = funtion.idroom;
      console.log("idroom", idRoom);
      getInfoRoom(idRoom)
        .then((response) => {
          console.log("typesal", response);
          setRoom(response);
        })
        .catch((e) => console.error(e));
    }
  }, [funtion]);

  return (
    <section className="mt-20 px-10">
      <section className="w-7/12 border border-gray-700">
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
        <section className="mt-2 border-4 border-gray-text">
          <button className="flex justify-center">
            <svg
              className="w-7  fill-yellow-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path d="M64 160C64 89.3 121.3 32 192 32H448c70.7 0 128 57.3 128 128v33.6c-36.5 7.4-64 39.7-64 78.4v48H128V272c0-38.7-27.5-71-64-78.4V160zM544 272c0-20.9 13.4-38.7 32-45.3c5-1.8 10.4-2.7 16-2.7c26.5 0 48 21.5 48 48V448c0 17.7-14.3 32-32 32H576c-17.7 0-32-14.3-32-32H96c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V272c0-26.5 21.5-48 48-48c5.6 0 11 1 16 2.7c18.6 6.6 32 24.4 32 45.3v48 32h32H512h32V320 272z" />
            </svg>
            <p className="absolute text-xs">A2</p>
          </button>
        </section>
      </section>
      <aside></aside>
    </section>
  );
};

export default Seats;
