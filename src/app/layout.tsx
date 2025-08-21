// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  // Site-wide defaults (pages can override with their own `export const metadata`)
  metadataBase: new URL("https://certifiedhealthacademy.com"),

  title: {
    default: "Certified Health Academy | CPR, First Aid & Food Handling — VA, MD & DC",
    template: "%s | Certified Health Academy",
  },
  description:
    "State-approved CPR & First Aid, Medication Administration, and Food Handling courses in Virginia, Maryland, and DC. Classes offered in English and Spanish.",

  alternates: {
    canonical: "/",                   // default canonical for the root
    languages: {
      en: "/",                        // English root
      es: "/es",                      // Spanish root
    },
  },

  openGraph: {
    type: "website",
    url: "https://certifiedhealthacademy.com",
    siteName: "Certified Health Academy",
    title: "Certified Health Academy | CPR, First Aid & Food Handling — VA, MD & DC",
    description:
      "State-approved CPR & First Aid, Medication Administration, and Food Handling courses in Virginia, Maryland, and DC. English & Spanish.",
    // Uncomment if you have a social preview image in /public
    // images: [{ url: "/og.jpg" }],
  },

  twitter: {
    card: "summary_large_image",
    title: "Certified Health Academy | CPR, First Aid & Food Handling",
    description:
      "State-approved healthcare training in VA, MD & DC. English & Spanish.",
    // images: ["/og.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  // If you have a Google Search Console verification token, add it here:
  // verification: {
  //   google: "paste-your-gsc-verification-code",
  // },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}

        {/* Site-wide LocalBusiness schema (keep generic here; add Course schema on each course page) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Certified Health Academy",
              url: "https://certifiedhealthacademy.com",
              areaServed: ["Virginia", "Maryland", "District of Columbia"],
              knowsLanguage: ["en", "es"],
              // Fill these if you have them:
              // telephone: "+1-XXX-XXX-XXXX",
              // address: {
              //   "@type": "PostalAddress",
              //   streetAddress: "...",
              //   addressLocality: "...",
              //   addressRegion: "VA",
              //   postalCode: "....",
              //   addressCountry: "US"
              // }
            }),
          }}
        />
      </body>
    </html>
  );
}
