import {
  OrbitControls,
  Preload,
  PresentationControls,
  Stage,
  useGLTF,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CanvasLoader from "./Loader";

function Model(props) {
  const { scene } = useGLTF("bmw.glb");

  return <primitive object={scene} {...props} />;
}

const Car3D = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 8]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <color attach="background" args={["#ffffff"]} />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls autoRotate enableZoom={false} />
        <PresentationControls speed={1.5} global polar={[-0.1, Math.PI / 4]}>
          <Stage environment={null}>
            <Model scale={0.01} />
            <Preload all />
          </Stage>
        </PresentationControls>
      </Suspense>
    </Canvas>
  );
};

export default Car3D;
