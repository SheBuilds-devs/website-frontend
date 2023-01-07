import React from 'react'
import '../styles/Card.css'
function Card({image, title}) {
  return (
    <div>
        <div className='card'>
            <div className='card--image'>
                <img src={image} alt="" />
            </div>
            <span className='card--title'>{title}</span>
            <img src="../src/assets/arrow.png" alt="" className='arrow' />
        </div>
    </div>
  )
}

export default Card