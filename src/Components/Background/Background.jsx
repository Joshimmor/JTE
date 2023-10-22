
import { WhiteTiger } from './WhiteTiger'
import "./Background.css"

import React, {useRef,useState ,Suspense} from 'react';

import { OrbitControls,DeviceOrientationControls } from '@react-three/drei';
import { Canvas, useFrame, useThree} from '@react-three/fiber';



const Controls = () => { 
  const orbitRef = useRef();
  const {camera, gl} = useThree();
  return (
      <OrbitControls
          args={[camera, gl.domElement]}
          ref={orbitRef}
          minDistance={30}
          maxDistance={30}
          maxPolarAngle={1}
          minPolarAngle={1}
          enableZoom={false}
          enablePan={false}
          rotateSpeed={.6}
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
            <Canvas onCreated={devicePermission}>
              {/* <Controls /> */}
              <ambientLight/>
              <DeviceOrientationControls/>
              <pointLight position={[10,10,10]} intensity={8} />
              <group>
                  <WhiteTiger position={[0,-20,10]} rotation ={[-1,0,0]}scale={6}/>
              </group>
            </Canvas>
          </Suspense>
      </div>
  )
}