"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { FaStar, FaRegStar } from "react-icons/fa";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  const addAnimation = () => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  };

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse",
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      const duration =
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[350px] max-w-full relative rounded-2xl border border-teal-700 flex-shrink-0 bg-white px-8 py-6 md:w-[450px]"
            key={idx}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              {/* Quote Section */}
              <span className="relative z-20 text-sm leading-[1.6] text-gray-900 font-normal">
                {item.quote}
              </span>
              {/* User Info */}
              <div className="relative z-20 mt-6 flex flex-row items-center gap-3">
                <AiOutlineUser className="text-teal-700 text-xl" />
                <div className="flex flex-col gap-1">
                  <span className="text-sm leading-[1.6] text-gray-700 font-semibold">
                    {item.name}
                  </span>
                  <span className="text-sm leading-[1.6] text-gray-500 font-normal">
                    {item.title}
                  </span>
                </div>
              </div>
              {/* Star Rating */}
              <div className="relative z-20 mt-4 flex flex-row items-center space-x-1">
                {[...Array(5)].map((_, starIdx) =>
                  starIdx < item.rating ? (
                    <FaStar key={starIdx} className="text-yellow-400 text-sm" />
                  ) : (
                    <FaRegStar
                      key={starIdx}
                      className="text-gray-300 text-sm"
                    />
                  ),
                )}
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
