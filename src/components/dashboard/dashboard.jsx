import React from 'react'
import Data from './Data'
import Social from './Social'
import './dashboard.css'
import ScrollDown from './ScrollDown'

const Dashboard = () => {
    return (
        <section className='home section' id='dashboard'>
            <div className="home__container container grid">
                <div className="home__content grid">
                    <Social/>
                    <div className="home__img"></div>
                    <Data/>
                </div>
                <ScrollDown/>
            </div>
        </section>
    )
}

export default Dashboard