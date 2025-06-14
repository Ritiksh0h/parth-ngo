"use client";

import { Home, Phone, ArrowLeft, Search, Heart, Users } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-lime-50">
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* 404 Visual */}
          <div className="mb-12">
            <div className="text-8xl md:text-9xl font-bold text-sky-200 mb-4">
              404
            </div>
            <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-r from-sky-600 to-sky-700 rounded-full flex items-center justify-center">
              <Search className="w-12 h-12 text-white" />
            </div>
          </div>

          {/* Main Message */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Page Not Found
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              We couldn&apos;t find the page you&apos;re looking for. It might
              have been moved, deleted, or you may have entered the wrong URL.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Link
              href="/"
              className="bg-white p-6 rounded-xl shadow-sm border border-sky-200 hover:shadow-md transition-shadow group"
            >
              <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-sky-200 transition-colors">
                <Home className="w-6 h-6 text-sky-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Home</h3>
              <p className="text-sm text-gray-600">Return to our homepage</p>
            </Link>

            <Link
              href="/anandamayee-home"
              className="bg-white p-6 rounded-xl shadow-sm border border-lime-200 hover:shadow-md transition-shadow group"
            >
              <div className="w-12 h-12 bg-lime-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-lime-200 transition-colors">
                <Users className="w-6 h-6 text-lime-700" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Anandamayee Home</h3>
              <p className="text-sm text-gray-600">
                Learn about our elderly care
              </p>
            </Link>

            <Link
              href="/donate"
              className="bg-white p-6 rounded-xl shadow-sm border border-yellow-200 hover:shadow-md transition-shadow group"
            >
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-200 transition-colors">
                <Heart className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Donate</h3>
              <p className="text-sm text-gray-600">Support our mission</p>
            </Link>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-purple-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Contact Us</h3>
              <p className="text-sm text-gray-600">Get in touch with us</p>
            </div>
          </div>

          {/* Back Button */}
          <div className="mb-12">
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 px-6 py-3 bg-sky-600 text-white rounded-lg font-medium hover:bg-sky-700 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </button>
          </div>

          {/* Help Section */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Need Help?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div className="text-left">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Phone className="w-5 h-5 text-sky-600" />
                  Contact PATH NGO
                </h3>
                <div className="space-y-3 text-sm text-gray-700">
                  <div>
                    <p className="font-medium">Address:</p>
                    <p>26, Bhaskar Nagar, R.G. Baruah Road</p>
                    <p>Near Bhaskar Vidyapith School</p>
                    <p>Guwahati - 781021, Assam</p>
                  </div>
                  <div>
                    <p className="font-medium">Phone:</p>
                    <p>Office: 0361-2956699</p>
                    <p>Mobile: +91 94351 18741</p>
                  </div>
                  <div>
                    <p className="font-medium">Email:</p>
                    <p>ngo_people@yahoo.in</p>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="text-left">
                <h3 className="font-bold text-gray-900 mb-4">Popular Pages</h3>
                <div className="space-y-2 text-sm">
                  <Link
                    href="/"
                    className="block text-sky-600 hover:text-sky-700 transition-colors"
                  >
                    → Home
                  </Link>
                  <Link
                    href="/anandamayee-home"
                    className="block text-sky-600 hover:text-sky-700 transition-colors"
                  >
                    → Anandamayee Home
                  </Link>
                  <Link
                    href="/donate"
                    className="block text-sky-600 hover:text-sky-700 transition-colors"
                  >
                    → Donate Now
                  </Link>
                  <Link
                    href="/programs"
                    className="block text-sky-600 hover:text-sky-700 transition-colors"
                  >
                    → Our Programs
                  </Link>
                  <Link
                    href="/about"
                    className="block text-sky-600 hover:text-sky-700 transition-colors"
                  >
                    → About Us
                  </Link>
                  <Link
                    href="/contact"
                    className="block text-sky-600 hover:text-sky-700 transition-colors"
                  >
                    → Contact Us
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="tel:+919435118741"
                  className="px-6 py-2 bg-sky-600 text-white rounded-lg font-medium hover:bg-sky-700 transition-colors"
                >
                  Call Us
                </a>
                <a
                  href="mailto:ngo_people@yahoo.in"
                  className="px-6 py-2 bg-lime-700 text-white rounded-lg font-medium hover:bg-lime-800 transition-colors"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <section className="py-16 bg-gradient-to-r from-sky-600 to-sky-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Continue Supporting Our Mission
          </h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            While you&apos;re here, learn more about how PATH NGO is making a
            difference in communities across Assam.
          </p>
          <Link
            href="/donate"
            className="inline-block px-8 py-3 bg-white text-sky-600 rounded-lg font-bold hover:bg-gray-100 transition-colors"
          >
            Support Our Work
          </Link>
        </div>
      </section>
    </div>
  );
}
