import React, { useState } from 'react'
import 'flowbite';
import Datepicker from 'tailwind-datepicker-react'
const today = new Date();
today.setDate(today.getDate() - 1);

const max = new Date();
max.setMonth(max.getMonth() + 1);


const options = {
  autoHide: true,
  todayBtn: true,
  clearBtn: false,
  clearBtnText: "Clear",
  maxDate: max,
  minDate: today,
  theme: {
      background: "bg-white dark:bg-gray-800",
      todayBtn: "",
      clearBtn: "",
      icons: "border ",
      text: "",
      disabledText: "bg-white text-white",
      input: "bg-transparent border border-gray-text text-gray-text textSecundary focus:border-blue-button block w-full",
      inputIcon: "hidden",
      selected: "",
  },
  icons: {
      prev: () =><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
    </svg>
    ,
      next: () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
    ,
  },
  datepickerClassNames: "top-10",
  defaultDate: new Date(),
  language: "es",
  disabledDates: [],
  weekDays: ["Lu", "Ma", "Mi", "Ju", "Vi", "Sa", "Do"],
  inputNameProp: "date",
  inputIdProp: "date",
  inputPlaceholderProp: "Seleccione la fecha",
  inputDateFormatProp: {
    day: "2-digit",
    month: "long",
  }
};

const SelectDate = () => {
  const [show, setShow] = useState(false);
  const [date,setDate]=useState(new Date());
  const handleChange = (selectedDate) => {
      console.log(selectedDate);
      setDate(selectedDate)
  };
  const handleClose = (state) => {
      setShow(state);
  };

  return (
      <div className='md:order-3'>
        <h3 className='font-semibold text-gray-text textSecundary'>Fecha</h3>
        {/* <p>{date.toLocaleString()}</p> */}
        <Datepicker options={options} onChange={handleChange} show={show} setShow={handleClose} />
      </div>
  );
};


export default SelectDate



