"use client";

import { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Shield, Star, Users, Clock } from "lucide-react";
import { gsap } from "gsap";

const features = [
  {
    icon: Shield,
    title: "Luxury Product Quality",
    description:
      "Experience unparalleled luxury with our premium amenities and services.",
  },
  {
    icon: Star,
    title: "Professional Services",
    description:
      "Our trained staff delivers exceptional service tailored to your needs.",
  },
  {
    icon: Users,
    title: "Friendly Team",
    description: "Warm and welcoming team ready to make your stay memorable.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock assistance for all your requirements.",
  },
];

export default function WhyChooseUs() {
  const [sectionRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const paragraphRef = useRef<HTMLParagraphElement | null>(null);

  // GSAP Animations
  useEffect(() => {
    if (inView) {
      // Animate heading
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power3.out",
      });

      // Animate paragraph
      gsap.from(paragraphRef.current, {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      });

      // Animate feature cards from negative Y-axis
      gsap.from(featureRefs.current, {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1,
        delay: 0.4,
        ease: "power3.out",
      });
    }
  }, [inView]);

  return (
    <section className="py-24 bg-[#283618]/95" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
              alt="Luxury Hotel Experience"
              className="rounded-lg shadow-2xl w-full"
            />
            <div className="absolute -bottom-2  -right-1 bg-primary p-6 rounded-lg shadow-xl">
              <div className="text-4xl font-bold text-primary-foreground">
                10K+
              </div>
              <div className="text-sm text-primary-foreground/80">
                Happy Customers
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div>
              <h2 className="mb-4" ref={headingRef}>
                Why We're the Ideal Destination for Your Getaway
              </h2>
              <p className="text-muted-foreground" ref={paragraphRef}>
                We combine luxury with comfort to create an unforgettable
                experience for our guests. Our attention to detail and
                commitment to excellence sets us apart.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  ref={(el) => (featureRefs.current[index] = el)}
                  className="p-4 rounded-lg bg-card/50 backdrop-blur-sm"
                >
                  <feature.icon className="h-8 w-8 text-primary mb-3" />
                  <h3 className="text-lg font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Button */}
            <Button variant="secondary" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
