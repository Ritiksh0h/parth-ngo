const executiveMembers = [
  {
    name: "MEGHALI DEKA",
    designation: "PRESIDENT",
    profile: "/Meghali_R_Deka.jpg",
    address: "H/NO. 06, ZOO NARENGI ROAD\nGUWAHATI-24",
    occupation: "BUSINESS",
  },
  {
    name: "ARABINDA DEKA",
    profile: "/Arabinda_Deka.jpg",
    designation: "VICE PRESIDENT",
    address: "MADHABDEV NAGAR\nP.O. DEVOKOTANAGAR\nGUWAHATI-33, ASSAM",
    occupation: "BUSINESS",
  },
  {
    name: "CHAITALI D CHETRI",
    profile: "/Chaitali_D_Chetri.jpg",
    designation: "GEN. SECRETARY",
    address: "174, RAJGARH ROAD, 2ND FLOOR\nGUWAHATI-07",
    occupation: "BUSINESS",
  },
  {
    name: "NASIMA J DAS",
    profile: "/Nasima_J_Das.jpg",
    designation: "ASST GEN. SECRETARY",
    address:
      "FLAT NO – 24\nANCHIT DEVRAJ MANSION\nH/NO-24, NABAGRAHA RD\nSILPUKHURI",
    occupation: "HOUSE-WIFE",
  },
  {
    name: "KRISHNA DAS DAM",
    profile: "/Krishna_Das_Dam.jpg",
    designation: "TREASURER",
    address:
      "H.NO 17, MANDAKINI PATH,\nBYLANE 1, KAHILIPARA,\nJATIA GUWAHATI - 781006",
    occupation: "TEACHER",
  },
  {
    name: "RIPA CHETRI",
    profile: "/Ripa_Chetri.jpg",
    designation: "MEMBER",
    address:
      "THE BIRAJ SHARMA HERITAGE,\nH.NO-174 RAJGARH MAIN ROAD, GUWAHATI-07",
    occupation: "SERVICE",
  },
  {
    name: "KUSHAL BHASKAR",
    profile: "/Kushal_Bhaskar.jpg",
    designation: "MEMBER",
    address:
      "C/O BHAGYA PATOWARY, H.NO 17,\nMANDAKINI PATH, BYLANE 1,\nKAHILIPARA, JATIA GUWAHATI - 781006",
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
    name: "BIJON KUMAR BHATTACHARJEE",
    designation: "Auditor",
    address: "Krishna Market\nOpp. ASTC Busstand\nPaltanbazar, Guwahati-781008",
    occupation: "Chartered Accountant",
  },
  {
    name: "Manobendra Deka",
    designation: "Legal Advisor",
    address: "C/O PRAKASH TALUKDER\nH. NO- 40 DURGA SAROVAR GUWAHATI -781009",
    occupation: "Advocate in High Court of Guwahati",
  },
];

const program = [
  {
    category: "ELDERLY CARE",
    categoryColor: "bg-sky-600 text-white",
    gradientFrom: "from-sky-400",
    gradientTo: "to-sky-600",
    title: "ANANDAMAYEE HOME: A TRANQUIL NEST FOR OLD PEOPLE",
    description:
      "Providing dignified care, cultural activities, health check-ups, and celebrating festivals like Bihu and Holi with elderly residents since October 27, 2023.",
    actionText: "Learn more about our elderly care",
    image: "/Anandamayee_Home.jpg",
    href: "/anandamayee-home",
  },
  {
    category: "EDUCATION",
    categoryColor: "bg-green-600 text-white",
    gradientFrom: "from-green-400",
    gradientTo: "to-green-600",
    title: "FREE COACHING & LITERACY PROGRAMS",
    description:
      "Educational development for unemployed youth, especially in rural areas. Free coaching programs and social welfare services to remove illiteracy.",
    actionText: "Discover our education initiatives",
    image: "/Free_coaching_1.jpg",
    Gallery: ["/Free_coaching_1.jpg", "/Free_coaching_2.jpg"], // This will open a gallery
  },
  {
    category: "CULTURAL HERITAGE",
    categoryColor: "bg-yellow-500 text-gray-800",
    gradientFrom: "from-yellow-400",
    gradientTo: "to-yellow-500",
    title: "CULTURAL PRESERVATION",
    description:
      "Empaneled with North East Zone Cultural Center, organizing Satriya dance workshops across different districts of Assam to preserve traditional arts.",
    actionText: "Explore cultural programs",
    image: "/Dance_workshop_2.jpg",
    Gallery: [
      "/Dance_workshop_1.jpg",
      "/Dance_workshop_2.jpg",
      "/Dance_workshop_3.jpg",
      "/Dance_workshop_4.jpg",
      "/Dance_workshop_5.jpg",
      "/Dance_workshop_6.jpg",
      "/Dance_workshop_7.jpg",
      "/Dance_workshop_8.jpg",
      "/Dance_workshop_9.jpg",
      "/Dance_workshop.jpg",
      "/Cultural_show_1.JPG",
      "/Independence_Day_1.jpg",
      "/Independence_Day_2.jpg",
    ],
  },
  {
    category: "DISASTER RELIEF",
    categoryColor: "bg-red-600 text-white",
    gradientFrom: "from-red-400",
    gradientTo: "to-red-600",
    title: "FLOOD RELIEF & REHABILITATION",
    description:
      "Emergency response during floods in Nagaon 2023, rehabilitation programs for street children, orphans, and old helpless people during natural calamities.",
    actionText: "See our disaster response",
    image: "/Flood_relief_2.jpg",
    Gallery: [
      "/Flood_relief_1.jpg",
      "/Flood_relief_2.jpg",
      "/Flood_relief_3.jpg",
    ],
  },
  {
    category: "HEALTHCARE",
    categoryColor: "bg-blue-800 text-white",
    gradientFrom: "from-blue-400",
    gradientTo: "to-blue-800",
    title: "HEALTH AWARENESS & CHECK-UP CAMPS",
    description:
      "Social awareness programs on AIDS, Cancer, TB, and Polio. Regular health check-up camps ensuring preventive healthcare reaches every community.",
    actionText: "Learn about health programs",
    image: "/Health_camp_1.jpg",
    Gallery: [
      "/Health_camp_1.jpg",
      "/Health_camp_2.jpg",
      "/Health_camp_3.jpg",
      "/dental_camp_1.JPG",
    ], // This will open a gallery
  },
  {
    category: "WOMEN EMPOWERMENT",
    categoryColor: "bg-purple-600 text-white",
    gradientFrom: "from-purple-400",
    gradientTo: "to-purple-600",
    title: "HANDLOOM & HANDICRAFTS TRAINING",
    description:
      "Empaneled with Development Commissioner (Handicrafts), organizing expos and training in weaving, cutting, embroidery for men, women and youth in rural areas.",
    actionText: "See empowerment programs",
    Gallery: [
      "/Expo_1.jpg",
      "/Expo_2.jpg",
      "/Expo_3.jpg",
      "/Expo_4.jpg",
      "/Expo_5.jpg",
    ],
    image: "/Expo_3.jpg",
  },
];

export { executiveMembers, generalMembers, program };
