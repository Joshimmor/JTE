import { useState,useRef } from 'react'

import './App.css'


import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Media from './Components/Media/Media'
import Background from './Components/Background/Background'
//import About from "./Components/About/About"
import Contact from './Components/Contact/Contact'

function App() {
  let containerRef = useRef();
  let mediaRef = useRef();
  let contactRef = useRef();
  return (
    <div ref={containerRef}>
      <Header mediaRef={mediaRef}  contactRef={contactRef}/>
      <Background containerRef={containerRef} />
      <Home  />
      <Media mediaRef={mediaRef}/>
      <div style={{height:'100vh'}}></div>
      <Contact contactRef={contactRef}/>

    </div>
  )
}

export default App
