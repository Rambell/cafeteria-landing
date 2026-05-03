"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Fade up al hacer scroll
export function useFadeUp(selector: string, options = {}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        selector,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            once: true,
          },
          ...options,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [selector, options]);

  return containerRef;
}

// Parallax para el hero
export function useParallax(selector: string, speed = 0.5) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(selector, {
        yPercent: speed * 100,
        ease: "none",
        scrollTrigger: {
          trigger: selector,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, [selector, speed]);
}

// Counter animado para stats
export function useCounter(
  ref: React.RefObject<HTMLSpanElement>,
  end: number,
  duration = 2
) {
  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { innerText: 0 },
        {
          innerText: end,
          duration,
          ease: "power2.out",
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [ref, end, duration]);
}