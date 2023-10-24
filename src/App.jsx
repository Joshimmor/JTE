import { useState,useRef } from 'react'

import './App.css'


import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Media from './Components/Media/Media'
import Background from './Components/Background/Background'
import About from "./Components/About/About"

function App() {
  let containerRef = useRef();
  let mediaRef = useRef();
  let aboutRef = useRef();
  return (
    <div ref={containerRef}>
      <Header mediaRef={mediaRef}  aboutRef={aboutRef}/>
      <Background containerRef={containerRef} />
      <Home  />
      <Media mediaRef={mediaRef}/>
      <div style={{height:'100vh'}}></div>
      <About aboutRef={aboutRef}/>

    </div>
  )
}

export default App
