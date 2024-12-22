import { Link } from 'react-router-dom'
import './topbar.css'

export default function TopBar() {

  const user = true;  

  return (
    <div className='topbar'>
        <div className="topLeft">
            <i class="fa-brands fa-square-facebook"></i>
            <i class="fa-brands fa-square-instagram"></i>
            <i class="fa-brands fa-square-pinterest"></i>
            <i class="fa-brands fa-square-twitter"></i>
        </div>

        <div className="topCenter">
            <ul className='listItems'>
                <li><Link className='link' to="/">Home</Link></li>
                <li>About</li>
                <li><Link className='link' to="/contact">Contact</Link></li>
                <li><Link className='link' to="/write">Write</Link></li>
                {user && <li>Logout</li>}
            </ul>
        </div>

        <div className="topRight">
          {user?
          <Link className='link' to="/settings">
            <img className='topImage' src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
          </Link>
          : 
          <ul className='listItems'>
            <li><Link className='link' to='/login'>Login</Link></li>
            <li><Link className='link' to='/register'>Register</Link></li>
          </ul>
          }
          <i class="searchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
