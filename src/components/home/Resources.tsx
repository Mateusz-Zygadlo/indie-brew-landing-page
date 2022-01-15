import React from 'react'
import { RESOURCES_CONTENT } from '../../content'

export const Resources = () => {
  const { h1, p, link, social_media_icons } = RESOURCES_CONTENT

  return (
    <div className="md:px-16 lg:px-24 px-5 py-16 flex flex-col-reverse tablet:flex-row justify-between tablet:items-center">
      <div className="w-full tablet:max-w-[40rem] tablet:pr-10">
        <h1 className="text-5xl mt-10 tablet:mt-0 font-extrabold">{h1}</h1>
        <p className="my-2">{p}</p>
        <a href="/" className="flex items-center text-violet">
          <p className="mr-5">{link.p}</p>
          <img 
            src={link.img}
            alt="arrow"
            className="rotate-180 scale-75"
          />
        </a>
      </div>
      <img 
        src={social_media_icons}
        alt="social media icons"
        className="w-full tablet:max-w-[25rem]"
      />
    </div>
  )
}
