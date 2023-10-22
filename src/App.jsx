import { useState } from 'react'

import './App.css'


import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Media from './Components/Media/Media'
import Background from './Components/Background/Background'

function App() {


  return (
    <>
      <Header/>
      <Background/>
      <Home/>
      <Media/>

    </>
  )
}

export default App
