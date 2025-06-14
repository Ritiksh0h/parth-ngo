"use client";
import {
  Phone,
  Mail,
  MapPin,
  Heart,
  Building,
  Users,
  Calendar,
  Target,
  Globe,
  HandHeart,
} from "lucide-react";
import Hero from "@/components/Hero";
import { ServiceCard } from "@/components/ProgramsCard";
import { program } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export default function PathNGO() {
  return (
    <div className="min-h-screen">
      <Hero />
      <section className="bg-gradient-to-r from-sky-100 to-sky-50 py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-sky-800 mb-4">
              Anandamayee Home – A Safe Haven for the Elderly
            </h2>
            <p className="text-gray-700 mb-6">
              Help us provide dignity, care, and community to abandoned and
              elderly individuals. Since October 2023, Anandamayee Home has
              served as a refuge for those in need – celebrating festivals,
              providing meals, medical care, and most importantly, compassion.
            </p>
            <ul className="mb-6 space-y-2 text-sm text-gray-600 list-disc pl-5">
              <li>Daily meals and healthcare support</li>
              <li>Cultural celebrations: Bihu, Holi & more</li>
              <li>Physical, emotional, and spiritual care</li>
            </ul>
            <div className="flex items-center gap-4">
              <Link
                href="/anandamayee-home"
                className="px-6 py-3 bg-sky-700 text-white rounded-xl shadow hover:bg-sky-800 transition"
              >
                Learn More
              </Link>
              <Link
                href="/donate"
                className="px-6 py-3 border border-sky-700 text-sky-700 rounded-xl hover:bg-sky-100 transition"
              >
                Donate Now
              </Link>
            </div>
          </div>
          <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/Anandamayee_Home.jpg"
              alt="Anandamayee Home"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </section>
      {/* Mission Statement */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800">
              EMPOWERING DEPRESSED CLASSES,
              <span className="block text-sky-600">
                ESPECIALLY WOMEN & CHILDREN
              </span>
            </h2>
            <p className="text-lg leading-relaxed mb-12 text-gray-800">
              Our mission is to make community wellbeing in Health, Education
              and Livelihood towards enlightenment and empowerment through
              Research, Consultancy, Training & Extension, and Development in
              various sectors with Legal Aid support.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center bg-lime-700">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2 text-gray-800">
                  HEALTH & EDUCATION
                </h3>
                <p className="text-sm text-gray-800">
                  Community wellbeing through comprehensive healthcare and
                  educational programs
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center bg-yellow-500">
                  <Globe className="w-8 h-8 text-gray-800" />
                </div>
                <h3 className="font-semibold mb-2 text-gray-800">
                  CULTURAL PRESERVATION
                </h3>
                <p className="text-sm text-gray-800">
                  Preserving Assamese heritage through Satriya dance and
                  handicrafts
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center bg-sky-700">
                  <HandHeart className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2 text-gray-800">
                  WOMEN EMPOWERMENT
                </h3>
                <p className="text-sm text-gray-800">
                  Vocational training in weaving, cutting, embroidery for rural
                  women
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section id="impact" className="py-20 bg-lime-700">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="mb-4 text-black border-white/30 bg-white/70 px-4 py-2 rounded-full text-sm inline-block">
              OUR IMPACT SINCE 2006
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              TRANSFORMING COMMUNITIES
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="mb-4">
                <Users className="w-12 h-12 text-white mx-auto mb-2" />
                <div className="text-4xl font-bold text-white">1,000+</div>
                <div className="text-white/80">PEOPLE REACHED</div>
              </div>
              <p className="text-sm text-white/70">
                Community members impacted through our programs
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4">
                <Heart className="w-12 h-12 text-white mx-auto mb-2" />
                <div className="text-4xl font-bold text-white">15+</div>
                <div className="text-white/80">ACTIVE PROGRAMS</div>
              </div>
              <p className="text-sm text-white/70">
                Ongoing programs across education, healthcare, and development
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4">
                <Building className="w-12 h-12 text-white mx-auto mb-2" />
                <div className="text-4xl font-bold text-white">7</div>
                <div className="text-white/80">GOVT REGISTRATIONS</div>
              </div>
              <p className="text-sm text-white/70">
                Including 80G, 12AA, FCRA, CSR, and NITI Aayog
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4">
                <Calendar className="w-12 h-12 text-white mx-auto mb-2" />
                <div className="text-4xl font-bold text-white">18+</div>
                <div className="text-white/80">YEARS OF SERVICE</div>
              </div>
              <p className="text-sm text-white/70">
                Dedicated service since July 26, 2006
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative bg-cover bg-center">
        <div className="absolute inset-0">
          <Image
            src="/health_camp_2.jpg"
            alt="Elderly Care"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-gray-700/70" />
        <div className="container mx-auto px-4 z-20">
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl p-12 text-center bg-gradient-to-r from-sky-600/90 to-sky-600/90">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                SUPPORT ANANDAMAYEE HOME
                <br />
                ELDERLY CARE PROJECT
              </h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                Help us provide dignified care, cultural activities, and
                healthcare services for elderly people in our community.
                Established October 2023, seeking funding for expansion.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-white text-sky-600 hover:bg-gray-100 font-semibold rounded-lg transition-colors">
                  DONATE NOW
                </button>
                <button
                  // onClick={() => setShowAnandamayeeModal(true)}
                  className="px-8 py-3 text-white border border-white hover:bg-white hover:text-sky-600 rounded-lg transition-colors"
                >
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              OUR <span className="text-sky-600">PROGRAMS</span> & PROJECTS
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-gray-800">
              Comprehensive initiatives addressing community needs from elderly
              care to cultural preservation, education, and women empowerment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {program.map((program, index) => (
              <ServiceCard
                key={index}
                category={program.category}
                categoryColor={program.categoryColor}
                gradientFrom={program.gradientFrom}
                gradientTo={program.gradientTo}
                title={program.title}
                description={program.description}
                actionText={program.actionText}
                image={program.image}
                href={program.href}
                Gallery={program.Gallery}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-[url(/free_coaching.jpg)] relative bg-cover bg-center"
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-gray-700/70 z-0" />

        {/* Main content wrapper with higher z-index */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Title */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-white">
                EMPOWERMENT THROUGH
                <span className="block text-sky-400">
                  WOMEN & CHILDREN DEVELOPMENT
                </span>
              </h2>
            </div>

            {/* Vision & Mission cards */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-sky-600 text-white p-4">
                  <h3 className="text-xl font-semibold">🎯 Our Vision</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-800">
                    To have an enlightened society with empowerment of depressed
                    classes and victims, especially Women & Children.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-lime-700 text-white p-4">
                  <h3 className="text-xl font-semibold">🚀 Our Mission</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-800">
                    To make community wellbeing in Health, Education and
                    Livelihood towards enlightenment and empowerment through
                    Research, Consultancy, Training & Extension, and Development
                    with Legal Aid support.
                  </p>
                </div>
              </div>
            </div>

            {/* Recognition section */}
            <div className="relative rounded-2xl p-12 bg-gradient-to-r from-gray-800/80 to-gray-800/80 text-white">
              <div className="max-w-2xl">
                <h3 className="text-2xl font-bold mb-4">
                  GOVERNMENT RECOGNITION & REGISTRATIONS
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <ul className="space-y-2">
                    <li>• Section 12AA of Income Tax Act 1961</li>
                    <li>• Section 80G (5) of Income Tax Act 1961</li>
                    <li>• FCRA 2010 - Ministry of Home Affairs</li>
                    <li>• CSR Activities - Ministry of Corporate Affairs</li>
                  </ul>
                  <ul className="space-y-2">
                    <li>• NITI Aayog, Government of India</li>
                    <li>• North East Zone Cultural Center Empaneled</li>
                    <li>• Development Commissioner (Handicrafts) Empaneled</li>
                    <li>• Society Registration Act XXI of 1860</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
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
    </div>
  );
}
