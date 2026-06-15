import type { Metadata } from "next";
import { Poppins, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import { ActiveSectionProvider } from "@/context/ActiveSectionContext";
import { LanguageProvider } from "@/context/LanguageContext";
import { Toaster } from "react-hot-toast";
import PreHeader from "@/components/layout/PreHeader";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jiwanpariwartan.com"),
  title: {
    default: "Jiwan Pariwartan – Premier Rehabilitation Center in Nepal",
    template: "%s | Jiwan Pariwartan Rehab Center Nepal",
  },
  description:
    "Nepal's most trusted rehabilitation and recovery center. Expert treatment for alcohol addiction, drug recovery, mental wellness, and family healing. Compassionate, evidence-based care in Kathmandu.",
  keywords: [
    "rehab center Nepal",
    "rehabilitation center Kathmandu",
    "addiction recovery Nepal",
    "alcohol recovery Nepal",
    "drug rehabilitation Nepal",
    "mental wellness Nepal",
    "detox center Nepal",
    "drug rehab Kathmandu",
    "jiwan pariwartan",
    "wellness rehabilitation Nepal",
  ],
  authors: [{ name: "Jiwan Pariwartan Rehabilitation Center" }],
  creator: "Jiwan Pariwartan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jiwanpariwartan.com",
    siteName: "Jiwan Pariwartan Rehabilitation Center",
    title: "Jiwan Pariwartan – Premier Rehabilitation Center in Nepal",
    description:
      "Nepal's most trusted rehabilitation center offering compassionate, evidence-based addiction treatment and mental wellness care.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jiwan Pariwartan Rehabilitation Center Nepal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jiwan Pariwartan – Premier Rehabilitation Center in Nepal",
    description:
      "Nepal's most trusted rehabilitation center for addiction recovery and mental wellness.",
    images: ["/og-image.jpg"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${manrope.variable} h-full scroll-smooth`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col antialiased"
        suppressHydrationWarning
      >
        <LanguageProvider>
          <ActiveSectionProvider>
            <ScrollProgress />
            <PreHeader />
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <FloatingWhatsApp />
            <Toaster
              position="top-right"
              toastOptions={{
                duration: 5000,
                style: {
                  borderRadius: "12px",
                  padding: "14px 18px",
                  fontFamily: "var(--font-manrope)",
                },
                success: {
                  style: {
                    background: "#f0fdf4",
                    color: "#166534",
                    border: "1px solid #bbf7d0",
                  },
                },
                error: {
                  style: {
                    background: "#fef2f2",
                    color: "#991b1b",
                    border: "1px solid #fecaca",
                  },
                },
              }}
            />
          </ActiveSectionProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
