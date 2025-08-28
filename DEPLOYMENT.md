# 🚀 Block Breaker Deployment Guide

## Quick Deploy to Vercel

### 1. Push to GitHub
```bash
git push origin main
```

### 2. Deploy on Vercel
1. Visit [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "New Project" and import your `blockbreaker` repository
3. Configure environment variables:
   - `SITE_URL` = `https://blockbreaker.vip`
   - `NEXT_PUBLIC_SITE_URL` = `https://blockbreaker.vip`

### 3. Custom Domain Setup
1. In Vercel dashboard → Project Settings → Domains
2. Add custom domain: `blockbreaker.vip`
3. Configure DNS (if you own the domain):
   ```
   Type: A Record
   Name: @
   Value: 76.76.21.21
   
   Type: CNAME  
   Name: www
   Value: cname.vercel-dns.com
   ```

## Build Configuration ✅

The project is already configured with:
- ✅ `vercel.json` with optimized settings
- ✅ Next.js 15.4.1 build configuration
- ✅ Automatic sitemap generation
- ✅ Security headers
- ✅ PWA manifest
- ✅ SEO optimization

## Environment Variables

Set these in Vercel dashboard:
```
SITE_URL=https://blockbreaker.vip
NEXT_PUBLIC_SITE_URL=https://blockbreaker.vip
```

## Post-Deployment Checklist

- [ ] Verify game iframe loads correctly
- [ ] Test mobile responsiveness  
- [ ] Check `/sitemap.xml` generation
- [ ] Verify `/robots.txt` accessibility
- [ ] Test all page links work
- [ ] Confirm SEO meta tags render correctly
- [ ] Validate structured data with Google's Rich Results Test

## Performance Optimizations Included

- 🚀 Multi-region deployment (Asia, US West, US East)
- ⚡ Optimized build with Turbopack
- 📱 Mobile-first responsive design
- 🔒 Security headers configured
- 🌐 PWA-ready with manifest.json
- 🔍 SEO-optimized with sitemap & robots.txt

Ready to deploy! 🎮