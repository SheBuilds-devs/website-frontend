import { useState } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import Courses from './components/Courses'
import data from './config'
import './App.css'

function App() {
 
  // console.log(data[1].title)
  return (
    <div className="App">

      <section>
        <Parallax pages={2} style={{ top: '0', left: '0' }} className='animation' >
          <ParallaxLayer offset={0} speed={3}>
            <div className='animation_layer' id="bg0"></div>
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={2}>
            <div className='animation_layer' id="bg1"><img src="/bg1.png" alt="" /></div>
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={1}>
            <div className='animation_layer' id="bg2"><img src="/bg2.png" alt="" /></div>
          </ParallaxLayer>
        </Parallax>
      </section>
      <Courses />
    </div>
  )
}

export default App
