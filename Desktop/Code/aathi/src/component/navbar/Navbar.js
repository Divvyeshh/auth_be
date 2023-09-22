import React from 'react'
import logo from './assets/logo.png'
import arrow from './assets/arrow.png'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className="navbar">
        <div className="container">
            <div className="left">
                <img src={logo} alt="Logo" className="logo" />
                <nav>
                <ul className="links">
                    <li className="link"><a href="/">HOME</a></li>
                    <li className="link"><a href="/works">WORKS</a></li>
                    <li className="link"><a href="/services">SERVICES</a></li>
                    <li className="link"><a href="/about">ABOUT</a></li>
                </ul>
                </nav>
            </div>
            <div className="right">
                <button className="get-started-button">
                    GET STARTED
                    <img className="arrow-button"src={arrow}/>
                </button>
            </div>
        </div>  
    </div>
  )
}
