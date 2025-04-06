
import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import AnimatedSection from './AnimatedSection';
import { Button } from '@/components/ui/button';

interface Skill {
  name: string;
  level: number;
  group: string;
  color: string;
}

const skills: Skill[] = [
  // Frontend
  { name: "React", level: 90, group: "frontend", color: "#61dafb" },
  { name: "TypeScript", level: 85, group: "frontend", color: "#3178c6" },
  { name: "CSS/SCSS", level: 95, group: "frontend", color: "#264de4" },
  { name: "Next.js", level: 82, group: "frontend", color: "#000000" },
  
  // Backend
  { name: "Node.js", level: 80, group: "backend", color: "#339933" },
  { name: "Express", level: 75, group: "backend", color: "#000000" },
  { name: "Python", level: 70, group: "backend", color: "#3776ab" },
  { name: "Java", level: 65, group: "backend", color: "#007396" },
  
  // Databases
  { name: "MongoDB", level: 85, group: "database", color: "#47a248" },
  { name: "PostgreSQL", level: 75, group: "database", color: "#336791" },
  { name: "Firebase", level: 80, group: "database", color: "#ffca28" },
  
  // Tools
  { name: "Git", level: 90, group: "tools", color: "#f05032" },
  { name: "Docker", level: 75, group: "tools", color: "#2496ed" },
  { name: "AWS", level: 70, group: "tools", color: "#ff9900" },
];

const LiveSkillsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeGroup, setActiveGroup] = useState<string>('all');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!containerRef.current) return;

    let scene: THREE.Scene,
        camera: THREE.PerspectiveCamera,
        renderer: THREE.WebGLRenderer,
        controls: OrbitControls,
        skillMeshes: THREE.Mesh[] = [],
        raycaster: THREE.Raycaster,
        mouse: THREE.Vector2,
        hoveredMesh: THREE.Mesh | null = null;

    const init = async () => {
      // Scene setup
      scene = new THREE.Scene();
      scene.background = new THREE.Color(0x111827); // Dark background

      // Camera setup
      camera = new THREE.PerspectiveCamera(
        75,
        containerRef.current!.clientWidth / containerRef.current!.clientHeight,
        0.1,
        1000
      );
      camera.position.z = 30;

      // Renderer setup
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(containerRef.current!.clientWidth, containerRef.current!.clientHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      containerRef.current!.appendChild(renderer.domElement);

      // Controls
      controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.screenSpacePanning = false;
      controls.maxDistance = 50;
      controls.minDistance = 10;

      // Raycaster for interaction
      raycaster = new THREE.Raycaster();
      mouse = new THREE.Vector2();

      // Lights
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(1, 1, 1);
      scene.add(directionalLight);

      // Add skills spheres
      await createSkillNodes();
      
      // Event listeners
      window.addEventListener('resize', onWindowResize);
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('click', onMouseClick);

      setIsLoading(false);

      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate);

        // Update controls
        controls.update();

        // Animate skill nodes
        skillMeshes.forEach((mesh, index) => {
          // Gently float up and down
          const time = Date.now() * 0.001;
          const offset = index * 0.1;
          mesh.position.y += Math.sin(time + offset) * 0.003;
          
          // Slowly rotate
          mesh.rotation.x += 0.002;
          mesh.rotation.y += 0.003;

          // Scale up hovered mesh
          if (hoveredMesh === mesh) {
            mesh.scale.lerp(new THREE.Vector3(1.2, 1.2, 1.2), 0.1);
          } else {
            mesh.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
          }
        });

        // Render
        renderer.render(scene, camera);
      };

      animate();
    };

    const createSkillNodes = async () => {
      // Create nodes for each skill
      skillMeshes = [];
      
      // Calculate positions in a spiral
      skills.forEach((skill, index) => {
        // Filter out skills if a group is selected
        if (activeGroup !== 'all' && skill.group !== activeGroup) {
          return;
        }

        // Create a sphere for each skill
        const radius = (skill.level / 90) * 2; // Size based on skill level
        const geometry = new THREE.SphereGeometry(radius, 32, 32);
        
        // Create material with skill color
        const material = new THREE.MeshPhysicalMaterial({ 
          color: new THREE.Color(skill.color),
          metalness: 0.3,
          roughness: 0.2,
          clearcoat: 0.5,
          clearcoatRoughness: 0.1,
          reflectivity: 1,
          emissive: new THREE.Color(skill.color).multiplyScalar(0.2),
        });
        
        const mesh = new THREE.Mesh(geometry, material);
        
        // Position in a spiral
        const angle = index * 0.6;
        const radius = 15;
        mesh.position.set(
          Math.sin(angle) * radius, 
          (Math.random() - 0.5) * 10,
          Math.cos(angle) * radius
        );
        
        // Store skill data with the mesh
        mesh.userData = { skill };
        
        scene.add(mesh);
        skillMeshes.push(mesh);
        
        // Add a point light inside each sphere
        const light = new THREE.PointLight(new THREE.Color(skill.color), 1, 10);
        mesh.add(light);
      });
      
      // Add some particles for atmosphere
      const particlesGeometry = new THREE.BufferGeometry();
      const particlesCount = 1000;
      
      const posArray = new Float32Array(particlesCount * 3);
      
      for(let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 100;
      }
      
      particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
      
      const particlesMaterial = new THREE.PointsMaterial({
        size: 0.1,
        color: 0xffffff,
        transparent: true,
        opacity: 0.6,
      });
      
      const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
      scene.add(particlesMesh);
    };

    const onWindowResize = () => {
      if (!containerRef.current) return;
      
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };

    const onMouseMove = (event: MouseEvent) => {
      // Calculate mouse position
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      
      // Check for intersections
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(skillMeshes);
      
      if (intersects.length > 0) {
        // Show skill info on hover
        hoveredMesh = intersects[0].object as THREE.Mesh;
        document.body.style.cursor = 'pointer';
      } else {
        hoveredMesh = null;
        document.body.style.cursor = 'default';
      }
    };

    const onMouseClick = () => {
      if (hoveredMesh) {
        const skill = hoveredMesh.userData.skill;
        alert(`${skill.name}: ${skill.level}% proficiency`);
      }
    };

    init();

    return () => {
      // Clean up
      window.removeEventListener('resize', onWindowResize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('click', onMouseClick);
      
      if (containerRef.current && renderer) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose of all meshes and geometries
      skillMeshes.forEach(mesh => {
        mesh.geometry.dispose();
        (mesh.material as THREE.Material).dispose();
        scene.remove(mesh);
      });
    };
  }, [activeGroup]); // Re-create when activeGroup changes

  return (
    <AnimatedSection 
      id="interactive-skills" 
      className="section-container py-20 relative overflow-hidden"
      animation="fade"
    >
      <div className="max-w-3xl mx-auto mb-8 text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-primary/80 via-primary to-primary/60 bg-clip-text text-transparent">
            Interactive Skills Universe
          </span>
        </h2>
        <p className="text-foreground/70 text-lg mb-8">
          Explore my skills in this interactive 3D visualization. Click and drag to rotate, scroll to zoom.
        </p>
        
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          <Button 
            variant={activeGroup === 'all' ? "default" : "outline"} 
            onClick={() => setActiveGroup('all')}
          >
            All Skills
          </Button>
          <Button 
            variant={activeGroup === 'frontend' ? "default" : "outline"} 
            onClick={() => setActiveGroup('frontend')}
          >
            Frontend
          </Button>
          <Button 
            variant={activeGroup === 'backend' ? "default" : "outline"} 
            onClick={() => setActiveGroup('backend')}
          >
            Backend
          </Button>
          <Button 
            variant={activeGroup === 'database' ? "default" : "outline"} 
            onClick={() => setActiveGroup('database')}
          >
            Databases
          </Button>
          <Button 
            variant={activeGroup === 'tools' ? "default" : "outline"} 
            onClick={() => setActiveGroup('tools')}
          >
            Tools
          </Button>
        </div>
      </div>
      
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/80 z-20">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary"></div>
        </div>
      )}
      
      <div 
        ref={containerRef} 
        className="w-full h-[500px] rounded-xl overflow-hidden"
      ></div>
      
      <div className="text-center mt-6 text-muted-foreground text-sm">
        Hover over a sphere to highlight it, click to see details
      </div>
    </AnimatedSection>
  );
};

export default LiveSkillsSection;
