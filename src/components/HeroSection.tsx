import ilustationSVG from '../assets/images/homepage.svg'

export default function HeroSection() {
  return (
    <div className='container mx-auto text-center max-w-3xl mt-7'>
      <div className='font-inter font-bold text-7xl'>
        A better way to improve your english
      </div>
      <div className="font-inter mt-4 text-gray-800">
        Anim aute id magna aliqua ad ad non deserunt sunt. 
        Qui irure qui lorem cupidatat commodo. Elit sunt amet 
        fugiat veniam occaecat fugiat aliqua.
      </div>
      <button className="bg-black font-inter font-semibold text-sm text-white px-16 py-4 my-2 rounded-md mt-6 hover:bg-neutral-700">
          Get Started
      </button>
      <img className="w-10/12 mx-auto" src={ilustationSVG}  alt="Tailwind logo" />
    </div>
      
  )
}
