import React from 'react'
import data from '../config'
import Card from './Card'
import '../styles/Courses.css'

function Courses() {
    
    var cardElement = data.map(d => {
        return(
            <Card
                key={d.id}
                {...d}
            />
        )
    })
  

  return (
    <div className='course_page'>
        <span className='heading'>Our Courses</span>
        <section className='courses'>
            {cardElement}
        </section>
        
    </div>
  )
}

export default Courses