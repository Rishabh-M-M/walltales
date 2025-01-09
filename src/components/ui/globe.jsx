import { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ThreeGlobe from "three-globe";
import { Scene, Fog, Color, PerspectiveCamera, Vector3 } from "three";
import countries from "@/data/globe.json";

function Globe({ globeConfig = {}, data = [] }) {
  const globeRef = useRef(null);

  useEffect(() => {
    if (!globeRef.current) return;

    // Set up globe material and properties
    const globeMaterial = globeRef.current.globeMaterial();
    globeMaterial.color = new Color(globeConfig.globeColor || "#06B6D4"); // Teal color for globe
    globeMaterial.emissive = new Color(globeConfig.emissive || "#034C4F"); // Darker teal emissive
    globeMaterial.emissiveIntensity = globeConfig.emissiveIntensity || 0.3;
    globeMaterial.shininess = globeConfig.shininess || 0.8;

    globeRef.current
      .hexPolygonsData(countries.features)
      .hexPolygonResolution(3)
      .hexPolygonMargin(0.7)
      .showAtmosphere(globeConfig.showAtmosphere)
      .atmosphereColor(globeConfig.atmosphereColor || "#34D399") // Light green atmosphere
      .atmosphereAltitude(globeConfig.atmosphereAltitude || 0.1)
      .hexPolygonColor(() => globeConfig.polygonColor || "rgba(255,255,255,1");

    globeRef.current
      .arcsData(data)
      .arcColor((d) => d.color)
      .arcAltitude((d) => d.arcAlt || 0.2)
      .arcDashLength(globeConfig.arcLength || 0.9)
      .arcDashAnimateTime(globeConfig.arcTime || 2000);
  }, [globeConfig, data]);

  return <primitive object={new ThreeGlobe()} ref={globeRef} />;
}

export function World({ globeConfig, data }) {
  const scene = new Scene();
  scene.fog = new Fog(0x000000, 400, 2000); // Black fog for contrast

  return (
    <Canvas
      camera={{
        fov: 50,
        aspect: 1, // Fixed aspect ratio
        near: 180,
        far: 1800,
        position: [0, 0, 500], // Fixed camera position
      }}
      style={{ width: "1000px", height: "1000px" }} // Fixed size
    >
      <ambientLight intensity={0.6} color={globeConfig.ambientLight || "#34D399"} />
      <directionalLight position={[-400, 100, 400]} color={globeConfig.directionalLeftLight || "#A7F3D0"} />
      <directionalLight position={[-200, 500, 200]} color={globeConfig.directionalTopLight || "#A7F3D0"} />
      <pointLight position={[-200, 500, 200]} intensity={0.8} color={globeConfig.pointLight || "#A7F3D0"} />
      <Globe globeConfig={globeConfig} data={data} />
      <OrbitControls
        enablePan={false}
        enableZoom={false} // Disable zoom functionality
        autoRotate
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
}
