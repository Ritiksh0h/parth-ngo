"use client";
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  DollarSign,
  Home,
  Heart,
  Building,
  Users,
  ArrowRight,
  Calendar,
  Target,
  Globe,
  HandHeart,
  ChevronRight,
  X,
} from "lucide-react";

export default function PathNGO() {
  const [showMembersModal, setShowMembersModal] = useState(false);
  const [showAnandamayeeModal, setShowAnandamayeeModal] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const executiveMembers = [
    {
      name: "MEGHALI DEKA",
      designation: "PRESIDENT",
      address: "H/NO. 06, ZOO NARENGI ROAD\nGUWAHATI-24",
      occupation: "BUSINESS",
    },
    {
      name: "ARABINDA DEKA",
      designation: "VICE PRESIDENT",
      address: "MADHABDEV NAGAR\nP.O. DEVOKOTANAGAR\nGUWAHATI-33, ASSAM",
      occupation: "BUSINESS",
    },
    {
      name: "CHAITALI D CHETRI",
      designation: "GEN. SECRETARY",
      address: "174, RAJGARH ROAD, 2ND FLOOR\nGUWAHATI-07",
      occupation: "BUSINESS",
    },
    {
      name: "NASIMA J DAS",
      designation: "ASST GEN. SECRETARY",
      address:
        "FLAT NO – 24\nANCHIT DEVRAJ MANSION\nH/NO-24, NABAGRAHA RD\nSILPUKHURI",
      occupation: "HOUSE-WIFE",
    },
    {
      name: "KRISHNA DAS DAM",
      designation: "TREASURER",
      address: "110, SHANTI NIWAS\nRAJGARH MAIN ROAD\nGUWAHATI-05",
      occupation: "TEACHER",
    },
    {
      name: "RIPA CHETRI",
      designation: "MEMBER",
      address: "110, SHANTI NIWAS\nRAJGARH MAIN ROAD\nGUWAHATI-05",
      occupation: "SERVICE",
    },
    {
      name: "KUSHAL BHASKAR",
      designation: "MEMBER",
      address: "C/O K.C. PAUL, H.NO.\n37/1, BY LANE NO. 3\nSHREE NAGAR, GHY-5",
      occupation: "SERVICE",
    },
  ];

  const generalMembers = [
    {
      name: "DR. PRADEEP KR DAM",
      designation: "Research Scholar",
      address:
        "D-156, Prithvi Raj Nagar\nNear Jhalamand circle\nSub PO: Jhalamand\nJodhpur- 342005, Rajasthan",
      occupation: "Retired Social Scientist in ICMR, Jodhpur",
    },
    {
      name: "DR. DEBASISH DEBNATH",
      designation: "Research Scholar",
      address:
        "Sagar Premium Towers\n2 (Home) Block No. A\nFlat No. 302, J.K. Hospital Road\n(Kolar Road) Bhopal - 462042\n(Madhya Pradesh)",
      occupation: "Assistant Professor, Indian Institute of Forest Management",
    },
    {
      name: "Dr. Sushil K Upadhyay",
      designation: "Research Scholar",
      address: "27, Vivekananda Ward\nYadav Colony, Jabalpur\nM.P- 482002",
      occupation: "Consultant Forest & Ethno Medicinal Plant, M.P.",
    },
    {
      name: "MANISHA BORKOTOKY",
      designation: "Project Associates",
      address: "Kushal path, new Amolapatty\nGolaghat -785621\nAssam",
      occupation: "Educational Advisor",
    },
    {
      name: "BIJON KUMAR BHATTACHARJEE",
      designation: "Auditor",
      address:
        "Krishna Market\nOpp. ASTC Busstand\nPaltanbazar, Guwahati-781008",
      occupation: "Chartered Accountant",
    },
    {
      name: "ABHIJIT BHATTACHARYA",
      designation: "Legal Advisor",
      address:
        "Triveni's Commercial Complex\nB-15, 3rd Floor, Bora Service\nG.S.Road, Guwahati\nMeghalaya & Tripura",
      occupation: "Advocate in High Court of Guwahati, Meghalaya & Tripura",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-orange-600"></div>
              <span className="font-bold text-xl text-gray-800">PATH</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm font-medium text-gray-800 hover:text-orange-600 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("impact")}
                className="text-sm font-medium text-gray-800 hover:text-orange-600 transition-colors"
              >
                Impact
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-sm font-medium text-gray-800 hover:text-orange-600 transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => setShowMembersModal(true)}
                className="text-sm font-medium text-gray-800 hover:text-orange-600 transition-colors"
              >
                Team
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm font-medium text-gray-800 hover:text-orange-600 transition-colors"
              >
                Contact
              </button>
              <button className="bg-orange-600 text-white font-medium px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors">
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16">
        <div className="absolute inset-0">
          <div
            className="w-full h-full bg-gradient-to-r from-gray-800/70 to-gray-800/70"
            style={{
              backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600" fill="%23667eea"><polygon points="0,600 1000,600 1000,0 0,200" opacity="0.1"/></svg>')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="mb-6 text-white border-white/30 bg-orange-600 px-4 py-2 rounded-full text-sm inline-block">
              ESTABLISHED 26TH JULY 2006 • 18+ YEARS OF SERVICE
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              PEOPLE&apos;S ADVANCEMENT THROUGH HELPING
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              A Non-Political, Non-Profitable & Secular Voluntary organization
              empowering communities across Assam through education, healthcare,
              cultural preservation, women empowerment, and sustainable
              development initiatives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 text-white font-semibold rounded-lg bg-orange-600 hover:bg-orange-700 transition-colors inline-flex items-center">
                Support Our Mission
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="px-8 py-3 text-white border border-white rounded-lg hover:bg-white hover:text-gray-800 transition-colors"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800">
              EMPOWERING DEPRESSED CLASSES,
              <span className="block text-orange-600">
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
                <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center bg-green-700">
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
                <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center bg-blue-700">
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
      <section id="impact" className="py-20 bg-green-700">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="mb-4 text-white border-white/30 bg-orange-600 px-4 py-2 rounded-full text-sm inline-block">
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl p-12 text-center bg-gradient-to-r from-orange-600/90 to-orange-600/90">
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
                <button className="px-8 py-3 bg-white text-orange-600 hover:bg-gray-100 font-semibold rounded-lg transition-colors">
                  DONATE NOW
                </button>
                <button
                  onClick={() => setShowAnandamayeeModal(true)}
                  className="px-8 py-3 text-white border border-white hover:bg-white hover:text-orange-600 rounded-lg transition-colors"
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
              OUR <span className="text-orange-600">PROGRAMS</span> & PROJECTS
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-gray-800">
              Comprehensive initiatives addressing community needs from elderly
              care to cultural preservation, education, and women empowerment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
              onClick={() => setShowAnandamayeeModal(true)}
            >
              <div className="h-48 bg-gradient-to-r from-orange-400 to-orange-600 relative">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
                <div className="absolute top-4 left-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm">
                  ELDERLY CARE
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2 text-gray-800">
                  ANANDAMAYEE HOME: A TRANQUIL NEST FOR OLD PEOPLE
                </h3>
                <p className="text-sm mb-4 text-gray-800">
                  Providing dignified care, cultural activities, health
                  check-ups, and celebrating festivals like Bihu and Holi with
                  elderly residents since October 27, 2023.
                </p>
                <div className="flex items-center text-sm text-blue-600">
                  <span>Learn more about our elderly care</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
              <div className="h-48 bg-gradient-to-r from-green-400 to-green-600 relative">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
                <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                  EDUCATION
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2 text-gray-800">
                  FREE COACHING & LITERACY PROGRAMS
                </h3>
                <p className="text-sm mb-4 text-gray-800">
                  Educational development for unemployed youth, especially in
                  rural areas. Free coaching programs and social welfare
                  services to remove illiteracy.
                </p>
                <div className="flex items-center text-sm text-blue-600">
                  <span>Discover our education initiatives</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
              <div className="h-48 bg-gradient-to-r from-yellow-400 to-yellow-500 relative">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
                <div className="absolute top-4 left-4 bg-yellow-500 text-gray-800 px-3 py-1 rounded-full text-sm">
                  CULTURAL HERITAGE
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2 text-gray-800">
                  SATRIYA DANCE & CULTURAL PRESERVATION
                </h3>
                <p className="text-sm mb-4 text-gray-800">
                  Empaneled with North East Zone Cultural Center, organizing
                  Satriya dance workshops across different districts of Assam to
                  preserve traditional arts.
                </p>
                <div className="flex items-center text-sm text-blue-600">
                  <span>Explore cultural programs</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
              <div className="h-48 bg-gradient-to-r from-red-400 to-red-600 relative">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm">
                  DISASTER RELIEF
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2 text-gray-800">
                  FLOOD RELIEF & REHABILITATION
                </h3>
                <p className="text-sm mb-4 text-gray-800">
                  Emergency response during floods in Nagaon 2023,
                  rehabilitation programs for street children, orphans, and old
                  helpless people during natural calamities.
                </p>
                <div className="flex items-center text-sm text-blue-600">
                  <span>See our disaster response</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
              <div className="h-48 bg-gradient-to-r from-blue-400 to-blue-600 relative">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  HEALTHCARE
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2 text-gray-800">
                  HEALTH AWARENESS & CHECK-UP CAMPS
                </h3>
                <p className="text-sm mb-4 text-gray-800">
                  Social awareness programs on AIDS, Cancer, TB, and Polio.
                  Regular health check-up camps ensuring preventive healthcare
                  reaches every community.
                </p>
                <div className="flex items-center text-sm text-blue-600">
                  <span>Learn about health programs</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
              <div className="h-48 bg-gradient-to-r from-purple-400 to-purple-600 relative">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
                <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                  WOMEN EMPOWERMENT
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2 text-gray-800">
                  HANDLOOM & HANDICRAFTS TRAINING
                </h3>
                <p className="text-sm mb-4 text-gray-800">
                  Empaneled with Development Commissioner (Handicrafts),
                  organizing expos and training in weaving, cutting, embroidery
                  for men, women and youth in rural areas.
                </p>
                <div className="flex items-center text-sm text-blue-600">
                  <span>See empowerment programs</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-800">
                EMPOWERMENT THROUGH
                <span className="block text-orange-600">
                  WOMEN & CHILDREN DEVELOPMENT
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-orange-600 text-white p-4">
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
                <div className="bg-green-700 text-white p-4">
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
      <section id="contact" className="py-20 bg-green-700">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                GET INVOLVED – TAKE{" "}
                <span className="text-yellow-400">ACTION</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center bg-yellow-400">
                  <DollarSign className="w-8 h-8 text-gray-800" />
                </div>
                <h3 className="font-bold text-white mb-2">
                  TAX BENEFITS AVAILABLE
                </h3>
                <p className="text-white/80 text-sm">
                  80G Tax exemption, CSR eligible, and FCRA registered for
                  donations.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center bg-yellow-400">
                  <Users className="w-8 h-8 text-gray-800" />
                </div>
                <h3 className="font-bold text-white mb-2">JOIN OUR PROGRAMS</h3>
                <p className="text-white/80 text-sm">
                  Volunteer in our cultural, education, and healthcare
                  initiatives.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center bg-yellow-400">
                  <HandHeart className="w-8 h-8 text-gray-800" />
                </div>
                <h3 className="font-bold text-white mb-2">
                  SUPPORT ANANDAMAYEE HOME
                </h3>
                <p className="text-white/80 text-sm">
                  Help fund our elderly care project and make an immediate
                  impact.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-gray-800">
                    CONTACT PATH NGO
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 mt-1 text-orange-600" />
                      <div>
                        <p className="font-medium text-gray-800">Address</p>
                        <p className="text-sm text-gray-800">
                          26, Bhaskar Nagar, R.G. Baruah Road
                          <br />
                          Near Bhaskar Vidyapith School
                          <br />
                          Guwahati - 781021, Assam
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 mt-1 text-orange-600" />
                      <div>
                        <p className="font-medium text-gray-800">
                          Phone Numbers
                        </p>
                        <p className="text-sm text-gray-800">
                          Office: 0361-2956699
                          <br />
                          Mobile: +91 94351 18741
                          <br />
                          +91 60032 58678
                          <br />
                          +91 94351 13659
                          <br />
                          +91 87239 34693
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 mt-1 text-orange-600" />
                      <div>
                        <p className="font-medium text-gray-800">Email</p>
                        <p className="text-sm text-gray-800">
                          ngo_people@yahoo.in
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                  />
                  <button className="w-full bg-orange-600 text-white font-semibold py-3 rounded-lg hover:bg-orange-700 transition-colors">
                    SUBSCRIBE TO NEWSLETTER
                  </button>
                  <div className="text-center mt-4">
                    <p className="text-sm text-gray-800">
                      <strong>Registration:</strong> KAM/240/A-3/439 of 2006
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-orange-600"></div>
              <span className="font-bold text-xl text-white">PATH</span>
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
              &copy; 2024 PATH NGO. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Members Modal */}
      {showMembersModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-orange-600">
                Our Team Members
              </h2>
              <button
                onClick={() => setShowMembersModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-green-700">
                  Executive Body Members
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {executiveMembers.map((member, index) => (
                    <div
                      key={index}
                      className="bg-white border rounded-lg p-4 text-center shadow-sm"
                    >
                      <div className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-3 bg-orange-600">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <h4 className="font-semibold text-gray-800">
                        {member.name}
                      </h4>
                      <p className="font-medium text-sm text-orange-600">
                        {member.designation}
                      </p>
                      <p className="text-xs mt-2 whitespace-pre-line text-gray-800">
                        {member.address}
                      </p>
                      <p className="text-xs mt-1 text-gray-800">
                        <strong>Occupation:</strong> {member.occupation}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-green-700">
                  General Body Members (Resource Persons)
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {generalMembers.map((member, index) => (
                    <div
                      key={index}
                      className="bg-white border rounded-lg p-4 text-center shadow-sm"
                    >
                      <div className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-3 bg-orange-600">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <h4 className="font-semibold text-gray-800">
                        {member.name}
                      </h4>
                      <p className="font-medium text-sm text-orange-600">
                        {member.designation}
                      </p>
                      <p className="text-xs mt-2 whitespace-pre-line text-gray-800">
                        {member.address}
                      </p>
                      <p className="text-xs mt-1 text-gray-800">
                        <strong>Occupation:</strong> {member.occupation}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Anandamayee Home Modal */}
      {showAnandamayeeModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-orange-600 flex items-center gap-2">
                <Home className="w-6 h-6" />
                Anandamayee Home - A Tranquil Nest for Old People
              </h2>
              <button
                onClick={() => setShowAnandamayeeModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="text-center">
                <div className="inline-block text-white px-6 py-3 rounded-lg bg-orange-600">
                  <strong>Established: 27th October 2023</strong>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white border rounded-lg overflow-hidden shadow-sm">
                  <div className="bg-orange-600 text-white p-4">
                    <h3 className="text-lg font-semibold">
                      🇮🇳 Independence Day 2023
                    </h3>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-800">
                      Patriotic celebrations with residents participating in
                      cultural programs, flag hoisting, and traditional
                      festivities that brought joy and national pride to
                      everyone.
                    </p>
                  </div>
                </div>

                <div className="bg-white border rounded-lg overflow-hidden shadow-sm">
                  <div className="bg-green-700 text-white p-4">
                    <h3 className="text-lg font-semibold">
                      🌊 Flood Relief - Nagaon 2023
                    </h3>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-800">
                      Our team organized flood relief activities, providing
                      essential supplies and support to affected families during
                      the natural disaster in Nagaon district.
                    </p>
                  </div>
                </div>

                <div className="bg-white border rounded-lg overflow-hidden shadow-sm">
                  <div className="bg-blue-600 text-white p-4">
                    <h3 className="text-lg font-semibold">
                      📚 Free Coaching Program
                    </h3>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-800">
                      Educational support for underprivileged children, helping
                      them build a better future through mentorship and quality
                      education alongside our elderly care mission.
                    </p>
                  </div>
                </div>

                <div className="bg-white border rounded-lg overflow-hidden shadow-sm">
                  <div className="bg-orange-600 text-white p-4">
                    <h3 className="text-lg font-semibold">
                      🩺 Health Check-up Camps
                    </h3>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-800">
                      Regular medical check-ups for residents and community
                      members, ensuring preventive healthcare and medical
                      attention from qualified professionals.
                    </p>
                  </div>
                </div>

                <div className="bg-white border rounded-lg overflow-hidden shadow-sm">
                  <div className="bg-yellow-500 text-gray-800 p-4">
                    <h3 className="text-lg font-semibold">
                      🎊 Bihu Celebration
                    </h3>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-800">
                      Traditional Assamese New Year celebrations with music,
                      dance, delicious cuisine, and cultural programs that
                      strengthen community bonds and bring joy to elderly
                      residents.
                    </p>
                  </div>
                </div>

                <div className="bg-white border rounded-lg overflow-hidden shadow-sm">
                  <div className="bg-green-700 text-white p-4">
                    <h3 className="text-lg font-semibold">
                      🌈 Holi Celebration
                    </h3>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-800">
                      Festival of colors bringing boundless joy to elderly
                      residents with colorful celebrations, creating lasting
                      memories and happiness in their golden years.
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center p-8 rounded-xl bg-gray-50">
                <h3 className="text-xl font-semibold mb-4 text-orange-600">
                  Support Our Mission - Funding Needed
                </h3>
                <p className="mb-4 text-gray-800">
                  Help us continue providing love, care, and dignity to elderly
                  people in our community. We are seeking funding to expand
                  Anandamayee Home before the end of this year. Your support
                  enables us to reach more seniors in need.
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-sm mb-4">
                  <div>
                    <strong className="text-orange-600">Tax Benefits:</strong>
                    <br />
                    80G Tax Exemption Available
                  </div>
                  <div>
                    <strong className="text-orange-600">CSR Eligible:</strong>
                    <br />
                    Corporate Funding Welcome
                  </div>
                  <div>
                    <strong className="text-orange-600">
                      FCRA Registered:
                    </strong>
                    <br />
                    International Donations Accepted
                  </div>
                </div>
                <div className="font-semibold text-orange-600">
                  🤝 Partner with us in making a difference 🤝
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
