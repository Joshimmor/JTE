import React, { useState } from 'react'
import "./Contact.css"
import { useSpring,animated} from '@react-spring/web'

export default function Contact({contactRef}) {
  let [visable,setVisable] = useState(true)
  const { transform, opacity,display } = useSpring({
    opacity: visable ? 1 : 0,
    display: visable ? "none":"block",
    transform: `perspective(600px) translateX(${visable ? 90 : 0}em)`,
    config: { mass: 4, tension: 400, friction: 90 },
  })
  
  return (
    <div className='contact' ref={contactRef}>
        <div className="textbox">
            <h2  onClick={()=> setVisable(!visable)}className='contacttext'>CONTACT</h2>
            <animated.h4  className='contactsubtext'style={{ opacity: opacity.to(o => 1 - o), transform,display }}>WHO?</animated.h4> 
            <animated.a href="mailto:Joshimmor@gmail.com"  className='contactsubsubtext' style={{ opacity: opacity.to(o => 1 - o), transform,display  }}>PROJECTS</animated.a>
            <animated.a href="mailto:Joshimmor@gmail.com" className='contactsubsubtext' style={{ opacity: opacity.to(o => 1 - o), transform,display  }}>PRESS</animated.a>
            <animated.a  href="mailto:Joshimmor@gmail.com" className='contactsubsubtext' style={{ opacity: opacity.to(o => 1 - o), transform,display  }}>DESIGN</animated.a>
        </div>
    </div>
  )
}
