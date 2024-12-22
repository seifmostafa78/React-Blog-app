import { Link } from 'react-router-dom'
import './login.css'

export default function Login() {
  return (
    <div className='login'>
        <span className='loginTitle'>Login</span>
        <form className="loginForm">
            <label>Email</label>
            <input type="email" name="email" placeholder='Enter your email...' autoFocus={true}/>
            <label>Password</label>
            <input type="email" name="email" placeholder='Enter your password...' />

            <button className='loginBtn'>Login</button>
        </form>
        <button className='loginRegisterbtn'><Link className='link' to='/register'>Register</Link></button>
    </div>
  )
}
