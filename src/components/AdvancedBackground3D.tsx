import React, { useRef, useEffect, useMemo } from 'react';
import * as THREE from 'three';

interface AdvancedBackground3DProps {
  className?: string;
}

const AdvancedBackground3D: React.FC<AdvancedBackground3DProps> = ({ className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const frameRef = useRef<number>();
  
  const neuralNetwork = useMemo(() => {
    const nodes: THREE.Vector3[] = [];
    const connections: [number, number][] = [];
    
    // Create neural network nodes
    for (let i = 0; i < 50; i++) {
      nodes.push(new THREE.Vector3(
        (Math.random() - 0.5) * 120,
        (Math.random() - 0.5) * 80,
        (Math.random() - 0.5) * 60
      ));
    }
    
    // Create connections between nearby nodes
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (nodes[i].distanceTo(nodes[j]) < 25) {
          connections.push([i, j]);
        }
      }
    }
    
    return { nodes, connections };
  }, []);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 50;
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current = renderer;
    containerRef.current.appendChild(renderer.domElement);
    
    // Neural network visualization
    const nodeGeometry = new THREE.SphereGeometry(0.3, 8, 8);
    const nodeMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.8
    });
    
    const nodes = neuralNetwork.nodes.map(position => {
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
      node.position.copy(position);
      scene.add(node);
      return node;
    });
    
    // Neural connections
    const connectionMaterial = new THREE.LineBasicMaterial({ 
      color: 0x6366f1,
      transparent: true,
      opacity: 0.3
    });
    
    const connections = neuralNetwork.connections.map(([i, j]) => {
      const geometry = new THREE.BufferGeometry().setFromPoints([
        neuralNetwork.nodes[i],
        neuralNetwork.nodes[j]
      ]);
      const line = new THREE.Line(geometry, connectionMaterial);
      scene.add(line);
      return line;
    });
    
    // Floating particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1000;
    const positionArray = new Float32Array(particlesCount * 3);
    const colorsArray = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount * 3; i++) {
      positionArray[i] = (Math.random() - 0.5) * 200;
      colorsArray[i] = Math.random() * 0.5 + 0.5;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positionArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorsArray, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 1.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });
    
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);
    
    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    
    const onMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    
    window.addEventListener('mousemove', onMouseMove);
    
    // Animation loop
    let time = 0;
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      time += 0.01;
      
      // Animate neural nodes
      nodes.forEach((node, i) => {
        node.position.x += Math.sin(time + i * 0.1) * 0.02;
        node.position.y += Math.cos(time + i * 0.15) * 0.02;
        
        // Pulsing effect
        const scale = 1 + Math.sin(time * 2 + i) * 0.2;
        node.scale.setScalar(scale);
      });
      
      // Animate particles
      particles.rotation.x += 0.0002;
      particles.rotation.y += 0.0003;
      
      // Mouse interaction
      particles.rotation.x += mouseY * 0.0002;
      particles.rotation.y += mouseX * 0.0003;
      
      // Update neural connections opacity based on distance
      connections.forEach((line, i) => {
        const [nodeA, nodeB] = neuralNetwork.connections[i];
        const distance = nodes[nodeA].position.distanceTo(nodes[nodeB].position);
        const opacity = Math.max(0, 0.5 - distance / 50);
        (line.material as THREE.LineBasicMaterial).opacity = opacity;
      });
      
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
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      
      // Dispose of Three.js objects
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          if (Array.isArray(object.material)) {
            object.material.forEach(material => material.dispose());
          } else {
            object.material.dispose();
          }
        }
      });
      renderer.dispose();
    };
  }, [neuralNetwork]);
  
  return <div ref={containerRef} className={className} />;
};

export default AdvancedBackground3D;