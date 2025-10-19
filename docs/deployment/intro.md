---
title: Deployment
---

# Deployment

Learn how to deploy your documentation site to production.

## Overview

Deployment involves:

1. Building the application
2. Choosing a hosting platform
3. Configuring production settings
4. Monitoring and maintenance

## Build Process

### Production Build

Create an optimized production build:

```bash
npm run build
```

This generates:
- Optimized JavaScript bundles
- Static HTML pages
- Cached assets

### Build Output

Next.js generates a `.next` folder with:

```
.next/
├── static/
├── server/
└── cache/
```

## Hosting Options

### Vercel (Recommended)

Deploy with zero configuration:

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Netlify

Configure `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = ".next"
```

### Self-Hosted

Run on your own server:

```bash
npm run build
npm run start
```

## Environment Variables

Set production variables:

```env
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## Performance

### Optimization Tips

1. **Enable caching** - Cache static files
2. **Use CDN** - Serve assets from CDN
3. **Compress assets** - Enable gzip/brotli
4. **Lazy loading** - Load images on demand

## Monitoring

Monitor your deployment:

- **Uptime monitoring** - Track availability
- **Performance metrics** - Measure load times
- **Error tracking** - Catch runtime errors

Next: Learn about [Production Best Practices](./production.md)
