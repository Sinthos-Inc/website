import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
const sans = localFont({
  src: [
    { path: "../../public/assets/manrope-400.ttf", weight: "400" },
    { path: "../../public/assets/manrope-500.ttf", weight: "500" },
    { path: "../../public/assets/manrope-600.ttf", weight: "600" },
  ],
  variable: "--font-manrope",
  display: "swap",
});
const mono = localFont({
  src: "../../public/assets/ibm-plex-mono-400.ttf",
  variable: "--font-plex",
  display: "swap",
  preload: false,
});
export const metadata: Metadata = {
  metadataBase: new URL("https://sinthosinc.com"),
  title: "Sinthos — Engineering the next advantage.",
  description:
    "Sinthos is building defense technology for a changing battlefield. Our first development program: passive acoustic intelligence for small, RF-silent drones.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Sinthos — Engineering the next advantage.",
    description:
      "Defense technology. Starting with a new layer of acoustic awareness.",
    type: "website",
    images: [{ url: "/assets/valley.webp", width: 1774, height: 887 }],
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
