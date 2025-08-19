import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar"; // if your components are under app/components

export const metadata: Metadata = {
  title: "Certified Health Academy | DC & Northern VA",
  description:
    "Accredited CPR & First Aid, Medication Administration, and Food Handler (Manager) training in DC & Northern Virginia. Pay now or reserve a spot.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
