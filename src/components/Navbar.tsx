"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { scrollToSection } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return; // Only run scroll logic on homepage

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll(); // Initial check on mount

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const isActive = pathname === "/" ? isScrolled : true;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isActive
          ? "bg-white backdrop-blur-sm shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo_path_ritik.png"
              alt="Path NGO Logo"
              width={150}
              height={150}
              className="rounded-sm cursor-pointer"
            />
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            {["about", "impact", "projects", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-sm font-medium ${
                  isActive ? "text-gray-800" : "text-white"
                } hover:text-sky-600 transition-colors capitalize`}
              >
                {section}
              </button>
            ))}

            <Link
              href="/team"
              className={`text-sm font-medium ${
                isActive ? "text-gray-800" : "text-white"
              } hover:text-sky-600 transition-colors`}
            >
              Team
            </Link>

            <Link
              href="/donate"
              className={`${
                isActive ? "bg-sky-600 text-white" : "bg-white text-sky-600"
              } font-medium px-4 py-2 rounded-lg hover:bg-sky-700 hover:text-white transition-colors`}
            >
              Donate Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
