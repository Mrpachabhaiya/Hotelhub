"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Refs for GSAP animations
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inView && leftContentRef.current && rightContentRef.current) {
      // Animate the left content (text)
      gsap.fromTo(
        leftContentRef.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.8 }
      );

      // Animate the right content (image and stats)
      gsap.fromTo(
        rightContentRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.8 }
      );
    }
  }, [inView]);

  return (
    <section className="py-24 bg-[#283618]/95" ref={ref}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div ref={leftContentRef} className="space-y-6">
            <h2>
              Your Gateway to Comfort, Luxury and Unmatched World our Hotel
            </h2>
            <p className="text-muted-foreground">
              Immersing our guests in extraordinary experiences that combine
              luxury living with authentic local culture. Our commitment to
              exceptional service ensures every stay becomes a cherished memory.
            </p>
            <Button variant="secondary" size="lg">
              More About Us
            </Button>
          </div>

          {/* Right Content */}
          <div ref={rightContentRef} className="relative">
            <img
              src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
              alt="Luxury Hotel Interior"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary p-6 rounded-lg shadow-xl">
              <div className="text-4xl font-bold text-primary-foreground">
                6K+
              </div>
              <div className="text-sm text-primary-foreground/80">
                Happy Guests
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
