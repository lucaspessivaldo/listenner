import logo from '../assets/images/logo.png'

export default function Navbar() {
  return (
    <header className='border-b border-black'>
      <nav className="cointainer max-w-7xl mx-auto flex items-center justify-between px-3">
        <div className='flex items-center gap-1 cursor-pointer select-none'>
          <img className='w-6 h-6' src={logo} alt="logo" />
          <div className='font-inter font-semibold  text-2xl'>english</div>
        </div>
        <button className="bg-blue-600 font-inter font-semibold text-sm text-white px-4 py-2 my-2 rounded-md hover:bg-blue-700">
          Get Started
        </button>
      </nav>
    </header>
  )
}
