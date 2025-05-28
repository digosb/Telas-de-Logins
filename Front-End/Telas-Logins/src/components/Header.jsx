import React from 'react'

export default function Header() {
  return (
    <div>
      <header>
        <h2 className='logo'>Login</h2>
        <nav className='navigation'>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
            <button className='btnLogin-popup'>Login</button>
        </nav>
      </header>
    </div>
  )
}
