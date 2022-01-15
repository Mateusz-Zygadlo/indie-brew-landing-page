import React from 'react'
import { SIGNUP_CONTENT } from '../../content'

export const Information = () => {
  const { h1, information } = SIGNUP_CONTENT
  
  return (
    <div className="w-full max-w-[35rem] lg:mr-10 mb-10 lg:mb-0">
      <h1 className="text-4xl font-extrabold">{h1}</h1>
      <ul className="ml-10">
        {information.map((item, index: number) => (
          <li 
            key={index}
            className="my-3"
          >{item.p}</li>
        ))}
      </ul>
    </div>
  )
}
