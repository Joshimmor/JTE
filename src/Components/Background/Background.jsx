
import { WhiteTiger } from './WhiteTiger'
import "./Background.css"

import React, {useRef,useState ,Suspense,useEffect} from 'react';
import { useScroll } from '@react-spring/core'
import { a } from "@react-spring/three";
import { OrbitControls,DeviceOrientationControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas, useFrame, useThree} from '@react-three/fiber';
import {Mask} from './Mask';



const Controls = () => { 
  const orbitRef = useRef();
  const {camera, gl} = useThree();
  camera.rotateY(20)
  return (
      <OrbitControls
          args={[camera, gl.domElement]}
          ref={orbitRef}
          minDistance={30}
          maxDistance={30}
          maxPolarAngle={1.5}
          minPolarAngle={1.5}
          enableZoom={false}
          enablePan={false}
          rotateSpeed={.6}
          maxAzimuthAngle={.25}
          minAzimuthAngle={-.25}
          />
  )
}
function devicePermission() {
  if (typeof DeviceMotionEvent.requestPermission === 'function' && !localStorage.getItem('Motion')) {
    // Handle iOS 13+ devices.
    DeviceMotionEvent.requestPermission();
    localStorage.setItem("Motion",true)
    window.location.reload(false);
  } 
}
export default function Background({containerRef}) {
  const timeoutRef = React.useRef(null);
  let [rotate,updateRotation] = useState(0.0)
  useEffect(()=>{
    timeoutRef.current = setTimeout(()=>{
        updateRotation(rotate + .01)
    },10)
},[updateRotation,rotate])


  return (
      <div className="background">
          <Suspense>
            <Canvas>
              <ambientLight/>
              <pointLight position={[10,10,10]} intensity={8} />
              <group>
                  {/* <WhiteTiger containerRef={containerRef} position={[0,-2.5,0]} rotation={[0,window.pageYOffset/614,0]} scale={2}/> */}
                  <Mask  position={[0,0,0]}  rotation={[0,((window.pageYOffset/614)+Math.PI),0]}  scale={1.5}/>
              </group>
            </Canvas>
          </Suspense>
      </div>
  )
}