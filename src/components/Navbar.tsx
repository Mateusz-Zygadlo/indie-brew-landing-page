import React, {
  useState,
  useEffect
} from 'react'
import { Images } from '../assets'
import { Button } from './Button'
import {  
  useMeasure,
  useWindowSize,
} from '../hooks'
import { MOBILE_WIDTH } from '../constants'

interface NavbarProps {
  register?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ register }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [rect, myRef]: any = useMeasure()
  const { width, setWidth } = useWindowSize()

  useEffect(() => {
    if(rect) setWidth(rect.width)
  }, [rect])

  return (
    <div 
      className="sticky -top-1 px-5 md:px-16 lg:px-24 py-4 main-gradient z-50"
      ref={myRef}
    >
      <div className="flex items-center justify-between relative">
        <img 
          src={Images.Logo}
          alt="logo"
        />
        {register ? (
          <>
            {width > MOBILE_WIDTH ? (
              <a href="/" className="flex items-center">
                <div className="w-8 h-8 bg-white border flex items-center justify-center rounded-lg">
                  <img 
                    src={Images.BackArrow}
                    alt="back arrow"
                  />
                </div>
                <p className="ml-5">Back to homepage</p>
              </a>
            ) : (
              <a href="/" className="w-8 h-8 bg-white border flex items-center justify-center rounded-lg">
                <img 
                  src={Images.BackArrow}
                  alt="back arrow"
                />
              </a>
            )}
          </>
        ) : (
          <>
            {width > MOBILE_WIDTH ? (
              <div className="flex items-center">
                <ul className="flex items-center mr-5">
                  <li className="text-xl mx-3 cursor-pointer border-b hover:border-black transition-colors duration-300">Pricing</li>
                  <li className="text-xl mx-3 cursor-pointer border-b hover:border-black transition-colors duration-300">Support</li>
                </ul>
                <Button>Get Started - it's free</Button>
              </div>
            ) : isOpen ? (
              <div className="flex flex-col items-center absolute top-0 -right-1 w-full py-10 px-10 bg-white border-2 border-black z-50">
                <img 
                  src={Images.Close}
                  alt="close"
                  className="scale-150 absolute top-2 right-2"
                  onClick={() => setIsOpen(false)}
                />
                <div className="flex flex-col items-center w-full">
                  <ul className="flex flex-col items-center mb-5">
                    <li className="text-4xl sm:text-5xl my-3 cursor-pointer border-b hover:border-black transition-colors duration-300" onClick={() => setIsOpen(false)}>Pricing</li>
                    <li className="text-4xl sm:text-5xl my-3 cursor-pointer border-b hover:border-black transition-colors duration-300" onClick={() => setIsOpen(false)}>Support</li>
                  </ul>
                  <Button>Get Started - it's free</Button>
                </div>
              </div>
            ) : (
              <img 
                src={Images.HamburgerMenu}
                alt="Hamburger menu"
                onClick={() => setIsOpen(true)}
              />
            )}
          </>
        )}
      </div>
    </div>
  )
}
