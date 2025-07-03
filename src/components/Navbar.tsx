"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { scrollToSection } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  // Close mobile menu when pathname changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const isActive = pathname === "/" ? isScrolled : true;

  const handleSectionClick = (section: string) => {
    scrollToSection(section);
    setIsMobileMenuOpen(false); // Close mobile menu after clicking
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isActive
            ? "bg-white backdrop-blur-sm shadow-sm"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logo_path.png"
                alt="Path NGO Logo"
                width={150}
                height={150}
                className="rounded-sm cursor-pointer"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {["about", "impact", "projects", "contact"].map((section) => (
                <Link
                  key={section}
                  href={"#" + section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium ${
                    isActive ? "text-gray-800" : "text-white"
                  } hover:text-sky-600 transition-colors capitalize`}
                >
                  {section}
                </Link>
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

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isActive
                  ? "text-gray-800 hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-xl"
            >
              {/* Menu Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
                  aria-label="Close mobile menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Menu Items */}
              <div className="flex flex-col p-4 space-y-4">
                {["about", "impact", "projects", "contact"].map((section) => (
                  <button
                    key={section}
                    onClick={() => handleSectionClick(section)}
                    className="text-left text-lg font-medium text-gray-800 hover:text-sky-600 transition-colors capitalize py-2 px-3 rounded-lg hover:bg-gray-50"
                  >
                    {section}
                  </button>
                ))}

                <Link
                  href="/team"
                  className="text-lg font-medium text-gray-800 hover:text-sky-600 transition-colors py-2 px-3 rounded-lg hover:bg-gray-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Team
                </Link>

                {/* Mobile Donate Button */}
                <div className="pt-4 border-t border-gray-200">
                  <Link
                    href="/donate"
                    className="block w-full bg-sky-600 text-white font-medium px-4 py-3 rounded-lg hover:bg-sky-700 transition-colors text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Donate Now
                  </Link>
                </div>
              </div>

              {/* Menu Footer */}
              <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-gray-50">
                <p className="text-sm text-gray-600 text-center">
                  Making a difference together
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
