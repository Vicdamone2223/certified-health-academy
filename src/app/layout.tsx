// src/app/layout.tsx
import type { Metadata } from "next";
import Script from "next/script"; // <-- import Script for GA
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://certifiedhealthacademy.com"),

  title: {
    default:
      "Certified Health Academy | CPR, First Aid & Food Handling — VA, MD & DC",
    template: "%s | Certified Health Academy",
  },
  description:
    "State-approved CPR & First Aid, Medication Administration, and Food Handling courses in Virginia, Maryland, and DC. Classes offered in English and Spanish.",

  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      es: "/es",
    },
  },

  openGraph: {
    type: "website",
    url: "https://certifiedhealthacademy.com",
    siteName: "Certified Health Academy",
    title:
      "Certified Health Academy | CPR, First Aid & Food Handling — VA, MD & DC",
    description:
      "State-approved CPR & First Aid, Medication Administration, and Food Handling courses in Virginia, Maryland, and DC. English & Spanish.",
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

  // verification: { google: "paste-your-gsc-verification-code" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics (GA4) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-SYPSC9TNVH"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SYPSC9TNVH');
          `}
        </Script>
      </head>

      <body>
        <Navbar />
        {children}

        {/* Site-wide LocalBusiness schema */}
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
            }),
          }}
        />
      </body>
    </html>
  );
}
