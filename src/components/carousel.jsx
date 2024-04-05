import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react'
import { getSeatsPayByFuntion } from '../services/cinemaServices';

const Asientos = ({idFuntion,typeRoom,cantidadBoletos=3, precio=23}) => {
  // cantidadBoletos=localStorage.getItem(data)
  const [occupiedSeats,setOccupiedSeats]=useState([])
  useEffect(() => {
    console.log("typeRoom",typeRoom)
    console.log("cantidadBoletos",cantidadBoletos);
    console.log("precio",precio);
  }, [typeRoom,cantidadBoletos,precio]);

  useEffect(() => {
    if(idFuntion){
      getSeatsPayByFuntion(idFuntion).then(
        (response) =>{
          console.log(response);
          setOccupiedSeats(response);
        }
      ).catch(
        (e)=>console.error(e)
      )
    }
  }, [idFuntion]);  
  
  const asientos=typeRoom.seats
  const filas=typeRoom.row
  const columnas=typeRoom.col

  const asientosSalas = [];
 
  for (let index = 0; index < filas; index++) {
    const asientosFila = [];
    let charColum = ``
    for (let position = 0; position < columnas; position++) {
      const codigoAsiento = `${position + 1}`;
      console.log(codigoAsiento)
      if (index * columnas + position >= asientos) break;
      if(position==7){
       asientosFila.push(<button className='w-8 mr-2'></button>)
      }
      charColum=<p className='w-8'>{String.fromCharCode(65 + index)}</p>;
      asientosFila.push(
        <button key={codigoAsiento} className="relative justify-center mr-2">
          <svg
            className={`w-8 ${occupiedSeats.includes(String.fromCharCode(65 + index)+codigoAsiento) ?'fill-red-700': 'fill-blue-700'}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
          >
            <path d="M64 160C64 89.3 121.3 32 192 32H448c70.7 0 128 57.3 128 128v33.6c-36.5 7.4-64 39.7-64 78.4v48H128V272c0-38.7-27.5-71-64-78.4V160zM544 272c0-20.9 13.4-38.7 32-45.3c5-1.8 10.4-2.7 16-2.7c26.5 0 48 21.5 48 48V448c0 17.7-14.3 32-32 32H576c-17.7 0-32-14.3-32-32H96c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V272c0-26.5 21.5-48 48-48c5.6 0 11 1 16 2.7c18.6 6.6 32 24.4 32 45.3v48 32h32H512h32V320 272z" />
          </svg>
          <p className="absolute top-0 left-2 text-xs text-white">{codigoAsiento}</p>
        </button>
      );
    }

    asientosSalas.push(
      <div key={`${index}-m`} className='flex'>
        {charColum}
        <div key={`${index}-child`}>
          {asientosFila}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div>{asientosSalas}</div>
      <div className='w-4/5 py-1 mt-4 mx-auto text-center bg-gray-text rounded-md text-white font-semibold  textSecundary'>Pantalla</div>
    </div>
  )
};

export default Asientos;
