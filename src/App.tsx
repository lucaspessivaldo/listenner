import Footer from './components/Footer'
import Navbar from './components/Navbar'

import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
