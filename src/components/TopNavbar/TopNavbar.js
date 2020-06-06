import React from 'react';
import './TopNavbar.css';
import 'animate.css'

const TopNavbar = () => {
    return (
    <div className="containerBar">
        <div className="Logo animate__animated animate__bounceIn">WeLearn
            <p>"We aim to learn more to improve" - Jeffrey</p>
        </div>
        <div className="Navbar">
            <p>Username</p>
            <p>Email</p>
        </div>
    </div>
    )
}
export default TopNavbar;