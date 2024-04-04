import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// La última acción del submit del formulario de compra presente en la página anterior debe navegar a esta página const navigate =useNavigate(); navigate(`/SuccessPage/${idCompra}`);

function SuccessPage() {
  const { idCompra } = useParams();
  const [purchaseData, setPurchaseData] = useState({
    code: '',
    date: '',
    total: '',
    paymentMethod: '',
    movieTitle: '',
    venue: '',
    showDate: '',
    showTime: '',
    tickets: '',
    auditorium: '',
    seats: []
  });

  useEffect(() => {
    // Aquí pondrías la URL de tu servidor JSON para obtener los datos
    axios
      .get(`http://localhost:3000/compra/${idCompra}`)
      .then((response) => {
        // Suponiendo que response.data ya contiene la información de la compra
        setPurchaseData(response.data);
      })
      .catch((error) => {
        console.error("Hubo un error al obtener los datos de la compra", error);
      });
  }, []);

  const downloadTickets = () => {
    // falta logica de descarga
    console.log('Descargando boletos...');
  };

  // Asegúrate de reemplazar esto con la URL de la imagen real
  // const imageUrl = "https://tu-imagen-url.com/imagen.jpg";

  return (
    <div className="container mx-auto my-8 p-5">
      <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6" role="alert">
        <p className="font-bold">¡Transacción exitosa!</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg mb-6 p-6">
        <div className="flex flex-col md:flex-row justify-between mb-4">
          <div className="mb-4 md:mb-0 md:flex md:space-x-6">
            <div className="md:flex flex-col">
              <span className="font-bold text-sm">Código:</span>
              <span className="text-gray-700 text-sm">{purchaseData.code}</span>
            </div>
            <div className="md:flex flex-col">
              <span className="font-bold text-sm">Fecha:</span>
              <span className="text-gray-700 text-sm">{purchaseData.date}</span>
            </div>
            <div className="md:flex flex-col">
              <span className="font-bold text-sm">Total:</span>
              <span className="text-gray-700 text-sm">{purchaseData.total}</span>
            </div>
          </div>
          <div className="md:flex flex-col">
            <span className="font-bold text-sm">Método de pago:</span>
            <span className="text-gray-700 text-sm">{purchaseData.paymentMethod}</span>
          </div>
        </div>

        {/* <div className="flex-none w-48 relative mb-4">
          <img src={imageUrl} alt="Imagen de la película" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
        </div> */}

        <div className="text-center">
          <h3 className="text-lg font-bold mb-4">Resumen de compra</h3>
          <div className="text-sm">
            <p className="mb-2"><span className="font-bold">Película:</span> {purchaseData.movieTitle}</p>
            <p className="mb-2"><span className="font-bold">Complejo:</span> {purchaseData.venue}</p>
            <p className="mb-2"><span className="font-bold">Fecha:</span> {purchaseData.showDate}</p>
            <p className="mb-2"><span className="font-bold">Función:</span> {purchaseData.showTime}</p>
            <p className="mb-2"><span className="font-bold">Boletos:</span> {purchaseData.tickets}</p>
            <p className="mb-2"><span className="font-bold">Número de sala:</span> {purchaseData.auditorium}</p>
            <p className="mb-2"><span className="font-bold">Asientos:</span> {Array.isArray(purchaseData.seats) ? purchaseData.seats.join(", ") : 'No hay asientos asignados'}</p>

          </div>
        </div>

        <div className="flex justify-center">
          <button
            onClick={downloadTickets}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg focus:outline-none focus:shadow-outline"
          >
            Descargar boletos
          </button>
        </div>
      </div>
    </div>
  );
}

export default SuccessPage;

