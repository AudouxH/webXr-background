import './App.css';
import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import ReactLogo from './assets/react_logo.glb';
import Laptop from './assets/laptop.glb';
import Iphone from './assets/iphone_12_pro.glb';
import Ethereum from './assets/ethereum_logo.glb';
import Coffee from './assets/coffee_cup.glb';
import loadModel from './components/loadModel';

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
          <Canvas style={{ width: '300px', height: '300px', border: '1px solid #000' }} camera={{ position: [2.8, 0, 2.8] }}>
            <pointLight position={[2.8, 0, 2.8]} intensity={0.5} />
            <primitive
              object={loadModel(ReactLogo).scene}
              children-0-castShadow
              position={[0, 0, 0]}
              rotation={[0, (0.8 + scrollPosition / 200), 0]}
            />
          </Canvas>

          <Canvas style={{ width: '300px', height: '300px', border: '1px solid #000' }} camera={{ position: [25, 20, 25] }}>
            <ambientLight intensity={0.3} />
            <pointLight position={[2.8, 0, 2.8]} intensity={1} />
            <primitive
              object={loadModel(Laptop).scene}
              children-0-castShadow
              position={[0, -5, 0]}
              rotation={[0, (0.8 - scrollPosition / 200), 0]}
            />
          </Canvas>

          <Canvas style={{ width: '300px', height: '300px', border: '1px solid #000' }} camera={{ position: [65, 0, 65] }}>
            <ambientLight intensity={2} />
            <pointLight position={[2.8, 0, 2.8]} intensity={0.5} />
            <primitive
              object={loadModel(Iphone).scene}
              children-0-castShadow
              position={[0, -47, 0]}
              rotation={[0, (0.8 + scrollPosition / 200), 0]}
            />
          </Canvas>

          <Canvas style={{ width: '300px', height: '300px', border: '1px solid #000' }} camera={{ position: [2, 0, 2] }}>
            <ambientLight intensity={0.3} />
            <pointLight position={[2.8, 0, 2.8]} intensity={1} />
            <primitive
              object={loadModel(Ethereum).scene}
              children-0-castShadow
              position={[0, 0, 0]}
              rotation={[0, (0.8 + scrollPosition / 200), 0]}
            />
          </Canvas>

          <Canvas style={{ width: '300px', height: '300px', border: '1px solid #000' }} camera={{ position: [19, 13, 19] }}>
            <ambientLight intensity={0.3} />
            <pointLight position={[2.8, 0, 2.8]} intensity={1} />
            <primitive
              object={loadModel(Coffee).scene}
              children-0-castShadow
              position={[0, -17, 0]}
              rotation={[0, (0.9 + scrollPosition / 200), 0]}
            />
          </Canvas>
      </div>

    </div>
  );
}

export default App;
