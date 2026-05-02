export const metadata = {
  title: "M.D. Enterprise | Hospital & OT Medical Equipment Supplier",
  description:
    "Trusted supplier of hospital furniture, OT equipment, and medical devices across India. Quality, safety, and reliability.",
  keywords: [
    "hospital equipment supplier",
    "medical equipment India",
    "OT equipment",
    "hospital furniture",
  ],
  openGraph: {
    title: "M.D. Enterprise",
    description:
      "Reliable supplier of hospital & OT medical equipment across India.",
    type: "website",
  },
};

import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
