import { Heart, Target } from "lucide-react";
import React from "react";

export default function WhyDonateCard() {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-3">
        <Heart className="w-6 h-6 text-red-500" />
        Why Your Support Matters
      </h3>

      <div className="space-y-4 mb-8">
        <div className="border-l-4 border-sky-500 pl-4">
          <h4 className="font-bold text-gray-900">Anandamayee Home</h4>
          <p className="text-gray-600 text-sm">
            Providing dignified care and support for elderly residents since
            October 2023
          </p>
        </div>
        <div className="border-l-4 border-lime-500 pl-4">
          <h4 className="font-bold text-gray-900">Community Development</h4>
          <p className="text-gray-600 text-sm">
            Empowering women and children through education and skill
            development
          </p>
        </div>
        <div className="border-l-4 border-yellow-500 pl-4">
          <h4 className="font-bold text-gray-900">Healthcare Programs</h4>
          <p className="text-gray-600 text-sm">
            Regular health check-ups and medical support for the underprivileged
          </p>
        </div>
        <div className="border-l-4 border-purple-500 pl-4">
          <h4 className="font-bold text-gray-900">Cultural Preservation</h4>
          <p className="text-gray-600 text-sm">
            Preserving Assamese heritage through traditional arts and crafts
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
          <p>✓ 12AA Registration for Tax Benefits</p>
          <p>✓ FCRA Registered for International Donations</p>
          <p>✓ CSR Eligible for Corporate Funding</p>
          <p>✓ NITI Aayog Registered</p>
        </div>
      </div>
    </div>
  );
}
