import './App.css';
import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import LoadModel from './components/loadModel';
import Coffee from './assets/coffee.obj';
import Phone from './assets/phone.obj';
import Computer from './assets/computer.obj';
import Twitch from './assets/twitch.obj';
import Ethereum from './assets/ethereum.obj';
import { OrbitControls, Plane, useTexture, TorusKnot } from "@react-three/drei";

const App = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log(scrollPosition);
  }, [scrollPosition]);

  return (
    <div className="App">

      <div className="background">
      <Canvas style={{ width: '500px', height: '500px'}} camera={{ position: [4, 7, 0] }}>
        <ambientLight intensity={0.3}/>
        <pointLight position={[5, 5, 5]} intensity={1}/>
        <pointLight position={[-3, -3, 2]}/>
        <OrbitControls enableZoom={false}/>
        <LoadModel model={Coffee}
          position={[0, -40, 0]}
          rotation={[scrollPosition / 500, -scrollPosition / 3000, 0]}
          initialRotation={[0, 0, 0]}
          scale={[0.03, 0.03, 0.03]}/>
      </Canvas>
      <Canvas style={{ width: '500px', height: '500px'}} camera={{ position: [4, 7, 0] }}>
        <ambientLight intensity={0.3}/>
        <pointLight position={[5, 5, 5]} intensity={1}/>
        <OrbitControls enableZoom={false}/>
        <LoadModel model={Phone}
        position={[0, -40, 0]}
        rotation={[-scrollPosition / 500, scrollPosition / 3000, 0]}
        initialRotation={[1.6, 0, -1.6]}
        scale={[0.05, 0.05, 0.05]}/>
      </Canvas>
      <Canvas style={{ width: '500px', height: '500px'}} camera={{ position: [4, 7, 0] }}>
        <ambientLight intensity={0.3}/>
        <pointLight position={[5, 5, 5]} intensity={1}/>
        <OrbitControls enableZoom={false}/>
        <LoadModel model={Computer}
        position={[0, -40, 0]}
        rotation={[scrollPosition / 500, -scrollPosition / 3000, 0]}
        initialRotation={[1.6, 0, -1.6]}
        scale={[0.03, 0.03, 0.03]}/>
      </Canvas>
      <Canvas style={{ width: '500px', height: '500px'}} camera={{ position: [4, 7, 0] }}>
        <ambientLight intensity={0.3}/>
        <pointLight position={[5, 5, 5]} intensity={1}/>
        <OrbitControls enableZoom={false}/>
        <LoadModel model={Twitch}
        position={[0, -40, 0]}
        rotation={[-scrollPosition / 500, -scrollPosition / 3000, 0]}
        initialRotation={[1.6, 0, -1.6]}
        scale={[0.04, 0.04, 0.04]}/>
      </Canvas>
      <Canvas style={{ width: '500px', height: '500px'}} camera={{ position: [4, 7, 0] }}>
        <ambientLight intensity={0.3}/>
        <pointLight position={[5, 5, 5]} intensity={1}/>
        <OrbitControls enableZoom={false}/>
        <LoadModel model={Ethereum}
        position={[0, -40, 0]}
        rotation={[-scrollPosition / 500, scrollPosition / 3000, 0]}
        initialRotation={[1.6, 0, -1.6]}
        scale={[0.05, 0.05, 0.05]}/>
      </Canvas>
      </div>

      <div className="website">
      </div>

    </div>
  );
}

export default App;
