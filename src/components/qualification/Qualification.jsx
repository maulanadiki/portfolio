"use client"
import React, { useState } from 'react'
import './qualification.css'

const Qualification = () => {
    const [toggle,setToggle] = useState(1)

    const toggleTab = (index)=>{
        setToggle(index);
    }
  return (
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Personel Journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggle === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                onClick ={()=>toggleTab(1)}
                >
                    <i className="uil uil-graduation-cap qualification__icon"></i>
                    Education 
                </div>
                <div className={toggle === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                 onClick ={()=>toggleTab(2)}
                >
                    <i className="uil uil-briefcase-alt qualification__icon"></i>
                    Experience
                </div>
            </div>

            <div className="qualification__sections">
                <div className={toggle === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Web Design</h3>
                            <span className="qualification__subtitle">
                                Ibn Khaldun University
                            </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2023 - present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Art Director</h3>
                            <span className="qualification__subtitle">
                                ini mah contoh aja
                            </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2023 - present
                            </div>
                        </div>

                       
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Web Development</h3>
                            <span className="qualification__subtitle">
                                La Lumiere Aesthetics
                            </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2022 - 2023
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">UX Expert</h3>
                            <span className="qualification__subtitle">
                                Ibn Khaldun University
                            </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2023 - 2023
                            </div>
                        </div>

                       
                    </div>
                </div>

                <div className={toggle === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Production Designer</h3>
                            <span className="qualification__subtitle">
                                dimana aja tempatnya mah toh cuma contoh
                            </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2023 - present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">UX Designer</h3>
                            <span className="qualification__subtitle">
                                hayo tempatnya dimana lagi
                            </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2023 - present
                            </div>
                        </div>

                       
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Web Designer lagi</h3>
                            <span className="qualification__subtitle">
                                figma - indonesia
                            </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2022 - 2023
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification