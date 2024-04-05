import React from 'react';

// URLs de ejemplo para las imágenes de la web
const movieImageUrl = 'https://pics.filmaffinity.com/Kung_Fu_Panda_4-159494298-large.jpg';
const qrCodeUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=YourDataHere';


const TicketCard = () => {
  // Detalles del boleto
  const ticketDetails = {
    date: '07JUL',
    time: '7:30PM',
    movieTitle: 'Kung Fu Panda 4',
    cinema: 'Macro Plaza del Mar',
    seats: ['D8', 'D9', 'D10', 'D11'],
    room: 'Sala 2',
  };

  return (
    <div className="flex flex-col items-center bg-[#11184a] text-white p-6 rounded-lg shadow-md max-w-sm mx-auto mt-20">
    <div className="flex justify-between w-full">
      <h2 className="text-lg font-bold mb-8">Boletos</h2>
      <div className="text-xs text-right mb-8">
        <p>{ticketDetails.date}</p>
        <p>{ticketDetails.time}</p>
        </div>

      </div>
      <div className="flex w-full mb-4">
        <div className="w-1/2">
          <img src={movieImageUrl} alt="Portada de la película" className="w-full h-32 object-cover" />
        </div>
        <div className="flex flex-col justify-between ml-4">
          <div>
            <p><strong>Película:</strong> Spider-Man: Sin Camino a Casa</p>
            <p><strong>Complejo:</strong> Macro Plaza del Mar</p>
            <p><strong>Asientos:</strong> D8, D9, D10, D11</p>
            <p><strong>Sala:</strong> 2</p>
          </div>
        </div>
      </div>
      <img src={qrCodeUrl} alt="Código QR" className="mt-4 w-24 h-24 self-center" />
      <div className="text-xs">
          <p>W9XKN2</p>
        </div>
    </div>
  );
};

export default TicketCard;

