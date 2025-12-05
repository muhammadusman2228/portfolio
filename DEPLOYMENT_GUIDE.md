# Portfolio Setup & Deployment Guide

## ✅ What's Already Done

Your portfolio is now live and deployed! Here's what has been set up:

### Code & Deployment
- ✅ Modern dark-mode responsive portfolio website
- ✅ Pushed to GitHub repository: `muhammadusman2228/portfolio`
- ✅ GitHub Pages configured with auto-deploy on every push
- ✅ Custom domain `www.usman2228.com` configured (CNAME added)
- ✅ Profile image (`assets/profile.jpg`) added
- ✅ Resume PDF (`assets/Muhammad_Usman_Resume_Full.pdf`) added
- ✅ SEO optimized with Open Graph, meta tags, robots.txt, and sitemap.xml

### Current Status
- Repository: https://github.com/muhammadusman2228/portfolio
- Temporary GitHub URL: https://muhammadusman2228.github.io/portfolio/
- Custom domain: `www.usman2228.com` (will be live once DNS is configured)

---

## 🔧 What YOU Need to Do Next

### Step 1: Configure DNS at Your Registrar (5-10 minutes)

Add a CNAME record pointing `www` to GitHub Pages:

**Find your registrar below and follow the steps:**

#### GoDaddy
1. Log in → My Products → Domain → DNS
2. Under "Records", click Add
3. Create CNAME record:
   - Type: CNAME
   - Name: www
   - Value: muhammadusman2228.github.io
   - TTL: 3600
4. Click Save

#### Namecheap
1. Log in → Domain List → Your Domain → Advanced DNS
2. Click Add New Record
3. Create CNAME record:
   - Type: CNAME Record
   - Host: www
   - Value: muhammadusman2228.github.io
   - TTL: 3600
4. Click the green checkmark to save

#### Cloudflare
1. Log in → Select Domain → DNS tab
2. Click Add record
3. Create CNAME:
   - Type: CNAME
   - Name: www
   - Target: muhammadusman2228.github.io
   - **IMPORTANT: Set Proxy to "DNS only" (gray cloud)**
4. Click Save

#### Other Registrars (GoDaddy, Bluehost, SiteGround, etc.)
1. Log in to your control panel
2. Find DNS, Domain, or Zone File settings
3. Add CNAME record:
   - Host/Name: www
   - Value/Target: muhammadusman2228.github.io

**⏳ Wait 5-30 minutes** for DNS to propagate globally.

### Step 2: Verify DNS Propagation

Use this tool to check if your DNS is live:
- Visit: https://dnschecker.org
- Enter: www.usman2228.com
- Select: CNAME
- If you see `muhammadusman2228.github.io`, DNS is configured correctly!

### Step 3: Test Your Website

Once DNS is live, visit:
```
https://www.usman2228.com
```

You should see your portfolio website!

### Step 4: Enable HTTPS on GitHub Pages

1. Go to your GitHub repo: https://github.com/muhammadusman2228/portfolio
2. Click Settings → Pages (left sidebar)
3. You should see your custom domain listed
4. Wait for GitHub to issue an HTTPS certificate (up to 48 hours, usually faster)
5. Once ready, you'll see "HTTPS: Enforced" — check the checkbox to enforce HTTPS

### Step 5: Register with Google Search Console (10 minutes)

For your site to appear in Google search results:

1. Open: https://search.google.com/search-console
2. Click "+ Create property"
3. Enter: `https://www.usman2228.com`
4. Click Continue
5. Verify ownership using DNS TXT record:
   - Copy the TXT record value Google gives you
   - Go back to your registrar's DNS settings
   - Add a TXT record with the value Google provided
   - Click Verify
6. After verification, submit your sitemap:
   - Go to Sitemaps (left menu)
   - Enter: `https://www.usman2228.com/sitemap.xml`
   - Click Submit

Your site will start appearing in Google search within days!

---

## 📋 Your Portfolio Details

**Name:** Muhammad Usman  
**Email:** usmanbhatti504021@gmail.com  
**Phone:** +92 312 4122906  
**GitHub:** https://github.com/muhammadusman2228  
**Domain:** www.usman2228.com  
**Resume:** https://www.usman2228.com/assets/Muhammad_Usman_Resume_Full.pdf

---

## 🎯 Next Steps & Optional Enhancements

### Short-term (Required for site to be fully live)
- [ ] Add CNAME record at your registrar
- [ ] Wait for DNS propagation (5-30 min)
- [ ] Test https://www.usman2228.com
- [ ] Enable HTTPS on GitHub Pages
- [ ] Register with Google Search Console

### Medium-term (Recommended)
- [ ] Update portfolio content with your actual projects and skills
- [ ] Replace placeholder project descriptions and links
- [ ] Add more projects to the Projects section
- [ ] Customize academic details section
- [ ] Update colors/fonts if desired (see css/style.css)

### Long-term (Nice to have)
- [ ] Add a contact form that sends emails
- [ ] Implement a blog section
- [ ] Add animation on scroll
- [ ] Set up analytics (Google Analytics)
- [ ] Add dark/light theme toggle

---

## 📁 Project Structure

```
portfolio/
├── index.html              # Main portfolio page
├── css/style.css          # Responsive dark-theme styles
├── js/script.js           # Navigation and scroll effects
├── assets/
│   ├── profile.jpg        # Your profile photo
│   └── Muhammad_Usman_Resume_Full.pdf  # Your resume
├── robots.txt             # SEO: tells search engines what to crawl
├── sitemap.xml            # SEO: lists all pages
├── CNAME                  # GitHub Pages custom domain
├── .github/
│   └── workflows/
│       └── deploy-pages.yml  # Auto-deploy on push
├── .gitignore             # Ignore OS/editor files
└── README.md              # This file
```

---

## 🔗 Important Links

- **GitHub Repository:** https://github.com/muhammadusman2228/portfolio
- **Deployed Site:** https://www.usman2228.com (once DNS is configured)
- **Temporary URL:** https://muhammadusman2228.github.io/portfolio/
- **Google Search Console:** https://search.google.com/search-console
- **DNS Checker:** https://dnschecker.org

---

## ❓ Troubleshooting

**Site not loading at www.usman2228.com**
- Wait 5-30 more minutes for DNS propagation
- Clear your browser cache (Ctrl+Shift+Delete)
- Try in incognito/private mode
- Check DNS status at https://dnschecker.org

**HTTPS not showing on GitHub Pages**
- Wait up to 48 hours for certificate issuance
- Ensure CNAME record is correct and DNS is live
- If using Cloudflare, make sure it's set to "DNS only"

**Site works but HTTPS shows warning**
- This is temporary during certificate provisioning
- Wait a few more hours and refresh

---

## 💡 Need Help?

If you have questions:
1. Check GitHub Pages docs: https://pages.github.com
2. Check your registrar's DNS documentation
3. Use https://dnschecker.org to debug DNS issues
4. Check GitHub repo Actions tab for deployment logs

---

## 🎉 Congratulations!

Your professional portfolio website is ready to showcase your skills to the world!

**Next action:** Go to your domain registrar and add the CNAME record. That's all that's needed to go live!
