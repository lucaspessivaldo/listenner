import ilustationSVG from '../assets/images/homepage.svg'

export default function HeroSection() {
  return (
    <div className='container mx-auto text-center max-w-3xl mt-7'>
      <div className='text-transparent bg-clip-text bg-gradient-to-r from-black via-blue-900 to-blue-600 font-inter font-bold text-5xl sm:text-7xl py-2'>
        Improve your listening in english.
      </div>

      <div className="font-inter font-semibold text-gray-800">
        Listening skills are an essential part of good communication.
      </div>

      <button className="border-2 border-black font-inter font-semibold text-sm px-9 py-3 sm:px-16 sm:py-3 my-2 rounded-md mt-6 hover:text-white hover:bg-black">
        Get Started
      </button>

      <img className="mx-auto" src={ilustationSVG} alt="Illustration people talking" />
    </div>

  )
}
