// "use client";

// import "./globals.css";
// import { useEffect } from "react";
// import { Roboto } from "next/font/google";
// import { ThemeProvider } from "@/components/theme-provider";
// import Navbar from "@/components/navbar";
// import Footer from "@/components/footer";
// import Lenis from "@studio-freight/lenis";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const roboto = Roboto({
//   weight: ["300", "400", "500", "700"],
//   subsets: ["latin"],
//   display: "swap",
// });

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   useEffect(() => {
//    // Initialize Lenis for smooth scrolling
//    const lenis = new Lenis({
//     duration: 1.2, // Animation duration
//     smooth: true, // Enable smooth scrolling
//     smoothTouch: false, // Disable smooth scrolling on touch devices
//     touchMultiplier: 2, // Multiplier for touch scroll speed
//   });
//     function raf(time: number) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }

//     requestAnimationFrame(raf);

//     // Connect GSAP ScrollTrigger with Lenis
//     lenis.on("scroll", ScrollTrigger.update);

//     gsap.ticker.add((time) => {
//       lenis.raf(time * 1000);
//     });

//     return () => {
//       lenis.destroy();
//       gsap.ticker.remove(() => {});
//     };
//   }, []);

//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className={`${roboto.className} antialiased`}>
//         <ThemeProvider
//           attribute="class"
//           defaultTheme="dark"
//           enableSystem={false}
//           disableTransitionOnChange
//         >
//           <Navbar />
//           <main>{children}</main>
//           <Footer />
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }
"use client";

import "./globals.css";
import { useEffect } from "react";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2, // Animation duration
      smooth: true, // Enable smooth scrolling
      smoothTouch: false, // Disable smooth scrolling on touch devices
      touchMultiplier: 2, // Multiplier for touch scroll speed
    });

    // RAF (Request Animation Frame) loop for Lenis
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Connect GSAP ScrollTrigger with Lenis
    lenis.on("scroll", ScrollTrigger.update);

    // Sync GSAP ticker with Lenis
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    // Cleanup function
    return () => {
      lenis.destroy();
      gsap.ticker.remove(() => {});
    };
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${roboto.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
