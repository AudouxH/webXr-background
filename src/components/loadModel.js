import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const LoadModel = (model) => {
  const loadedModel = useLoader(GLTFLoader, model);
  
    return (loadedModel);
  }

export default LoadModel;