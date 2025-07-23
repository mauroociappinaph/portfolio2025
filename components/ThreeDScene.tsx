import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { createNoise3D } from 'simplex-noise';

interface ThreeDSceneProps {
  theme: 'light' | 'dark';
}

const ThreeDScene: React.FC<ThreeDSceneProps> = ({ theme }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const noise3D = createNoise3D(Math.random);

  useEffect(() => {
    if (!mountRef.current) return;

    const currentMount = mountRef.current;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    camera.position.z = 4;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0); // Transparent background

    currentMount.appendChild(renderer.domElement);

    // Theme colors
    const colors = {
        light: {
            avatar: 0x0EA5E9, // Sky 500
            particle: 0x6b7280, // Gray 500
        },
        dark: {
            avatar: 0x38BDF8, // Sky 400
            particle: 0x4b5563, // Gray 600
        }
    };

    // Morphing Avatar
    const geometry = new THREE.IcosahedronGeometry(1.2, 32);
    const material = new THREE.MeshStandardMaterial({ 
        color: colors[theme].avatar, 
        roughness: 0.3, 
        metalness: 0.2,
        wireframe: true,
    });
    const avatar = new THREE.Mesh(geometry, material);
    scene.add(avatar);
    
    const originalPositions = new Float32Array(geometry.attributes.position.array);
    const normals = new Float32Array(geometry.attributes.normal.array);

    // Particles
    const particleCount = 2000;
    const particlesGeometry = new THREE.BufferGeometry();
    const posArray = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 20;
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.008,
        color: colors[theme].particle,
        transparent: true,
        opacity: 0.6
    });
    const particleMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particleMesh);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1.5, 100);
    pointLight.position.set(2, 3, 4);
    scene.add(pointLight);

    // Mouse interaction
    const mouse = new THREE.Vector2();
    const handleMouseMove = (event: MouseEvent) => {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const clock = new THREE.Clock();
    const animate = () => {
        const elapsedTime = clock.getElapsedTime();
        particleMesh.rotation.y = elapsedTime * 0.01;

        const positions = geometry.attributes.position.array as Float32Array;
        for (let i = 0; i < positions.length; i += 3) {
            const x = originalPositions[i];
            const y = originalPositions[i + 1];
            const z = originalPositions[i + 2];
            const nx = normals[i];
            const ny = normals[i + 1];
            const nz = normals[i + 2];
            
            const noiseFactor = 0.2;
            const noise = noise3D(x * 0.4 + elapsedTime * 0.1, y * 0.4 + elapsedTime * 0.1, z * 0.4 + elapsedTime * 0.1);
            
            positions[i] = x + nx * noise * noiseFactor;
            positions[i + 1] = y + ny * noise * noiseFactor;
            positions[i + 2] = z + nz * noise * noiseFactor;
        }
        geometry.attributes.position.needsUpdate = true;
        geometry.computeVertexNormals();
        avatar.rotation.y += 0.002;
        avatar.rotation.x += 0.001;

        camera.position.x += (mouse.x * 0.5 - camera.position.x) * 0.02;
        camera.position.y += (mouse.y * 0.5 - camera.position.y) * 0.02;
        camera.lookAt(scene.position);

        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
        camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('mousemove', handleMouseMove);
        if(currentMount && renderer.domElement){
          currentMount.removeChild(renderer.domElement);
        }
        geometry.dispose();
        material.dispose();
        particlesGeometry.dispose();
        particlesMaterial.dispose();
    };
  }, [theme]);

  return <div ref={mountRef} className="w-full h-full" />;
};

export default ThreeDScene;