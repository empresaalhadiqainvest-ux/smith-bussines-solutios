import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Eye, RotateCw, Scan, Sparkles, Volume2, VolumeX, Maximize2 } from 'lucide-react';

interface Hero3DCanvasProps {
  onOpenFullscreenHologram?: () => void;
}

export const Hero3DCanvas: React.FC<Hero3DCanvasProps> = ({
  onOpenFullscreenHologram,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isRotating, setIsRotating] = useState(true);
  const [isScanning, setIsScanning] = useState(false);
  const [wireframeMode, setWireframeMode] = useState(false);

  const scanTriggerRef = useRef<(() => void) | null>(null);
  const toggleWireframeRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Fast WebGL capability check
    const isSoftwareGl = (() => {
      try {
        const gl = document.createElement('canvas').getContext('webgl2');
        if (!gl) return true;
        const ext = gl.getExtension('WEBGL_debug_renderer_info');
        const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
        const gpu = String(gl.getParameter(param));
        gl.getExtension('WEBGL_lose_context')?.loseContext();
        return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
      } catch {
        return false;
      }
    })();

    const width = container.clientWidth || 480;
    const height = container.clientHeight || 420;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 1.5, 9.5);

    // 2. High-performance lightweight renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isSoftwareGl,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 1.75));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    // 3. Holographic Shader Material
    const uniforms = {
      uTime: { value: 0 },
      uScanY: { value: 0 },
      uGlitch: { value: 0 },
      uWireframe: { value: 0 },
    };

    const holoMaterial = new THREE.ShaderMaterial({
      uniforms,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vWorldPosition;
        uniform float uTime;
        uniform float uGlitch;

        void main() {
          vNormal = normalize(normalMatrix * normal);
          vec3 pos = position;
          if (uGlitch > 0.05) {
            pos.x += sin(pos.y * 20.0 + uTime * 25.0) * 0.04 * uGlitch;
          }
          vec4 worldPos = modelMatrix * vec4(pos, 1.0);
          vWorldPosition = worldPos.xyz;
          gl_Position = projectionMatrix * viewMatrix * worldPos;
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        varying vec3 vWorldPosition;
        uniform float uTime;
        uniform float uScanY;
        uniform float uWireframe;

        void main() {
          vec3 viewDir = normalize(cameraPosition - vWorldPosition);
          float fresnel = pow(1.0 - abs(dot(viewDir, vNormal)), 2.0);
          float scanline = sin(vWorldPosition.y * 45.0 - uTime * 6.0) * 0.5 + 0.5;
          scanline = pow(scanline, 2.0);

          float laserDist = abs(vWorldPosition.y - uScanY);
          float laserBar = smoothstep(0.4, 0.0, laserDist) * 0.7;

          vec3 cyan = vec3(0.0, 0.94, 1.0);
          vec3 gold = vec3(0.96, 0.62, 0.04);
          vec3 color = mix(cyan, gold, step(0.65, sin(vWorldPosition.y * 12.0)));

          float alpha = fresnel * 0.85 + scanline * 0.25 + laserBar;
          if (uWireframe > 0.5) {
            alpha = max(fresnel * 0.95, scanline * 0.4);
          }
          gl_FragColor = vec4(color + vec3(laserBar * 0.6), alpha * 0.9);
        }
      `,
    });

    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
      blending: THREE.AdditiveBlending,
    });

    // 4. Procedural Cybernetic Avatar ("SOSTANA CORE AI")
    const avatarGroup = new THREE.Group();
    avatarGroup.position.set(0, -1.8, 0);
    scene.add(avatarGroup);

    const addPart = (geo: THREE.BufferGeometry, pos: [number, number, number], rot?: [number, number, number]) => {
      const part = new THREE.Group();
      part.add(new THREE.Mesh(geo, holoMaterial));
      part.add(new THREE.Mesh(geo, wireMat));
      part.position.set(...pos);
      if (rot) part.rotation.set(...rot);
      avatarGroup.add(part);
      return part;
    };

    // Head & Hair
    const headGeo = new THREE.SphereGeometry(0.35, 24, 18);
    headGeo.scale(1.0, 1.25, 1.05);
    addPart(headGeo, [0, 4.4, 0]);

    const hairGeo = new THREE.SphereGeometry(0.42, 24, 18, 0, Math.PI * 2, 0, Math.PI * 0.65);
    hairGeo.scale(1.05, 1.15, 1.1);
    addPart(hairGeo, [0, 4.45, -0.04]);

    // Neck
    const neckGeo = new THREE.CylinderGeometry(0.14, 0.17, 0.45, 16);
    addPart(neckGeo, [0, 3.95, 0]);

    // Torso & Chest
    const chestGeo = new THREE.CylinderGeometry(0.48, 0.36, 0.95, 20);
    chestGeo.scale(1.2, 1.0, 0.85);
    addPart(chestGeo, [0, 3.3, 0]);

    // Waist & Hips
    const waistGeo = new THREE.CylinderGeometry(0.35, 0.44, 0.75, 20);
    waistGeo.scale(1.1, 1.0, 0.85);
    addPart(waistGeo, [0, 2.5, 0]);

    const hipsGeo = new THREE.CylinderGeometry(0.44, 0.52, 0.7, 20);
    hipsGeo.scale(1.25, 1.0, 0.95);
    addPart(hipsGeo, [0, 1.85, 0]);

    // Legs
    const thighGeo = new THREE.CylinderGeometry(0.22, 0.16, 1.55, 18);
    addPart(thighGeo, [-0.32, 0.85, 0.05], [0.03, 0, -0.05]);
    addPart(thighGeo.clone(), [0.32, 0.85, 0.05], [0.03, 0, 0.05]);

    const calfGeo = new THREE.CylinderGeometry(0.16, 0.12, 1.5, 18);
    addPart(calfGeo, [-0.36, -0.65, 0.05], [-0.02, 0, 0.03]);
    addPart(calfGeo.clone(), [0.36, -0.65, 0.05], [-0.02, 0, -0.03]);

    const bootGeo = new THREE.BoxGeometry(0.28, 0.32, 0.65);
    addPart(bootGeo, [-0.35, -1.45, 0.15]);
    addPart(bootGeo.clone(), [0.35, -1.45, 0.15]);

    // Arms
    const armGeo = new THREE.CylinderGeometry(0.12, 0.09, 1.35, 16);
    addPart(armGeo, [-0.68, 2.9, 0], [0, 0, 0.12]);
    addPart(armGeo.clone(), [0.68, 2.9, 0], [0, 0, -0.12]);

    const forearmGeo = new THREE.CylinderGeometry(0.1, 0.08, 1.25, 16);
    addPart(forearmGeo, [-0.82, 1.7, 0.05], [0.1, 0, 0.06]);
    addPart(forearmGeo.clone(), [0.82, 1.7, 0.05], [0.1, 0, -0.06]);

    // 5. Concentric Rotating Base Projector Rings
    const baseGroup = new THREE.Group();
    baseGroup.position.set(0, -1.65, 0);
    scene.add(baseGroup);

    const ring1Geo = new THREE.RingGeometry(1.6, 1.68, 48);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ringMat1);
    ring1.rotation.x = -Math.PI / 2;
    baseGroup.add(ring1);

    const ring2Geo = new THREE.RingGeometry(2.1, 2.16, 48);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0xf59e0b,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ringMat2);
    ring2.rotation.x = -Math.PI / 2;
    baseGroup.add(ring2);

    // Orbiting Data Spheres / Nodes
    const nodeCount = 6;
    const nodesGroup = new THREE.Group();
    scene.add(nodesGroup);
    const nodeGeo = new THREE.SphereGeometry(0.08, 12, 12);
    const nodeMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      blending: THREE.AdditiveBlending,
    });
    for (let i = 0; i < nodeCount; i++) {
      const node = new THREE.Mesh(nodeGeo, nodeMat);
      nodesGroup.add(node);
    }

    // Floating Particles Matrix
    const particleCount = 180;
    const particlePos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      particlePos[i * 3] = (Math.random() - 0.5) * 4.5;
      particlePos[i * 3 + 1] = Math.random() * 5.5 - 1.5;
      particlePos[i * 3 + 2] = (Math.random() - 0.5) * 4.5;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x00f0ff,
      size: 0.08,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });
    const particlePoints = new THREE.Points(particleGeo, particleMat);
    scene.add(particlePoints);

    // 6. Interaction & Mouse Parallax
    let targetRotY = 0;
    let targetRotX = 0;
    let mouseX = 0;
    let mouseY = 0;

    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      const rect = container.getBoundingClientRect();
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      mouseX = ((clientX - rect.left) / rect.width - 0.5) * 2;
      mouseY = ((clientY - rect.top) / rect.height - 0.5) * 2;
      targetRotY = mouseX * 0.8;
      targetRotX = -mouseY * 0.35;
    };

    container.addEventListener('mousemove', onPointerMove, { passive: true });
    container.addEventListener('touchmove', onPointerMove, { passive: true });

    // Triggers
    scanTriggerRef.current = () => {
      setIsScanning(true);
      uniforms.uGlitch.value = 0.9;
      setTimeout(() => {
        uniforms.uGlitch.value = 0.0;
        setIsScanning(false);
      }, 700);
    };

    toggleWireframeRef.current = () => {
      setWireframeMode((prev) => {
        const next = !prev;
        uniforms.uWireframe.value = next ? 1.0 : 0.0;
        return next;
      });
    };

    // 7. Render Loop
    let animId: number;
    const clock = new THREE.Clock();
    let scanY = -1.5;
    let scanDir = 1;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      uniforms.uTime.value = elapsed;

      // Laser scan sweep
      scanY += scanDir * 0.045;
      if (scanY > 3.2) scanDir = -1;
      if (scanY < -1.8) scanDir = 1;
      uniforms.uScanY.value = scanY;

      // Continuous rotation
      if (isRotating) {
        avatarGroup.rotation.y += 0.008;
      }
      // Damped tilt towards pointer
      avatarGroup.rotation.y += (targetRotY - avatarGroup.rotation.y) * 0.05;
      avatarGroup.rotation.x += (targetRotX - avatarGroup.rotation.x) * 0.05;

      // Base rings rotation
      ring1.rotation.z = elapsed * 0.4;
      ring2.rotation.z = -elapsed * 0.25;

      // Orbiting nodes around avatar
      nodesGroup.children.forEach((child, idx) => {
        const angle = elapsed * 0.8 + (idx * Math.PI * 2) / nodeCount;
        const radius = 1.8 + Math.sin(elapsed + idx) * 0.3;
        const ny = Math.sin(elapsed * 1.5 + idx) * 1.2 + 0.8;
        child.position.set(Math.cos(angle) * radius, ny, Math.sin(angle) * radius);
      });

      // Subtle particle float
      const pAttr = particleGeo.attributes.position;
      for (let i = 0; i < particleCount; i++) {
        let py = pAttr.getY(i) + 0.01;
        if (py > 3.8) py = -1.6;
        pAttr.setY(i, py);
      }
      pAttr.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', onPointerMove);
      container.removeEventListener('touchmove', onPointerMove);
      cancelAnimationFrame(animId);

      renderer.dispose();
      headGeo.dispose();
      hairGeo.dispose();
      neckGeo.dispose();
      chestGeo.dispose();
      waistGeo.dispose();
      hipsGeo.dispose();
      thighGeo.dispose();
      calfGeo.dispose();
      bootGeo.dispose();
      armGeo.dispose();
      forearmGeo.dispose();
      ring1Geo.dispose();
      ring2Geo.dispose();
      nodeGeo.dispose();
      particleGeo.dispose();
      holoMaterial.dispose();
      wireMat.dispose();
      ringMat1.dispose();
      ringMat2.dispose();
      nodeMat.dispose();
      particleMat.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [isRotating]);

  return (
    <div className="relative w-full h-full flex flex-col justify-between">
      {/* 3D WebGL Canvas Viewport */}
      <div
        ref={containerRef}
        className="relative w-full h-[320px] sm:h-[380px] lg:h-[440px] cursor-grab active:cursor-grabbing overflow-hidden rounded-2xl"
        title="Arrastra para rotar e interactuar con el Avatar Holográfico 3D en tiempo real"
      />

      {/* Floating Interactive Controls Bar over 3D Card */}
      <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
        <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-black/60 border border-cyan-400/30 backdrop-blur-md text-[11px] font-mono text-cyan-300">
          <span className="w-2 h-2 rounded-full bg-cyan-400" />
          <span>SOSTANA CORE AI 3D</span>
        </div>

        <button
          type="button"
          onClick={onOpenFullscreenHologram}
          className="pointer-events-auto px-2.5 py-1 rounded-lg bg-black/60 hover:bg-cyan-950/80 border border-cyan-400/40 text-[11px] font-semibold text-cyan-300 hover:text-white flex items-center gap-1.5 backdrop-blur-md transition-all cursor-pointer shadow-lg"
          title="Abrir Holograma en Pantalla Completa 3D"
        >
          <Maximize2 className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Pantalla Completa</span>
        </button>
      </div>

      {/* Bottom Interactive HUD Dock over 3D Canvas */}
      <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-950/85 border border-cyan-400/30 backdrop-blur-xl flex flex-wrap items-center justify-between gap-2 z-10">
        <div>
          <p className="text-xs font-bold text-white flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Motor Holográfico en Tiempo Real</span>
          </p>
          <p className="text-[10px] text-slate-400 font-mono">
            60 FPS · Carga instantánea (&lt; 25ms)
          </p>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setIsRotating(!isRotating)}
            className={`p-1.5 rounded-lg border text-xs font-medium flex items-center gap-1 transition-colors cursor-pointer ${
              isRotating
                ? 'bg-cyan-500/20 border-cyan-400/40 text-cyan-300'
                : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
            }`}
            title="Pausar / Reanudar Rotación Continua"
          >
            <RotateCw className="w-3.5 h-3.5" />
            <span className="hidden md:inline">{isRotating ? 'Giro ON' : 'Giro OFF'}</span>
          </button>

          <button
            type="button"
            onClick={() => scanTriggerRef.current?.()}
            className="p-1.5 px-2.5 rounded-lg bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-400/40 text-slate-300 hover:text-cyan-300 text-xs font-semibold flex items-center gap-1 transition-all cursor-pointer"
            title="Escanear Malla Holográfica"
          >
            <Scan className="w-3.5 h-3.5 text-amber-400" />
            <span>Escanear</span>
          </button>
        </div>
      </div>
    </div>
  );
};
