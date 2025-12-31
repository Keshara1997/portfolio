import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import * as THREE from "three";

import CanvasLoader from "../loader";

type BallProps = {
  imgUrl: string;
};

// Ball with animations
const Ball = ({ imgUrl }: BallProps) => {
  // use texture from drei
  const [decal] = useTexture([imgUrl]);
  const meshRef = useRef<THREE.Mesh>(null);

  // Smooth rotation animation
  useFrame((state) => {
    if (meshRef.current) {
      // Continuous rotation on Y axis
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      // Subtle rotation on X axis
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      // Pulsing scale effect
      const scale = 2.75 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
      meshRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      {/* Lights */}
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      {/* Mesh */}
      <mesh ref={meshRef} castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#0be6bb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        {/* Front side decal */}
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          map={decal}
        />
        {/* Back side decal */}
        <Decal
          position={[0, 0, -1]}
          rotation={[0, Math.PI, 6.25]}
          map={decal}
        />
        {/* Left side decal */}
        <Decal
          position={[-1, 0, 0]}
          rotation={[0, -Math.PI / 2, 6.25]}
          map={decal}
        />
        {/* Right side decal */}
        <Decal
          position={[1, 0, 0]}
          rotation={[0, Math.PI / 2, 6.25]}
          map={decal}
        />
      </mesh>
    </Float>
  );
};

type BallCanvasProps = {
  icon: string;
};

// Ball Canvas
const BallCanvas = ({ icon }: BallCanvasProps) => {
  return (
    <Canvas
      frameloop="always"
      gl={{ preserveDrawingBuffer: true, antialias: true }}
    >
      {/* Show canvas loader on fallback */}
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enableDamping={true}
          dampingFactor={0.05}
          autoRotate={false}
        />
        <Ball imgUrl={icon} />
      </Suspense>

      {/* Preload all */}
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
