import { Button } from 'flowbite-react'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
    "./node_modules/tailwind-datepicker-react/dist/**/*.js", 
  ],
  theme: {
    colors:{
      'blue-button':'#1C508DFF',
      'gray-text':' #565D6DFF'
    },
    extend: {
      fontFamily: {
        'epilogue': ['Epilogue', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      }
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}


