import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Block Breaker – Play the Classic Block-Breaking Game Online",
  description: "Play Block Breaker online free! Experience the ultimate brick-breaking adventure with stunning graphics, power-ups, and addictive gameplay. No download required - start playing instantly in your browser.",
  keywords: ["Block Breaker", "Block Breaker game", "Block Breaker google", "Play Block Breaker", "google Block Breaker", "brick breaker", "breakout game", "arcade game", "free online game", "classic block breaking"],
  authors: [{ name: "Block Breaker Team" }],
  metadataBase: new URL('https://www.blockbreaker.vip'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Block Breaker – Play the Classic Block-Breaking Game Online",
    description: "Play Block Breaker online free! Experience the ultimate brick-breaking adventure with stunning graphics, power-ups, and addictive gameplay.",
    url: "https://www.blockbreaker.vip",
    siteName: "Block Breaker",
    images: [
      {
        url: "/blockbreaker.jpg",
        width: 1200,
        height: 630,
        alt: "Block Breaker Game Screenshot - Classic Brick Breaking Action"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Block Breaker – Play the Classic Block-Breaking Game Online",
    description: "Play Block Breaker online free! Experience the ultimate brick-breaking adventure with stunning graphics and addictive gameplay.",
    images: ["/blockbreaker.jpg"],
    creator: "@BlockBreakerVIP"
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0f0f23' },
    { media: '(prefers-color-scheme: dark)', color: '#0f0f23' }
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Website Schema with Search Action
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Block Breaker",
    "description": "Play Block Breaker – Play the Classic Block-Breaking Game Online. Free browser-based arcade game with stunning graphics and addictive gameplay.",
    "url": "https://www.blockbreaker.vip",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.blockbreaker.vip/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "author": {
      "@type": "Organization",
      "name": "Block Breaker Team"
    }
  };

  // Video Game Schema
  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "Block Breaker",
    "description": "Experience the ultimate brick-breaking adventure with stunning graphics, explosive power-ups, and addictive gameplay! Play the classic Block Breaker game online for free.",
    "url": "https://www.blockbreaker.vip/#game",
    "applicationCategory": "Game",
    "operatingSystem": "Any",
    "gamePlatform": "Web Browser",
    "playMode": "SinglePlayer", 
    "genre": ["Arcade", "Action", "Puzzle"],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1247",
      "bestRating": "5",
      "worstRating": "1"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Block Breaker Team"
    },
    "keywords": "Block Breaker, Block Breaker game, Block Breaker google, Play Block Breaker, google Block Breaker, brick breaker, breakout game, arcade game, free online game"
  };

  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://www.blockbreaker.vip/" />
        
        {/* Performance optimizations */}
        <link rel="dns-prefetch" href="https://blockbreakergame.io" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Block Breaker" />
        
        {/* PWA optimizations */}
        <meta name="application-name" content="Block Breaker" />
        <meta name="msapplication-TileColor" content="#0f0f23" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="manifest" href="/manifest.json" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
