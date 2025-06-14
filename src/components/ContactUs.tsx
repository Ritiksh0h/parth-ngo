import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

export default function ContactUs() {
  return (
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
            <p className="font-bold text-gray-900 mb-1">Phone Numbers</p>
            <div className="text-gray-700 text-sm space-y-1">
              <p>
                <span className="font-medium">Office:</span> 0361-2956699
              </p>
              <p>
                <span className="font-medium">Mobile:</span> +91 94351 18741
              </p>
              <p>
                <span className="font-medium">Mobile:</span> +91 60032 58678
              </p>
              <p>
                <span className="font-medium">Mobile:</span> +91 94351 13659
              </p>
              <p>
                <span className="font-medium">Mobile:</span> +91 87239 34693
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
            <p className="text-gray-700 text-sm">ngo_people@yahoo.in</p>
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
  );
}
