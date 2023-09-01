import { Html, useProgress } from "@react-three/drei";
const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      {/* sets loading progression if 3d object isnt fully loaded so our website isnt crashing in the meantime */}
      <span className="canvas-loader"></span>
      <p
        style={{
          fontSize: 14,
          color: "#f1f1f1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default Loader;
