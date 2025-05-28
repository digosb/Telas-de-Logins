import React from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function LoginCervo() {
  return (
    <div className='wrapper'>
      <span className='icon-close'>
        <FontAwesomeIcon icon="fa-solid fa-xmark" />
      </span>
      <div className='form-box login'>
        <h2>Login</h2>
        <form action="#">
            <div className='input-box'>
                <span className='icon'>
                    <FontAwesomeIcon icon="fa-solid fa-play" />
                </span>
                <input type="email" required />
                <label htmlFor="">Email</label>
            </div>
            <div className='input-box'>
                <span className='icon'>
                    <FontAwesomeIcon icon="fa-solid fa-lock" />
                </span>
                <input type="password" required />
                <label htmlFor="">Password</label>
            </div>
            <div className='remember-forgot'>
                <label htmlFor=""><input type="checkbox" />Remember me</label>
                <a href="#">Forgot Password</a>
            </div>
            <button type="submit" className='btn'>Login</button>
            <div className='login-register'>
                <p>Don't have an account <a href="#" className='register-link'>Register</a></p>
            </div>
        </form>
      </div>
        <div className='form-box register'>
        <h2>Register</h2>
        <form action="#">
            <div className='input=-box'>
                <span className='icon'>
                    <FontAwesomeIcon icon="fa-solid fa-users" />
                </span>
                <input type="text" required />
                <label htmlFor="">Username</label>
            </div>
            <div className='input=-box'>
                <span className='icon'>
                    <FontAwesomeIcon icon="fa-solid fa-play" />
                </span>
                <input type="email" required />
                <label htmlFor="">Email</label>
            </div>
            <div className='input-box'>
                <span className='icon'>
                    <FontAwesomeIcon icon="fa-solid fa-lock" />
                </span>
                <input type="password" required />
                <label htmlFor="">Password</label>
            </div>
            <div className='remember-forgot'>
                <label htmlFor=""><input type="checkbox" />I agree to the terms & conditions</label>
            </div>
            <button type="submit" className='btn'>Register</button>
            <div className='login-register'>
                <p>Already have an account? <a href="#" className='register-link'>Login</a></p>
            </div>
        </form>
      </div>
    </div>
  )
}
