import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const R = 1;

const IcosahedronWithSpikes: React.FC = () => {
  const meshRef = useRef<THREE.Group>(null);

  useEffect(() => {
    if (!meshRef.current) return;

    const group = meshRef.current;
    const radius = 1 * R;
    const detail = 3;
    const geometry = new THREE.IcosahedronGeometry(radius, detail);

    const wireframeMaterial = new THREE.LineBasicMaterial({
      color: 0xffffff,
      opacity: 0.3,
      transparent: true,
      side: THREE.DoubleSide,
    });
    const wireframe = new THREE.WireframeGeometry(geometry);
    const line = new THREE.LineSegments(wireframe, wireframeMaterial);
    group.add(line);

    const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const sphereGeometry = new THREE.SphereGeometry(0.015 * R, 16, 16);

    const positions = geometry.attributes.position;
    for (let i = 0; i < positions.count; i++) {
      const vertex = new THREE.Vector3();
      vertex.fromBufferAttribute(positions, i);

      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
      sphere.position.copy(vertex);
      group.add(sphere);
    }

    const spikeLength = 0.3 * R; // 圆锥体长度
    const spikeMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      opacity: 0.8,
      transparent: true,
      alphaTest: 0.05,
      side: THREE.DoubleSide,
    });

    for (let i = 0; i < positions.count; i++) {
      const vertex = new THREE.Vector3();
      vertex.fromBufferAttribute(positions, i);

      const direction = vertex.clone().normalize();
      const end = vertex.clone().add(direction.multiplyScalar(spikeLength));

      const coneGeometry = new THREE.ConeGeometry(0.006 * R, spikeLength, 8);
      const cone = new THREE.Mesh(coneGeometry, spikeMaterial);

      cone.position.copy(vertex);
      cone.lookAt(end);
      cone.rotateX(Math.PI / 2);
      cone.position.add(direction.multiplyScalar(spikeLength * 1.25));

      group.add(cone);
    }
  }, []);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y -= 0.005;
    }
  });

  return <group ref={meshRef} />;
};

const SceneOne: React.FC = () => {
  const camera = useRef<THREE.PerspectiveCamera>(null);

  useEffect(() => {
    if (camera.current) {
      camera.current.position.set(0, 0, 2.5); // 调整摄像机位置以适应画布大小
    }
  }, []);
  return (
    <div className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] 2xl:w-[500px] 2xl:h-[500px]">
      <Canvas className="" camera={{ position: [0, 0, 2.5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <IcosahedronWithSpikes />
      </Canvas>
    </div>
  );
};

export default SceneOne;
