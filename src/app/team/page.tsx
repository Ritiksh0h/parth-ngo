"use client";

import SubPageHeader from "@/components/SubPageHeader";

export default function TeamPage() {
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
                  <div className="w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 bg-sky-600">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
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
                  <h3 className="font-semibold text-lg text-gray-800">
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
