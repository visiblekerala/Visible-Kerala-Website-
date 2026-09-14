const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

// Read logos as base64
let logoMark, logoFull;
try {
  logoMark = 'data:image/png;base64,' + fs.readFileSync(path.join(ROOT, 'public', 'logo-mark-isolated.png')).toString('base64');
  logoFull = 'data:image/png;base64,' + fs.readFileSync(path.join(ROOT, 'public', 'logo-full.png')).toString('base64');
} catch (e) {
  logoMark = fs.readFileSync(path.join(ROOT, 'scripts', 'logo-mark-b64.txt'), 'utf8');
  logoFull = fs.readFileSync(path.join(ROOT, 'scripts', 'logo-full-b64.txt'), 'utf8');
}

// Read CSS
let css = fs.readFileSync(path.join(ROOT, 'src', 'app', 'globals.css'), 'utf8');
css = css.replace(/@import\s+"tailwindcss";\s*\n?/, '');

// Extract siteContent from page.tsx
const pageSrc = fs.readFileSync(path.join(ROOT, 'src', 'app', 'page.tsx'), 'utf8');
const contentMatch = pageSrc.match(/const siteContent = (\{[\s\S]*?\n\};)/);
if (!contentMatch) { console.error('FAIL: Could not extract siteContent'); process.exit(1); }

let contentJS = contentMatch[1]
  .replace(/:\s*'en'\s*\|\s*'ml'/g, '')
  .replace(/:\s*string/g, '')
  .replace(/:\s*React\.FormEvent/g, '');

const WA_BASE = "https://wa.me/917012025737?text=";
const WA_MSG_DEFAULT = encodeURIComponent("Hi! I'd like to get a modern website built for my business with Visible Kerala.");

// Read the JS file
const jsCode = fs.readFileSync(path.join(ROOT, 'scripts', 'standalone-js.js'), 'utf8');

// Build the final HTML
const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Visible Kerala | Website Design & Hosting for Kerala Small Businesses</title>
<meta name="description" content="We build modern, mobile-friendly websites for Kerala's small businesses — hosting and domain included, live in under a week, with zero hidden costs.">
<meta property="og:title" content="Visible Kerala — From Invisible to Unmissable | Website Agency">
<meta property="og:description" content="Modern websites for small businesses across all 14 districts of Kerala. Hosting included, pay only after you see it live.">
<meta property="og:type" content="website">
<link rel="icon" type="image/png" href="${logoMark}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Anek+Malayalam:wght@400;500;600;700;800&family=Baloo+2:wght@600;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
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
      <a href="#packages" data-hover-ml="പാക്കേജുകൾ" data-i18n="nav.services">Packages</a>
      <a href="#how-it-works" data-hover-ml="എങ്ങനെ പ്രവർത്തിക്കുന്നു" data-i18n="nav.howItWorks">How It Works</a>
      <a href="#why-it-works" data-hover-ml="എന്തുകൊണ്ട് ഫലപ്രദം" data-i18n="nav.whyItWorks">Why It Works</a>
      <a href="#showcase" data-hover-ml="മാതൃകകൾ" data-i18n="nav.portfolio">Showcase</a>
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
  <a href="#packages" onclick="closeMobileMenu()" data-i18n="nav.services">Packages</a>
  <a href="#how-it-works" onclick="closeMobileMenu()" data-i18n="nav.howItWorks">How It Works</a>
  <a href="#why-it-works" onclick="closeMobileMenu()" data-i18n="nav.whyItWorks">Why It Works</a>
  <a href="#showcase" onclick="closeMobileMenu()" data-i18n="nav.portfolio">Showcase</a>
  <a href="#contact" onclick="closeMobileMenu()" data-i18n="nav.contact">Contact</a>
</div>
<main>
  <section class="hero-section reveal-on-scroll">
    <div class="blob blob-1"></div><div class="blob blob-2"></div><div class="blob blob-3"></div>
    <div class="hero-content">
      <span class="eyebrow-pill" data-i18n="hero.eyebrow">Website Design · Hosting Included · Google Visibility</span>
      <h1 class="display-title" style="font-size:clamp(2rem,5.5vw,3.2rem);color:var(--vk-deep-green);margin-bottom:1.25rem" data-hover-ml="കാണാത്തതിൽ നിന്ന് കാണാതിരിക്കാൻ വയ്യാത്തതിലേക്ക് — ഇനി വെബ്സൈറ്റും ഒപ്പം." data-i18n="hero.headline">From Invisible to Unmissable — Now With a Website to Match.</h1>
      <p class="hero-subhead" data-i18n="hero.subhead">9 out of 10 small businesses in Kerala either don't have a website, or have one no one can find. We build you a modern, mobile-friendly site — fully live in under a week — at a price that doesn't need a loan.</p>
      <div class="hero-cta-group">
        <a href="${WA_BASE}${WA_MSG_DEFAULT}" class="btn-clay-primary lg pulse-glow" target="_blank" rel="noopener noreferrer" data-i18n="hero.primaryCta">Chat on WhatsApp</a>
        <a href="#packages" class="btn-clay-secondary lg" data-i18n="hero.secondaryCta">See Packages</a>
      </div>
    </div>
    <div class="hero-visual-3d">
      <div class="floating-pin-wrapper">
        <img src="${logoFull}" alt="Visible Kerala Web Agency" class="bobbing-pin img-bobbing-pin">
        <div class="pin-shadow"></div>
      </div>
    </div>
  </section>
  <section id="packages" class="services-section reveal-on-scroll">
    <div class="section-header text-center">
      <h2 class="section-title" style="font-size:clamp(1.5rem,4vw,2.2rem);color:var(--vk-deep-green)" data-hover-ml="ലളിതമായ പാക്കേജുകൾ. ഹോസ്റ്റിംഗ് ഉൾപ്പെടെ. ഒളിഞ്ഞിരിക്കുന്ന ചിലവുകൾ ഇല്ല." data-i18n="services.title">Simple Packages. Hosting Included. No Hidden Costs.</h2>
      <p class="section-subtitle" data-i18n="services.subtitle">Everything you need to go from no website to a working one — including the hosting, so you're never stuck figuring out renewals alone.</p>
    </div>
    <div id="packages-grid" class="clay-grid"></div>
    <div class="renewal-note-card">
      <div class="renewal-note-icon">🔄</div>
      <div>
        <div class="renewal-note-title" id="renewal-title">Annual Renewal (From Year 2): ₹1,499/year</div>
        <div class="renewal-note-text" id="renewal-text">From Year 2: ₹1,499/year covers hosting, domain renewal, and minor updates. Cancel anytime — your site and content remain yours.</div>
      </div>
    </div>
  </section>
  <section id="how-it-works" class="workflow-section reveal-on-scroll">
    <div class="section-header text-center" style="max-width:900px;margin:0 auto 2.5rem">
      <h2 class="section-title" style="font-size:clamp(1.5rem,4vw,2.2rem);color:var(--vk-deep-green)" data-hover-ml="മൂന്ന് ഘട്ടങ്ങൾ. ഒരാഴ്ച. യഥാർത്ഥത്തിൽ നിങ്ങളുടെ സ്വന്തമായ ഒരു വെബ്സൈറ്റ്." data-i18n="howItWorks.title">Three Steps. One Week. A Website That's Actually Yours.</h2>
      <p class="section-subtitle" data-i18n="howItWorks.subtitle">You run your business; we handle the design, coding, domain, and hosting.</p>
    </div>
    <div class="workflow-container">
      <div id="steps-grid" class="steps-grid"></div>
    </div>
  </section>
  <section id="why-it-works" class="why-section reveal-on-scroll">
    <div class="section-header text-center">
      <h2 class="section-title" style="font-size:clamp(1.5rem,4vw,2.2rem);color:var(--vk-deep-green)" data-hover-ml="കേരളത്തിലെ ചെറുകിട ബിസിനസ്സുകൾക്കായി നിർമ്മിച്ചത്. ബുദ്ധിമുട്ടുള്ള വാക്കുകളില്ല, ഞെട്ടിക്കുന്ന ചിലവുകളില്ല." data-i18n="whyItWorks.title">Built for Kerala's Small Businesses. No Jargon, No Surprises.</h2>
      <p class="section-subtitle" data-i18n="whyItWorks.subtitle">Real websites that bring real customers to your shop or service.</p>
    </div>
    <div class="demo-mockup-container">
      <div class="browser-bar">
        <div class="browser-dots">
          <span class="browser-dot red"></span>
          <span class="browser-dot yellow"></span>
          <span class="browser-dot green"></span>
        </div>
        <div class="browser-url-bar">
          <span>🔒</span>
          <span>https://keralageneralstore.com</span>
        </div>
      </div>
      <div class="mockup-phone">
        <div class="demo-toggle-row">
          <button id="btn-before" class="demo-toggle-btn active" onclick="handleDemoToggle(false)" data-i18n="whyItWorks.beforeLabel">Without A Modern Website</button>
          <button id="btn-after" class="demo-toggle-btn after" onclick="handleDemoToggle(true)" data-i18n="whyItWorks.afterLabel">With Visible Kerala Website</button>
        </div>
        <div class="mockup-content">
          <div id="before-pane" class="mockup-pane before-pane">
            <div class="mock-shop-name" style="color:#888">Kerala General Store</div>
            <div style="margin-bottom:0.75rem;margin-top:0.25rem"><span class="mock-badge gray">⚠️ No Mobile Website Found</span></div>
            <div class="mock-placeholder-box" style="background:#fdf3f2;border:1px dashed #e2a8a8;color:#c0392b">❌ 404 / Unregistered Domain</div>
            <div class="mock-info-row missing">✗ Customers cannot browse your products</div>
            <div class="mock-info-row missing">✗ No WhatsApp order button</div>
            <div class="mock-info-row missing">✗ Missing from Google Search results</div>
            <div class="mock-map-area no-pin" style="height:60px">Losing daily customers to competitors with websites</div>
          </div>
          <div id="after-pane" class="mockup-pane after-pane">
            <div class="web-mockup-after-content">
              <div class="web-mockup-hero">
                <span class="web-mockup-badge">✨ Live in 4 Days</span>
                <h4>Kerala General Store</h4>
                <p>Fresh Grocery, Spices & Household Essentials</p>
              </div>
              <div class="web-mockup-features">
                <div class="web-feature-chip">📦 4-Page Site</div>
                <div class="web-feature-chip">🌐 Hosting Incl.</div>
                <div class="web-feature-chip">⭐ 4.9 Reviews</div>
              </div>
              <div class="web-mockup-cta">
                <span>💬</span> Order on WhatsApp Direct
              </div>
              <div class="mock-info-row verified" style="font-size:0.78rem">
                ✓ Connected with Google Maps & Business Profile
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="trust-points" class="trust-points"></div>
  </section>
  <section id="showcase" class="portfolio-section reveal-on-scroll">
    <div class="section-header text-center">
      <h2 class="section-title" style="font-size:clamp(1.5rem,4vw,2.2rem);color:var(--vk-deep-green)" data-hover-ml="കേരളത്തിലെ ബിസിനസ്സുകൾക്കായി രൂപകൽപ്പന ചെയ്തവ" data-i18n="portfolio.title">Websites Crafted for Kerala Businesses</h2>
      <p class="section-subtitle" data-i18n="portfolio.subtitle">Clean layouts tailored for our local shops, clinics, homestays, and boutiques.</p>
    </div>
    <div id="portfolio-grid" class="portfolio-grid"></div>
  </section>
  <section id="contact" class="contact-section reveal-on-scroll">
    <div class="contact-clay-card">
      <h2 class="section-title text-center" style="font-size:clamp(1.5rem,4vw,2.2rem);color:var(--vk-deep-green);margin-bottom:0.25rem" data-hover-ml="നമുക്ക് നിങ്ങളുടെ വെബ്സൈറ്റ് നിർമ്മിക്കാം." data-i18n="contact.title">Let's Build Your Website.</h2>
      <p class="contact-subhead" data-i18n="contact.subhead">Message us on WhatsApp for the fastest reply, or fill out the form below.</p>
      <div id="contact-form-area">
        <a href="${WA_BASE}${WA_MSG_DEFAULT}" class="whatsapp-direct-btn" target="_blank" rel="noopener noreferrer">
          <svg class="wa-icon-inline" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          <span data-i18n="hero.primaryCta">Chat on WhatsApp</span>
        </a>
        <div class="contact-divider"><span>OR</span></div>
        <form id="contact-form" class="clay-form" onsubmit="handleFormSubmit(event)">
          <div class="form-group"><label data-i18n="contact.nameLabel">Full Name*</label><input type="text" name="name" required class="clay-input"></div>
          <div class="form-group"><label data-i18n="contact.bizLabel">Business Name*</label><input type="text" name="business_name" required class="clay-input"></div>
          <div class="form-group"><label data-i18n="contact.phoneLabel">Phone/WhatsApp Number*</label><input type="tel" name="phone" required class="clay-input"></div>
          <div class="form-group"><label data-i18n="contact.emailLabel">Email Address*</label><input type="email" name="email" required class="clay-input"></div>
          <div class="form-group"><label data-i18n="contact.typeLabel">Business Type</label><select name="business_type" class="clay-select" id="biz-type-select" required><option value="">Select...</option></select></div>
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
    <p class="footer-tagline" data-i18n="contact.footerTagline">Visible Kerala — From Invisible to Unmissable. Serving small businesses across all 14 districts of Kerala.</p>
    <div class="footer-links">
      <a href="#packages" data-i18n="nav.services">Packages</a>
      <a href="#how-it-works" data-i18n="nav.howItWorks">How It Works</a>
      <a href="#why-it-works" data-i18n="nav.whyItWorks">Why It Works</a>
      <a href="#showcase" data-i18n="nav.portfolio">Showcase</a>
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

// Standalone interactions
${jsCode.replace(/const siteContent = \{[\s\S]*?\n\};/, '// (siteContent defined above)')}
</script>
</body>
</html>`;

const outPath = path.join(ROOT, 'download', 'visible-kerala.html');
fs.writeFileSync(outPath, html);
console.log('SUCCESS! File written:', outPath);
console.log('Size:', (Buffer.byteLength(html) / 1024 / 1024).toFixed(2), 'MB');
