import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ORGANIZATION_DETAILS } from "@/lib/organization_details";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(ORGANIZATION_DETAILS.url),
  title: {
    default: `${ORGANIZATION_DETAILS.name} - ${ORGANIZATION_DETAILS.tagline} | Elderly Care, Women Empowerment & Cultural Preservation in Assam`,
    template: `%s | ${ORGANIZATION_DETAILS.name} - Community Development NGO Assam`,
  },
  description: ORGANIZATION_DETAILS.description[0],
  keywords: ORGANIZATION_DETAILS.keywords,
  openGraph: {
    title: `${ORGANIZATION_DETAILS.fullName} (${ORGANIZATION_DETAILS.name})`,
    description: ORGANIZATION_DETAILS.description[1],
    type: "website",
    locale: "en_IN",
    url: ORGANIZATION_DETAILS.url,
    siteName: ORGANIZATION_DETAILS.name,
    images: [
      {
        url: ORGANIZATION_DETAILS.ogImage,
        width: 1200,
        height: 630,
        alt: `${ORGANIZATION_DETAILS.name} - Empowering Communities in Assam Since 2006`,
      },
      {
        url: ORGANIZATION_DETAILS.ogImageSmall,
        width: 400,
        height: 400,
        alt: `${ORGANIZATION_DETAILS.name} Logo - Community Development NGO`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${ORGANIZATION_DETAILS.name} - ${ORGANIZATION_DETAILS.tagline}`,
    description: ORGANIZATION_DETAILS.description[1],
    creator: "@pathngo",
    images: [ORGANIZATION_DETAILS.ogImage],
  },
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
  applicationName: ORGANIZATION_DETAILS.name,
  authors: [
    {
      name: ORGANIZATION_DETAILS.leadership.president.name,
      url: ORGANIZATION_DETAILS.url,
    },
    {
      name: "PATH NGO Team",
      url: ORGANIZATION_DETAILS.url,
    },
  ],
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  creator: "PATH NGO Development Team",
  publisher: "People's Advancement Through Helping (PATH)",
  category: "Non-Profit Organization",
  classification:
    "Community Development, Social Welfare, Cultural Preservation",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: ORGANIZATION_DETAILS.url,
    languages: {
      "en-IN": ORGANIZATION_DETAILS.url,
      "as-IN": `${ORGANIZATION_DETAILS.url}/as`, // Assamese language
    },
  },
  verification: {
    google: "your-google-site-verification-code",
    other: {
      "facebook-domain-verification": "your-facebook-domain-verification",
    },
  },
  other: {
    "geo.region": "IN-AS", // Assam, India
    "geo.placename": "Guwahati",
    "geo.position": "26.1445;91.7362", // Approximate coordinates for Guwahati
    ICBM: "26.1445, 91.7362",
    "DC.title": ORGANIZATION_DETAILS.fullName,
    "DC.creator": ORGANIZATION_DETAILS.name,
    "DC.subject":
      "Community Development, Women Empowerment, Elderly Care, Cultural Preservation",
    "DC.description": ORGANIZATION_DETAILS.description[0],
    "DC.publisher": ORGANIZATION_DETAILS.name,
    "DC.contributor": "PATH NGO Team",
    "DC.date": "2006-07-26", // Establishment date
    "DC.type": "Text.Organization",
    "DC.format": "text/html",
    "DC.identifier": ORGANIZATION_DETAILS.url,
    "DC.source": ORGANIZATION_DETAILS.url,
    "DC.language": "en-IN",
    "DC.coverage": "Assam, Northeast India",
    "DC.rights": `© ${new Date().getFullYear()} ${
      ORGANIZATION_DETAILS.name
    }. All rights reserved.`,
    "organization:registration": ORGANIZATION_DETAILS.registration.number,
    "organization:established": ORGANIZATION_DETAILS.established,
    "organization:tax_exemption": "80G",
    "organization:csr_eligible": "true",
    "organization:fcra_registered": "true",
    "organization:niti_aayog": "empaneled",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
