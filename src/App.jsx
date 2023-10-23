import { useState,useRef } from 'react'

import './App.css'


import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Media from './Components/Media/Media'
import Background from './Components/Background/Background'

function App() {
  let containerRef = useRef();

  return (
    <div ref={containerRef}>
      <Header/>
      <Background containerRef={containerRef} />
      <Home/>
      <Media/>

    </div>
  )
}

export default App
