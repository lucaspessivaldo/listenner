import Footer from './components/Footer'
import Navbar from './components/Navbar'

import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className='flex flex-col h-screen'>
      <Navbar />
      <div className='flex-grow'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App