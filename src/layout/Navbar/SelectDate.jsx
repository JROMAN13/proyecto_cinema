import React, { useState } from 'react'
import 'flowbite';
import Datepicker from "tailwind-datepicker-react"
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
      input: "",
      inputIcon: "",
      selected: "",
  },
  icons: {
      prev: () =>"<-",
      next: () => "->",
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
      day: "numeric",
      month: "long",
      year: "numeric"
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
      <div>
        <p>{date.toLocaleString()}</p>
          <Datepicker options={options} onChange={handleChange} show={show} setShow={handleClose} />
      </div>
  );
};


export default SelectDate



