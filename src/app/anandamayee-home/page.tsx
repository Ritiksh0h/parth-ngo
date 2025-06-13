"use client";

import Image from "next/image";
import SubPageHeader from "@/components/SubPageHeader";

export default function AnandamayeeHomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SubPageHeader title="Anandamayee Home - A Tranquil Nest for Old People" />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Hero Section */}
          <div className="relative rounded-xl overflow-hidden h-64 md:h-96">
            <Image
              src="https://images.unsplash.com/photo-1581579438747-104c53495b52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
              alt="Elderly care"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-sky-600/80 to-sky-600/60"></div>
            <div className="absolute inset-0 flex items-center justify-center flex-col text-white p-6">
              <div className="inline-block text-white px-6 py-3 rounded-lg bg-sky-600/80 backdrop-blur-sm mb-4">
                <strong>Established: 27th October 2023</strong>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-center">
                A Tranquil Nest for Old People
              </h2>
            </div>
          </div>

          {/* About Section */}
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-sky-600">
              About Anandamayee Home
            </h2>
            <p className="text-gray-700 mb-6">
              Anandamayee Home is our flagship elderly care project established
              on October 27, 2023. The project aims to provide dignified care,
              cultural activities, and healthcare services for elderly people in
              our community. Our mission is to create a loving, supportive
              environment where seniors can enjoy their golden years with
              dignity, joy, and proper care.
            </p>
            <p className="text-gray-700">
              We organize regular health check-ups, cultural programs, and
              celebrate festivals to ensure the physical and emotional wellbeing
              of our elderly residents. The project is currently seeking funding
              for expansion to reach more seniors in need.
            </p>
          </div>

          {/* Activities Grid */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-sky-600">
              Our Activities
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white border rounded-lg overflow-hidden shadow-sm">
                <div className="bg-sky-600 text-white p-4">
                  <h3 className="text-lg font-semibold">
                    🇮🇳 Independence Day 2023
                  </h3>
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-800">
                    Patriotic celebrations with residents participating in
                    cultural programs, flag hoisting, and traditional
                    festivities that brought joy and national pride to everyone.
                  </p>
                </div>
              </div>

              <div className="bg-white border rounded-lg overflow-hidden shadow-sm">
                <div className="bg-lime-700 text-white p-4">
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
                <div className="bg-blue-800 text-white p-4">
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
                <div className="bg-sky-600 text-white p-4">
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
                  <h3 className="text-lg font-semibold">🎊 Bihu Celebration</h3>
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
                <div className="bg-lime-700 text-white p-4">
                  <h3 className="text-lg font-semibold">🌈 Holi Celebration</h3>
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
          </div>

          {/* Support Section */}
          <div className="text-center p-8 rounded-xl bg-sky-50 border border-sky-100">
            <h3 className="text-2xl font-bold mb-4 text-sky-600">
              Support Our Mission - Funding Needed
            </h3>
            <p className="mb-6 text-gray-800 max-w-3xl mx-auto">
              Help us continue providing love, care, and dignity to elderly
              people in our community. We are seeking funding to expand
              Anandamayee Home before the end of this year. Your support enables
              us to reach more seniors in need.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-600 mb-8 max-w-3xl mx-auto">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <strong className="text-sky-600 block mb-2">
                  Tax Benefits:
                </strong>
                80G Tax Exemption Available
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <strong className="text-sky-600 block mb-2">
                  CSR Eligible:
                </strong>
                Corporate Funding Welcome
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <strong className="text-sky-600 block mb-2">
                  FCRA Registered:
                </strong>
                International Donations Accepted
              </div>
            </div>
            <div className="font-semibold text-sky-600 text-lg">
              🤝 Partner with us in making a difference 🤝
            </div>
            <button className="mt-6 px-8 py-3 bg-sky-600 text-white hover:bg-sky-700 font-semibold rounded-lg transition-colors">
              DONATE NOW
            </button>
          </div>

          {/* Contact Section */}
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold mb-6 text-sky-600">
              Contact Us About Anandamayee Home
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 mb-4">
                  For more information about Anandamayee Home, volunteering
                  opportunities, or to arrange a visit, please contact us:
                </p>
                <p className="text-gray-700">
                  <strong>Phone:</strong> +91 94351 18741
                  <br />
                  <strong>Email:</strong> ngo_people@yahoo.in
                  <br />
                  <strong>Address:</strong> 26, Bhaskar Nagar, R.G. Baruah Road,
                  Guwahati - 781021, Assam
                </p>
              </div>
              <div>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 border text-black placeholder:text-gray-400 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 border text-black placeholder:text-gray-400 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full p-3 border text-black placeholder:text-gray-400 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600"
                  ></textarea>
                  <button className="w-full bg-sky-600 text-white font-semibold py-3 rounded-lg hover:bg-sky-700 transition-colors">
                    SEND MESSAGE
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
