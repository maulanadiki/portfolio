import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">
          Diki Maulana
        </h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">About</a>
          </li>
          <li>
            <a href="#project" className="footer__link">Project</a>
          </li>
          <li>
            <a href="#testimoni" className="footer__link">Testimonial</a>
          </li>
        </ul>

        <div className="footer__social">
        <a href="www.facebook.com" target='_blank' className="footer__social-link">
            <i className="bx bxl-facebook"></i>
        </a>
        
        <a href="www.instagram.com" target='_blank' className="footer__social-link">
        <i className="bx bxl-instagram"></i>
        </a>
        
        <a href="wwww.twitter.com" target='_blank' className="footer__social-link">
        <i className="bx bxl-twitter"></i>
        </a>
        </div>

        <span className="footer__copy">&#169; Copyright all rights reserved</span>
        
      </div>
    </footer>
  )
}

export default Footer