import React from 'react';
import { useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

const LoadModel = ({ model, position, rotation, initialRotation, scale }) => {
  const loadedModel = useLoader(OBJLoader, model);

    return (
      <mesh scale={scale} rotation={rotation}>
        <primitive object={loadedModel} position={position} rotation={initialRotation}/>
      </mesh>
    )
  }

export default LoadModel;