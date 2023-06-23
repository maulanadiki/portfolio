import React from 'react'
import Backend from './Backend'
import Frontend from './frontend'
import './skill.css'


const Skill = () => {
  return (
   <section className="skill section">
    <h2 className="section__title">Skills</h2>
    <span className="section__subtitle">My technical level</span>
   <div className="skill__container container grid">
    <Frontend/>
    <Backend />
   </div>
   </section>
  )
}

export default Skill