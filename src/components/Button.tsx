import React from 'react'

interface ButtonProps {
  wFull?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, wFull }) => {
  return(
    <button className={`px-5 py-3 ${wFull ? 'w-full' : null} font-semibold flex justify-center items-center bg-violet rounded-lg border-violet border-2 text-white hover:text-violet hover:bg-white transition-colors duration-500`}>
      <a href='/register'>{children}</a>
    </button>
  )
}