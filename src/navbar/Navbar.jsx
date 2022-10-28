import React from 'react'
import './Navbar.css'
import logo from './book.png'

function Navbar() {
    return (
        <>
        <nav className="container-fluid bg-dark p-2 align-items-center">
            <div class='nav-cont d-flex justify-content-between'>
            <div className="container">
                    <a className="navbar-brand" href="">
                    <img src={logo} alt="" width="70" height="50"/>
                    </a>
                </div>
                <div className='d-flex'>
                <a className='nav-link text-white fw-bold'>
                        Learn
                    </a>
                    <a className='nav-link text-white fw-bold'>
                        Quiz
                    </a>
                </div>
            </div>
 
</nav>
        </>
    )
}

export default Navbar