"use client";

import {
  Phone,
  Mail,
  MapPin,
  Heart,
  Users,
  Home,
  GraduationCap,
  Target,
} from "lucide-react";
import Image from "next/image";

export default function DonatePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden h-64 md:h-[600px]">
        <Image
          src="/anandamayee_home.jpg"
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
                {/* Contact Information */}
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-3">
                    <Phone className="w-6 h-6 text-sky-600" />
                    Get in Touch
                  </h3>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <MapPin className="w-5 h-5 text-sky-600" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 mb-1">Address</p>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          26, Bhaskar Nagar, R.G. Baruah Road
                          <br />
                          Near Bhaskar Vidyapith School
                          <br />
                          Guwahati - 781021, Assam
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <Phone className="w-5 h-5 text-sky-600" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 mb-1">
                          Phone Numbers
                        </p>
                        <div className="text-gray-700 text-sm space-y-1">
                          <p>
                            <span className="font-medium">Office:</span>{" "}
                            0361-2956699
                          </p>
                          <p>
                            <span className="font-medium">Mobile:</span> +91
                            94351 18741
                          </p>
                          <p>
                            <span className="font-medium">Mobile:</span> +91
                            60032 58678
                          </p>
                          <p>
                            <span className="font-medium">Mobile:</span> +91
                            94351 13659
                          </p>
                          <p>
                            <span className="font-medium">Mobile:</span> +91
                            87239 34693
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <Mail className="w-5 h-5 text-sky-600" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 mb-1">Email</p>
                        <p className="text-gray-700 text-sm">
                          ngo_people@yahoo.in
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href="tel:+919435118741"
                      className="px-6 py-3 bg-sky-600 text-white rounded-lg font-medium hover:bg-sky-700 transition-colors"
                    >
                      Call Now
                    </a>
                    <a
                      href="mailto:ngo_people@yahoo.in"
                      className="px-6 py-3 bg-lime-700 text-white rounded-lg font-medium hover:bg-lime-800 transition-colors"
                    >
                      Send Email
                    </a>
                  </div>
                </div>

                {/* Why Donate Section */}
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-3">
                    <Heart className="w-6 h-6 text-red-500" />
                    Why Your Support Matters
                  </h3>

                  <div className="space-y-4 mb-8">
                    <div className="border-l-4 border-sky-500 pl-4">
                      <h4 className="font-bold text-gray-900">
                        Anandamayee Home
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Providing dignified care and support for elderly
                        residents since October 2023
                      </p>
                    </div>
                    <div className="border-l-4 border-lime-500 pl-4">
                      <h4 className="font-bold text-gray-900">
                        Community Development
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Empowering women and children through education and
                        skill development
                      </p>
                    </div>
                    <div className="border-l-4 border-yellow-500 pl-4">
                      <h4 className="font-bold text-gray-900">
                        Healthcare Programs
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Regular health check-ups and medical support for the
                        underprivileged
                      </p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-bold text-gray-900">
                        Cultural Preservation
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Preserving Assamese heritage through traditional arts
                        and crafts
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-sky-50 to-lime-50 p-6 rounded-lg border border-sky-200">
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <Target className="w-5 h-5 text-sky-600" />
                      Government Recognition
                    </h4>
                    <div className="text-sm text-gray-700 space-y-1">
                      <p>✓ 80G Tax Exemption Available</p>
                      <p>✓ FCRA Registered for International Donations</p>
                      <p>✓ CSR Eligible for Corporate Funding</p>
                      <p>✓ NITI Aayog Registered</p>
                    </div>
                  </div>
                </div>
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
