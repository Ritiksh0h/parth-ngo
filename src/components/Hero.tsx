import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { scrollToSection } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/dance_workshop.jpg"
          alt="Path NGO Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* SVG Overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 600' fill='%23667eea'><polygon points='0,600 1000,600 1000,0 0,200' opacity='0.1'/></svg>")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-gray-700/70 z-20"></div>

      {/* Content */}
      <div className="relative z-30 container mx-auto px-4">
        <div className="max-w-3xl">
          <div className="mb-6 text-white border-white/30 bg-gradient-to-r from-sky-700 to-sky-500 px-4 py-2 rounded-full text-xs md:text-sm inline-block">
            ESTABLISHED 26TH JULY 2006 • 18+ YEARS OF SERVICE
          </div>
          <h1 className="text-3xl md:text-7xl font-bold text-white mb-6 leading-tight">
            PEOPLE&apos;S ADVANCEMENT THROUGH HELPING
          </h1>
          <p className="text-lg text-white/90 mb-8 leading-relaxed md:text-xl">
            A Non-Political, Non-Profitable & Secular Voluntary organization
            empowering communities across Assam through education, healthcare,
            cultural preservation, women empowerment, and sustainable
            development initiatives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 cursor-pointer text-white font-semibold rounded-lg bg-sky-600 hover:bg-sky-700 transition-colors inline-flex items-center">
              Support Our Mission
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="px-8 py-3 cursor-pointer text-sky-600 border border-sky-600 rounded-lg hover:bg-white hover:text-gray-800 transition-colors"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
