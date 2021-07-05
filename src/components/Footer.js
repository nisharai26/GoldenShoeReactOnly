import React from 'react'
import './Footer.css'
import Twitter from './images/twitter.png'
import Instagram from './images/instagram.png'
import Facebook from './images/facebook.png'

const Footer = () => {
    return(
        <div className='footer-container'> 
            <div className='footer-left'>
                GOLDEN-SHOE
            </div>
            <div className='footer-center'>
                <ul>
                    <li>Call Us: 07736969377</li>
                    <li>Address: 85 Maple Street</li>
                    <li>London, L3 8JC</li>
                </ul>
            </div>
            <div className='footer-right'>
            <a href="https://www.twitter.com/" target="_blank">
                <img src={Twitter} alt='twitter'/></a>
                <a href="https://www.instagram.com/" target="_blank">
                <img src={Instagram} alt='instagram'/></a>
                <a href="https://www.facebook.com/" target="_blank">
                <img src={Facebook} alt='facebook'/></a>
            </div>
        </div>
    )
}

export default Footer;