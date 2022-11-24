import ilustationSVG from '../assets/images/homepage.svg'

export default function HeroSection() {
  return (
    <div className='container mx-auto text-center max-w-3xl mt-7'>
      <div className='font-inter font-bold text-5xl sm:text-7xl'>
        Improve your <span className='underline'>listening</span> in english
      </div>
      <div className="font-inter mt-4 text-gray-800">
        Listening skills are an essential part of good communication.
      </div>
      <button className="bg-blue-600 font-inter font-bold text-sm text-white px-10 py-3 sm:px-16 sm:py-3 my-2 rounded-md mt-6 hover:bg-blue-700">
        Get Started
      </button>
      <img className="mx-auto" src={ilustationSVG} alt="Tailwind logo" />
    </div>

  )
}
