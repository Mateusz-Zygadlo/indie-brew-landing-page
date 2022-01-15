import React from 'react'
import { 
  Navbar, 
  RegisterSection 
} from '../components'

export const SignUp = () => { 
  return(
    <div className="w-full max-w-screen-2xl 2xl:mx-auto">
      <Navbar register />
      <RegisterSection />
    </div>
  )
}