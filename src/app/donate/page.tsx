"use client";

import ContactUs from "@/components/ContactUs";
import WhyDonateCard from "@/components/WhyDonateCard";
import { Users, Home, GraduationCap } from "lucide-react";
import Image from "next/image";

export default function DonatePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden h-64 md:h-[600px]">
        <Image
          src="/Anandamayee_Home.jpg"
          alt="PATH NGO Donation"
          width={1920}
          height={900}
          className="object-cover w-full h-full absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-600/60 to-gray-600/40"></div>
        <div className="absolute inset-0 flex items-center justify-center flex-col text-white p-6">
          <div className="inline-block text-white px-4 py-2 rounded-lg bg-sky-600/80 backdrop-blur-sm mb-2">
            <strong>Make a Difference Today</strong>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Support PATH NGO
          </h1>
          <p className="text-lg md:text-xl text-center max-w-3xl">
            Your donation helps us continue our mission of empowering
            communities, supporting the elderly, and creating positive change in
            Assam
          </p>
        </div>
      </div>

      {/* Impact Section */}
      <section className="bg-gradient-to-r from-sky-100 to-sky-50 py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-sky-800 mb-8">
            Your Impact Matters
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center bg-lime-700">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2 text-sky-800">
                1000+ Lives Impacted
              </h3>
              <p className="text-sm text-gray-700">
                Community members reached through our programs
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center bg-yellow-500">
                <Home className="w-8 h-8 text-gray-800" />
              </div>
              <h3 className="font-semibold mb-2 text-sky-800">
                Anandamayee Home
              </h3>
              <p className="text-sm text-gray-700">
                Safe haven for elderly care and support
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center bg-sky-700">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2 text-sky-800">
                Community Programs
              </h3>
              <p className="text-sm text-gray-700">
                Education, healthcare, and development initiatives
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[url(https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] relative bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-gray-700/70" />
        <div className="container mx-auto px-4 z-20">
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl p-12 text-center bg-gradient-to-r from-sky-600/90 to-sky-600/90">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                SUPPORT OUR MISSION
                <br />
                <span className="text-yellow-400">MAKE A DIFFERENCE TODAY</span>
              </h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                Your generous donations help us continue our vital work in
                community development, elderly care, and empowering women and
                children across Assam.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-sm text-white/90 mb-8 max-w-3xl mx-auto">
                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                  <strong className="block mb-2">Tax Benefits:</strong>
                  80G Tax Exemption Available
                </div>
                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                  <strong className="block mb-2">CSR Eligible:</strong>
                  Corporate Funding Welcome
                </div>
                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                  <strong className="block mb-2">FCRA Registered:</strong>
                  International Donations Accepted
                </div>
              </div>
              <div className="font-semibold text-yellow-400 text-lg mb-6">
                🤝 Partner with us in making a difference 🤝
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Donations */}
      <section className="py-20 bg-lime-700">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                CONTACT US FOR{" "}
                <span className="text-yellow-400">DONATIONS</span>
              </h2>
              <p className="text-white/90 max-w-2xl mx-auto">
                Ready to make a difference? Contact us through any of the
                methods below to discuss your donation or learn more about our
                programs.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-12">
                <ContactUs />
                <WhyDonateCard />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-gradient-to-r from-sky-600 to-sky-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Together, We Can Transform Lives
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Every donation, no matter the size, helps us continue our mission of
            serving the community, caring for the elderly, and empowering women
            and children across Assam.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+919435118741"
              className="px-8 py-3 bg-white text-sky-600 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Call to Donate: +91 94351 18741
            </a>
            <a
              href="mailto:ngo_people@yahoo.in"
              className="px-8 py-3 bg-white bg-opacity-20 text-sky-600 rounded-lg font-bold hover:bg-opacity-30 transition-colors border border-white border-opacity-30"
            >
              Email: ngo_people@yahoo.in
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
