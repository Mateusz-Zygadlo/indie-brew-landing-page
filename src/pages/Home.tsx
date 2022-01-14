import React from 'react'
import { 
  Navbar,
  Main,
  Resources,
  Advantage,
} from '../components'

export const Home = () => {
  return (
    <div className="w-full max-w-screen-2xl 2xl:mx-auto">
      <Navbar />
      <Main />
      <Resources />
      <Advantage />
    </div>
  )
}
