import React from 'react'
import baslikResim from  "../img/tanitim-resim.png";
import './header.css'
function Header() {
    return (
        <div className='header'>
            <img src={baslikResim} alt="" />
            <div className="header-content">
            <p className='person-name'>Laura Smith</p>
            <p className='person-work'>Frontend Developer</p>
            <p className='person-webAdress'>laurasmith.website</p>
            <div className="btn-group">
                <button className='person-email'><i class="fas fa-envelope"></i><span>Email</span></button>
                <button className='person-linkedin'><i class="fab fa-linkedin"></i><span>LinkedIn</span></button>
            </div>
            </div>
        </div>
    )
}

export default Header
