/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://blockbreaker.vip',
  generateRobotsTxt: false, // We already have a custom robots.txt
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  generateIndexSitemap: false,
  
  // Custom pages with specific priorities and change frequencies
  transform: async (config, path) => {
    // Home page gets highest priority
    if (path === '/') {
      return {
        loc: path,
        changefreq: 'daily',
        priority: 1.0,
        lastmod: new Date().toISOString(),
      }
    }
    
    // Game-related pages get high priority
    if (['/similar-games', '/from-breakout-to-block-breaker', '/google-block-breaker'].includes(path)) {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      }
    }
    
    // Blog gets medium-high priority
    if (path === '/blog') {
      return {
        loc: path,
        changefreq: 'daily',
        priority: 0.7,
        lastmod: new Date().toISOString(),
      }
    }
    
    // About and contact pages
    if (['/about', '/contact'].includes(path)) {
      return {
        loc: path,
        changefreq: 'monthly',
        priority: 0.6,
        lastmod: new Date().toISOString(),
      }
    }
    
    // Legal pages get lower priority but still indexed
    if (['/privacy', '/terms'].includes(path)) {
      return {
        loc: path,
        changefreq: 'monthly',
        priority: 0.4,
        lastmod: new Date().toISOString(),
      }
    }
    
    // Default for other pages
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    }
  },
  
  // Additional paths to include (if any dynamic routes exist)
  additionalPaths: async (config) => {
    return []
  },
  
  // Exclude any paths we don't want in sitemap
  exclude: [
    '/api/*',
    '/_next/*',
    '/admin/*',
  ],
  
  // Add custom robots.txt rules (optional since we have custom robots.txt)
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/_next/', '/api/', '/admin/'],
      },
    ],
    additionalSitemaps: [],
  },
}