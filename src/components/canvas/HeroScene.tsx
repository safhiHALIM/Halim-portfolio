"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial, Float, Torus } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function AnimatedSphere() {
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      sphereRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere args={[1, 100, 200]} scale={2.2} ref={sphereRef}>
        <MeshDistortMaterial
          color="#4f46e5" // Indigo-600
          attach="material"
          distort={0.5}
          speed={2}
          roughness={0.1}
          metalness={0.9}
          emissive="#1e1b4b" // Indigo-950
          emissiveIntensity={0.2}
        />
      </Sphere>
    </Float>
  );
}

function FloatingRings() {
  const ringRef1 = useRef<THREE.Mesh>(null);
  const ringRef2 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ringRef1.current) {
      ringRef1.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      ringRef1.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
    if (ringRef2.current) {
      ringRef2.current.rotation.x = state.clock.getElapsedTime() * -0.2;
      ringRef2.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <>
      <Float speed={1.5} rotationIntensity={1.5} floatIntensity={1.5}>
        <Torus args={[3.5, 0.02, 16, 100]} rotation={[1.5, 0, 0]} ref={ringRef1}>
          <meshStandardMaterial color="#60a5fa" emissive="#3b82f6" emissiveIntensity={0.5} transparent opacity={0.3} />
        </Torus>
      </Float>
      <Float speed={1.8} rotationIntensity={1.2} floatIntensity={1.2}>
        <Torus args={[4.2, 0.02, 16, 100]} rotation={[0, 1.5, 0]} ref={ringRef2}>
          <meshStandardMaterial color="#a78bfa" emissive="#8b5cf6" emissiveIntensity={0.5} transparent opacity={0.3} />
        </Torus>
      </Float>
    </>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10 w-full h-full">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 2]} intensity={1.5} color="#a78bfa" />
        <pointLight position={[-5, -5, -5]} intensity={1} color="#3b82f6" />
        
        <AnimatedSphere />
        <FloatingRings />
        
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
