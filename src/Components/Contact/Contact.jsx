import React, { useState } from 'react'
import "./Contact.css"
import { useSpring,animated} from '@react-spring/web'

export default function Contact({contactRef}) {
  let [visable,setVisable] = useState(true)
  const { transform, opacity } = useSpring({
    opacity: visable ? 1 : 0,
    transform: `perspective(600px) rotateX(${visable ? -90 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })
  
  return (
    <div className='contact' ref={contactRef}>
        <div className="textbox">
            <h2  onClick={()=> setVisable(!visable)}className='contacttext'>CONTACT</h2>
            <animated.h4 className='contactsubtext'style={{ opacity: opacity.to(o => 1 - o), transform }}>WHO?</animated.h4> 
            <animated.h6 className='contactsubsubtext' style={{ opacity: opacity.to(o => 1 - o), transform }}>PROJECTS</animated.h6>
            <animated.h6 className='contactsubsubtext' style={{ opacity: opacity.to(o => 1 - o), transform }}>PRESS</animated.h6>
            <animated.h6 className='contactsubsubtext' style={{ opacity: opacity.to(o => 1 - o), transform }}>DESIGN</animated.h6>
        </div>
    </div>
  )
}
