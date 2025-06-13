export const siteConfig = {
  name: "PATH NGO - People's Advancement Through Helping",
  description:
    "A Non-Political, Non-Profitable & Secular Voluntary organization established in 2006, empowering communities across Assam through education, healthcare, cultural preservation, women empowerment, and elderly care. 80G Tax Exempt, CSR Eligible.",
  url: "https://path-ngo.org", // Replace with your actual domain
  ogImage: "/og-image.jpg", // Replace with your actual OG image path
  keywords: [
    "PATH NGO",
    "People's Advancement Through Helping",
    "Assam NGO",
    "Guwahati NGO",
    "Anandamayee Home",
    "Elderly Care",
    "Cultural Preservation",
    "Satriya Dance",
    "Women Empowerment",
    "Handloom Training",
    "80G Tax Exemption",
    "CSR Eligible",
    "FCRA Registered",
    "NITI Aayog",
    "Disaster Relief",
    "Flood Relief Assam",
    "Healthcare Awareness",
    "Education Programs",
    "Vocational Training",
    "Handicrafts Training",
    "North East Cultural Center",
    "Society Registration Act",
    "Non-profit Organization",
    "Charitable Trust",
    "Social Welfare",
    "Community Development",
  ],
  authors: ["PATH NGO Team"],
  creator: "PATH NGO",
  publisher: "PATH NGO",
};

// app/page.js or app/layout.js - Metadata implementation
import { Metadata } from "next";
import { siteConfig } from "./metadata";

export const metadata: Metadata = {
  // Basic metadata
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: siteConfig.authors.map((author) => ({ name: author })),
  creator: siteConfig.creator,
  publisher: siteConfig.publisher,

  // Viewport and mobile
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },

  // Robots and indexing
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Open Graph metadata for social sharing
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "PATH NGO - People's Advancement Through Helping - Serving Assam since 2006",
      },
    ],
  },

  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@PATH_NGO_Assam", // Replace with actual Twitter handle
  },

  // Additional metadata
  applicationName: siteConfig.name,
  referrer: "origin-when-cross-origin",
  colorScheme: "light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#E65100" },
    { media: "(prefers-color-scheme: dark)", color: "#FF7043" },
  ],

  // Manifest
  manifest: "/manifest.json",

  // Icons
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#E65100",
      },
    ],
  },

  // Verification
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },

  // Additional properties for NGO/Organization
  other: {
    "msapplication-TileColor": "#E65100",
    "msapplication-config": "/browserconfig.xml",
    organization: "PATH NGO",
    "organization-url": siteConfig.url,
    "contact-email": "ngo_people@yahoo.in",
    "contact-phone": "+91-94351-18741",
    address:
      "26, Bhaskar Nagar, R.G. Baruah Road, Near Bhaskar Vidyapith School, Guwahati - 781021, Assam, India",
    "registration-number": "KAM/240/A-3/439 of 2006",
    established: "2006-07-26",
  },
};

// JSON-LD Structured Data for better SEO
export const jsonLD = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: "PATH NGO - People's Advancement Through Helping",
  alternateName: "PATH NGO",
  description: siteConfig.description,
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.png`,
  image: siteConfig.ogImage,

  // Organization details
  foundingDate: "2006-07-26",
  founder: {
    "@type": "Person",
    name: "PATH NGO Founders",
  },

  // Contact information
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-94351-18741",
    contactType: "customer service",
    email: "ngo_people@yahoo.in",
    availableLanguage: ["English", "Hindi", "Assamese"],
  },

  // Address
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "26, Bhaskar Nagar, R.G. Baruah Road, Near Bhaskar Vidyapith School",
    addressLocality: "Guwahati",
    addressRegion: "Assam",
    postalCode: "781021",
    addressCountry: "IN",
  },

  // Geographic area served
  areaServed: [
    {
      "@type": "State",
      name: "Assam",
    },
    {
      "@type": "Country",
      name: "India",
    },
  ],

  // Services provided
  knowsAbout: [
    "Elderly Care",
    "Cultural Preservation",
    "Women Empowerment",
    "Education",
    "Healthcare",
    "Disaster Relief",
    "Vocational Training",
    "Satriya Dance",
    "Handloom & Handicrafts",
  ],

  // Programs/Services
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "PATH NGO Programs",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Anandamayee Home - Elderly Care",
          description:
            "A tranquil nest for old people providing dignified care, cultural activities, and healthcare services.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Satriya Dance Workshops",
          description:
            "Cultural preservation programs organized across different districts of Assam.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Women Empowerment Training",
          description:
            "Vocational training in weaving, cutting, embroidery for rural women.",
        },
      },
    ],
  },

  // Awards and recognition
  award: [
    "Empaneled with North East Zone Cultural Center",
    "Empaneled with Development Commissioner (Handicrafts)",
    "NITI Aayog Registration",
    "80G Tax Exemption Status",
    "CSR Eligible Organization",
    "FCRA Registration",
  ],

  // Social media profiles
  sameAs: [
    "https://facebook.com/PATH-NGO-Assam", // Replace with actual profiles
    "https://twitter.com/PATH_NGO_Assam",
    "https://instagram.com/path_ngo_assam",
    "https://linkedin.com/company/path-ngo",
  ],

  // Donation information
  potentialAction: {
    "@type": "DonateAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteConfig.url}/donate`,
    },
  },
};

// Additional metadata for specific pages
export const pageMetadata = {
  anandamayeeHome: {
    title: "Anandamayee Home - Elderly Care Project | PATH NGO",
    description:
      "A tranquil nest for elderly people established in October 2023. Providing dignified care, cultural activities, health check-ups, and celebrating festivals with senior citizens in Assam.",
    keywords: [
      "Elderly Care Assam",
      "Old Age Home Guwahati",
      "Senior Citizens Care",
      "Anandamayee Home",
      "Elder Care India",
      "Geriatric Care",
      "Senior Care Facility",
      "Old People Home",
      "Elder Support Services",
    ],
    openGraph: {
      title: "Anandamayee Home - Elderly Care Project | PATH NGO",
      description:
        "Support our elderly care initiative providing dignified care and cultural activities for senior citizens.",
      images: ["/anandamayee-home-og.jpg"],
    },
  },

  teamMembers: {
    title: "Our Team - Executive & General Body Members | PATH NGO",
    description:
      "Meet the dedicated team behind PATH NGO including Executive Body members and General Body resource persons from across India working for community empowerment.",
    keywords: [
      "PATH NGO Team",
      "NGO Leadership",
      "Executive Body",
      "Board Members",
      "Social Workers",
      "Community Leaders",
    ],
  },

  programs: {
    title:
      "Our Programs - Education, Healthcare, Cultural Preservation | PATH NGO",
    description:
      "Comprehensive community development programs including Satriya dance workshops, handloom training, healthcare awareness, disaster relief, and women empowerment initiatives.",
    keywords: [
      "NGO Programs",
      "Community Development",
      "Cultural Preservation",
      "Women Empowerment",
      "Healthcare Programs",
      "Education Initiatives",
    ],
  },
};

// Sitemap configuration
export const sitemapConfig = {
  url: siteConfig.url,
  changeFrequency: "monthly",
  priority: 1.0,
  lastModified: new Date(),
  pages: [
    { url: "/", priority: 1.0, changeFrequency: "weekly" },
    { url: "/about", priority: 0.8, changeFrequency: "monthly" },
    { url: "/programs", priority: 0.8, changeFrequency: "monthly" },
    { url: "/anandamayee-home", priority: 0.9, changeFrequency: "weekly" },
    { url: "/team", priority: 0.7, changeFrequency: "monthly" },
    { url: "/contact", priority: 0.8, changeFrequency: "monthly" },
    { url: "/donate", priority: 0.9, changeFrequency: "weekly" },
  ],
};
