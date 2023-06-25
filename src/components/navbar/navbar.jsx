"use client"
import React, { useState,useEffect } from 'react'
import './navbar.css'

const Navbar = () => {
  // =========== Change Background header ===============
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header');
      if (header && window && window.scrollY >= 80) {
        header.classList.add('scroll-header');
      }
      else{
        header.classList.remove("scroll-header");
      }
    };
    

    window.addEventListener('scroll', handleScroll);

    // Cleanup: Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  // =========== Toggle Menu ===============
  const [toggle, setToggle] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  return (
    <header className="header">
      <nav className="nav container">
        <a href="" className="nav__logo">Diki Maulana</a>

        <div className={toggle ? "nav__menu show-menu":"nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" onClick={()=> setActiveNav("#home")} className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                <i className="uil uil-estate nav__icon "></i> Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about"  onClick={()=> setActiveNav("#about")} className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}>
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills"  onClick={()=> setActiveNav("#skills")} className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}>
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#service" onClick={()=> setActiveNav("#service")} className={activeNav === "#service" ? "nav__link active-link" : "nav__link"}>
                <i className="uil uil-briefcase-alt nav__icon"></i> Service
              </a>
            </li>
            <li className="nav__item">
              <a href="#portfolio" onClick={()=> setActiveNav("#portfolio")} className={activeNav === "#portfolio" ? "nav__link active-link" : "nav__link"}>
                <i className="uil uil-scenery nav__icon"></i> Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact"  onClick={()=> setActiveNav("#contact")} className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}>
                <i className="uil uil-message nav__icon"></i> Contact
              </a>
            </li>
            <i className="uil uil-times nav__close" onClick={()=> setToggle(!toggle)}></i>
          </ul>
        </div>

          <div className="nav__toggle" onClick={()=> setToggle(!toggle)}>
            <i className="uil uil-apps"></i>
          </div>

      </nav>
    </header>
  )
}

export default Navbar