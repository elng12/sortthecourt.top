# Sort the Court Website - Deployment Guide

## 📁 File Structure

```
sortthecourt.top/
├── index.html          # Main website page
├── sitemap.xml         # SEO sitemap
├── robots.txt          # Search engine instructions
├── manifest.json       # PWA manifest
├── .htaccess          # Apache server configuration
├── README.md          # Project documentation
├── DEPLOYMENT.md      # This deployment guide
└── .gitattributes     # Git configuration
```

## 🚀 Deployment Steps

### 1. Domain Setup
- Point your domain `sortthecourt.top` to your web server
- Ensure DNS propagation is complete

### 2. SSL Certificate
- Install SSL certificate for HTTPS
- Uncomment HTTPS redirect lines in `.htaccess` after SSL is active

### 3. Server Upload
- Upload all files to your web server's root directory
- Ensure proper file permissions (644 for files, 755 for directories)

### 4. Server Configuration
- Ensure Apache mod_rewrite, mod_deflate, mod_expires, and mod_headers are enabled
- Test .htaccess functionality

### 5. SEO Setup
- Submit sitemap.xml to Google Search Console
- Submit sitemap.xml to Bing Webmaster Tools
- Verify robots.txt is accessible at `https://sortthecourt.top/robots.txt`

## 🔧 Performance Optimization

### Already Implemented:
- ✅ Gzip compression via .htaccess
- ✅ Browser caching headers
- ✅ Minified inline CSS/JS
- ✅ Optimized images (using CDN for Tailwind)
- ✅ Responsive design
- ✅ Fast loading iframe

### Additional Recommendations:
- Consider implementing a CDN (Cloudflare recommended)
- Monitor Core Web Vitals with Google PageSpeed Insights
- Set up Google Analytics for traffic monitoring

## 📊 SEO Checklist

### ✅ Completed:
- H1 tag with primary keyword "Sort the Court"
- Meta description with target keywords
- Canonical URL set to https://sortthecourt.top/
- Open Graph tags for social sharing
- Twitter Card meta tags
- Structured data (JSON-LD) for game schema
- Sitemap.xml with proper URLs
- Robots.txt allowing all crawlers
- Mobile-friendly responsive design
- Fast loading times
- Internal linking structure
- Keyword-optimized content sections

### 🎯 Target Keywords Covered:
- Primary: "sort the court" (H1, title, throughout content)
- Long-tail: "sort the court online", "king decision making game", "y/n king game"
- Semantic: "rule the court", "manage the court game", "medieval game"
- Question-based: "where do i get sort the court", "game where you are a king and say yes or no"

## 🧪 Testing Checklist

Before going live, test:
- [ ] Game iframe loads properly
- [ ] All navigation links work
- [ ] Mobile responsiveness on various devices
- [ ] Page loading speed (aim for <3 seconds)
- [ ] All meta tags display correctly in social media previews
- [ ] Sitemap.xml is accessible and valid
- [ ] Robots.txt is accessible
- [ ] 404 errors redirect to homepage

## 📈 Post-Launch Tasks

1. **Submit to Search Engines:**
   - Google Search Console
   - Bing Webmaster Tools
   - Yandex Webmaster (if targeting Russian audience)

2. **Monitor Performance:**
   - Set up Google Analytics
   - Monitor Core Web Vitals
   - Track keyword rankings

3. **Content Updates:**
   - Regular content freshness updates
   - Add new game guides or tips
   - Monitor and respond to user feedback

## 🔗 Important URLs to Verify

After deployment, ensure these URLs work:
- https://sortthecourt.top/ (main page)
- https://sortthecourt.top/sitemap.xml
- https://sortthecourt.top/robots.txt
- https://sortthecourt.top/manifest.json

## 📞 Support

For technical issues or questions about the website implementation, refer to the README.md file or check the inline code comments in index.html.