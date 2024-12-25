import React, { useEffect, useState } from "react";
import anime from "animejs/lib/anime.es.js"; // Import Anime.js for animation

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading time before transitioning to the main app
    setTimeout(() => {
      setLoading(false); // Set loading to false after 3 seconds
    }, 3000);

    // Trigger staggered grid animation
    const tiles = document.querySelectorAll(".preloader-tile");
    anime({
      targets: tiles,
      opacity: [0, 1],
      translateY: [-50, 0],
      delay: anime.stagger(50, { grid: [10, 10], from: "center" }),
      easing: "easeOutQuad",
      duration: 500,
    });
  }, []);

  return loading ? (
    <div className="preloader">
      <div id="preloader-grid">
        {[...Array(100)].map((_, i) => (
          <div key={i} className="preloader-tile" />
        ))}
      </div>
    </div>
  ) : null;
};

export default Preloader;
