const fs = require('fs');

// Read logos as base64
const logoMark = 'data:image/png;base64,' + fs.readFileSync('/home/z/my-project/public/logo-mark-isolated.png').toString('base64');
const logoFull = 'data:image/png;base64,' + fs.readFileSync('/home/z/my-project/public/logo-full.png').toString('base64');

// Read CSS
let css = fs.readFileSync('/home/z/my-project/src/app/globals.css', 'utf8');
css = css.replace(/@import\s+"tailwindcss";\s*\n?/, '');

// Extract siteContent from page.tsx
const pageSrc = fs.readFileSync('/home/z/my-project/src/app/page.tsx', 'utf8');
const contentMatch = pageSrc.match(/const siteContent = (\{[\s\S]*?\n\};)/);
if (!contentMatch) { console.error('FAIL: Could not extract siteContent'); process.exit(1); }

// Convert TypeScript object to plain JS (remove type annotations)
let contentJS = contentMatch[1]
  .replace(/:\s*'en'\s*\|\s*'ml'/g, '')        // Remove type annotations
  .replace(/:\s*string/g, '')
  .replace(/:\s*React\.FormEvent/g, '');

const WA_BASE = "https://wa.me/917012025737?text=";
const WA_MSG_DEFAULT = encodeURIComponent("Hi! I'd like to know more about getting my business visible on Google.");

// Read the JS file
const jsCode = fs.readFileSync('/home/z/my-project/scripts/standalone-js.js', 'utf8');

// Build the final HTML
const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Visible Kerala | From Invisible to Unmissable</title>
<meta name="description" content="Helping small businesses across Kerala get discovered on Google, WhatsApp, and social media.">
<meta property="og:title" content="Visible Kerala — From Invisible to Unmissable">
<meta property="og:description" content="Helping small businesses across Kerala get discovered on Google, WhatsApp, and social media.">
<meta property="og:type" content="website">
<link rel="icon" type="image/png" href="${logoMark}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;800&family=Baloo+Chettan+2:wght@600;800&family=Inter:wght@400;500;600&family=Manjari:wght@400;700&display=swap" rel="stylesheet">
<style>
${css}
.img-bobbing-pin { height:200px; width:auto; filter:drop-shadow(0 20px 30px rgba(27,94,32,0.2)); }
.wa-icon-inline { width:22px; height:22px; vertical-align:middle; margin-right:8px; }
@media(min-width:640px){ .img-bobbing-pin{height:280px} }
@media(min-width:768px){ .img-bobbing-pin{height:320px} }
</style>
</head>
<body>
<div id="clay-tooltip" class="clay-tooltip"></div>
<header id="sticky-nav" class="sticky-nav">
  <div class="nav-container">
    <a href="#" class="brand-logo" onclick="closeMobileMenu();return false">
      <img src="${logoMark}" alt="Visible Kerala" class="logo-mark">
      <span class="wordmark">Visible Kerala</span>
    </a>
    <nav class="nav-links">
      <a href="#services" data-hover-ml="സേവനങ്ങൾ" data-i18n="nav.services">Services</a>
      <a href="#how-it-works" data-hover-ml="പ്രവർത്തനരീതി" data-i18n="nav.howItWorks">How It Works</a>
      <a href="#why-it-works" data-hover-ml="എന്തുകൊണ്ട് ഞങ്ങൾ?" data-i18n="nav.whyItWorks">Why It Works</a>
      <a href="#contact" data-hover-ml="ബന്ധപ്പെടുക" data-i18n="nav.contact">Contact</a>
    </nav>
    <div class="nav-actions">
      <button id="lang-toggle" class="lang-switch-pill" aria-label="Toggle Language" onclick="toggleLang()">
        <span class="lang-text en">EN</span>
        <span class="lang-text ml">മലയാളം</span>
      </button>
      <a href="${WA_BASE}${WA_MSG_DEFAULT}" class="btn-clay-primary pulse-glow" target="_blank" rel="noopener noreferrer" data-i18n="nav.cta">Chat on WhatsApp</a>
      <button class="nav-mobile-toggle" onclick="toggleMobileMenu()" aria-label="Toggle Menu"><span></span><span></span><span></span></button>
    </div>
  </div>
</header>
<div id="mobile-nav-menu" class="mobile-nav-menu">
  <a href="#services" onclick="closeMobileMenu()" data-i18n="nav.services">Services</a>
  <a href="#how-it-works" onclick="closeMobileMenu()" data-i18n="nav.howItWorks">How It Works</a>
  <a href="#why-it-works" onclick="closeMobileMenu()" data-i18n="nav.whyItWorks">Why It Works</a>
  <a href="#contact" onclick="closeMobileMenu()" data-i18n="nav.contact">Contact</a>
</div>
<main>
  <section class="hero-section reveal-on-scroll">
    <div class="blob blob-1"></div><div class="blob blob-2"></div><div class="blob blob-3"></div>
    <div class="hero-content">
      <span class="eyebrow-pill" data-i18n="hero.eyebrow">Google Business Profile · WhatsApp Business · Social Media</span>
      <h1 class="display-title" style="font-size:clamp(2rem,5.5vw,3.2rem);color:var(--vk-deep-green);margin-bottom:1rem" data-hover-ml="അറിയപ്പെടാത്ത അവസ്ഥയിൽ നിന്ന് എപ്പോഴും മുന്നിൽ!" data-i18n="hero.headline">From Invisible to Unmissable.</h1>
      <p class="hero-subhead" data-i18n="hero.subhead">9 out of 10 small businesses in Kerala don't show up when someone searches for them on Google. We make sure yours does — fully set up in a day, at a price a small shop can afford.</p>
      <div class="hero-cta-group">
        <a href="${WA_BASE}${WA_MSG_DEFAULT}" class="btn-clay-primary lg pulse-glow" target="_blank" rel="noopener noreferrer" data-i18n="hero.primaryCta">Chat on WhatsApp</a>
        <a href="#services" class="btn-clay-secondary lg" data-i18n="hero.secondaryCta">See Packages</a>
      </div>
    </div>
    <div class="hero-visual-3d">
      <div class="floating-pin-wrapper">
        <img src="${logoFull}" alt="Visible Kerala Map Pin" class="bobbing-pin img-bobbing-pin">
        <div class="pin-shadow"></div>
      </div>
    </div>
  </section>
  <section id="services" class="services-section reveal-on-scroll">
    <div class="section-header text-center">
      <h2 class="section-title" style="font-size:clamp(1.5rem,4vw,2.2rem);color:var(--vk-deep-green)" data-hover-ml="ലളിതമായ പാക്കേജുകൾ. മറഞ്ഞിരിക്കുന്ന ചെലവുകളില്ല." data-i18n="services.title">Simple Packages. No Surprises.</h2>
      <p class="section-subtitle" data-i18n="services.subtitle">Everything you need to get discovered by local customers.</p>
    </div>
    <div id="packages-grid" class="clay-grid"></div>
  </section>
  <section id="how-it-works" class="workflow-section reveal-on-scroll">
    <div class="section-header text-center" style="max-width:900px;margin:0 auto 2.5rem">
      <h2 class="section-title" style="font-size:clamp(1.5rem,4vw,2.2rem);color:var(--vk-deep-green)" data-hover-ml="3 പടികൾ. 1 ആഴ്ച. യാതൊരു ബുദ്ധിമുട്ടുമില്ല." data-i18n="howItWorks.title">Three Steps. One Week. Zero Hassle.</h2>
      <p class="section-subtitle" data-i18n="howItWorks.subtitle">You run your business; we handle the digital setup.</p>
    </div>
    <div class="workflow-container">
      <svg class="workflow-svg" viewBox="0 0 1000 200" fill="none" xmlns="http://www.w3.org/2000/svg" style="display:none">
        <path id="workflow-path" d="M100 100 C 300 20, 500 180, 900 100" stroke="#2F9E44" stroke-width="6" stroke-linecap="round"/>
      </svg>
      <div id="steps-grid" class="steps-grid"></div>
    </div>
  </section>
  <section id="why-it-works" class="why-section reveal-on-scroll">
    <div class="section-header text-center">
      <h2 class="section-title" style="font-size:clamp(1.5rem,4vw,2.2rem);color:var(--vk-deep-green)" data-hover-ml="കേരളത്തിലെ ചെറുകിട വ്യാപാരികൾക്കായി തയ്യാറാക്കിയത്" data-i18n="whyItWorks.title">Built For Kerala's Local Businesses</h2>
      <p class="section-subtitle" data-i18n="whyItWorks.subtitle">No confusing jargon. Just real results you can see on your own phone.</p>
    </div>
    <div class="demo-mockup-container">
      <div class="mockup-phone">
        <div class="demo-toggle-row">
          <button id="btn-before" class="demo-toggle-btn active" onclick="handleDemoToggle(false)" data-i18n="whyItWorks.beforeLabel">Without Visible Kerala</button>
          <button id="btn-after" class="demo-toggle-btn after" onclick="handleDemoToggle(true)" data-i18n="whyItWorks.afterLabel">With Visible Kerala</button>
        </div>
        <div class="mockup-content">
          <div id="before-pane" class="mockup-pane before-pane">
            <div class="mock-shop-name">Kerala General Store</div>
            <div class="mock-shop-rating"><span class="mock-star">★</span><span class="mock-star">★</span><span class="mock-star">★</span><span class="mock-star">★</span><span class="mock-star">★</span><span style="margin-left:4px;font-size:0.82rem;color:#bbb">(0 reviews)</span></div>
            <div style="margin-bottom:0.75rem"><span class="mock-badge gray">Unverified</span><span class="mock-badge gray">No Hours</span></div>
            <div class="mock-placeholder-box">No photos added</div>
            <div class="mock-info-row missing">✗ Phone number not listed</div>
            <div class="mock-info-row missing">✗ Address incomplete</div>
            <div class="mock-map-area no-pin">No location pin set</div>
          </div>
          <div id="after-pane" class="mockup-pane after-pane">
            <div class="mock-shop-name" style="color:var(--vk-deep-green)">Kerala General Store</div>
            <div class="mock-shop-rating"><span class="mock-star filled">★</span><span class="mock-star filled">★</span><span class="mock-star filled">★</span><span class="mock-star filled">★</span><span class="mock-star filled">★</span><span style="margin-left:4px;font-size:0.82rem;color:var(--vk-primary-green);font-weight:700">(4.8 · 24 reviews)</span></div>
            <div style="margin-bottom:0.75rem"><span class="mock-badge green">Verified</span><span class="mock-badge green">Open Now</span><span class="mock-badge green">Popular</span></div>
            <div style="background:linear-gradient(135deg,rgba(47,158,68,0.06),rgba(15,113,115,0.04));border-radius:12px;height:80px;display:flex;align-items:center;justify-content:center;margin-bottom:0.75rem;color:var(--vk-primary-green);font-weight:600;font-size:0.9rem">📷 5 Storefront Photos</div>
            <div class="mock-info-row verified">✓ +91 70120 25737</div>
            <div class="mock-info-row verified">✓ Main Road, Near Junction, Kerala</div>
            <div class="mock-map-area has-pin">📍 Precisely pinned on Google Maps</div>
          </div>
        </div>
      </div>
    </div>
    <div id="trust-points" class="trust-points"></div>
  </section>
  <section id="contact" class="contact-section reveal-on-scroll">
    <div class="contact-clay-card">
      <h2 class="section-title text-center" style="font-size:clamp(1.5rem,4vw,2.2rem);color:var(--vk-deep-green);margin-bottom:0.25rem" data-hover-ml="നിങ്ങളുടെ ബിസിനസ്സും ഓൺലൈനിലെത്തിക്കാം." data-i18n="contact.title">Let's Get You Found.</h2>
      <p class="contact-subhead" data-i18n="contact.subhead">Message us on WhatsApp for the fastest reply, or fill out the form below.</p>
      <div id="contact-form-area">
        <a href="${WA_BASE}${WA_MSG_DEFAULT}" class="whatsapp-direct-btn" target="_blank" rel="noopener noreferrer">
          <svg class="wa-icon-inline" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          <span data-i18n="hero.primaryCta">Chat on WhatsApp</span>
        </a>
        <div class="contact-divider"><span>OR</span></div>
        <form id="contact-form" class="clay-form">
          <div class="form-group"><label data-i18n="contact.nameLabel">Full Name*</label><input type="text" name="name" required class="clay-input"></div>
          <div class="form-group"><label data-i18n="contact.bizLabel">Business Name*</label><input type="text" name="business_name" required class="clay-input"></div>
          <div class="form-group"><label data-i18n="contact.phoneLabel">Phone/WhatsApp Number*</label><input type="tel" name="phone" required class="clay-input"></div>
          <div class="form-group"><label data-i18n="contact.typeLabel">Business Type</label><select name="business_type" class="clay-select" id="biz-type-select"><option value="">Select...</option></select></div>
          <div class="form-group"><label data-i18n="contact.msgLabel">Message (Optional)</label><textarea name="message" rows="4" class="clay-input" style="resize:vertical"></textarea></div>
          <button type="submit" class="btn-clay-primary full-width lg" data-i18n="contact.submitBtn">Send Message</button>
        </form>
      </div>
    </div>
  </section>
</main>
<footer class="site-footer">
  <div class="footer-content">
    <img src="${logoMark}" alt="Visible Kerala" class="footer-logo">
    <h3 class="footer-title">Visible Kerala</h3>
    <p class="footer-tagline" data-i18n="hero.headline">From Invisible to Unmissable.</p>
    <div class="footer-links">
      <a href="#services" data-i18n="nav.services">Services</a>
      <a href="#how-it-works" data-i18n="nav.howItWorks">How It Works</a>
      <a href="#why-it-works" data-i18n="nav.whyItWorks">Why It Works</a>
      <a href="#contact" data-i18n="nav.contact">Contact</a>
    </div>
    <div class="footer-contact">
      <a href="mailto:visiblekerala@gmail.com">✉ visiblekerala@gmail.com</a>
      <a href="tel:+917012025737">📞 +91 70120 25737</a>
    </div>
    <p class="footer-serving" data-i18n="contact.footerServing">Serving small businesses across all 14 districts of Kerala.</p>
    <p class="copyright">© 2026 Visible Kerala. All rights reserved.</p>
  </div>
</footer>
<script>
// Content dictionary extracted from page.tsx source
const siteContent = ${contentJS}

// Replace the siteContent in the JS code with the properly extracted one
${jsCode.replace(/const siteContent = \{[\s\S]*?\n\};/, '// (siteContent defined above)')}
</script>
</body>
</html>`;

fs.writeFileSync('/home/z/my-project/download/visible-kerala.html', html);
console.log('SUCCESS! File written: /home/z/my-project/download/visible-kerala.html');
console.log('Size:', (Buffer.byteLength(html) / 1024 / 1024).toFixed(2), 'MB');