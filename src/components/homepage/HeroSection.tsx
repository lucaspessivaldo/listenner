import ilustationSVG from '../../assets/images/homepage.svg'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <div className='container mx-auto text-center max-w-3xl mt-7'>
      <div className='font-inter font-bold text-5xl sm:text-7xl py-2'>
        Improve your listening in english.
      </div>

      <div className="font-inter text-gray-800">
        Listening skills are an essential part of good communication.
      </div>

      <Link to="/learn">
        <button className="shadow-[2px_2px_0px_rgb(0,0,0)] border-2 border-black font-inter font-semibold text-sm px-9 py-3 sm:px-16 sm:py-3 my-2 rounded-md mt-6">
          Get Started
        </button>
      </Link>

      <img className="mx-auto" src={ilustationSVG} alt="Illustration people talking" />
    </div>

  )
}
