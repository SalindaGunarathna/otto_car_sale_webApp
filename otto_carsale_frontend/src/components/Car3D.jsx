import { Canvas } from "@react-three/fiber";
import {
  useGLTF,
  Stage,
  PresentationControls,
  OrbitControls,
} from "@react-three/drei";
import { Suspense } from "react";

function Model() {
  const { scene } = useGLTF("bmw.glb");

  return (
    <primitive
      object={scene}
      scale={0.01}
    />
  );
}

const Car3D = () => {
  return (
    <Canvas
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      shadows
      camera={{ fov: 45, position: [-4, 3, 6] }}
      style={{ position: "absolute" }}
    >
      <color args={["#f1f1f1"]} />
      <Suspense fallback={null}>
        <OrbitControls autoRotate enableZoom={false} />
        <PresentationControls
          speed={1.5}
          global
          polar={[-0.1, Math.PI / 4]}
        >
          <Stage environment={null}>
            <Model scale={0.01} />
          </Stage>
        </PresentationControls>
      </Suspense>
    </Canvas>
  );
};

export default Car3D;
