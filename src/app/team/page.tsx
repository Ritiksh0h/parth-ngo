"use client";

import SubPageHeader from "@/components/SubPageHeader";
import { executiveMembers, generalMembers } from "@/lib/data";
import Image from "next/image";

export default function TeamPage() {
  return (
    <div className=" bg-gray-50">
      <SubPageHeader title="Our Team Members" />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto space-y-12">
          <div>
            <h2 className="text-3xl font-bold mb-8 text-sky-600">
              Executive Body Members
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {executiveMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white border rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  {member.profile ? (
                    <Image
                      width={80}
                      height={80}
                      src={member.profile}
                      alt={member.name}
                      className="w-20 h-20 rounded-full mx-auto cover-fit mb-4"
                    />
                  ) : (
                    <div className="w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 bg-sky-600">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                  )}
                  <h3 className="font-semibold text-lg text-gray-800">
                    {member.name}
                  </h3>
                  <p className="font-medium text-sky-600 mb-3">
                    {member.designation}
                  </p>
                  <p className="text-sm mt-2 whitespace-pre-line text-gray-700">
                    {member.address}
                  </p>
                  <p className="text-sm mt-2 text-gray-700">
                    <strong>Occupation:</strong> {member.occupation}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8 text-lime-700">
              General Body Members (Resource Persons)
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {generalMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white border rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 bg-lime-700">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <h3 className="font-semibold text-lg text-gray-800 uppercase">
                    {member.name}
                  </h3>
                  <p className="font-medium text-lime-700 mb-3">
                    {member.designation}
                  </p>
                  <p className="text-sm mt-2 whitespace-pre-line text-gray-700">
                    {member.address}
                  </p>
                  <p className="text-sm mt-2 text-gray-700">
                    <strong>Occupation:</strong> {member.occupation}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
