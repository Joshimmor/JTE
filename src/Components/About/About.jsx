import React from 'react'
import "./About.css"

export default function About({aboutRef}) {
  return (
    <div className='about' ref={aboutRef}>
        <div className="textbox"></div>
        <div className="textbox"></div>
    </div>
  )
}
