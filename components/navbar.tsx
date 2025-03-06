// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { Menu, X } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";
// import { Playfair_Display, Roboto } from "next/font/google";

// const playfair = Playfair_Display({ subsets: ["latin"] });
// const roboto = Roboto({
//   weight: ["300", "400", "500", "700"],
//   subsets: ["latin"],
//   display: "swap",
// });

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navLinks = [
//     { href: "/", label: "HOME" },
//     { href: "/rooms", label: "ROOMS" },
//     { href: "/service", label: "SERVICE" },
//     { href: "/dine", label: "DINE" },
//     { href: "/sports", label: "SPORTS" },
//     { href: "/pages", label: "PAGES" },
//     { href: "/blog", label: "BLOG" },
//     { href: "/contact", label: "CONTACT" },
//   ];

//   return (
//     <nav
//       className={cn(
//         "fixed w-full z-50 transition-all duration-300 py-6",
//         isScrolled ? "bg-[#283618]/95 backdrop-blur-sm" : "bg-transparent"
//       )}
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between">
//           <Link
//             href="/"
//             className={`text-2xl font-bold text-white ${roboto.className}`}
//           >
//             Hotelhub
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center space-x-8">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 className="text-sm text-white hover:text-primary transition-colors tracking-wider"
//               >
//                 {link.label}
//               </Link>
//             ))}
//             <Button
//               size="lg"
//               variant="outline"
//               className="border-white text-white hover:bg-white hover:text-[#283618] transition-colors tracking-wider"
//             >
//               BOOK NOW
//             </Button>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="lg:hidden text-white"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <div className="lg:hidden bg-[#283618]/95 backdrop-blur-sm mt-4">
//             <div className="px-2 pt-2 pb-3 space-y-1">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.href}
//                   href={link.href}
//                   className="block px-3 py-2 text-white hover:text-primary transition-colors tracking-wider"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   {link.label}
//                 </Link>
//               ))}
//               <div className="px-3 py-2">
//                 <Button
//                   size="lg"
//                   variant="outline"
//                   className="w-full border-white text-white hover:bg-white hover:text-[#283618] transition-colors tracking-wider"
//                 >
//                   BOOK NOW
//                 </Button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/rooms", label: "ROOMS" },
    { href: "/service", label: "SERVICE" },
    { href: "/dine", label: "DINE" },
    { href: "/sports", label: "SPORTS" },
    { href: "/pages", label: "PAGES" },
    { href: "/blog", label: "BLOG" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300 py-4 md:py-6",
        isScrolled ? "bg-[#283618]/95 backdrop-blur-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className={`text-xl md:text-2xl font-bold text-white ${playfair.className}`}
          >
            Hotelhub
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white hover:text-primary transition-colors tracking-wider"
              >
                {link.label}
              </Link>
            ))}
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#283618] transition-colors tracking-wider"
            >
              BOOK NOW
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-[#283618]/95 backdrop-blur-sm mt-4 rounded-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-white hover:text-primary transition-colors tracking-wider"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-white text-white hover:bg-white hover:text-[#283618] transition-colors tracking-wider"
                >
                  BOOK NOW
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
