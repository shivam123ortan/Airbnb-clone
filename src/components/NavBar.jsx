import React from 'react'
import logo from '../../public/assets/airbnb-logo.png'
import grid from '../../public/assets/photo-grid.png'

export default function Navbar() {
    return (
        <nav>
            <img className="nav--logo" src={logo} alt="" />
        </nav>
    )
}