import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "medium", // can be "fast", "medium", or "slow"
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  const [start, setStart] = useState(false);

  // Map speed prop to slower durations
  const getDuration = (speedValue) => {
    switch (speedValue) {
      case "fast":
        return "400s"; // Feel free to adjust
      case "medium":
        return "600s";
      case "slow":
        return "800s";
      default:
        return "800s"; // Default to "medium"
    }
  };

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      // Duplicate each card for continuous scroll
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current.appendChild(duplicatedItem);
      });

      setAnimationDirection();
      setAnimationSpeed();
      setStart(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setAnimationDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const setAnimationSpeed = () => {
    if (containerRef.current) {
      const duration = getDuration(speed);
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden",
        // Slight gradient to fade edges in/out
        "[mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-6 py-6 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="
              relative w-[280px] md:w-[340px] lg:w-[400px] flex-shrink-0 
              bg-white rounded-xl shadow-md border border-gray-200 
              px-6 py-8 
              hover:shadow-2xl hover:scale-105 transition-all duration-300
            "
          >
            <div className="flex flex-col items-center text-left">
              {/* Large centered user image */}
              {item.image && (
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 mb-4 object-cover rounded-full border-4 border-teal-600"
                />
              )}

              {/* Name + Title */}
              <h3 className="text-lg font-semibold text-gray-800 leading-tight">
                {item.name}
              </h3>
              <p className="text-teal-600 text-sm">{item.title}</p>

              {/* Subtle divider line */}
              <hr className="w-1/2 my-4 border-teal-100" />

              {/* Testimonial Text */}
              <p className="text-sm leading-relaxed text-gray-600 whitespace-pre-line">
                {item.quote}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
