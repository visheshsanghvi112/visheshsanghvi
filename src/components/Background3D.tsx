
import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

interface Background3DProps {
  className?: string;
}

const Background3D: React.FC<Background3DProps> = ({ className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Scene setup
    const scene = new THREE.Scene();
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 30;
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);
    
    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 5000; // Increased particle count
    
    const positionArray = new Float32Array(particlesCount * 3);
    const colorsArray = new Float32Array(particlesCount * 3);
    const scaleArray = new Float32Array(particlesCount);
    
    // Custom particle distribution (more dense in the center)
    for (let i = 0; i < particlesCount; i++) {
      const i3 = i * 3;
      
      // Position with clustered distribution
      const radius = Math.random() * 50;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      positionArray[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positionArray[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positionArray[i3 + 2] = radius * Math.cos(phi);
      
      // Color - blueish hues
      colorsArray[i3] = 0.5 + Math.random() * 0.2; // R
      colorsArray[i3 + 1] = 0.7 + Math.random() * 0.3; // G
      colorsArray[i3 + 2] = 0.9 + Math.random() * 0.1; // B
      
      // Random scale for each particle
      scaleArray[i] = Math.random();
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positionArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorsArray, 3));
    particlesGeometry.setAttribute('scale', new THREE.BufferAttribute(scaleArray, 1));
    
    // Material with custom shader for better particles
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.15,
      sizeAttenuation: true,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });
    
    // Create multiple particle systems for depth effect
    const particles1 = new THREE.Points(particlesGeometry, particlesMaterial);
    const particles2 = new THREE.Points(particlesGeometry.clone(), particlesMaterial.clone());
    particles2.position.z = -20;
    
    scene.add(particles1, particles2);
    
    // Mouse movement for interactivity
    let mouseX = 0;
    let mouseY = 0;
    
    const onMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
      
      setMousePosition({ x: mouseX, y: mouseY });
    };
    
    window.addEventListener('mousemove', onMouseMove);
    
    // Animation
    let frame = 0;
    const animate = () => {
      frame += 0.005;
      requestAnimationFrame(animate);
      
      // Organic rotation
      particles1.rotation.x += 0.0003;
      particles1.rotation.y += 0.0005;
      particles2.rotation.x -= 0.0002;
      particles2.rotation.y -= 0.0003;
      
      // Follow mouse with subtle movement
      particles1.rotation.x += mouseY * 0.0005;
      particles1.rotation.y += mouseX * 0.0005;
      particles2.rotation.x += mouseY * 0.0003;
      particles2.rotation.y += mouseX * 0.0003;
      
      // Pulsing effect
      particles1.scale.set(
        1 + Math.sin(frame) * 0.03,
        1 + Math.sin(frame) * 0.03,
        1
      );
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      
      // Dispose resources
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, []);
  
  return <div ref={containerRef} className={className} />;
};

export default Background3D;
