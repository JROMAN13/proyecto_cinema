import React, { useEffect, useState } from 'react'
import PurchaseSummary from './PurchaseSummary'
import { getFuntion } from '../services/cinemaServices';

const tickets = [
    {
        label: "Adultos",
        price: 71,
        quanty: 0
    },
    {
        label: "Niños",
        price: 51,
        quanty: 0
    },
    {
        label: "3ra Edad",
        price: 61,
        quanty: 0
    }
]

const SelectTickets = ({ idFunction = `b3876ac` }) => {

    const [funtion, setfuntion] = useState({});
    const [quantities, setQuantities] = useState(tickets);

    const handleDecrement = (index) => {
        if (quantities[index].quanty > 0) {
            const quantitiesTicket = [...quantities];
            quantitiesTicket[index].quanty--;
            setQuantities([...quantitiesTicket]);
        }
    };

    const handleIncrement = (index) => {
        const cantidadTickets = quantities.reduce((total, itemActual) => total + itemActual.quanty, 0);
        if (cantidadTickets < 10) {
            const quantitiesTicket = [...quantities];
            quantitiesTicket[index].quanty++;
            setQuantities([...quantitiesTicket]);
        }
    };

    useEffect(() => {
        getFuntion(idFunction)
            .then((response) => {
                setfuntion(response);
            })
            .catch((e) => console.error(e));
    }, [idFunction]);

    return (

        <div className='flex p-8 justify-between mt-4'>
            <form className="p-7 w-full ">
                <h3 className="font-bold text-2xl mb-4">Selecciona tus boletos</h3>
                <p>Puedes comprar 10 boletos máximo por transacción.</p>
                {
                    quantities.map((item, index) => (
                        <div key={index} className='mt-6 flex justify-between'>
                            <p>{item.label}</p>

                            <div className="relative flex items-center max-w-[11rem] mr-20">
                                <span className="font-semibold mr-5">${item.price}</span>
                                <button
                                    type="button"
                                    onClick={() => handleDecrement(index)}
                                    className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                                >
                                    <svg
                                        className="w-3 h-3 text-gray-900 dark:text-white"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 18 2"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M1 1h16"
                                        />
                                    </svg>
                                </button>
                                <input
                                    type="text"
                                    value={item.quanty}
                                    readOnly
                                    aria-describedby="helper-text-explanation"
                                    className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="0"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => handleIncrement(index)}
                                    className="bg-blue-button dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                                >
                                    <svg
                                        className="w-3 h-3 text-white dark:text-white"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 18 18"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 1v16M1 9h16"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))
                }

            </form>

            <PurchaseSummary funtion={funtion} quantities={quantities} />
        </div>
    )
}

export default SelectTickets
