import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = () => {
  const computer = useGLTF("./music-computer/scene.gltf");

  return (
    <mesh>
      {/* have to add lights to the 3js */}
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <primitive object={computer.scene} />
    </mesh>
  );
};

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      // camera is the most important element decisdes how were looking at the model
      // fov stands for field of view
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* allows us to have a loader while our model loads */}
      <Suspense fallback={<CanvasLoader />}>
        {/* this allow us to move the model around but the false zoom makes it so users cant zoom in */}
        <OrbitControls
          enableZoom={false}
          // these allow us to turn the item only in a specific access it limits it to rotation
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default ComputersCanvas;
