import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RotateCw, Scan, Sparkles, Maximize2, ZoomIn, ZoomOut } from 'lucide-react';

interface Hero3DCanvasProps {
  onOpenFullscreenHologram?: () => void;
}

export const Hero3DCanvas: React.FC<Hero3DCanvasProps> = ({
  onOpenFullscreenHologram,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isRotating, setIsRotating] = useState(true);
  const isRotatingRef = useRef(isRotating);
  isRotatingRef.current = isRotating;
  const [isScanning, setIsScanning] = useState(false);
  const [isZoomedIn, setIsZoomedIn] = useState(false);

  const scanTriggerRef = useRef<(() => void) | null>(null);
  const toggleZoomRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Fast WebGL check
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

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 1.2, 9.2);

    let targetCamY = 1.2;
    let targetCamZ = 9.2;

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

    // 3. Humanoid Holographic Shader Material
    const uniforms = {
      uTime: { value: 0 },
      uScanY: { value: 0 },
      uGlitch: { value: 0 },
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
            pos.x += sin(pos.y * 24.0 + uTime * 30.0) * 0.035 * uGlitch;
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

        void main() {
          vec3 viewDir = normalize(cameraPosition - vWorldPosition);
          float fresnel = pow(1.0 - abs(dot(viewDir, vNormal)), 2.2);

          // Horizontal holographic scanlines
          float scanline = sin(vWorldPosition.y * 50.0 - uTime * 5.0) * 0.5 + 0.5;
          scanline = pow(scanline, 2.0);

          // Laser scan beam
          float laserDist = abs(vWorldPosition.y - uScanY);
          float laserBar = smoothstep(0.35, 0.0, laserDist) * 0.8;

          // Anatomical circuit ribbons in gold and cyan contouring body curves
          float goldPattern = step(0.68, sin(vWorldPosition.y * 14.0 + vWorldPosition.x * 10.0));
          vec3 cyan = vec3(0.0, 0.94, 1.0);
          vec3 gold = vec3(0.96, 0.65, 0.12);
          vec3 baseColor = mix(cyan, gold, goldPattern * 0.85);

          // Luminous cybernetic skin glow
          float alpha = fresnel * 0.88 + scanline * 0.2 + laserBar;
          gl_FragColor = vec4(baseColor + vec3(laserBar * 0.7), alpha * 0.9);
        }
      `,
    });

    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.12,
      blending: THREE.AdditiveBlending,
    });

    // Glowing eyes material
    const eyeMat = new THREE.MeshBasicMaterial({
      color: 0x67e8f9,
      blending: THREE.AdditiveBlending,
    });

    // 4. Anatomically Detailed Humanoid Female Model ("SOSTANA CORE AI")
    const avatarGroup = new THREE.Group();
    avatarGroup.position.set(0, -1.8, 0);
    scene.add(avatarGroup);

    const addPart = (
      geo: THREE.BufferGeometry,
      pos: [number, number, number],
      rot?: [number, number, number],
      scale?: [number, number, number]
    ) => {
      const part = new THREE.Group();
      part.add(new THREE.Mesh(geo, holoMaterial));
      part.add(new THREE.Mesh(geo, wireMat));
      part.position.set(...pos);
      if (rot) part.rotation.set(...rot);
      if (scale) part.scale.set(...scale);
      avatarGroup.add(part);
      return part;
    };

    // A. HEAD & FACIAL FEATURES
    // Cranium
    const headGeo = new THREE.SphereGeometry(0.34, 32, 24);
    headGeo.scale(0.95, 1.15, 1.0);
    addPart(headGeo, [0, 4.35, 0]);

    // Feminine Jaw & Chin
    const jawGeo = new THREE.CylinderGeometry(0.24, 0.14, 0.35, 24);
    jawGeo.scale(1.0, 1.0, 0.9);
    addPart(jawGeo, [0, 4.05, 0.06], [0.15, 0, 0]);

    // Chin point
    const chinGeo = new THREE.SphereGeometry(0.09, 16, 16);
    addPart(chinGeo, [0, 3.88, 0.16]);

    // Delicate Nose Bridge & Tip
    const noseGeo = new THREE.ConeGeometry(0.045, 0.14, 8);
    addPart(noseGeo, [0, 4.22, 0.35], [0.4, 0, 0]);

    // Glowing Cyan Eyes
    const eyeGeo = new THREE.SphereGeometry(0.038, 12, 12);
    const leftEye = new THREE.Mesh(eyeGeo, eyeMat);
    leftEye.position.set(-0.11, 4.28, 0.31);
    const rightEye = new THREE.Mesh(eyeGeo, eyeMat);
    rightEye.position.set(0.11, 4.28, 0.31);
    avatarGroup.add(leftEye, rightEye);

    // B. SLEEK FEMININE BOB HAIRSTYLE (Matching reference image)
    // Top & Back volume
    const hairTopGeo = new THREE.SphereGeometry(0.42, 28, 20, 0, Math.PI * 2, 0, Math.PI * 0.65);
    hairTopGeo.scale(1.05, 1.15, 1.1);
    addPart(hairTopGeo, [0, 4.42, -0.04]);

    // Side bangs framing the face
    const bangGeo = new THREE.CylinderGeometry(0.08, 0.04, 0.65, 12);
    addPart(bangGeo, [-0.34, 4.15, 0.12], [0.1, 0, -0.15]);
    addPart(bangGeo.clone(), [0.34, 4.15, 0.12], [0.1, 0, 0.15]);

    // C. NECK & CLAVICLES
    const neckGeo = new THREE.CylinderGeometry(0.13, 0.16, 0.45, 20);
    addPart(neckGeo, [0, 3.75, 0.02]);

    // Collarbones (Clavicles)
    const clavicleGeo = new THREE.CylinderGeometry(0.03, 0.03, 0.85, 12);
    addPart(clavicleGeo, [0, 3.52, 0.12], [0, 0, Math.PI / 2]);

    // D. TORSO (Natural feminine curves & hourglass contour)
    // Upper Ribcage & Shoulders
    const ribcageGeo = new THREE.CylinderGeometry(0.44, 0.35, 0.75, 24);
    ribcageGeo.scale(1.15, 1.0, 0.85);
    const chestGroup = addPart(ribcageGeo, [0, 3.15, 0]);

    // Natural Bust Curvature (anatomically shaped)
    const breastGeo = new THREE.SphereGeometry(0.22, 24, 24);
    breastGeo.scale(1.0, 0.95, 1.15);
    addPart(breastGeo, [-0.18, 3.22, 0.28], [0.15, -0.1, 0]);
    addPart(breastGeo.clone(), [0.18, 3.22, 0.28], [0.15, 0.1, 0]);

    // Hourglass Waist (tapered)
    const waistGeo = new THREE.CylinderGeometry(0.29, 0.38, 0.65, 24);
    waistGeo.scale(1.05, 1.0, 0.85);
    addPart(waistGeo, [0, 2.5, 0]);

    // Navel Indentation
    const navelGeo = new THREE.SphereGeometry(0.025, 8, 8);
    addPart(navelGeo, [0, 2.45, 0.22]);

    // Feminine Hips & Pelvis
    const hipsGeo = new THREE.CylinderGeometry(0.38, 0.48, 0.65, 24);
    hipsGeo.scale(1.22, 1.0, 0.95);
    addPart(hipsGeo, [0, 1.9, 0]);

    // E. ARMS & DETAILED HANDS WITH 5 ARTICULATED FINGERS
    // Shoulder Deltoids
    const shoulderGeo = new THREE.SphereGeometry(0.16, 16, 16);
    addPart(shoulderGeo, [-0.62, 3.42, 0]);
    addPart(shoulderGeo.clone(), [0.62, 3.42, 0]);

    // Upper Arms (biceps/triceps)
    const upperArmGeo = new THREE.CylinderGeometry(0.11, 0.09, 1.15, 16);
    addPart(upperArmGeo, [-0.68, 2.85, 0], [0, 0, 0.12]);
    addPart(upperArmGeo.clone(), [0.68, 2.85, 0], [0, 0, -0.12]);

    // Elbows
    const elbowGeo = new THREE.SphereGeometry(0.09, 12, 12);
    addPart(elbowGeo, [-0.78, 2.25, 0.02]);
    addPart(elbowGeo.clone(), [0.78, 2.25, 0.02]);

    // Forearms
    const forearmGeo = new THREE.CylinderGeometry(0.09, 0.07, 1.1, 16);
    addPart(forearmGeo, [-0.85, 1.68, 0.06], [0.12, 0, 0.08]);
    addPart(forearmGeo.clone(), [0.85, 1.68, 0.06], [0.12, 0, -0.08]);

    // Palms
    const palmGeo = new THREE.BoxGeometry(0.09, 0.18, 0.05);
    addPart(palmGeo, [-0.94, 1.08, 0.14], [0.15, 0, 0.12]);
    addPart(palmGeo.clone(), [0.94, 1.08, 0.14], [0.15, 0, -0.12]);

    // 5 Articulated Fingers on each hand
    const createFingers = (side: 1 | -1) => {
      const fingerGeo = new THREE.CylinderGeometry(0.015, 0.012, 0.14, 8);
      const thumbGeo = new THREE.CylinderGeometry(0.018, 0.014, 0.11, 8);
      const handX = side * 0.94;
      const handY = 0.96;
      const handZ = 0.15;

      // Thumb
      addPart(thumbGeo, [handX + side * 0.05, handY + 0.06, handZ + 0.03], [0.2, side * 0.4, side * 0.5]);
      // Index
      addPart(fingerGeo, [handX + side * 0.03, handY - 0.02, handZ], [0.1, 0, side * 0.05]);
      // Middle
      addPart(fingerGeo.clone(), [handX + side * 0.01, handY - 0.035, handZ], [0.1, 0, 0]);
      // Ring
      addPart(fingerGeo.clone(), [handX - side * 0.015, handY - 0.025, handZ], [0.1, 0, -side * 0.05]);
      // Little
      addPart(fingerGeo.clone(), [handX - side * 0.035, handY - 0.01, handZ], [0.1, 0, -side * 0.1]);
    };
    createFingers(1);
    createFingers(-1);

    // F. LEGS & HIGH-TECH BOOTS
    // Feminine Thighs (with lateral contour)
    const thighGeo = new THREE.CylinderGeometry(0.22, 0.15, 1.45, 20);
    thighGeo.scale(1.05, 1.0, 0.95);
    addPart(thighGeo, [-0.3, 0.95, 0.05], [0.04, 0, -0.06]);
    addPart(thighGeo.clone(), [0.3, 0.95, 0.05], [0.04, 0, 0.06]);

    // Anatomical Knees (Patella)
    const patellaGeo = new THREE.SphereGeometry(0.12, 16, 16);
    patellaGeo.scale(1.0, 1.15, 0.9);
    addPart(patellaGeo, [-0.34, 0.15, 0.1]);
    addPart(patellaGeo.clone(), [0.34, 0.15, 0.1]);

    // Calves (Gastrocnemius curvature)
    const calfGeo = new THREE.CylinderGeometry(0.16, 0.1, 1.4, 20);
    calfGeo.scale(1.0, 1.0, 0.92);
    addPart(calfGeo, [-0.35, -0.62, 0.06], [-0.03, 0, 0.04]);
    addPart(calfGeo.clone(), [0.35, -0.62, 0.06], [-0.03, 0, -0.04]);

    // Ankles
    const ankleGeo = new THREE.SphereGeometry(0.1, 12, 12);
    addPart(ankleGeo, [-0.34, -1.35, 0.06]);
    addPart(ankleGeo.clone(), [0.34, -1.35, 0.06]);

    // Sleek High-Tech Aerodynamic Boots
    const bootGeo = new THREE.BoxGeometry(0.24, 0.32, 0.62);
    addPart(bootGeo, [-0.34, -1.52, 0.22], [-0.08, 0, 0]);
    addPart(bootGeo.clone(), [0.34, -1.52, 0.22], [-0.08, 0, 0]);

    // 5. Concentric Rotating Base Projector Rings
    const baseGroup = new THREE.Group();
    baseGroup.position.set(0, -1.72, 0);
    scene.add(baseGroup);

    const ring1Geo = new THREE.RingGeometry(1.6, 1.68, 48);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.75,
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
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ringMat2);
    ring2.rotation.x = -Math.PI / 2;
    baseGroup.add(ring2);

    // Orbiting Data Nodes
    const nodeCount = 6;
    const nodesGroup = new THREE.Group();
    scene.add(nodesGroup);
    const nodeGeo = new THREE.SphereGeometry(0.07, 12, 12);
    const nodeMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      blending: THREE.AdditiveBlending,
    });
    for (let i = 0; i < nodeCount; i++) {
      const node = new THREE.Mesh(nodeGeo, nodeMat);
      nodesGroup.add(node);
    }

    // Floating Particles Matrix
    const particleCount = 160;
    const particlePos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      particlePos[i * 3] = (Math.random() - 0.5) * 4.2;
      particlePos[i * 3 + 1] = Math.random() * 5.5 - 1.5;
      particlePos[i * 3 + 2] = (Math.random() - 0.5) * 4.2;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x00f0ff,
      size: 0.075,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });
    const particlePoints = new THREE.Points(particleGeo, particleMat);
    scene.add(particlePoints);

    // 6. Interaction & Parallax
    let targetRotY = 0;
    let targetRotX = 0;

    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      const rect = container.getBoundingClientRect();
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      const mouseX = ((clientX - rect.left) / rect.width - 0.5) * 2;
      const mouseY = ((clientY - rect.top) / rect.height - 0.5) * 2;
      targetRotY = mouseX * 0.75;
      targetRotX = -mouseY * 0.3;
    };

    container.addEventListener('mousemove', onPointerMove, { passive: true });
    container.addEventListener('touchmove', onPointerMove, { passive: true });

    scanTriggerRef.current = () => {
      setIsScanning(true);
      uniforms.uGlitch.value = 1.0;
      setTimeout(() => {
        uniforms.uGlitch.value = 0.0;
        setIsScanning(false);
      }, 650);
    };

    toggleZoomRef.current = () => {
      setIsZoomedIn((prev) => {
        const next = !prev;
        if (next) {
          targetCamZ = 6.2;
          targetCamY = 2.4;
        } else {
          targetCamZ = 9.2;
          targetCamY = 1.2;
        }
        return next;
      });
    };

    // 7. Render Loop with Organic Humanoid Kinematics
    let animId: number;
    const clock = new THREE.Clock();
    let scanY = -1.6;
    let scanDir = 1;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      uniforms.uTime.value = elapsed;

      // Camera smooth zoom transition
      camera.position.z += (targetCamZ - camera.position.z) * 0.06;
      camera.position.y += (targetCamY - camera.position.y) * 0.06;

      // Laser scan sweep
      scanY += scanDir * 0.04;
      if (scanY > 3.4) scanDir = -1;
      if (scanY < -1.8) scanDir = 1;
      uniforms.uScanY.value = scanY;

      // Continuous humanoid rotation + damped tilt towards cursor
      if (isRotatingRef.current) {
        avatarGroup.rotation.y += 0.007;
      }
      avatarGroup.rotation.y += (targetRotY - avatarGroup.rotation.y) * 0.05;
      avatarGroup.rotation.x += (targetRotX - avatarGroup.rotation.x) * 0.05;

      // Organic respiratory expansion (breathing cycle)
      const breath = Math.sin(elapsed * 2.2);
      chestGroup.scale.set(1.0 + breath * 0.018, 1.0 + breath * 0.012, 1.0 + breath * 0.024);

      // Base rings rotation
      ring1.rotation.z = elapsed * 0.35;
      ring2.rotation.z = -elapsed * 0.22;

      // Orbiting nodes around avatar
      nodesGroup.children.forEach((child, idx) => {
        const angle = elapsed * 0.75 + (idx * Math.PI * 2) / nodeCount;
        const radius = 1.8 + Math.sin(elapsed + idx) * 0.25;
        const ny = Math.sin(elapsed * 1.4 + idx) * 1.1 + 0.8;
        child.position.set(Math.cos(angle) * radius, ny, Math.sin(angle) * radius);
      });

      // Subtle particle float
      const pAttr = particleGeo.attributes.position;
      for (let i = 0; i < particleCount; i++) {
        let py = pAttr.getY(i) + 0.009;
        if (py > 3.8) py = -1.6;
        pAttr.setY(i, py);
      }
      pAttr.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

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
      jawGeo.dispose();
      chinGeo.dispose();
      noseGeo.dispose();
      eyeGeo.dispose();
      hairTopGeo.dispose();
      bangGeo.dispose();
      neckGeo.dispose();
      clavicleGeo.dispose();
      ribcageGeo.dispose();
      breastGeo.dispose();
      waistGeo.dispose();
      navelGeo.dispose();
      hipsGeo.dispose();
      shoulderGeo.dispose();
      upperArmGeo.dispose();
      elbowGeo.dispose();
      forearmGeo.dispose();
      palmGeo.dispose();
      thighGeo.dispose();
      patellaGeo.dispose();
      calfGeo.dispose();
      ankleGeo.dispose();
      bootGeo.dispose();
      ring1Geo.dispose();
      ring2Geo.dispose();
      nodeGeo.dispose();
      particleGeo.dispose();
      holoMaterial.dispose();
      wireMat.dispose();
      eyeMat.dispose();
      ringMat1.dispose();
      ringMat2.dispose();
      nodeMat.dispose();
      particleMat.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-full flex flex-col justify-between">
      {/* 3D WebGL Canvas Viewport */}
      <div
        ref={containerRef}
        className="relative w-full h-[320px] sm:h-[380px] lg:h-[440px] cursor-grab active:cursor-grabbing overflow-hidden rounded-2xl"
        title="Arrastra para rotar e interactuar con el Avatar Humanoide 3D en tiempo real"
      />

      {/* Floating Interactive Controls Bar over 3D Card */}
      <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
        <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-black/60 border border-cyan-400/30 backdrop-blur-md text-[11px] font-mono text-cyan-300">
          <span className="w-2 h-2 rounded-full bg-cyan-400" />
          <span>SOSTANA CORE AI · ANATOMÍA 3D</span>
        </div>

        <div className="flex items-center gap-1.5 pointer-events-auto">
          <button
            type="button"
            onClick={() => toggleZoomRef.current?.()}
            className="px-2 py-1 rounded-lg bg-black/60 hover:bg-cyan-950/80 border border-cyan-400/40 text-[11px] font-semibold text-cyan-300 hover:text-white flex items-center gap-1 backdrop-blur-md transition-all cursor-pointer shadow-lg"
            title="Alternar Zoom Detallado sobre Modelo"
          >
            {isZoomedIn ? <ZoomOut className="w-3.5 h-3.5" /> : <ZoomIn className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">{isZoomedIn ? 'Zoom -' : 'Zoom +'}</span>
          </button>

          <button
            type="button"
            onClick={onOpenFullscreenHologram}
            className="px-2.5 py-1 rounded-lg bg-black/60 hover:bg-cyan-950/80 border border-cyan-400/40 text-[11px] font-semibold text-cyan-300 hover:text-white flex items-center gap-1.5 backdrop-blur-md transition-all cursor-pointer shadow-lg"
            title="Abrir Holograma en Pantalla Completa 3D"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Pantalla Completa</span>
          </button>
        </div>
      </div>

      {/* Bottom Interactive HUD Dock over 3D Canvas */}
      <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-950/85 border border-cyan-400/30 backdrop-blur-xl flex flex-wrap items-center justify-between gap-2 z-10">
        <div>
          <p className="text-xs font-bold text-white flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Malla Humanoide Articulada</span>
          </p>
          <p className="text-[10px] text-slate-400 font-mono">
            Proporciones anatómicas · Respiración cinemática 60 FPS
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
            className={`p-1.5 px-2.5 rounded-lg border text-xs font-semibold flex items-center gap-1 transition-all cursor-pointer ${
              isScanning
                ? 'bg-cyan-400 text-slate-950 border-cyan-300 shadow-md font-bold'
                : 'bg-white/5 hover:bg-cyan-500/20 border-white/10 hover:border-cyan-400/40 text-slate-300 hover:text-cyan-300'
            }`}
            title="Escanear Malla Holográfica"
          >
            <Scan className={`w-3.5 h-3.5 ${isScanning ? 'text-slate-950 animate-spin' : 'text-amber-400'}`} />
            <span>{isScanning ? 'Escaneando...' : 'Escanear'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
