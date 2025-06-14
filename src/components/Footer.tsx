import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo_path_ritik.png"
                alt="Path NGO Logo"
                width={150}
                height={150}
                className="rounded-sm cursor-pointer"
              />
            </Link>
          </div>
          <p className="text-white/80 mb-2">
            People&apos;s Advancement Through Helping
          </p>
          <p className="text-white/60 text-sm mb-4">
            Registered under Society Registration Act, XXI of 1860 |
            Registration No. KAM/240/A-3/439 of 2006
          </p>
          <p className="text-white/60 text-sm mb-6">
            80G & 12AA Certified | CSR Eligible | FCRA Registered | NITI Aayog
            Empaneled
          </p>
          <p className="text-white/50 text-sm">
            &copy; 2024 PATH NGO. All rights reserved. designed by{" "}
            <Link href="https://ritikshah.vercel.app">Ritik Shah</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
