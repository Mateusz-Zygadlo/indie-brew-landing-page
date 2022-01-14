import React from 'react'
import { Images } from '../../assets'
import { Button } from '../Button'
import { MAIN_CONTENT } from '../../content'

export const Main = () => {
  const { h1, p, users, under_users } = MAIN_CONTENT
  
  return (
    <div className="flex flex-col-reverse items-center lg:flex-row justify-between md:px-16 lg:px-24 px-5 bg-gradient-to-r from-red-100 via-yellow-100 to-white py-5">
      <div className="w-full lg:max-w-[40rem] mt-14 lg:mt-5 mb-10 lg:pr-5">
        <h1 className="text-5xl font-extrabold">{h1}</h1>
        <p className="mt-3 mb-5 pr-5">{p}</p>
        <Button>Get Started - it's free</Button>
        <img 
          src={users}
          alt="users"
          className="mt-5 mb-2"
        />
        <p className="pr-5">{under_users}</p>
      </div>
      <div className="px-0 sm:px-16 md:px-20 lg:px-0">
        <img 
          src={Images.FeedMockup}
          alt="feed mockup"
          className="w-full max-w-[50rem]"
        />
      </div>
    </div>
  )
}
