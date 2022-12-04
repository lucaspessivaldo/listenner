import { useEffect, useState } from 'react'
import { PersonIcon } from '@radix-ui/react-icons';
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [isHomepage, setIsHomepage] = useState(true)
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/') setIsHomepage(true)
    else setIsHomepage(false)
  }, [location])

  return (
    <header className='border-b border-black'>
      <nav className="cointainer h-12 max-w-7xl mx-auto flex items-center justify-between px-3">

        <Link to='/'>
          <div className='flex items-center gap-1 cursor-pointer select-none'>
            <div className='font-inter font-semibold  text-2xl'>listenner.</div>
          </div>
        </Link>

        <Link to='/learn' className={`${isHomepage ? 'block' : 'hidden'}`}>
          <button className="border-2 border-black font-inter font-semibold text-sm text-black px-3 py-1 my-2 rounded-md hover:bg-black hover:text-white">
            Get Started
          </button>
        </Link>
      </nav>
    </header>
  )
}
