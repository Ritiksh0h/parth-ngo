"use client";

import Image from "next/image";
import SubPageHeader from "@/components/SubPageHeader";
import { EventCard } from "@/components/EventCard";

export default function AnandamayeeHomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SubPageHeader title="Anandamayee Home - A Tranquil Nest for Old People" />
      {/* Hero Section */}
      <div className="relative overflow-hidden h-64 md:h-[600px]">
        <Image
          src="/Anandamayee_Home.jpg"
          alt="Elderly care"
          width={1920}
          height={900}
          className="object-cover w-full h-full absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-600/60 to-gray-600/40"></div>
        <div className="absolute inset-0 flex items-center justify-center flex-col text-white p-6">
          <div className="inline-block text-white px-4 py-2 rounded-lg bg-sky-600/80 backdrop-blur-sm mb-2">
            <strong>Established: 27th October 2023</strong>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Anandamayee Home
          </h2>
          <p className="text-lg md:text-xl text-center max-w-2xl">
            A Tranquil Nest for Old People
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto space-y-12">
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
          {/* Activities Section */}
          <h2 className="text-2xl font-bold mb-6 text-sky-600">
            Our Activities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <EventCard
              title="🌈 Holi Celebration"
              image="/Holi_AH_1.jpg"
              description="The festival of colors brought boundless joy to our elderly residents, creating cherished memories through vibrant celebrations and shared happiness in their golden years."
              Gallery={["/Holi_AH_1.jpg", "/Holi_AH_2.jpg"]}
            />

            <EventCard
              title="🎊 Bihu Celebration"
              image="/Bihu_AH_1.jpg"
              description="Traditional Assamese New Year celebrations with music, dance, delicious cuisine, and cultural programs that strengthen community bonds and bring joy to elderly residents."
              Gallery={["/Bihu_AH_1.jpg", "/Bihu_AH_2.JPG"]}
            />

            <EventCard
              title="🩺 Health Check-up Camps"
              image="/Healthcheckup_AH_2.jpg"
              description="Regular medical check-ups for residents and community members, ensuring preventive healthcare and medical attention from qualified professionals."
              Gallery={["/Healthcheckup_AH_1.JPG", "/Healthcheckup_AH_2.JPG"]}
            />
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
          </div>
        </div>
      </div>
    </div>
  );
}
