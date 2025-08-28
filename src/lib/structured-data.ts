export const websiteSchema = {
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

export const videoGameSchema = {
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
  }
};

export const faqSchema = (faqs: Array<{question: string, answer: string}>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const breadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});