import React from 'react'
import { Button } from '../Button'

export const Form = () => {
  return (
    <form className="w-full border max-w-[35rem] p-10 rounded-lg bg-white">
      <h1 className="text-2xl font-bold">Create your IndieBrew Account</h1>
      <div className="my-5">
        <label htmlFor="email" className="font-bold">Email</label>
        <input 
          type="email"
          name="email"
          id="email"
          placeholder="john@example.com"
          className="block py-2 px-5 border-2 w-full rounded-md"
          required
        />
      </div>
      <div className="my-5">
        <label htmlFor="fullName" className="font-bold">Full Name</label>
        <input 
          type="text"
          name="fullName"
          id="fullName"
          placeholder="Jon Doe"
          className="block py-2 px-5 border-2 w-full rounded-md"
          required
        />
      </div>
      <div className="my-5">
        <label htmlFor="password" className="font-bold">Password</label>
        <input 
          type="password"
          name="password"
          id="password"
          placeholder="At least 8 characters"
          className="block py-2 px-5 border-2 w-full rounded-md"
          minLength={8}
          required
        />
      </div>
      <div className="mt-3 mb-5 flex">
        <input 
          type="checkbox"
          name="checkbox"
          id="checkbox"
          className="mt-1"
        />
        <label htmlFor="checkbox" className="ml-2">By creating an account on IndieBrew, you agree to the <span className="border-b hover:border-black transition-colors duration-300 cursor-pointer">Terms & Conditions</span></label>
      </div>
      <Button wFull>Create an Account</Button>
    </form>
  )
}
