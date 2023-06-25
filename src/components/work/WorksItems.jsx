import React from 'react'
import Image from 'next/image'

const WorksItems = ({item}) => {
  return (
    <div className="work__card" key={item.id}>
       <Image src={item.image} alt={item.title} className="work__img" />
       <h3 className="work__title">{item.title}</h3>
       <a href="#" className="work__button">Demo <i className="bx bx-right-arrow-alt work__button-icon"></i></a>
    </div>
  )
}

export default WorksItems