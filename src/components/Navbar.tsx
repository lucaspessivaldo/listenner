import logo from '../assets/images/logo.png'

export default function Navbar() {
  return (
    <header className='border-b border-black'>
      <nav className="cointainer max-w-7xl mx-auto flex items-center justify-between px-3">
        <div className='flex items-center gap-1 cursor-pointer select-none'>
          <img className='w-6 h-6' src={logo} alt="logo" />
          <div className='font-inter font-semibold  text-2xl'>english</div>
        </div>
        <div className='flex gap-2'>
          <button className="font-inter font-semibold text-sm  px-4 hover:underline">
            Login
          </button>
          <button className="bg-blue-600 border-2 border-blue-600 font-inter font-semibold text-sm text-white px-4 py-1 my-2 rounded-md hover:bg-white hover:text-blue-600">
            Sign up
          </button>
        </div>
      </nav>
    </header>
  )
}
