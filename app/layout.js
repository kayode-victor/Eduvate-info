import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Eduvate Tutoring Service",
  description:
    "Eduvate: Tailored tutoring for young learners aged 3-16, designed to foster growth and unlock potential through personalized education.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
