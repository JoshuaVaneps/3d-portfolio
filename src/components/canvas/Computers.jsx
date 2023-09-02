import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./90s-pc/scene.gltf");

  // You can adjust the scale by modifying the x, y, and z values below
  // computer.scene.scale.set(0.005, 0.005, 0.005);
  return (
    <mesh>
      {/* have to add lights to the 3js */}
      {/* hemisphere provides a general ambient light */}
      {/* intensity is the brightness and ground color controls color coming from bottom black means none */}
      <hemisphereLight intensity={2.15} groundColor="black" />
      {/* point light gives a more localized light source, adding highlights and depth */}
      <pointLight intensity={1} />
      {/* spotlight offers directed lighting, similar to a flashlight */}
      <spotLight
        // position sets the 3D position of the light source in the scene
        position={[-20, 50, 10]}
        // angle controls how wide or narrow the spotlight's beam is.
        angle={0.12}
        // penumbra defines the softness of the spotlight's edge. 0 is hard edge 1 is soft edge
        penumbra={1}
        intensity={10}
        // Indicates that this spotlight will cast shadows in the scene.
        castShadow
        // Determines the resolution of the shadow. A higher value generally means sharper, better-defined shadows, but can also be more performance-intensive.
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.05 : 0.065}
        // correspond to the object's position on the horizontal axis (left-right), vertical axis (up-down), and depth axis (forward-backward), respectively.
        position={isMobile ? [0.6, -3, -2.2] : [0.5, -3.25, -1.5]}
        // represents the rotation of the object (your computer model) around its x, y, and z axes:
        rotation={[-0.0, -0.2, 0.0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    // `Canvas` is the main container from `@react-three/fiber` that sets up a three.js scene for you.
    <Canvas
      // frameloop is how often canva renders the object The value `"demand"` means the canvas will only re-render when it needs to this more efficient
      frameloop="demand"
      shadows
      // camera is the most important element decisdes how were looking at the model
      // fov stands for field of view
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* React's `Suspense` component lets your components “wait” for something before rendering */}
      {/* this allows us to wait for our object to render and show CanvasLoader while our model loads */}
      <Suspense fallback={<CanvasLoader />}>
        {/* this allow us to move the model around but the false zoom makes it so users cant zoom in */}
        <OrbitControls
          enableZoom={false}
          // These properties restrict the vertical orbiting of the camera.
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default ComputersCanvas;
