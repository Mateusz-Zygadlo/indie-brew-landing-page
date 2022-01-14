import React from 'react'
import { ADVANTAGE_CONTENT } from '../../content'

export const Advantage = () => {
  const { phone_mockup, h1, p, link } = ADVANTAGE_CONTENT
  
  return (
    <div className="md:px-16 lg:px-24 px-5 py-5 flex flex-col tablet:flex-row justify-between items-center">
      <div>
        <img 
          src={phone_mockup}
          alt="phone mockup"
          className="w-full max-w-[30rem]"
        />
      </div>
      <div className="mt-10 tablet:mt-0">
        <h1 className="text-5xl font-extrabold w-full lg:max-w-[40rem]">{h1}</h1>
        <p className="my-2 pr-10">{p}</p>
        <a href='/login' className="flex items-center text-violet">
          <p className="mr-5">{link.p}</p>
          <img 
            src={link.img}
            alt="arrow"
            className="rotate-180 scale-75"
          />
        </a>
      </div>
    </div>
  )
}
