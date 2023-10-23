import { useGLTF } from '@react-three/drei'
import { useSpring } from "@react-spring/core";
import { a } from "@react-spring/three";
import { useFrame } from '@react-three/fiber';

export  function Mask({ ...props }) {
  let mask = useRef();
  let [Rotation,setRotation] = useState(1);
  const changeRotation = () =>{
    setRotation(Number(!Rotation))
    console.log(Rotation,spring.z)
  }
  const { nodes, materials } = useGLTF('/scene.gltf');
  const  spring  = useSpring({
    z: Rotation? [Math.PI/2,-Math.PI,0 ]:[ Math.PI/2,-Math.PI,Math.PI]
  });
 

  return (
    <group  rotateZ={spring.z}  dispose={null} scale={2} >
      <a.group onClick={changeRotation}  rotation={spring.z} position={[0,0,0]} scale={2}>
        <mesh  geometry={nodes.Object_2.geometry} material={materials.defaultMat} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.defaultMat} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.defaultMat} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.defaultMat} />
      </a.group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')