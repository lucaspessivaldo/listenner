import { Link } from 'react-router-dom'
import './homePage.css'

function HomePage() {
  return (
    <div className="home_container">
      <div className='home_buttons_container'>
        <Link className='homepage_button' to={'/number'}><button className='homepage_button'>Number</button></Link>
        <Link className='homepage_button' to={'/alphabet'}><button className='homepage_button'>Alphabet</button></Link>
        <button className='homepage_button'>Minimal Pairs</button>
      </div>
    </div>
  )
}

export default HomePage