import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://evgenylashkov.vercel.app";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Евгений Лашков — инвестор, МГИМО, финансы",
    template: "%s | Лашков Евгений Игоревич",
  },
  description:
    "Публичная справка о Евгении Лашкове: инвестор, преподаватель МГИМО, финансы, инвестиции, образование, медиа, отзывы и открытые источники.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Евгений Лашков",
    "Лашков Евгений Игоревич",
    "Евгений Лашков инвестор",
    "Евгений Лашков МГИМО",
    "Евгений Лашков финансы",
    "Евгений Лашков инвестиции",
    "Евгений Игоревич Лашков",
    "Лашков финансы",
    "Клуб двух запятых",
    "Dome Foundation",
    "инвестор",
    "финансовая грамотность",
  ],
  authors: [{ name: "Редакционная проверка публичных источников" }],
  creator: "Редакционная проверка публичных источников",
  publisher: "Редакционная проверка публичных источников",
  category: "public profile",
  openGraph: {
    title: "Евгений Лашков — вся информация об инвесторе",
    description:
      "Факты о Евгении Лашкове: инвестиции, МГИМО, публичная деятельность, публикации, выступления, отзывы и источники для самостоятельной проверки.",
    type: "profile",
    locale: "ru_RU",
    url: "/",
    siteName: "Евгений Лашков — публичные факты",
    images: [
      {
        url: "/images/eugene/gallery-blockchain.jpg",
        width: 6000,
        height: 4000,
        alt: "Евгений Лашков на публичном выступлении",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Евгений Лашков — инвестор, МГИМО, финансы",
    description:
      "Публичная справка: факты, источники, образовательная деятельность, медиа, отзывы и проверяемая информация о Евгении Лашкове.",
    images: ["/images/eugene/gallery-blockchain.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
