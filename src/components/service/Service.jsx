"use client"
import React, { useState } from 'react'
import './service.css'
const Service = () => {
    const [toggle,setToggle] = useState(0)

    const toggleTab = (index)=>{
        setToggle(index);
    }
  return (
    <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What i Offer</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">Product <br /> Designer</h3>
                </div>

                <span className="services__button" onClick={()=>toggleTab(1)}>
                    view more <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggle === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={()=>toggleTab(0)}></i>
                        <h3 className="services__modal-title">Product Designer</h3>
                        <p className="services__modal-description">
                            Service with more than 3 years of experience. providing quality work to clients and companies
                        </p>

                        <ul className="services__modal-services">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">i develop the user interface</p>
                            </li>
                            
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">web page development</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">i create ux element interactions</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">i position your company brand</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">design and mockups of product for companies</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">
                        UI / UX <br/> Designer
                    </h3>
                </div>

                <span className="services__button"  onClick={()=>toggleTab(2)}>
                    view more <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggle === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={()=>toggleTab(0)}></i>
                        <h3 className="services__modal-title">UI /UX Designer</h3>
                        <p className="services__modal-description">
                            Service with more than 3 years of experience. providing quality work to clients and companies
                        </p>

                        <ul className="services__modal-service">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">i develop the user interface</p>
                            </li>
                            
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">web page development</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">i create ux element interactions</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">i position your company brand</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">design and mockups of product for companies</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-edit services__icon"></i>
                    <h3 className="services__title">
                        Visual <br/> Designer
                    </h3>
                </div>

                <span className="services__button" onClick={()=>toggleTab(3)}>
                    View More<i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggle === 3 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close"  onClick={()=>toggleTab(0)}></i>
                        <h3 className="services__modal-title"> Visual Designer</h3>
                        <p className="services__modal-description">
                            Service with more than 3 years of experience. providing quality work to clients and companies
                        </p>

                        <ul className="services__modal-service">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">i develop the user interface</p>
                            </li>
                            
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">web page development</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">i create ux element interactions</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">i position your company brand</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">design and mockups of product for companies</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Service