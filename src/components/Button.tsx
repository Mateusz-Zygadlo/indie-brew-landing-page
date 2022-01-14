import React from 'react'


export const Button: React.FC = ({ children }) => {
  return(
    <button className='px-5 py-3 font-semibold flex justify-center items-center bg-violet rounded-lg border-violet border-2 text-white hover:text-violet hover:bg-white transition-colors duration-500'>
      {children}
    </button>
  )
}