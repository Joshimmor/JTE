
import { WhiteTiger } from './WhiteTiger'
import "./Background.css"

import React, {useRef,useState ,Suspense} from 'react';

import { OrbitControls,DeviceOrientationControls } from '@react-three/drei';
import { Canvas, useFrame, useThree} from '@react-three/fiber';



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
export default function Background() {

  return (
      <div className="background">
          <Suspense>
            <Canvas>
              <Controls />
              <ambientLight/>

              <pointLight position={[10,10,10]} intensity={8} />
              <group>
                  <WhiteTiger position={[0,-10,8]} rotation ={[0,0,0]}scale={7}/>
              </group>
            </Canvas>
          </Suspense>
      </div>
  )
}