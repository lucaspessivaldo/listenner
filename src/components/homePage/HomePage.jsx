import { Link } from 'react-router-dom'
import './homePage.css'

function HomePage() {
  return (
    <div className="home_container">
      <div className='home_buttons_container'>
        <Link className='homepage_button' to={'/number'}><button className='homepage_button'>Number</button></Link>
        <button className='homepage_button'>Ordinal Numbers</button>
        <button className='homepage_button'>Alphabet</button>
        <button className='homepage_button'>Minimal Pairs</button>
      </div>
    </div>
  )
}

export default HomePage