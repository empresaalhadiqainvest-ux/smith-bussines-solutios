import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import {
  Activity,
  Camera,
  ChevronDown,
  ChevronUp,
  Maximize2,
  Minimize2,
  RotateCcw,
  Scan,
} from 'lucide-react';

interface ThreeBackgroundProps {
  interactiveMode?: boolean;
  onToggleInteractive?: () => void;
  explorationMode?: boolean;
  onToggleExploration?: () => void;
}

export const ThreeBackground: React.FC<ThreeBackgroundProps> = ({
  interactiveMode: externalInteractiveMode,
  onToggleInteractive,
  explorationMode,
  onToggleExploration,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isInteractive, setIsInteractive] = useState(externalInteractiveMode || false);
  const [isDockCollapsed, setIsDockCollapsed] = useState(false);
  const [activeTelemetryMode, setActiveTelemetryMode] = useState<
    'strategy' | 'finance' | 'neural'
  >('strategy');
  const [activePreset, setActivePreset] = useState<'default' | 'close' | 'hud'>(
    explorationMode ? 'close' : 'default'
  );

  const isInteractiveRef = useRef(isInteractive);
  isInteractiveRef.current = isInteractive;

  const explorationModeRef = useRef(explorationMode);
  explorationModeRef.current = explorationMode;

  useEffect(() => {
    if (externalInteractiveMode !== undefined) {
      setIsInteractive(externalInteractiveMode);
    }
  }, [externalInteractiveMode]);

  // Sync camera preset when explorationMode toggles
  useEffect(() => {
    if (explorationMode !== undefined) {
      if (explorationMode) {
        setPresetRef.current?.('close');
      } else {
        setPresetRef.current?.('default');
      }
    }
  }, [explorationMode]);

  // Trigger scan pulse ref
  const scanTriggerRef = useRef<(() => void) | null>(null);
  const resetCameraRef = useRef<(() => void) | null>(null);
  const setPresetRef = useRef<((preset: 'default' | 'close' | 'hud') => void) | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Detect software WebGL
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

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x020611, 0.0035);

    const camera = new THREE.PerspectiveCamera(
      42,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    // Position camera looking down towards the boardroom desk and holographic avatar
    camera.position.set(0, 14, 48);

    // 2. WebGL Renderer
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: !isSoftwareGl,
        powerPreference: 'high-performance',
      });
    } catch (e) {
      console.warn('WebGL initialization failed, falling back to ambient CSS background:', e);
      return;
    }
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    mount.appendChild(renderer.domElement);

    // =========================================================================
    // 3. PROCEDURAL TEXTURE GENERATORS (Zero external 404 files)
    // =========================================================================

    // A. Futuristic Night Skyline Backdrop (Boardroom Window View)
    const createSkylineTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 2048;
      canvas.height = 1024;
      const ctx = canvas.getContext('2d')!;

      // Deep midnight gradient with cyber violet/cyan haze
      const bgGrad = ctx.createLinearGradient(0, 0, 0, 1024);
      bgGrad.addColorStop(0, '#02050f');
      bgGrad.addColorStop(0.5, '#050c1e');
      bgGrad.addColorStop(0.85, '#081730');
      bgGrad.addColorStop(1, '#0c2242');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, 2048, 1024);

      // Distant stars / beacons
      for (let i = 0; i < 350; i++) {
        ctx.fillStyle = Math.random() > 0.4 ? '#38bdf8' : '#fef08a';
        ctx.globalAlpha = 0.2 + Math.random() * 0.7;
        ctx.fillRect(Math.random() * 2048, Math.random() * 550, 1.5, 1.5);
      }

      // Layer 1: Distant Skyscrapers Silhouettes
      ctx.globalAlpha = 0.45;
      for (let x = 0; x < 2048; x += 32) {
        const w = 24 + Math.random() * 38;
        const h = 260 + Math.random() * 380;
        ctx.fillStyle = '#0a162b';
        ctx.fillRect(x, 1024 - h, w, h);

        // Lit windows
        ctx.fillStyle = Math.random() > 0.6 ? '#00f0ff' : '#f59e0b';
        for (let wy = 1024 - h + 20; wy < 980; wy += 14) {
          if (Math.random() > 0.45) {
            ctx.globalAlpha = 0.15 + Math.random() * 0.35;
            ctx.fillRect(x + 4, wy, w - 8, 3);
          }
        }
      }

      // Layer 2: Mid-ground Megastructures with Neon Accents
      ctx.globalAlpha = 0.85;
      for (let x = 20; x < 2048; x += 75) {
        const w = 45 + Math.random() * 55;
        const h = 340 + Math.random() * 440;
        ctx.fillStyle = '#070f1e';
        ctx.fillRect(x, 1024 - h, w, h);

        // Antenna with flashing beacon
        ctx.fillStyle = '#00f0ff';
        ctx.fillRect(x + w / 2 - 1, 1024 - h - 35, 2, 35);
        ctx.beginPath();
        ctx.arc(x + w / 2, 1024 - h - 35, 3.5, 0, Math.PI * 2);
        ctx.fill();

        // Neon vertical edge lines
        ctx.fillStyle = x % 150 === 0 ? '#10b981' : '#00f0ff';
        ctx.globalAlpha = 0.6;
        ctx.fillRect(x + 2, 1024 - h, 2, h);

        // Dense office window grid
        for (let wy = 1024 - h + 30; wy < 990; wy += 16) {
          for (let wx = x + 8; wx < x + w - 8; wx += 10) {
            if (Math.random() > 0.5) {
              ctx.fillStyle = Math.random() > 0.3 ? '#38bdf8' : '#fef08a';
              ctx.globalAlpha = 0.25 + Math.random() * 0.45;
              ctx.fillRect(wx, wy, 5, 6);
            }
          }
        }
      }

      // Horizontal sky bridge connecting towers
      ctx.fillStyle = '#0e1d35';
      ctx.globalAlpha = 0.7;
      ctx.fillRect(400, 520, 550, 22);
      ctx.fillRect(1350, 480, 480, 18);
      ctx.fillStyle = '#00f0ff';
      ctx.globalAlpha = 0.5;
      ctx.fillRect(400, 528, 550, 3);

      const tex = new THREE.CanvasTexture(canvas);
      tex.colorSpace = THREE.SRGBColorSpace;
      return tex;
    };

    // B. Holographic Pedestal / Circular Projector Texture
    const createPedestalDiscTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 1024;
      canvas.height = 1024;
      const ctx = canvas.getContext('2d')!;
      ctx.clearRect(0, 0, 1024, 1024);

      const cx = 512;
      const cy = 512;

      // Outer glowing ring
      ctx.strokeStyle = '#00f0ff';
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.arc(cx, cy, 470, 0, Math.PI * 2);
      ctx.stroke();

      // Dashed coordinate rings
      ctx.strokeStyle = '#10b981';
      ctx.lineWidth = 3;
      ctx.setLineDash([12, 18]);
      ctx.beginPath();
      ctx.arc(cx, cy, 430, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 2;
      ctx.setLineDash([4, 10]);
      ctx.beginPath();
      ctx.arc(cx, cy, 380, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);

      // 360 degree ticks
      for (let angle = 0; angle < 360; angle += 10) {
        const rad = (angle * Math.PI) / 180;
        const r1 = angle % 30 === 0 ? 330 : 345;
        const r2 = 360;
        ctx.strokeStyle = angle % 30 === 0 ? '#00f0ff' : 'rgba(56, 189, 248, 0.4)';
        ctx.lineWidth = angle % 30 === 0 ? 3 : 1.5;
        ctx.beginPath();
        ctx.moveTo(cx + Math.cos(rad) * r1, cy + Math.sin(rad) * r1);
        ctx.lineTo(cx + Math.cos(rad) * r2, cy + Math.sin(rad) * r2);
        ctx.stroke();
      }

      // Tech Glyphs and Al-Hadiqa Monogram
      ctx.fillStyle = '#00f0ff';
      ctx.font = 'bold 20px monospace';
      ctx.textAlign = 'center';
      ctx.fillText('SMITH BUSINESS SOLUTIONS · SOSTANA CORE AI', cx, cy - 250);
      ctx.fillText('AL HADIQA INVEST · TELEMETRY ACTIVE', cx, cy + 270);

      // Central "S" Hexagonal Crest
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 4;
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const rad = (i * 60 * Math.PI) / 180;
        const x = cx + Math.cos(rad) * 120;
        const y = cy + Math.sin(rad) * 120;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.stroke();

      ctx.fillStyle = '#00f0ff';
      ctx.font = 'bold 88px sans-serif';
      ctx.textBaseline = 'middle';
      ctx.fillText('S', cx, cy);

      const tex = new THREE.CanvasTexture(canvas);
      tex.colorSpace = THREE.SRGBColorSpace;
      return tex;
    };

    // C. Floating Holographic HUD Panels (World Map, Candlesticks, Neural Core)
    const createHudTexture = (
      type: 'world' | 'stocks' | 'kpis' | 'neural'
    ) => {
      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 340;
      const ctx = canvas.getContext('2d')!;

      // Semi-transparent dark cyan panel
      ctx.fillStyle = 'rgba(4, 16, 32, 0.72)';
      ctx.fillRect(0, 0, 512, 340);

      // Glass border with corner brackets
      ctx.strokeStyle = '#00f0ff';
      ctx.lineWidth = 2;
      ctx.strokeRect(6, 6, 500, 328);

      // Corner accent brackets
      ctx.lineWidth = 4;
      ctx.strokeStyle = '#f59e0b';
      // TL
      ctx.beginPath();
      ctx.moveTo(6, 30);
      ctx.lineTo(6, 6);
      ctx.lineTo(30, 6);
      ctx.stroke();
      // TR
      ctx.beginPath();
      ctx.moveTo(482, 6);
      ctx.lineTo(506, 6);
      ctx.lineTo(506, 30);
      ctx.stroke();
      // BR
      ctx.beginPath();
      ctx.moveTo(506, 310);
      ctx.lineTo(506, 334);
      ctx.lineTo(482, 334);
      ctx.stroke();
      // BL
      ctx.beginPath();
      ctx.moveTo(30, 334);
      ctx.lineTo(6, 334);
      ctx.lineTo(6, 310);
      ctx.stroke();

      if (type === 'world') {
        // Top Header
        ctx.fillStyle = '#38bdf8';
        ctx.font = 'bold 14px monospace';
        ctx.fillText('GLOBAL MARKET TELEMETRY · 24H', 20, 32);

        // Simple world map outlines
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.4)';
        ctx.lineWidth = 1.5;
        // Continents schematic
        ctx.strokeRect(60, 80, 100, 70); // NA
        ctx.strokeRect(100, 170, 70, 90); // SA
        ctx.strokeRect(210, 80, 90, 80); // EU
        ctx.strokeRect(210, 170, 80, 100); // AF
        ctx.strokeRect(320, 80, 130, 110); // AS

        // Glowing Hub Nodes
        const hubs = [
          [110, 110], // NYC
          [240, 100], // London
          [280, 180], // Dubai
          [400, 120], // Tokyo
          [140, 220], // LatAm
        ];
        hubs.forEach(([x, y]) => {
          ctx.fillStyle = '#f59e0b';
          ctx.beginPath();
          ctx.arc(x, y, 4, 0, Math.PI * 2);
          ctx.fill();
          // Radar ring
          ctx.strokeStyle = '#00f0ff';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(x, y, 10, 0, Math.PI * 2);
          ctx.stroke();
        });

        // Bottom stats
        ctx.fillStyle = '#10b981';
        ctx.font = '12px monospace';
        ctx.fillText('SLA: 99.98% | LATENCY: 14ms | ACTIVE NODES: 84', 20, 310);
      } else if (type === 'stocks') {
        // Stock / Financial Candlestick Area Chart
        ctx.fillStyle = '#f59e0b';
        ctx.font = 'bold 14px monospace';
        ctx.fillText('PORTFOLIO ALPHA & VOLATILITY (DCF)', 20, 32);

        // Grid lines
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
        ctx.lineWidth = 1;
        for (let y = 60; y <= 260; y += 40) {
          ctx.beginPath();
          ctx.moveTo(30, y);
          ctx.lineTo(480, y);
          ctx.stroke();
        }

        // Draw dynamic upward trend chart curve
        ctx.beginPath();
        const points = [
          [40, 240],
          [90, 220],
          [140, 230],
          [190, 170],
          [240, 180],
          [290, 130],
          [340, 140],
          [390, 95],
          [440, 105],
          [475, 75],
        ];
        ctx.moveTo(points[0][0], points[0][1]);
        for (let i = 1; i < points.length; i++) {
          ctx.lineTo(points[i][0], points[i][1]);
        }
        ctx.strokeStyle = '#00f0ff';
        ctx.lineWidth = 3;
        ctx.stroke();

        // Fill area gradient
        const areaGrad = ctx.createLinearGradient(0, 70, 0, 260);
        areaGrad.addColorStop(0, 'rgba(0, 240, 255, 0.35)');
        areaGrad.addColorStop(1, 'rgba(0, 240, 255, 0.0)');
        ctx.lineTo(475, 260);
        ctx.lineTo(40, 260);
        ctx.closePath();
        ctx.fillStyle = areaGrad;
        ctx.fill();

        ctx.fillStyle = '#10b981';
        ctx.font = 'bold 16px monospace';
        ctx.fillText('+420 bps ROI | SHARPE RATIO: 2.84', 20, 305);
      } else if (type === 'kpis') {
        // Circular KPI gauges & Bar Metrics
        ctx.fillStyle = '#10b981';
        ctx.font = 'bold 14px monospace';
        ctx.fillText('EXECUTIVE PERFORMANCE METRICS', 20, 32);

        // Circular Gauge 1
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.lineWidth = 8;
        ctx.beginPath();
        ctx.arc(120, 130, 45, 0, Math.PI * 2);
        ctx.stroke();

        ctx.strokeStyle = '#00f0ff';
        ctx.beginPath();
        ctx.arc(120, 130, 45, -Math.PI / 2, Math.PI * 0.9);
        ctx.stroke();
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 18px monospace';
        ctx.textAlign = 'center';
        ctx.fillText('94%', 120, 136);

        // Circular Gauge 2
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.lineWidth = 8;
        ctx.beginPath();
        ctx.arc(260, 130, 45, 0, Math.PI * 2);
        ctx.stroke();

        ctx.strokeStyle = '#f59e0b';
        ctx.beginPath();
        ctx.arc(260, 130, 45, -Math.PI / 2, Math.PI * 0.65);
        ctx.stroke();
        ctx.fillText('82%', 260, 136);

        // Metric Bars
        ctx.textAlign = 'left';
        ctx.fillStyle = '#94a3b8';
        ctx.font = '11px monospace';
        ctx.fillText('RPA PIPELINES EFFICIENCY', 40, 220);
        ctx.fillStyle = '#00f0ff';
        ctx.fillRect(40, 230, 320, 8);

        ctx.fillStyle = '#94a3b8';
        ctx.fillText('CLOUD ARCHITECTURE UPTIME', 40, 260);
        ctx.fillStyle = '#10b981';
        ctx.fillRect(40, 270, 380, 8);
      } else {
        // Neural Core Cognitive Activity
        ctx.fillStyle = '#38bdf8';
        ctx.font = 'bold 14px monospace';
        ctx.fillText('SOSTANA NEURAL NETWORK CLUSTER', 20, 32);

        // Network Nodes
        const nodes = [
          [100, 120],
          [180, 80],
          [200, 170],
          [290, 110],
          [350, 180],
          [410, 90],
          [260, 230],
        ];
        ctx.strokeStyle = 'rgba(0, 240, 255, 0.4)';
        ctx.lineWidth = 1.5;
        for (let i = 0; i < nodes.length; i++) {
          for (let j = i + 1; j < nodes.length; j++) {
            ctx.beginPath();
            ctx.moveTo(nodes[i][0], nodes[i][1]);
            ctx.lineTo(nodes[j][0], nodes[j][1]);
            ctx.stroke();
          }
        }
        nodes.forEach(([x, y]) => {
          ctx.fillStyle = '#f59e0b';
          ctx.beginPath();
          ctx.arc(x, y, 6, 0, Math.PI * 2);
          ctx.fill();
        });

        ctx.fillStyle = '#00f0ff';
        ctx.font = '12px monospace';
        ctx.fillText('INFERENCE ENGINE: STABLE · ZERO DRIFT', 20, 305);
      }

      const tex = new THREE.CanvasTexture(canvas);
      tex.colorSpace = THREE.SRGBColorSpace;
      return tex;
    };

    // =========================================================================
    // 4. SCENE CONSTRUCTION (Boardroom + Cityscape + Holographic Avatar)
    // =========================================================================

    // A. Panoramic Skyline Backdrop Plane
    const skylineGeo = new THREE.PlaneGeometry(160, 80);
    const skylineMat = new THREE.MeshBasicMaterial({
      map: createSkylineTexture(),
      side: THREE.DoubleSide,
    });
    const skylineMesh = new THREE.Mesh(skylineGeo, skylineMat);
    skylineMesh.position.set(0, 22, -60);
    scene.add(skylineMesh);

    // Window Mullions (Boardroom Panoramic Glass Frames)
    const mullionMat = new THREE.MeshBasicMaterial({ color: 0x050811 });
    const createMullion = (x: number) => {
      const geo = new THREE.BoxGeometry(0.8, 80, 1.2);
      const mesh = new THREE.Mesh(geo, mullionMat);
      mesh.position.set(x, 22, -58);
      return mesh;
    };
    scene.add(
      createMullion(-50),
      createMullion(-25),
      createMullion(0),
      createMullion(25),
      createMullion(50)
    );

    // B. Executive Boardroom Desk (Foreground Solid Luxury Foundation)
    const deskGroup = new THREE.Group();
    scene.add(deskGroup);

    // Main dark polished table top
    const deskGeo = new THREE.BoxGeometry(46, 2.8, 22);
    const deskMat = new THREE.MeshStandardMaterial({
      color: 0x090d16,
      roughness: 0.25,
      metalness: 0.85,
    });
    const deskMesh = new THREE.Mesh(deskGeo, deskMat);
    deskMesh.position.set(0, -1.4, 6);
    deskGroup.add(deskMesh);

    // Laser-engraved Metallic Plaque in Front: "SMITH BUSINESS SOLUTIONS"
    const plaqueCanvas = document.createElement('canvas');
    plaqueCanvas.width = 1024;
    plaqueCanvas.height = 256;
    const pctx = plaqueCanvas.getContext('2d')!;
    pctx.fillStyle = '#64748b';
    pctx.fillRect(0, 0, 1024, 256);
    pctx.strokeStyle = '#cbd5e1';
    pctx.lineWidth = 6;
    pctx.strokeRect(8, 8, 1008, 240);

    pctx.fillStyle = '#0f172a';
    pctx.textAlign = 'center';
    pctx.font = 'bold 44px sans-serif';
    pctx.fillText('SMITH BUSINESS SOLUTIONS', 512, 70);
    pctx.font = 'bold 30px monospace';
    pctx.fillText('AL HADIQA INVEST', 512, 125);
    pctx.font = '24px monospace';
    pctx.fillText('SOSTANA CORE · GLOBAL STRATEGY AI', 512, 185);

    const plaqueTex = new THREE.CanvasTexture(plaqueCanvas);
    plaqueTex.colorSpace = THREE.SRGBColorSpace;
    const plaqueGeo = new THREE.PlaneGeometry(16, 4);
    const plaqueMat = new THREE.MeshStandardMaterial({
      map: plaqueTex,
      metalness: 0.9,
      roughness: 0.2,
    });
    const plaqueMesh = new THREE.Mesh(plaqueGeo, plaqueMat);
    plaqueMesh.position.set(0, -1.4, 17.1);
    deskGroup.add(plaqueMesh);

    // C. Circular Holographic Pedestal / Projector on Desk
    const pedestalGroup = new THREE.Group();
    pedestalGroup.position.set(0, 0.05, 5);
    scene.add(pedestalGroup);

    const pedestalRingGeo = new THREE.PlaneGeometry(16, 16);
    const pedestalRingMat = new THREE.MeshBasicMaterial({
      map: createPedestalDiscTexture(),
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    const pedestalRingMesh = new THREE.Mesh(pedestalRingGeo, pedestalRingMat);
    pedestalRingMesh.rotation.x = -Math.PI / 2;
    pedestalGroup.add(pedestalRingMesh);

    // Concentric outer laser ring
    const outerRingGeo = new THREE.RingGeometry(8.2, 8.45, 64);
    const outerRingMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });
    const outerRingMesh = new THREE.Mesh(outerRingGeo, outerRingMat);
    outerRingMesh.rotation.x = -Math.PI / 2;
    pedestalGroup.add(outerRingMesh);

    // Glowing Vertical Projection Beam Column
    const beamGeo = new THREE.CylinderGeometry(8.2, 8.2, 28, 48, 1, true);
    const beamMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.045,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const beamMesh = new THREE.Mesh(beamGeo, beamMat);
    beamMesh.position.y = 14;
    pedestalGroup.add(beamMesh);

    // =========================================================================
    // 5. PROCEDURAL FEMALE CYBERNETIC AVATAR ("SOSTANA CORE AI")
    // =========================================================================
    const avatarGroup = new THREE.Group();
    avatarGroup.position.set(0, 0, 5); // Centered on pedestal
    scene.add(avatarGroup);

    // Custom Hologram Material (Scanlines, Fresnel Rim, Cyan/Gold Circuits)
    const hologramUniforms = {
      uTime: { value: 0 },
      uColorCyan: { value: new THREE.Color(0x00f0ff) },
      uColorGold: { value: new THREE.Color(0xf59e0b) },
      uScanY: { value: 0 },
      uGlitch: { value: 0 },
    };

    const hologramMaterial = new THREE.ShaderMaterial({
      uniforms: hologramUniforms,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vWorldPosition;
        varying vec2 vUv;
        uniform float uTime;
        uniform float uGlitch;

        void main() {
          vNormal = normalize(normalMatrix * normal);
          vUv = uv;
          
          vec3 pos = position;
          // Subtle glitch wave
          if (uGlitch > 0.1) {
            pos.x += sin(pos.y * 15.0 + uTime * 20.0) * 0.06 * uGlitch;
          }
          
          vec4 worldPos = modelMatrix * vec4(pos, 1.0);
          vWorldPosition = worldPos.xyz;
          gl_Position = projectionMatrix * viewMatrix * worldPos;
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        varying vec3 vWorldPosition;
        varying vec2 vUv;
        uniform float uTime;
        uniform vec3 uColorCyan;
        uniform vec3 uColorGold;
        uniform float uScanY;

        void main() {
          vec3 viewDir = normalize(cameraPosition - vWorldPosition);
          float fresnel = pow(1.0 - abs(dot(viewDir, vNormal)), 2.2);

          // Horizontal holographic scanlines
          float scanline = sin(vWorldPosition.y * 36.0 - uTime * 4.0) * 0.5 + 0.5;
          scanline = pow(scanline, 1.8);

          // Vertical laser scan pulse bar
          float laserDist = abs(vWorldPosition.y - uScanY);
          float laserBar = smoothstep(1.5, 0.0, laserDist) * 0.65;

          // Circuit accents (mix of gold and cyan)
          vec3 baseColor = mix(uColorCyan, uColorGold, step(0.72, sin(vWorldPosition.y * 8.0 + vWorldPosition.x * 6.0)));

          float alpha = fresnel * 0.85 + scanline * 0.22 + laserBar;
          gl_FragColor = vec4(baseColor + vec3(laserBar * 0.8), alpha * 0.88);
        }
      `,
    });

    // Wireframe overlay material
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.18,
      blending: THREE.AdditiveBlending,
    });

    // Glowing eyes material for avatar
    const eyeMat = new THREE.MeshBasicMaterial({
      color: 0x67e8f9,
      blending: THREE.AdditiveBlending,
    });

    // Humanoid Body Construction (Head, Face, Hair, Clavicle, Torso, Hips, Arms with 5 Fingers, Legs, Boots)
    const createHologramPart = (
      geo: THREE.BufferGeometry,
      pos: [number, number, number],
      rot?: [number, number, number],
      scale?: [number, number, number]
    ) => {
      const partGroup = new THREE.Group();
      const meshSolid = new THREE.Mesh(geo, hologramMaterial);
      const meshWire = new THREE.Mesh(geo, wireframeMaterial);
      partGroup.add(meshSolid, meshWire);
      partGroup.position.set(...pos);
      if (rot) partGroup.rotation.set(...rot);
      if (scale) partGroup.scale.set(...scale);
      avatarGroup.add(partGroup);
      return partGroup;
    };

    // 1. HEAD & HUMAN FACIAL PROFILE
    // Cranium
    const headGeo = new THREE.SphereGeometry(0.95, 32, 24);
    headGeo.scale(0.95, 1.15, 1.0);
    createHologramPart(headGeo, [0, 21.0, 0]);

    // Feminine Jaw & Chin
    const jawGeo = new THREE.CylinderGeometry(0.72, 0.42, 1.05, 24);
    jawGeo.scale(1.0, 1.0, 0.9);
    createHologramPart(jawGeo, [0, 20.15, 0.16], [0.15, 0, 0]);

    const chinGeo = new THREE.SphereGeometry(0.26, 16, 16);
    createHologramPart(chinGeo, [0, 19.65, 0.45]);

    // Delicate Nose Bridge & Tip
    const noseGeo = new THREE.ConeGeometry(0.12, 0.4, 10);
    createHologramPart(noseGeo, [0, 20.65, 0.95], [0.42, 0, 0]);

    // Glowing Cyan Eyes
    const eyeGeo = new THREE.SphereGeometry(0.1, 14, 14);
    const leftEye = new THREE.Mesh(eyeGeo, eyeMat);
    leftEye.position.set(-0.31, 20.82, 0.88);
    const rightEye = new THREE.Mesh(eyeGeo, eyeMat);
    rightEye.position.set(0.31, 20.82, 0.88);
    avatarGroup.add(leftEye, rightEye);

    // 2. SLEEK FEMININE BOB HAIRSTYLE (Matching image attachment)
    const hairTopGeo = new THREE.SphereGeometry(1.2, 32, 24, 0, Math.PI * 2, 0, Math.PI * 0.65);
    hairTopGeo.scale(1.05, 1.15, 1.1);
    createHologramPart(hairTopGeo, [0, 21.2, -0.1]);

    // Side bangs framing the face
    const bangGeo = new THREE.CylinderGeometry(0.24, 0.12, 1.9, 14);
    createHologramPart(bangGeo, [-0.98, 20.4, 0.32], [0.12, 0, -0.14]);
    createHologramPart(bangGeo.clone(), [0.98, 20.4, 0.32], [0.12, 0, 0.14]);

    // 3. NECK & CLAVICLES
    const neckGeo = new THREE.CylinderGeometry(0.38, 0.46, 1.3, 24);
    createHologramPart(neckGeo, [0, 19.25, 0.05]);

    const clavicleGeo = new THREE.CylinderGeometry(0.08, 0.08, 2.4, 12);
    createHologramPart(clavicleGeo, [0, 18.55, 0.32], [0, 0, Math.PI / 2]);

    // 4. CHEST & NATURAL FEMININE BUST CONTOUR
    const chestGeo = new THREE.CylinderGeometry(1.28, 1.05, 2.2, 24);
    chestGeo.scale(1.15, 1.0, 0.85);
    const chestGroup = createHologramPart(chestGeo, [0, 17.3, 0]);

    // Contoured Breasts (anatomically proportioned)
    const breastGeo = new THREE.SphereGeometry(0.62, 24, 24);
    breastGeo.scale(1.0, 0.95, 1.18);
    createHologramPart(breastGeo, [-0.52, 17.55, 0.76], [0.15, -0.1, 0]);
    createHologramPart(breastGeo.clone(), [0.52, 17.55, 0.76], [0.15, 0.1, 0]);

    // 5. WAIST (Hourglass curvature) & NAVEL
    const waistGeo = new THREE.CylinderGeometry(0.85, 1.12, 1.9, 24);
    waistGeo.scale(1.05, 1.0, 0.85);
    createHologramPart(waistGeo, [0, 15.3, 0]);

    const navelGeo = new THREE.SphereGeometry(0.06, 8, 8);
    createHologramPart(navelGeo, [0, 15.15, 0.65]);

    // 6. HIPS & PELVIS
    const hipsGeo = new THREE.CylinderGeometry(1.12, 1.42, 1.9, 24);
    hipsGeo.scale(1.22, 1.0, 0.95);
    createHologramPart(hipsGeo, [0, 13.4, 0]);

    // 7. ARMS & DETAILED 5-FINGER HANDS
    // Shoulder Deltoids
    const shoulderGeo = new THREE.SphereGeometry(0.48, 18, 18);
    createHologramPart(shoulderGeo, [-1.82, 18.1, 0]);
    createHologramPart(shoulderGeo.clone(), [1.82, 18.1, 0]);

    // Upper Arms (biceps/triceps)
    const upperArmGeo = new THREE.CylinderGeometry(0.32, 0.26, 3.4, 20);
    createHologramPart(upperArmGeo, [-2.0, 16.2, 0], [0, 0, 0.12]);
    createHologramPart(upperArmGeo.clone(), [2.0, 16.2, 0], [0, 0, -0.12]);

    // Elbows
    const elbowGeo = new THREE.SphereGeometry(0.26, 14, 14);
    createHologramPart(elbowGeo, [-2.28, 14.4, 0.05]);
    createHologramPart(elbowGeo.clone(), [2.28, 14.4, 0.05]);

    // Forearms
    const forearmGeo = new THREE.CylinderGeometry(0.26, 0.21, 3.2, 20);
    createHologramPart(forearmGeo, [-2.48, 12.7, 0.18], [0.12, 0, 0.08]);
    createHologramPart(forearmGeo.clone(), [2.48, 12.7, 0.18], [0.12, 0, -0.08]);

    // Palms
    const palmGeo = new THREE.BoxGeometry(0.26, 0.52, 0.14);
    createHologramPart(palmGeo, [-2.72, 10.9, 0.42], [0.15, 0, 0.12]);
    createHologramPart(palmGeo.clone(), [2.72, 10.9, 0.42], [0.15, 0, -0.12]);

    // 5 Articulated Fingers on each hand
    const createHandFingers = (side: 1 | -1) => {
      const fingerGeo = new THREE.CylinderGeometry(0.045, 0.035, 0.42, 8);
      const thumbGeo = new THREE.CylinderGeometry(0.052, 0.04, 0.34, 8);
      const handX = side * 2.72;
      const handY = 10.55;
      const handZ = 0.45;

      // Thumb
      createHologramPart(thumbGeo, [handX + side * 0.15, handY + 0.18, handZ + 0.09], [0.2, side * 0.4, side * 0.5]);
      // Index
      createHologramPart(fingerGeo, [handX + side * 0.09, handY - 0.06, handZ], [0.1, 0, side * 0.05]);
      // Middle
      createHologramPart(fingerGeo.clone(), [handX + side * 0.03, handY - 0.1, handZ], [0.1, 0, 0]);
      // Ring
      createHologramPart(fingerGeo.clone(), [handX - side * 0.045, handY - 0.07, handZ], [0.1, 0, -side * 0.05]);
      // Little
      createHologramPart(fingerGeo.clone(), [handX - side * 0.1, handY - 0.03, handZ], [0.1, 0, -side * 0.1]);
    };
    createHandFingers(1);
    createHandFingers(-1);

    // 8. LEGS (Thighs, Knees, Calves, Boots)
    // Feminine contoured thighs
    const thighGeo = new THREE.CylinderGeometry(0.65, 0.44, 4.4, 24);
    thighGeo.scale(1.05, 1.0, 0.95);
    createHologramPart(thighGeo, [-0.88, 10.5, 0.15], [0.04, 0, -0.06]);
    createHologramPart(thighGeo.clone(), [0.88, 10.5, 0.15], [0.04, 0, 0.06]);

    // Anatomical Knees (Patella)
    const patellaGeo = new THREE.SphereGeometry(0.35, 18, 18);
    patellaGeo.scale(1.0, 1.15, 0.9);
    createHologramPart(patellaGeo, [-0.98, 8.0, 0.3]);
    createHologramPart(patellaGeo.clone(), [0.98, 8.0, 0.3]);

    // Calves (Gastrocnemius curvature)
    const calfGeo = new THREE.CylinderGeometry(0.48, 0.3, 4.2, 24);
    calfGeo.scale(1.0, 1.0, 0.92);
    createHologramPart(calfGeo, [-1.02, 5.7, 0.18], [-0.03, 0, 0.04]);
    createHologramPart(calfGeo.clone(), [1.02, 5.7, 0.18], [-0.03, 0, -0.04]);

    // Ankles
    const ankleGeo = new THREE.SphereGeometry(0.3, 14, 14);
    createHologramPart(ankleGeo, [-0.98, 3.4, 0.18]);
    createHologramPart(ankleGeo.clone(), [0.98, 3.4, 0.18]);

    // Futuristic Aerodynamic High-Tech Boots
    const bootGeo = new THREE.BoxGeometry(0.72, 0.95, 1.85);
    createHologramPart(bootGeo, [-0.98, 2.9, 0.65], [-0.08, 0, 0]);
    createHologramPart(bootGeo.clone(), [0.98, 2.9, 0.65], [-0.08, 0, 0]);

    // Floating Hologram Particle Matrix (Sparkles around avatar)
    const avatarParticleCount = 650;
    const avatarParticlePos = new Float32Array(avatarParticleCount * 3);
    for (let i = 0; i < avatarParticleCount; i++) {
      const i3 = i * 3;
      avatarParticlePos[i3] = (Math.random() - 0.5) * 6.5;
      avatarParticlePos[i3 + 1] = Math.random() * 23;
      avatarParticlePos[i3 + 2] = 5 + (Math.random() - 0.5) * 5.5;
    }
    const avatarParticleGeo = new THREE.BufferGeometry();
    avatarParticleGeo.setAttribute('position', new THREE.BufferAttribute(avatarParticlePos, 3));
    const avatarParticleMat = new THREE.PointsMaterial({
      color: 0x00f0ff,
      size: 0.28,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });
    const avatarParticles = new THREE.Points(avatarParticleGeo, avatarParticleMat);
    scene.add(avatarParticles);

    // =========================================================================
    // 6. FLOATING HOLOGRAPHIC HUD DASHBOARDS (Arranged exactly as in Image)
    // =========================================================================
    const hudGroup = new THREE.Group();
    scene.add(hudGroup);

    const hudPlaneGeo = new THREE.PlaneGeometry(8.5, 5.6);

    const createFloatingHud = (
      texture: THREE.CanvasTexture,
      pos: [number, number, number],
      rotY: number
    ) => {
      const mat = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        opacity: 0.88,
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      const mesh = new THREE.Mesh(hudPlaneGeo, mat);
      mesh.position.set(...pos);
      mesh.rotation.y = rotY;
      hudGroup.add(mesh);
      return mesh;
    };

    // Left Upper: Global Market Telemetry
    const hudWorld = createFloatingHud(createHudTexture('world'), [-9.2, 16.5, 5.5], 0.25);
    // Left Lower: Financial Candlesticks & DCF Curve
    const hudStocks = createFloatingHud(createHudTexture('stocks'), [-8.8, 10.2, 7.2], 0.32);
    // Right Upper: Corporate KPIs & Gauges
    const hudKpis = createFloatingHud(createHudTexture('kpis'), [9.2, 16.5, 5.5], -0.25);
    // Right Lower: Neural Network Engine Visualizer
    const hudNeural = createFloatingHud(createHudTexture('neural'), [8.8, 10.2, 7.2], -0.32);

    // Bottom 3D Wireframe Undulating Volatility Wave on Table
    const waveGeo = new THREE.PlaneGeometry(15, 6, 32, 16);
    const waveMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
    });
    const waveMesh = new THREE.Mesh(waveGeo, waveMat);
    waveMesh.position.set(0, 1.2, 12);
    waveMesh.rotation.x = -Math.PI / 2.3;
    scene.add(waveMesh);

    // =========================================================================
    // 7. LIGHTING RIG
    // =========================================================================
    const ambientLight = new THREE.AmbientLight(0x061122, 0.6);
    scene.add(ambientLight);

    // Cyan Key light from the hologram onto the boardroom desk
    const hologramLight = new THREE.PointLight(0x00f0ff, 3.2, 35, 1.8);
    hologramLight.position.set(0, 12, 5);
    scene.add(hologramLight);

    // Gold rim accent light
    const goldRimLight = new THREE.PointLight(0xf59e0b, 1.8, 28, 2);
    goldRimLight.position.set(0, 18, -4);
    scene.add(goldRimLight);

    // =========================================================================
    // 8. INTERACTION & CAMERA DAMPING
    // =========================================================================
    let mouseX = 0;
    let mouseY = 0;
    let targetCameraX = 0;
    let targetCameraY = 14;
    let targetCameraZ = 48;
    let currentScanY = 0;
    let scanDirection = 1;
    let glitchTimer = 0;

    const onMouseMove = (e: MouseEvent) => {
      const halfW = window.innerWidth / 2;
      const halfH = window.innerHeight / 2;
      mouseX = (e.clientX - halfW) / halfW;
      mouseY = (e.clientY - halfH) / halfH;
    };
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
    };
    window.addEventListener('resize', onResize);

    let scrollY = window.scrollY || 0;
    const onScroll = () => {
      scrollY = window.scrollY || 0;
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    // Camera preset controller
    setPresetRef.current = (preset: 'default' | 'close' | 'hud') => {
      setActivePreset(preset);
      if (preset === 'default') {
        targetCameraX = 0;
        targetCameraY = 14;
        targetCameraZ = 48;
      } else if (preset === 'close') {
        targetCameraX = 0;
        targetCameraY = 17;
        targetCameraZ = 22;
      } else if (preset === 'hud') {
        targetCameraX = -6;
        targetCameraY = 14;
        targetCameraZ = 32;
      }
    };

    resetCameraRef.current = () => {
      setPresetRef.current?.('default');
    };

    scanTriggerRef.current = () => {
      hologramUniforms.uGlitch.value = 1.0;
      setTimeout(() => {
        hologramUniforms.uGlitch.value = 0.0;
      }, 450);
    };

    // =========================================================================
    // 9. ANIMATION LOOP
    // =========================================================================
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Camera lerp with mouse parallax and scroll parallax in 3D
      const isInter = isInteractiveRef.current || explorationModeRef.current;
      const panFactor = isInter ? 18 : 8;
      const scrollOffset = isInter ? 0 : Math.min(scrollY * 0.012, 16);
      const desiredX = targetCameraX + mouseX * panFactor;
      const desiredY = targetCameraY - mouseY * (panFactor * 0.4) - scrollOffset;

      camera.position.x += (desiredX - camera.position.x) * 0.05;
      camera.position.y += (desiredY - camera.position.y) * 0.05;
      camera.position.z += (targetCameraZ - camera.position.z) * 0.05;
      camera.lookAt(0, 11 - scrollOffset * 0.4, 5);

      // Hologram Laser Scan Sweep (0 to 22 units along Y)
      currentScanY += scanDirection * 0.22;
      if (currentScanY > 23) scanDirection = -1;
      if (currentScanY < 0.2) scanDirection = 1;
      hologramUniforms.uScanY.value = currentScanY;
      hologramUniforms.uTime.value = elapsedTime;

      // Pedestal Rotation
      pedestalRingMesh.rotation.z = elapsedTime * 0.12;
      outerRingMesh.rotation.z = -elapsedTime * 0.08;

      // Avatar subtle respiration / holographic levitation
      avatarGroup.position.y = Math.sin(elapsedTime * 1.6) * 0.12;
      const breath = Math.sin(elapsedTime * 2.2);
      chestGroup.scale.set(1.15 * (1.0 + breath * 0.018), 1.0 + breath * 0.012, 0.85 * (1.0 + breath * 0.024));

      // Floating HUD Gentle Bobbing
      hudWorld.position.y = 16.5 + Math.sin(elapsedTime * 1.8 + 0.5) * 0.25;
      hudStocks.position.y = 10.2 + Math.sin(elapsedTime * 2.0 + 1.2) * 0.22;
      hudKpis.position.y = 16.5 + Math.sin(elapsedTime * 1.7 + 2.0) * 0.25;
      hudNeural.position.y = 10.2 + Math.sin(elapsedTime * 2.1 + 3.1) * 0.22;

      // 3D Undulating wave animation
      const wavePositions = waveGeo.attributes.position;
      for (let i = 0; i < wavePositions.count; i++) {
        const u = wavePositions.getX(i);
        const v = wavePositions.getY(i);
        const z = Math.sin(u * 0.6 + elapsedTime * 3.0) * Math.cos(v * 0.8 + elapsedTime * 2.0) * 0.45;
        wavePositions.setZ(i, z);
      }
      wavePositions.needsUpdate = true;

      // Floating Particle Rise
      const posAttr = avatarParticleGeo.attributes.position;
      for (let i = 0; i < avatarParticleCount; i++) {
        let py = posAttr.getY(i) + 0.045;
        if (py > 23.5) py = 0.5;
        posAttr.setY(i, py);
      }
      posAttr.needsUpdate = true;

      // Occasional Shimmer Glitch
      glitchTimer += 0.016;
      if (glitchTimer > 6.0) {
        hologramUniforms.uGlitch.value = 0.8;
        setTimeout(() => {
          hologramUniforms.uGlitch.value = 0.0;
        }, 150);
        glitchTimer = 0;
      }

      renderer.render(scene, camera);
    };

    animate();

    // =========================================================================
    // 10. CLEANUP ON UNMOUNT
    // =========================================================================
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(animationFrameId);

      renderer.dispose();
      skylineGeo.dispose();
      skylineMat.dispose();
      deskGeo.dispose();
      deskMat.dispose();
      plaqueGeo.dispose();
      plaqueMat.dispose();
      pedestalRingGeo.dispose();
      pedestalRingMat.dispose();
      outerRingGeo.dispose();
      outerRingMat.dispose();
      beamGeo.dispose();
      beamMat.dispose();
      hologramMaterial.dispose();
      wireframeMaterial.dispose();
      avatarParticleGeo.dispose();
      avatarParticleMat.dispose();
      hudPlaneGeo.dispose();
      waveGeo.dispose();
      waveMat.dispose();

      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <>
      {/* Three.js Canvas Container (Ambient 3D background in motion when browsing, full screen when inspected or in exploration mode) */}
      <div
        ref={mountRef}
        className={`fixed inset-0 transition-opacity duration-700 ${
          isInteractive || explorationMode
            ? 'z-30 pointer-events-auto opacity-100'
            : 'z-0 pointer-events-none opacity-60'
        }`}
        aria-hidden="true"
      />

      {/* Floating Exploration Mode Badge */}
      {explorationMode && (
        <div className="fixed top-20 sm:top-24 left-1/2 -translate-x-1/2 z-40 px-4 py-2 rounded-2xl glass-panel-elevated border border-cyan-400/50 shadow-2xl flex items-center gap-3 backdrop-blur-xl animate-fade-up">
          <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
          <span className="text-xs font-bold text-white tracking-wide">
            Vista de Exploración 3D Activa · Zoom sobre Avatar Sostana
          </span>
          {onToggleExploration && (
            <button
              onClick={onToggleExploration}
              type="button"
              className="px-2.5 py-1 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-xs font-semibold text-cyan-300 border border-cyan-400/30 transition-colors cursor-pointer"
            >
              Volver a Vista General
            </button>
          )}
        </div>
      )}

      {/* Floating Toggle Pill (Always available in top-right or hero to switch to 3D Inspection Mode) */}
      <div className={`fixed top-20 right-4 sm:right-6 z-40 ${isInteractive ? 'block' : 'hidden sm:block'}`}>
        <button
          onClick={() => {
            const next = !isInteractive;
            setIsInteractive(next);
            if (onToggleInteractive) onToggleInteractive();
          }}
          type="button"
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl glass-panel-elevated border border-cyan-400/40 text-cyan-300 hover:text-white text-xs font-bold shadow-xl shadow-cyan-500/10 hover:border-cyan-400 hover:scale-105 active:scale-95 transition-all cursor-pointer backdrop-blur-xl"
        >
          {isInteractive ? (
            <>
              <Minimize2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Salir del Modo 3D</span>
            </>
          ) : (
            <>
              <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
              <span>Inspeccionar Holograma 3D</span>
            </>
          )}
        </button>
      </div>

      {/* Collapsible Ergonomic Bottom Control Dock (Visible during 3D inspection mode) */}
      {isInteractive && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[94vw] max-w-3xl transition-all duration-300">
          {/* Collapse/Expand Toggle Tab */}
          <div className="flex justify-center -mb-px">
            <button
              onClick={() => setIsDockCollapsed(!isDockCollapsed)}
              type="button"
              className="px-4 py-1 rounded-t-xl bg-slate-900/90 border-t border-x border-white/20 text-[11px] font-bold text-slate-300 hover:text-cyan-300 flex items-center gap-1.5 transition-colors cursor-pointer shadow-lg backdrop-blur-md"
            >
              {isDockCollapsed ? (
                <>
                  <ChevronUp className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Mostrar Controles 3D</span>
                </>
              ) : (
                <>
                  <ChevronDown className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Modo Cine (Ocultar Dock)</span>
                </>
              )}
            </button>
          </div>

          {!isDockCollapsed && (
            <div className="rounded-2xl glass-panel-elevated border border-cyan-400/30 p-4 sm:p-5 shadow-2xl backdrop-blur-2xl space-y-4 animate-slideUp text-white">
              {/* Top Header: Badge + Plaque Info */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <div>
                    <span className="text-xs font-bold text-white block">
                      SOSTANA CORE AI · SMITH BUSINESS SOLUTIONS
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono block">
                      Al-Hadiqa Invest Holding · Holographic Telemetry Engine
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => scanTriggerRef.current?.()}
                    type="button"
                    className="px-3 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/40 text-cyan-300 text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
                  >
                    <Scan className="w-3.5 h-3.5" />
                    <span>Escanear</span>
                  </button>
                  <button
                    onClick={() => resetCameraRef.current?.()}
                    type="button"
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
                    title="Restablecer Cámara"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Control Rows: Camera Presets & Telemetry Modes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                {/* Camera Views */}
                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                    <Camera className="w-3 h-3 text-amber-400" />
                    <span>Perspectiva de Cámara</span>
                  </span>
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => setPresetRef.current?.('default')}
                      className={`flex-1 py-1.5 px-2 rounded-lg font-semibold text-center transition-all cursor-pointer ${
                        activePreset === 'default'
                          ? 'bg-gradient-to-r from-cyan-400 to-cyan-300 text-slate-950 font-bold shadow-md'
                          : 'bg-white/5 text-slate-300 hover:bg-white/10'
                      }`}
                    >
                      Mesa & Sala
                    </button>
                    <button
                      onClick={() => setPresetRef.current?.('close')}
                      className={`flex-1 py-1.5 px-2 rounded-lg font-semibold text-center transition-all cursor-pointer ${
                        activePreset === 'close'
                          ? 'bg-gradient-to-r from-cyan-400 to-cyan-300 text-slate-950 font-bold shadow-md'
                          : 'bg-white/5 text-slate-300 hover:bg-white/10'
                      }`}
                    >
                      Avatar Sostana
                    </button>
                    <button
                      onClick={() => setPresetRef.current?.('hud')}
                      className={`flex-1 py-1.5 px-2 rounded-lg font-semibold text-center transition-all cursor-pointer ${
                        activePreset === 'hud'
                          ? 'bg-gradient-to-r from-cyan-400 to-cyan-300 text-slate-950 font-bold shadow-md'
                          : 'bg-white/5 text-slate-300 hover:bg-white/10'
                      }`}
                    >
                      Dashboards HUD
                    </button>
                  </div>
                </div>

                {/* Telemetry Layer Selection */}
                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                    <Activity className="w-3 h-3 text-emerald-400" />
                    <span>Capa de Telemetría Activa</span>
                  </span>
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => setActiveTelemetryMode('strategy')}
                      className={`flex-1 py-1.5 px-2 rounded-lg font-semibold text-center transition-all cursor-pointer ${
                        activeTelemetryMode === 'strategy'
                          ? 'bg-amber-400 text-slate-950 font-bold shadow-md'
                          : 'bg-white/5 text-slate-300 hover:bg-white/10'
                      }`}
                    >
                      Estrategia Global
                    </button>
                    <button
                      onClick={() => setActiveTelemetryMode('finance')}
                      className={`flex-1 py-1.5 px-2 rounded-lg font-semibold text-center transition-all cursor-pointer ${
                        activeTelemetryMode === 'finance'
                          ? 'bg-emerald-400 text-slate-950 font-bold shadow-md'
                          : 'bg-white/5 text-slate-300 hover:bg-white/10'
                      }`}
                    >
                      Modelado DCF
                    </button>
                    <button
                      onClick={() => setActiveTelemetryMode('neural')}
                      className={`flex-1 py-1.5 px-2 rounded-lg font-semibold text-center transition-all cursor-pointer ${
                        activeTelemetryMode === 'neural'
                          ? 'bg-cyan-400 text-slate-950 font-bold shadow-md'
                          : 'bg-white/5 text-slate-300 hover:bg-white/10'
                      }`}
                    >
                      Red Neuronal
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};
