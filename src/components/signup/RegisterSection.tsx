import React from 'react'
import { Form } from './Form'
import { Information } from './Information'

export const RegisterSection = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center md:px-16 lg:px-24 px-5 py-5 sm:py-10 lg:py-20 main-gradient">
      <Information />
      <Form />
    </div>
  )
}
