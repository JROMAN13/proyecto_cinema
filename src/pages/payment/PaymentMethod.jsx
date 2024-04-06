import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcVisa, faCcMastercard, faCcAmex } from '@fortawesome/free-brands-svg-icons';


const PaymentMethod = () => {
  const [email, setEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log("Datos del formulario:", {
        email,
        cardNumber,
        cardHolder,
        expiryDate,
        cvv,
      });
    }
  };

  const validateForm = () => {
    let errors = {};
    let formIsValid = true;

    if (!email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
      errors["email"] = "Por favor, ingrese un correo electrónico válido";
      formIsValid = false;
    }

    if (!cardNumber.match(/^\d{16}$/)) {
      errors["cardNumber"] = "El número de tarjeta debe tener 16 dígitos";
      formIsValid = false;
    }

    if (cardHolder.trim() === "") {
      errors["cardHolder"] = "Por favor, ingrese el titular de la tarjeta";
      formIsValid = false;
    }

    if (!expiryDate.match(/^\d{4}$/)) {
      errors["expiryDate"] = "La fecha de expiración debe tener 4 dígitos";
      formIsValid = false;
    }

    if (!cvv.match(/^\d{3}$/)) {
      errors["cvv"] = "El CVV debe tener 3 dígitos";
      formIsValid = false;
    }

    setErrors(errors);
    return formIsValid;
  };

  return (
    <>
      <div className="max-w-lg ml-20 mt-20 p-8 ">
        <h2 className="text-2xl font-bold">
          Información personal
        </h2>
        <span>
          Complete los datos del formulario para realizar el pago.
        </span>
        <form onSubmit={handleSubmit}>
        <div className="mb-4 mt-4">
            <label htmlFor="email" className="block text-gray-700">
              Correo Electrónico:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ingrese su correo electrónico"
              className="form-input mt-1 block w-full rounded-lg  bg-gray-100 border-none"
            />
            {errors.email && (
              <span className="text-red-500">{errors.email}</span>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="cardHolder" className="block text-gray-700">
              Nombre en la Tarjeta:
            </label>
            <input
              type="text"
              id="cardHolder"
              value={cardHolder}
              onChange={(e) => setCardHolder(e.target.value)}
              placeholder="Ingrese nombre en la tarjeta"
              className="form-input mt-1 block w-full rounded-lg  bg-gray-100 border-none"
            />
            {errors.cardHolder && (
              <span className="text-red-500">{errors.cardHolder}</span>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="cardNumber" className="block text-gray-700">
              Número de Tarjeta:
            </label>
            <div className="flex-initial items-center"></div>
            <input
              type="text"
              id="cardNumber"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="1234 1234 1234 1234 "
              className="form-input mt-1 block w-full rounded-lg  bg-gray-100 border-none"
            />
            <div className="-mt-8 ">
              <FontAwesomeIcon icon={faCcVisa} className="text-2xl mr-2" />
              <FontAwesomeIcon icon={faCcMastercard} className="text-2xl mr-2" />
              <FontAwesomeIcon icon={faCcAmex} className="text-2xl" />
            </div>
            {errors.cardNumber && (
              <span className="text-red-500">{errors.cardNumber}</span>
            )}
          </div>
          <div className="mb-4 flex justify-between">
            <div className="mb-4 div w-1/2 ">
              <label htmlFor="expiryDate" className="block text-gray-700">
                Fecha de Expiración:
              </label>
              <input
                type="text"
                id="expiryDate"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                placeholder="MM/YY"
                className="form-input mt-1 block w-full rounded-lg bg-gray-100 border-none"
              />
              {errors.expiryDate && (
                <span className="text-red-500">{errors.expiryDate}</span>
              )}
            </div>
            <div className="mb-4 div w-1/2 ml-4">
              <label htmlFor="cvv" className="block text-gray-700">
                CVV:
              </label>
              <input
                type="text"
                id="cvv"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                placeholder="123"
                className="form-input mt-1 block w-full rounded-lg  bg-gray-100 border-none"
              />
              {errors.cvv && <span className="text-red-500">{errors.cvv}</span>}
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Pagar
          </button>
        </form>
      </div>
      );
    </>
  );
};

export default PaymentMethod;
