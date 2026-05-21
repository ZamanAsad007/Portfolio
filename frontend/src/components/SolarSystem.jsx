import { useRef, useMemo, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Billboard, Text } from '@react-three/drei'
import { MathUtils, CanvasTexture } from 'three'

// ─── Stack Data ───────────────────────────────────────────────────────────────
const RINGS = [
  {
    label: 'Frontend',
    radius: 2.8,
    tilt: 18,
    speed: 0.30,
    color: '#a89cf7',
    items: [
      { name: 'React',      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
      { name: 'Next.js',    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg', invert: true },
      { name: 'TypeScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg' },
      { name: 'Vite',       url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vite/vite-original.svg' },
      { name: 'Tailwind',   url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
    ],
  },
  {
    label: 'Backend',
    radius: 4.4,
    tilt: -22,
    speed: 0.18,
    color: '#2dc4b5',
    items: [
      { name: 'Node.js',    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
      { name: 'Express',    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg', invert: true },
      { name: 'NestJS',     url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg' },
      { name: 'MongoDB',    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain.svg' },
      { name: 'MySQL',      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-plain.svg' },
      { name: 'PostgreSQL', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg' },
    ],
  },
  {
    label: 'Tools',
    radius: 6.2,
    tilt: 28,
    speed: 0.11,
    color: '#e8a87c',
    items: [
      { name: 'Git',    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-plain.svg' },
      { name: 'Linux',  url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg' },
      { name: 'Python', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
      { name: 'Redis',  url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-plain.svg' },
      { name: 'Vercel', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg', invert: true },
      { name: 'Java',   url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
      { name: 'Docker', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg' },
    ],
  },
]

// ─── Texture loader ───────────────────────────────────────────────────────────
const TEX_CACHE = {}

function loadTexture(url, invert) {
  const key = url + (invert ? '_inv' : '')
  if (TEX_CACHE[key]) return TEX_CACHE[key]

  const canvas = document.createElement('canvas')
  canvas.width = 128
  canvas.height = 128
  const ctx = canvas.getContext('2d')
  const tex = new CanvasTexture(canvas)
  TEX_CACHE[key] = tex

  const img = new Image()
  img.crossOrigin = 'anonymous'
  img.onload = () => {
    ctx.clearRect(0, 0, 128, 128)
    if (invert) ctx.filter = 'invert(1)'
    ctx.drawImage(img, 8, 8, 112, 112)
    tex.needsUpdate = true
  }
  img.src = url
  return tex
}

// ─── Ring Track ───────────────────────────────────────────────────────────────
function RingTrack({ radius }) {
  const points = useMemo(() => {
    const count = 180
    const arr = new Float32Array((count + 1) * 3)
    for (let i = 0; i <= count; i++) {
      const a = (i / count) * Math.PI * 2
      arr[i * 3 + 0] = Math.cos(a) * radius
      arr[i * 3 + 1] = 0
      arr[i * 3 + 2] = Math.sin(a) * radius
    }
    return arr
  }, [radius])

  return (
    <line>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={points}
          count={points.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial color="white" transparent opacity={0.38} />
    </line>
  )
}

// ─── Orbiting Icon ────────────────────────────────────────────────────────────
function OrbitingIcon({ item, index, total, radius, speed, color }) {
  const groupRef = useRef(null)
  const scaleRef = useRef(null)
  const glowRef = useRef(null)
  const hoveredRef = useRef(false)
  const angleRef = useRef((index / total) * Math.PI * 2)
  const texture = useMemo(() => loadTexture(item.url, item.invert), [item.url, item.invert])

  useFrame((_, delta) => {
    angleRef.current += speed * delta
    const a = angleRef.current

    if (groupRef.current) {
      groupRef.current.position.x = Math.cos(a) * radius
      groupRef.current.position.z = Math.sin(a) * radius
      groupRef.current.position.y = 0
    }

    if (scaleRef.current) {
      const target = hoveredRef.current ? 1.55 : 1.0
      const cur = scaleRef.current.scale.x
      scaleRef.current.scale.setScalar(MathUtils.lerp(cur, target, 0.1))
    }

    if (glowRef.current) {
      const targetOpacity = hoveredRef.current ? 0.85 : 0.4
      glowRef.current.material.opacity = MathUtils.lerp(
        glowRef.current.material.opacity, targetOpacity, 0.1
      )
    }
  })

  return (
    <group ref={groupRef}>
      {/* glow disc */}
      <mesh ref={glowRef}>
        <circleGeometry args={[0.42, 32]} />
        <meshBasicMaterial color={color} transparent opacity={0.4} depthWrite={false} />
      </mesh>

      <Billboard
        ref={scaleRef}
        onPointerEnter={() => { hoveredRef.current = true }}
        onPointerLeave={() => { hoveredRef.current = false }}
      >
        {/* icon sprite */}
        <mesh renderOrder={1}>
          <planeGeometry args={[0.65, 0.65]} />
          <meshBasicMaterial map={texture} transparent alphaTest={0.03} depthWrite={false} />
        </mesh>

        {/* label */}
        <Text
          position={[0, -0.52, 0]}
          fontSize={0.18}
          color="white"
          anchorX="center"
          anchorY="top"
          fillOpacity={0.9}
          outlineWidth={0.01}
          outlineColor="#000000"
        >
          {item.name}
        </Text>
      </Billboard>
    </group>
  )
}

// ─── Ring Group ───────────────────────────────────────────────────────────────
function Ring({ ring }) {
  const tiltRad = (ring.tilt * Math.PI) / 180
  return (
    <group rotation={[tiltRad, 0, 0]}>
      <RingTrack radius={ring.radius} />
      {ring.items.map((item, i) => (
        <OrbitingIcon
          key={item.name}
          item={item}
          index={i}
          total={ring.items.length}
          radius={ring.radius}
          speed={ring.speed}
          color={ring.color}
        />
      ))}
    </group>
  )
}

// ─── Center Sun ───────────────────────────────────────────────────────────────
function CenterSun() {
  const pulseRef = useRef(null)
  const logoTexture = useMemo(() => loadTexture('/favicon.svg'), [])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (pulseRef.current) {
      const s = 1 + Math.sin(t * 1.4) * 0.1
      pulseRef.current.scale.setScalar(s)
      pulseRef.current.material.opacity = 0.1 + Math.sin(t * 1.4) * 0.05
    }
  })

  return (
    <group>
      <mesh ref={pulseRef}>
        <sphereGeometry args={[1.0, 32, 32]} />
        <meshBasicMaterial color="#a89cf7" transparent opacity={0.1} depthWrite={false} />
      </mesh>
      <Billboard>
        <mesh>
          <planeGeometry args={[1.1, 1.1]} />
          <meshBasicMaterial map={logoTexture} transparent depthWrite={false} />
        </mesh>
      </Billboard>
    </group>
  )
}

// ─── Scene ────────────────────────────────────────────────────────────────────
function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[0, 0, 0]} color="#a89cf7" intensity={10} distance={20} />
      <pointLight position={[10, 6, 6]}  color="#2dc4b5" intensity={3} />
      <pointLight position={[-10, -6, -6]} color="#e8a87c" intensity={2} />

      <CenterSun />
      {RINGS.map((ring) => (
        <Ring key={ring.label} ring={ring} />
      ))}

      <OrbitControls
        enableZoom
        enablePan={false}
        minDistance={5}
        maxDistance={20}
        autoRotate
        autoRotateSpeed={0.5}
        dampingFactor={0.07}
        enableDamping
      />
    </>
  )
}


export default function SolarSystem() {
  return (
    <div
      className="relative mx-auto w-full max-w-[60rem]"
      style={{ height: 'clamp(280px, 40vw, 440px)' }}
    >
      <Canvas
        gl={{ alpha: true, antialias: true }}
        camera={{ position: [0, 8, 18], fov: 45 }}
        style={{ background: 'transparent', width: '100%', height: '100%' }}
        dpr={[1, 1.5]}
        onCreated={({ camera }) => {
          
          const outerRadius = 6.2
          const distNeeded = outerRadius / Math.tan(((45 / 2) * Math.PI) / 180)
          if (camera.position.length() < distNeeded) {
            camera.position.normalize().multiplyScalar(distNeeded + 2)
          }
        }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
      <p className="absolute bottom-0 left-0 right-0 text-center text-xs text-slate-600 select-none pointer-events-none">
        drag to rotate · scroll to zoom
      </p>
    </div>
  )
}