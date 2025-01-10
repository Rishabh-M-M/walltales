import { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ThreeGlobe from "three-globe";
import { Scene, Fog, Color } from "three";
import countries from "@/data/globe.json";

function Globe({ globeConfig = {}, data = [] }) {
  const globeRef = useRef(null);

  useEffect(() => {
    if (!globeRef.current) return;

    // Set up globe material and properties
    const globeMaterial = globeRef.current.globeMaterial();
    globeMaterial.color = new Color(globeConfig.globeColor || "#1f8287");
    globeMaterial.emissive = new Color(globeConfig.emissive || "#222222");
    globeMaterial.emissiveIntensity = globeConfig.emissiveIntensity || 0.4;
    globeMaterial.shininess = globeConfig.shininess || 1;

    // Set up hex polygons (countries)
    globeRef.current
      .hexPolygonsData(countries.features) // Ensure countries data is loaded
      .hexPolygonResolution(3)
      .hexPolygonMargin(0.7)
      .showAtmosphere(globeConfig.showAtmosphere)
      .atmosphereColor(globeConfig.atmosphereColor || "#666666")
      .atmosphereAltitude(globeConfig.atmosphereAltitude || 0.15)
      .hexPolygonColor(() => globeConfig.polygonColor || "rgba(255,255,255,1)");

    // Set up arcs
    globeRef.current
      .arcsData(data)
      .arcStartLat((d) => d.startLat)
      .arcStartLng((d) => d.startLng)
      .arcEndLat((d) => d.endLat)
      .arcEndLng((d) => d.endLng)
      .arcColor((d) => d.color)
      .arcAltitude((d) => d.arcAlt || 0.2)
      .arcStroke(0.5) // Stroke width for arcs
      .arcDashLength(globeConfig.arcLength || 0.7)
      .arcDashGap(4) // Gap between dashes
      .arcDashInitialGap((d) => d.order * 2) // Order-based staggered animation
      .arcDashAnimateTime(globeConfig.arcTime || 1000);

    // Set up points (if needed)
    globeRef.current
      .pointsData(data)
      .pointAltitude(0)
      .pointRadius(globeConfig.pointSize || 4)
      .pointColor((d) => d.color || "#FFFFFF");
  }, [globeConfig, data]);

  return <primitive object={new ThreeGlobe()} ref={globeRef} />;
}

export function World({ globeConfig, data }) {
  const [dimensions, setDimensions] = useState({ width: 1000, height: 1000 });

  const containerRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const { clientWidth } = containerRef.current;
        setDimensions({
          width: clientWidth * 0.99, // Adjust width relative to container
          height: clientWidth * 0.99, // Maintain aspect ratio
        });
      }
    };

    handleResize(); // Initial calculation
    window.addEventListener("resize", handleResize); // Recalculate on window resize
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scene = new Scene();
  scene.fog = new Fog(0x000000, 400, 2000);

  return (
    <div
      ref={containerRef}
      className="flex justify-center items-center w-full h-full"
      style={{ height: "100vh" }}
    >
      <Canvas
        camera={{
          fov: 45,
          aspect: 1,
          near: 180,
          far: 1800,
          position: [0, 0, 500],
        }}
        style={{
          width: dimensions.width,
          height: dimensions.height,
        }}
      >
        <ambientLight intensity={0.6} color={globeConfig.ambientLight || "#34D399"} />
        <directionalLight position={[400, 100, 400]} color={globeConfig.directionalLeftLight || "#A7F3D0"} />
        <directionalLight position={[200, 500, 200]} color={globeConfig.directionalTopLight || "#A7F3D0"} />
        <pointLight position={[-200, 500, 200]} intensity={0.8} color={globeConfig.pointLight || "#A7F3D0"} />
        <Globe globeConfig={globeConfig} data={data} />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}