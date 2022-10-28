import React from 'react'
import './Navbar.css'
import logo from './book.png'

function Navbar() {
    return (
        <>
        <nav className="container-fluid p-2 align-items-center nav-wrapper">
            <div class='nav-cont d-flex justify-content-around'>
            <div className="">
                <a className='nav-link text-white fw-bold'>
                        Explore
                    </a>
                </div>
                <div className=''>
                <a className='nav-link text-white fw-bold'>
                        Learn
                    </a>
                </div>
                <div className=''>
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