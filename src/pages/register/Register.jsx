import { Link } from 'react-router-dom'
import './register.css'

export default function Register() {
  return (
    <div className='register'>
        <span className='registerTitle'>Register</span>
        <form className="registerForm">
            <label>Username</label>
            <input type="text" name="username" placeholder='Enter your username...' autoFocus={true}/>
            <label>Email</label>
            <input type="email" name="email" placeholder='Enter your email...'/>
            <label>Password</label>
            <input type="email" name="email" placeholder='Enter your password...' />

            <button className='registerBtn'>Register</button>
        </form>
        <button className='registerLoginbtn'><Link className='link' to='/login'>Login</Link></button>
    </div>
  )
}