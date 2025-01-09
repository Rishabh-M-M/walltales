import { useEffect, useRef } from "react";
import ThreeGlobe from "three-globe";
import { Color } from "three";
import countries from "@/data/globe.json"; // Ensure this path matches your project structure

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
      .hexPolygonColor(() => globeConfig.polygonColor || "rgba(255,255,255,0.5)");

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

export default Globe;
