import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import Courses from './components/Courses'
import Main from './components/Main'
import data from './config'
import './App.css'

function App() {
 
  // console.log(data[1].title)
  return (
    <div className="App">
        <Main />
        <Courses />
    </div>
  )
}

export default App
