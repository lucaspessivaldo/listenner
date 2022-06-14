import { Link } from 'react-router-dom'
import './header.css'

export default function Header() {
  return (
    <header>
      <nav>
        <div><Link to={'/'}>English Listening</Link></div>
        <div className='link-nav'>☰</div>
      </nav>
    </header>
  )
}
