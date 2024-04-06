import React from 'react';
import PurchaseSummary from './PurchaseSummary';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcMastercard } from '@fortawesome/free-brands-svg-icons';


const SuccessPage = (idFunction) => {
  console.log(idFunction)
  const funcionCine = {
    "id": "b0001ab",
    "cinema_id": "345sdfcg",
    "name": "cc.molinos",
    "schedule": "14:00",
    "movie_id": "1011985",
    "idroom": "11",
    "date": "16/04/24",
    "totalCompra": "258",
  }

  return (
    <div className="container mx-auto my-8 p-5">
       <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6" role="alert">
       <p className="font-bold">¡Transacción exitosa!</p>
     </div>

    
     <div className="flex justify-between">
  <div className="flex flex-col mb-4"> {/* Agrega espaciado aquí */}
    <span className="font-bold">Código:</span>
    <span>{funcionCine.id}</span>
  </div>
  <div className="flex flex-col mb-4"> {/* Y aquí */}
    <span className="font-bold">Fecha:</span>
    <span>{funcionCine.date}</span>
  </div>
  <div className="flex flex-col mb-4"> {/* También aquí */}
    <span className="font-bold">Total:</span>
    <span>{funcionCine.totalCompra}</span>
  </div>
  <div className="flex items-center">
  <FontAwesomeIcon icon={faCcMastercard} size="2x" color="#eb001b" />
  <span className="font-bold mr-2">Método de pago:</span>
  <span className="ml-2">**** **** **** 1234</span>
</div>
</div>
      {/* Resumen de compra */}
      <div className="flex justify-end items-center h-screen w-full">
        <div className="w-3/4 mt-30"> 
          <PurchaseSummary 
            funtion={funcionCine} 
            tickets={true} 
            selectedSeats={true} 
            showRoom={true} 
            idroom={true} 
            totalCompra={true} 
            path='/codPay'
          />
        </div>
      </div>
    </div>
  );
}

export default SuccessPage;


