# Visible Kerala — Single-Page Marketing Website Development Specification

> **Target AI / Developer Handoff Document**  
> **Project:** Visible Kerala Single-Page Marketing Website  
> **Tech Stack:** HTML5, CSS3 (2.5D Claymorphism), Vanilla JavaScript (No external frameworks)  
> **Core Feature:** Dual-Trigger Bilingual Architecture (English & Malayalam)

---

## 1. Executive Summary & Project Mandate

**Visible Kerala** is a dedicated service helping small local businesses across Kerala—such as local shops, salons, tuition centres, homestays, bakeries, clinics, tailors, and auto repair garages—get discovered on Google, WhatsApp, and social media. 

### Key Objectives:
- **Tone:** Friendly local expert (*naadan* professional), approachable, plain language, proof over promises. Avoid sterile, corporate agency jargon.
- **Visual Style:** Confident **2.5D / Claymorphism**. Soft, double-layered shadows, gentle gradients, rounded corners, floating blob shapes, and tactile 3D elements. Avoid sharp-edged, flat, or cold aesthetics.
- **Performance:** Lightweight, fast-loading on 3G/4G cellular networks across Kerala (mobile-first design, total page weight `< 800KB`).
- **Bilingual Accessibility:** Seamless switching between English and Malayalam without reloading the page or requiring separate URL structures.

---

## 2. Brand Identity & Visual System

### 2.1 Logo Handling & Asset Isolation (Critical)
The provided reference asset (`Gemini_Generated_Image_.png`) features a solid warm-cream background. 
1. **Isolation:** Cleanly remove the background (chroma-key or flood-fill removal) to export the pin-and-storefront mark and "Visible Kerala" wordmark as a transparent PNG/SVG asset.
2. **Placement Rules:** Never place the logo directly on top of busy gradients or patterns. Always provide a calm, uncluttered patch of Cream Base (`#FBF3E6`), White, or solid Primary Green behind it.
3. **Sizing Hierarchy:**
   - **Navigation Bar:** Compact mark + wordmark (~40px height).
   - **Hero Centerpiece:** Large, animated 3D bobbing centerpiece (~280px–360px height).
   - **Footer:** Small mark + wordmark (~32px height).

### 2.2 Color Palette Tokens

| Color Name | Hex Code | Usage & Placement |
| :--- | :--- | :--- |
| **Primary Green** | `#2F9E44` | Sampled directly from logo; primary CTAs, active badges, navigation accents. |
| **Deep Green** | `#1B5E20` | Headings, dark body text contrasts, structural borders, footer background. |
| **Cream Base** | `#FBF3E6` | Primary background, matches logo background, card backgrounds. |
| **Ink (Off-Black)**| `#1E2A22` | Body text, subheadings, form input typography. |
| **Accent Marigold** | `#FF9F1C` | 3D floating shapes, card highlights, warning/attention tags. |
| **Backwater Teal** | `#0F7173` | Secondary gradient stops, service icons, illustration highlights. |
| **Sunset Coral** | `#FF6B6B` | Hover states, notification badges, interactive accents. |
| **Golden Yellow** | `#FFD23F` | Star ratings, "Most Popular" service badges, decorative blobs. |

### 2.3 Typography & Script Hierarchy

All fonts must be loaded via Google Fonts CDN, utilizing `display=swap` for optimal rendering performance.

```css
@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;800&family=Baloo+Chettan+2:wght@600;800&family=Inter:wght@400;500;600&family=Manjari:wght@400;700&display=swap');

:root {
  /* Latin Typography */
  --font-heading-en: 'Baloo 2', cursive, sans-serif;
  --font-body-en: 'Inter', sans-serif;
  
  /* Malayalam Typography (Optimized for Script Kerning & Conjuncts) */
  --font-heading-ml: 'Baloo Chettan 2', cursive, sans-serif;
  --font-body-ml: 'Manjari', sans-serif;
}
```

### 2.4 Claymorphic Elevation Tokens (CSS3)

```css
:root {
  /* Claymorphism relies on a dark exterior drop-shadow + bright interior inset highlight */
  --clay-shadow-sm: 4px 4px 10px rgba(27, 94, 32, 0.08), inset -2px -2px 6px rgba(0, 0, 0, 0.05), inset 2px 2px 6px rgba(255, 255, 255, 0.8);
  --clay-shadow-md: 8px 8px 20px rgba(27, 94, 32, 0.12), inset -3px -3px 8px rgba(0, 0, 0, 0.08), inset 3px 3px 8px rgba(255, 255, 255, 0.9);
  --clay-shadow-lg: 12px 16px 30px rgba(27, 94, 32, 0.18), inset -4px -4px 10px rgba(0, 0, 0, 0.1), inset 4px 4px 10px rgba(255, 255, 255, 1);
  --clay-card-hover: 16px 20px 35px rgba(27, 94, 32, 0.22), inset -4px -4px 8px rgba(0, 0, 0, 0.06), inset 4px 4px 8px rgba(255, 255, 255, 1);
  
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

---

## 3. Dual-Trigger Language Architecture

To serve both tech-savvy business owners and traditional local shopkeepers without creating UX friction, implement a **Dual-Trigger Language System**:

1. **Global Toggle Switch (Click/Tap):** A pill-shaped toggle switch located in the sticky navigation (`EN | മലയാളം`). When clicked:
   - Triggers a smooth `250ms` DOM opacity fade (`0.7` to `1.0`).
   - Swaps text nodes dynamically from the state object.
   - Updates font-family classes (`body.lang-ml-active`).
   - Persists user preference to `localStorage.setItem('vk_lang', lang)`.
2. **Contextual Tooltip Previews (Hover / Long-Press):** Key headings, service badges, and navigation items include a custom data-attribute: `data-hover-ml="[Malayalam Translation]"`.
   - When browsing in English mode, hovering over (desktop) or long-pressing (mobile) an element with `data-hover-ml` triggers a soft claymorphic tooltip floating above the cursor showing the Malayalam translation instantly.
   - Prevents layout shift while aiding comprehension.

---

## 4. Section-by-Section Functional Specifications

### 4.1 Sticky Navigation
- **Left:** Isolated Logo Mark + "Visible Kerala" Wordmark.
- **Center/Right:** Anchor Links → `Services` · `How It Works` · `Why It Works` · `Contact`.
- **Far Right:** Language Toggle Pill (`EN | മലയാളം`) + WhatsApp CTA Button ("Chat on WhatsApp").
- **Behavior:** Starts transparent over the hero section; transitions to solid Cream Base (`#FBF3E6`) with `--clay-shadow-sm` once the user scrolls past `100px`.

### 4.2 Hero Section
- **Eyebrow:** Pill-shaped tag: *"Google Business Profile · WhatsApp Business · Social Media"*.
- **Headline:** *"From Invisible to Unmissable."* (Malayalam hover: *"അറിയപ്പെടാത്ത അവസ്ഥയിൽ നിന്ന് എപ്പോഴും മുന്നിൽ!"*).
- **Subhead:** *"9 out of 10 small businesses in Kerala don't show up when someone searches for them on Google. We make sure yours does — fully set up in a day, at a price a small shop can afford."*
- **Primary CTA:** Solid green claymorphic button with an infinite glowing/pulsing ring.  
  - **Action:** Deep link to WhatsApp:  
    `https://wa.me/917012025737?text=Hi!%20I%27d%20like%20to%20know%20more%20about%20getting%20my%20business%20visible%20on%20Google.`
- **Secondary CTA:** *"See Packages"* (Smooth scrolls to `#services`).
- **Visual Centerpiece:** Large isolated 3D map pin with a bounce-drop entrance animation on page load, followed by a continuous gentle bobbing loop.
- **Background:** Cream background with subtle CSS noise/paper texture. Floating colorful blob shapes drift slowly behind the pin (CSS keyframe parallax drift at varying speeds).

### 4.3 Services Section ("Simple Packages. No Surprises.")
Four interactive cards laid out in a responsive grid (4 columns desktop, 2 columns tablet, 1 column mobile).

| Package Name | Price | One-Line Pitch | Included Features Checklist |
| :--- | :--- | :--- | :--- |
| **Starter** | **₹499** | *"Get found on Google + WhatsApp."* | • Google Business Profile setup<br>• WhatsApp Business setup with auto-reply<br>• Basic map pinning |
| **Standard** ⭐ *(Most Popular)* | **₹799** | *"Look professional everywhere customers search."* | • Everything in Starter<br>• Custom digital logo cleanup<br>• 5 branded social media posts<br>• Instagram or Facebook page setup |
| **Premium** | **₹1,299** | *"The complete visibility package."* | • Everything in Standard<br>• Full Instagram bio & highlight setup<br>• Google review automated link system<br>• 1 month of priority support |
| **Retainer** | **₹599/mo** | *"Stay visible, every single month."* | • 8 custom posts per month<br>• Customer review reply management<br>• Ongoing holiday/hours updates<br>• Cancel anytime with zero fees |

- **Card Interactivity:** On mouse move, calculate cursor position relative to card center and apply a soft 3D tilt (maximum ±8 deg rotation via `perspective(1000px) rotateX() rotateY()`). Shadow elevates to `--clay-card-hover`.
- **Card CTAs:** *"Get Started on WhatsApp"* → Opens WhatsApp with a pre-filled string specifying the chosen package.

### 4.4 How It Works Section ("Three Steps. One Week. Zero Hassle.")
Three horizontal/stacked steps connected by a dynamic SVG line path.
1. **We Check:** *"We search your business live and show you exactly what customers see today — good or bad."*
2. **We Build:** *"Google Business Profile, WhatsApp Business, and your social pages — set up properly, usually within a day."*
3. **You're Found:** *"Customers searching nearby now find you — number, hours, and photos, right there on Google Maps."*
- **Animation:** As the user scrolls through the section, an Intersection Observer triggers the SVG path to draw itself (`stroke-dashoffset` transition) connecting Step 1 → Step 2 → Step 3. Step icons bounce-in when the line reaches them.

### 4.5 Why It Works Section (Trust & Demonstration)
- **Centerpiece (Interactive Demo):** A stylized CSS phone/browser mockup illustrating a before/after state of a generic local Kerala shop.
  - *State A ("Without Visible Kerala"):* Missing map pin, greyed-out placeholder, zero reviews, empty hours.
  - *State B ("With Visible Kerala"):* Vibrant Primary Green map pin, 5-star rating badge, "Open Now" tag, verified phone number, clean storefront photo.
  - *Control:* Include a draggable horizontal slider or an auto-looping crossfade toggle (switches every 4 seconds with a progress bar).
- **Trust Points (Process-Based):**
  - *"Pay only after you see your profile live on Google."*
  - *"We use Google, WhatsApp, and Instagram — the same free tools trusted by millions worldwide."*
  - *"You keep full 100% ownership — every account stays securely in your name, always."*

### 4.6 Contact Section ("Let's Get You Found.")
- **Primary Action:** Large glowing WhatsApp button for instant messaging.
- **Secondary Form (HTML5 + Web3Forms / EmailJS Integration):**
  - Fields: `Full Name*`, `Business Name*`, `Phone/WhatsApp Number*`, `Business Type` (Dropdown: *Tuition Centre, Salon / Beauty Parlour, Homestay / Lodge, Bakery / Caterer, Clinic / Pharmacy, Hardware / Auto Shop, Tailoring / Boutique, Other*), `Message` (Optional).
  - Submit Button: *"Send Message"*.
  - Success State: On submit, hide form inputs and morph container into a green checkmark animation with text: *"Thanks! We'll reach out to your WhatsApp within a few hours."*
- **Contact Metadata:**
  - Email: `visiblekerala@gmail.com` (with `mailto:` link).
  - Phone / WhatsApp: `+91 70120 25737`.
  - Service Footer Note: *"Serving small businesses across all 14 districts of Kerala."*

### 4.7 Footer
- Compact Logo Mark + Wordmark.
- Tagline: *"From Invisible to Unmissable."*
- Navigation links repeat.
- Copyright: `© 2026 Visible Kerala. All rights reserved.`

---

## 5. Complete Bilingual Translation Dictionary

Embed this JSON object directly into the JavaScript engine. Translations are culturally tuned to sound professional yet familiar to local Kerala merchants.

```javascript
const siteContent = {
  en: {
    nav: {
      services: "Services",
      howItWorks: "How It Works",
      whyItWorks: "Why It Works",
      contact: "Contact",
      cta: "Chat on WhatsApp"
    },
    hero: {
      eyebrow: "Google Business Profile · WhatsApp Business · Social Media",
      headline: "From Invisible to Unmissable.",
      subhead: "9 out of 10 small businesses in Kerala don't show up when someone searches for them on Google. We make sure yours does — fully set up in a day, at a price a small shop can afford.",
      primaryCta: "Chat on WhatsApp",
      secondaryCta: "See Packages"
    },
    services: {
      title: "Simple Packages. No Surprises.",
      subtitle: "Everything you need to get discovered by local customers.",
      popularBadge: "Most Popular",
      ctaButton: "Get Started on WhatsApp",
      packages: [
        {
          name: "Starter",
          price: "₹499",
          pitch: "Get found on Google + WhatsApp.",
          includes: ["Google Business Profile setup", "WhatsApp Business setup with auto-reply", "Basic map pinning"]
        },
        {
          name: "Standard",
          price: "₹799",
          pitch: "Look professional everywhere customers search.",
          includes: ["Everything in Starter", "Custom digital logo cleanup", "5 branded social media posts", "Instagram or Facebook page setup"]
        },
        {
          name: "Premium",
          price: "₹1,299",
          pitch: "The complete visibility package.",
          includes: ["Everything in Standard", "Full Instagram bio & highlight setup", "Google review automated link system", "1 month of priority support"]
        },
        {
          name: "Retainer",
          price: "₹599/month",
          pitch: "Stay visible, every single month.",
          includes: ["8 custom posts per month", "Customer review reply management", "Ongoing holiday/hours updates", "Cancel anytime with zero fees"]
        }
      ]
    },
    howItWorks: {
      title: "Three Steps. One Week. Zero Hassle.",
      subtitle: "You run your business; we handle the digital setup.",
      steps: [
        {
          title: "1. We Check",
          desc: "We search your business live and show you exactly what customers see today — good or bad."
        },
        {
          title: "2. We Build",
          desc: "Google Business Profile, WhatsApp Business, and your social pages — set up properly, usually within a day."
        },
        {
          title: "3. You're Found",
          desc: "Customers searching nearby now find you — number, hours, and photos, right there on Google Maps."
        }
      ]
    },
    whyItWorks: {
      title: "Built For Kerala's Local Businesses",
      subtitle: "No confusing jargon. Just real results you can see on your own phone.",
      beforeLabel: "Without Visible Kerala",
      afterLabel: "With Visible Kerala",
      trustPoints: [
        "Pay only after you see your profile live on Google.",
        "We use Google, WhatsApp, and Instagram — the same free tools trusted by millions worldwide.",
        "You keep full 100% ownership — every account stays securely in your name, always."
      ]
    },
    contact: {
      title: "Let's Get You Found.",
      subhead: "Message us on WhatsApp for the fastest reply, or fill out the form below.",
      nameLabel: "Full Name*",
      bizLabel: "Business Name*",
      phoneLabel: "Phone/WhatsApp Number*",
      typeLabel: "Business Type",
      types: ["Tuition Centre", "Salon / Beauty Parlour", "Homestay / Lodge", "Bakery / Caterer", "Clinic / Pharmacy", "Hardware / Auto Shop", "Tailoring / Boutique", "Other"],
      msgLabel: "Message (Optional)",
      submitBtn: "Send Message",
      successMsg: "Thanks! We'll reach out to your WhatsApp within a few hours.",
      footerServing: "Serving small businesses across all 14 districts of Kerala."
    }
  },
  ml: {
    nav: {
      services: "സേവനങ്ങൾ",
      howItWorks: "പ്രവർത്തനരീതി",
      whyItWorks: "എന്തുകൊണ്ട് ഞങ്ങൾ?",
      contact: "ബന്ധപ്പെടുക",
      cta: "വാട്സ്ആപ്പിൽ സംസാരിക്കാം"
    },
    hero: {
      eyebrow: "ഗൂഗിൾ ബിസിനസ് പ്രൊഫൈൽ · വാട്സ്ആപ്പ് ബിസിനസ് · സോഷ്യൽ മീഡിയ",
      headline: "അറിയപ്പെടാത്ത അവസ്ഥയിൽ നിന്ന് എപ്പോഴും മുന്നിൽ!",
      subhead: "കേരളത്തിലെ 10-ൽ 9 ചെറുകിട സംരംഭങ്ങളും ഗൂഗിളിൽ തിരയുമ്പോൾ കാണാറില്ല. നിങ്ങളുടെ സ്ഥാപനം ഉപഭോക്താക്കൾ എളുപ്പത്തിൽ കണ്ടെത്താൻ ഞങ്ങൾ സഹായിക്കുന്നു — ചെറിയ ചെലവിൽ, ഒറ്റ ദിവസം കൊണ്ട് പൂർണ്ണമായും സജ്ജമാക്കാം.",
      primaryCta: "വാട്സ്ആപ്പിൽ സംസാരിക്കാം",
      secondaryCta: "പാക്കേജുകൾ കാണുക"
    },
    services: {
      title: "ലളിതമായ പാക്കേജുകൾ. മറഞ്ഞിരിക്കുന്ന ചെലവുകളില്ല.",
      subtitle: "നാട്ടിലെ ഉപഭോക്താക്കൾ നിങ്ങളെ കണ്ടെത്താൻ വേണ്ടതെല്ലാം.",
      popularBadge: "ഏറ്റവും ജനപ്രിയം",
      ctaButton: "വാട്സ്ആപ്പിൽ തുടങ്ങാം",
      packages: [
        {
          name: "സ്റ്റാർട്ടർ",
          price: "₹499",
          pitch: "ഗൂഗിളിലും വാട്സ്ആപ്പിലും നിങ്ങളുടെ സാന്നിധ്യം ഉറപ്പാക്കാം.",
          includes: ["ഗൂഗിൾ ബിസിനസ് പ്രൊഫൈൽ നിർമ്മാണം", "ഓട്ടോ-റിപ്ലൈ സഹിതം വാട്സ്ആപ്പ് ബിസിനസ് സജ്ജീകരണം", "ഗൂഗിൾ മാപ്പിൽ കൃത്യമായ സ്ഥാനം ചേർക്കൽ"]
        },
        {
          name: "സ്റ്റാൻഡേർഡ്",
          price: "₹799",
          pitch: "ഉപഭോക്താക്കൾ തിരയുമ്പോഴെല്ലാം മികച്ച പ്രൊഫഷണൽ ലുക്ക്.",
          includes: ["സ്റ്റാർട്ടർ പാക്കേജിലെ എല്ലാം", "ഡിജിറ്റൽ ലോഗോ ക്ലീൻ-അപ്പ്", "ബിസിനസ്സിനായി 5 സോഷ്യൽ മീഡിയ പോസ്റ്റുകൾ", "ഇൻസ്റ്റാഗ്രാം അല്ലെങ്കിൽ ഫേസ്ബുക്ക് പേജ് നിർമ്മാണം"]
        },
        {
          name: "പ്രീമിയം",
          price: "₹1,299",
          pitch: "ബിസിനസ്സ് വളർത്താൻ സമഗ്രമായ വിസിബിലിറ്റി പാക്കേജ്.",
          includes: ["സ്റ്റാൻഡേർഡ് പാക്കേജിലെ എല്ലാം", "പൂർണ്ണമായ ഇൻസ്റ്റാഗ്രാം ബയോ & ഹൈലൈറ്റ് സജ്ജീകരണം", "ഗൂഗിൾ റിവ്യൂ വർദ്ധിപ്പിക്കാനുള്ള ഓട്ടോമാറ്റിക് ലിങ്ക് സിസ്റ്റം", "1 മാസത്തെ മുൻഗണനാ സപ്പോർട്ട്"]
        },
        {
          name: "റിട്ടൈനർ",
          price: "₹599/മാസം",
          pitch: "ഓരോ മാസവും സജീവമായി നിലനിൽക്കാം, പുതിയ കസ്റ്റമേഴ്സിനെ നേടാം.",
          includes: ["മാസം തോറും 8 കസ്റ്റം ഡിസൈൻ പോസ്റ്റുകൾ", "കസ്റ്റമർ റിവ്യൂകൾക്ക് കൃത്യമായ മറുപടി നൽകൽ", "അവധി ദിനങ്ങളും പ്രവൃത്തി സമയവും അപ്ഡേറ്റ് ചെയ്യൽ", "എപ്പോൾ വേണമെങ്കിലും കട്ടാക്കാം, അധിക ചാർജ്ജില്ല"]
        }
      ]
    },
    howItWorks: {
      title: "3 പടികൾ. 1 ആഴ്ച. യാതൊരു ബുദ്ധിമുട്ടുമില്ല.",
      subtitle: "നിങ്ങൾ ബിസിനസ്സ് നോക്കിക്കോളൂ; ഡിജിറ്റൽ കാര്യങ്ങൾ ഞങ്ങൾ ചെയ്തേക്കാം.",
      steps: [
        {
          title: "1. ഞങ്ങൾ പരിശോധിക്കുന്നു",
          desc: "നിങ്ങളുടെ ബിസിനസ്സ് നിലവിൽ ഗൂഗിളിൽ തിരഞ്ഞു നോക്കി ഉപഭോക്താക്കൾ എന്താണ് കാണുന്നതെന്ന് ഞങ്ങൾ കൃത്യമായി കാണിച്ചു തരുന്നു."
        },
        {
          title: "2. ഞങ്ങൾ നിർമ്മിക്കുന്നു",
          desc: "ഗൂഗിൾ ബിസിനസ് പ്രൊഫൈൽ, വാട്സ്ആപ്പ് ബിസിനസ്, സോഷ്യൽ മീഡിയ പേജുകൾ എന്നിവ സാധാരണയായി ഒറ്റ ദിവസം കൊണ്ട് കൃത്യമായി സജ്ജമാക്കുന്നു."
        },
        {
          title: "3. ഉപഭോക്താക്കൾ കണ്ടെത്തുന്നു",
          desc: "അടുത്തുള്ള കസ്റ്റമേഴ്സ് തിരയുമ്പോൾ ഫോൺ നമ്പർ, പ്രവൃത്തി സമയം, ഫോട്ടോകൾ എന്നിവ സഹിതം ഗൂഗിൾ മാപ്പിൽ നിങ്ങളെ ആദ്യം കാണുന്നു."
        }
      ]
    },
    whyItWorks: {
      title: "കേരളത്തിലെ ചെറുകിട വ്യാപാരികൾക്കായി തയ്യാറാക്കിയത്",
      subtitle: "സങ്കീർണ്ണമായ സാങ്കേതിക പദങ്ങളില്ല. നിങ്ങളുടെ സ്വന്തം ഫോണിൽ കാണാൻ കഴിയുന്ന യഥാർത്ഥ മാറ്റങ്ങൾ.",
      beforeLabel: "വിസിബിൾ കേരള ഇല്ലാതെ",
      afterLabel: "വിസിബിൾ കേരളയ്‌ക്കൊപ്പം",
      trustPoints: [
        "നിങ്ങളുടെ പ്രൊഫൈൽ ഗൂഗിളിൽ ലൈവായി കണ്ടതിന് ശേഷം മാത്രം പണം നൽകിയാൽ മതി.",
        "ലോകമെമ്പാടുമുള്ള കോടിക്കണക്കിന് ബിസിനസുകൾ വിശ്വസിക്കുന്ന ഗൂഗിൾ, വാട്സ്ആപ്പ്, ഇൻസ്റ്റാഗ്രാം എന്നിവയുടെ സൗജന്യ ടൂളുകൾ മാത്രം ഉപയോഗിക്കുന്നു.",
        "100% ഉടമസ്ഥാവകാശം നിങ്ങൾക്ക് തന്നെ — എല്ലാ അക്കൗണ്ടുകളും എപ്പോഴും നിങ്ങളുടെ സ്വന്തം പേരിലായിരിക്കും."
      ]
    },
    contact: {
      title: "നിങ്ങളുടെ ബിസിനസ്സും ഓൺലൈനിലെത്തിക്കാം.",
      subhead: "ഏറ്റവും വേഗത്തിൽ മറുപടി ലഭിക്കാൻ വാട്സ്ആപ്പിൽ മെസ്സേജ് അയയ്ക്കൂ, അല്ലെങ്കിൽ താഴെയുള്ള ഫോം പൂരിപ്പിക്കൂ.",
      nameLabel: "പൂർണ്ണ പേര്*",
      bizLabel: "ബിസിനസ്സിന്റെ പേര്*",
      phoneLabel: "ഫോൺ/വാട്സ്ആപ്പ് നമ്പർ*",
      typeLabel: "ബിസിനസ് തരം",
      types: ["ട്യൂഷൻ സെന്റർ", "സലൂൺ / ബ്യൂട്ടി പാർലർ", "ഹോംസ്റ്റേ / ലോഡ്ജ്", "ബേക്കറി / കാറ്ററിംഗ്", "ക്ലിനിക് / ഫാർമസി", "ഹാർഡ്‌വെയർ / ഓട്ടോ ഷോപ്പ്", "ടെയ്‌ലറിംഗ് / ബോട്ടീക്", "മറ്റുള്ളവ"],
      msgLabel: "സന്ദേശം (ആവശ്യമെങ്കിൽ മാത്രം)",
      submitBtn: "സന്ദേശം അയയ്ക്കൂ",
      successMsg: "നന്ദി! ഏതാനും മണിക്കൂറുകൾക്കുള്ളിൽ ഞങ്ങൾ വാട്സ്ആപ്പിൽ ബന്ധപ്പെടുന്നതാണ്.",
      footerServing: "കേരളത്തിലെ 14 ജില്ലകളിലുമുള്ള ചെറുകിട സംരംഭങ്ങൾക്ക് അഭിമാനത്തോടെ സേവനം നൽകുന്നു."
    }
  }
};
```

---

## 6. Frontend Code Implementation Architecture

### 6.1 Interactive JavaScript Controller (`app.js`)
This script handles the dual-trigger translation engine, 3D claymorphic tilt physics, SVG path animation, and contextual tooltips without external libraries.

```javascript
document.addEventListener('DOMContentLoaded', () => {
  let currentLang = localStorage.getItem('vk_lang') || 'en';
  
  // --- 1. Language Switching Engine ---
  const langToggleBtn = document.getElementById('lang-toggle');
  
  function applyLanguage(lang) {
    document.body.style.opacity = '0.7';
    document.body.style.transition = 'opacity 250ms ease';
    
    setTimeout(() => {
      // Apply Malayalam script typography class
      document.body.classList.toggle('lang-ml-active', lang === 'ml');
      
      // Update DOM nodes bound with data-i18n
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const keys = el.getAttribute('data-i18n').split('.');
        let text = siteContent[lang];
        keys.forEach(k => text = text ? text[k] : '');
        if (text) {
          if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            el.placeholder = text;
          } else {
            el.textContent = text;
          }
        }
      });
      
      // Re-render dynamic components (Package Cards & Select Dropdowns)
      if (typeof renderPackages === 'function') renderPackages(lang);
      if (typeof renderDropdown === 'function') renderDropdown(lang);
      
      document.body.style.opacity = '1';
      localStorage.setItem('vk_lang', lang);
      currentLang = lang;
      
      if (lang === 'ml') {
        langToggleBtn.classList.add('active-ml');
      } else {
        langToggleBtn.classList.remove('active-ml');
      }
    }, 250);
  }

  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      applyLanguage(currentLang === 'en' ? 'ml' : 'en');
    });
  }

  // --- 2. Contextual Hover Tooltips (English Mode Preview) ---
  const hoverTooltip = document.createElement('div');
  hoverTooltip.className = 'clay-tooltip';
  document.body.appendChild(hoverTooltip);

  document.querySelectorAll('[data-hover-ml]').forEach(el => {
    el.addEventListener('mouseenter', (e) => {
      if (currentLang === 'en') {
        hoverTooltip.textContent = e.target.getAttribute('data-hover-ml');
        hoverTooltip.classList.add('show');
        const rect = e.target.getBoundingClientRect();
        hoverTooltip.style.top = `${rect.top + window.scrollY - 45}px`;
        hoverTooltip.style.left = `${rect.left + (rect.width / 2)}px`;
      }
    });
    el.addEventListener('mouseleave', () => hoverTooltip.classList.remove('show'));
  });

  // --- 3. 3D Card Tilt Physics (Claymorphic Interactive Experience) ---
  document.querySelectorAll('.clay-card-3d').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
      card.style.boxShadow = `var(--clay-card-hover)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
      card.style.boxShadow = `var(--clay-shadow-md)`;
    });
  });

  // --- 4. SVG Line Scroll Drawing (How It Works) ---
  const path = document.querySelector('#workflow-path');
  if (path) {
    const pathLength = path.getTotalLength();
    path.style.strokeDasharray = `${pathLength} ${pathLength}`;
    path.style.strokeDashoffset = pathLength;

    window.addEventListener('scroll', () => {
      const scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / 
                               (document.documentElement.scrollHeight - document.documentElement.clientHeight);
      const drawLength = pathLength * scrollPercentage * 1.6;
      path.style.strokeDashoffset = Math.max(0, pathLength - drawLength);
    });
  }

  // --- 5. Intersection Observer for Scroll Reveals ---
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal-on-scroll').forEach(section => observer.observe(section));

  // Initialize Page Language
  applyLanguage(currentLang);
});
```

### 6.2 Structural HTML Blueprint (`index.html`)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Visible Kerala | From Invisible to Unmissable</title>
  <meta name="description" content="Helping small businesses across Kerala get discovered on Google, WhatsApp, and social media. Simple packages, local expert support.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;800&family=Baloo+Chettan+2:wght@600;800&family=Inter:wght@400;500;600&family=Manjari:wght@400;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body class="bg-cream text-ink">

  <!-- Sticky Navigation -->
  <header class="sticky-nav">
    <div class="nav-container">
      <a href="#" class="brand-logo">
        <img src="assets/logo-mark-isolated.png" alt="Visible Kerala Storefront Pin" class="logo-mark">
        <span class="wordmark">Visible Kerala</span>
      </a>
      
      <nav class="nav-links">
        <a href="#services" data-i18n="nav.services" data-hover-ml="സേവനങ്ങൾ">Services</a>
        <a href="#how-it-works" data-i18n="nav.howItWorks" data-hover-ml="പ്രവർത്തനരീതി">How It Works</a>
        <a href="#why-it-works" data-i18n="nav.whyItWorks" data-hover-ml="എന്തുകൊണ്ട് ഞങ്ങൾ?">Why It Works</a>
        <a href="#contact" data-i18n="nav.contact" data-hover-ml="ബന്ധപ്പെടുക">Contact</a>
      </nav>

      <div class="nav-actions">
        <!-- Dual-Trigger Language Switcher Pill -->
        <button id="lang-toggle" class="lang-switch-pill" aria-label="Toggle Language Between English and Malayalam">
          <span class="lang-text en">EN</span>
          <span class="toggle-slider"></span>
          <span class="lang-text ml">മലയാളം</span>
        </button>

        <a href="https://wa.me/917012025737?text=Hi!%20I%27d%20like%20to%20know%20more%20about%20getting%20my%20business%20visible%20on%20Google." 
           class="btn-clay-primary pulse-glow" target="_blank" rel="noopener">
           <span data-i18n="nav.cta">Chat on WhatsApp</span>
        </a>
      </div>
    </div>
  </header>

  <main>
    <!-- Hero Section -->
    <section class="hero-section reveal-on-scroll">
      <div class="blob blob-1"></div>
      <div class="blob blob-2"></div>
      
      <div class="hero-content">
        <span class="eyebrow-pill" data-i18n="hero.eyebrow">Google Business Profile · WhatsApp Business · Social Media</span>
        <h1 class="display-title" data-i18n="hero.headline" data-hover-ml="അറിയപ്പെടാത്ത അവസ്ഥയിൽ നിന്ന് എപ്പോഴും മുന്നിൽ!">From Invisible to Unmissable.</h1>
        <p class="hero-subhead" data-i18n="hero.subhead">9 out of 10 small businesses in Kerala don't show up when someone searches for them on Google...</p>
        
        <div class="hero-cta-group">
          <a href="https://wa.me/917012025737" class="btn-clay-primary lg pulse-glow" data-i18n="hero.primaryCta">Chat on WhatsApp</a>
          <a href="#services" class="btn-clay-secondary lg" data-i18n="hero.secondaryCta">See Packages</a>
        </div>
      </div>

      <div class="hero-visual-3d">
        <div class="floating-pin-wrapper">
          <img src="assets/hero-pin-large.png" alt="3D Bobbing Map Pin" class="bobbing-pin">
          <div class="pin-shadow"></div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="services-section reveal-on-scroll">
      <div class="section-header text-center">
        <h2 class="section-title" data-i18n="services.title" data-hover-ml="ലളിതമായ പാക്കേജുകൾ. മറഞ്ഞിരിക്കുന്ന ചെലവുകളില്ല.">Simple Packages. No Surprises.</h2>
        <p class="section-subtitle" data-i18n="services.subtitle">Everything you need to get discovered by local customers.</p>
      </div>
      
      <div id="packages-grid" class="clay-grid">
        <!-- Dynamically rendered via JS renderPackages(currentLang) -->
      </div>
    </section>

    <!-- How It Works Section -->
    <section id="how-it-works" class="workflow-section reveal-on-scroll">
      <div class="section-header text-center">
        <h2 class="section-title" data-i18n="howItWorks.title" data-hover-ml="3 പടികൾ. 1 ആഴ്ച. യാതൊരു ബുദ്ധിമുട്ടുമില്ല.">Three Steps. One Week. Zero Hassle.</h2>
        <p class="section-subtitle" data-i18n="howItWorks.subtitle">You run your business; we handle the digital setup.</p>
      </div>

      <div class="workflow-container">
        <!-- SVG Path connecting steps -->
        <svg class="workflow-svg" viewBox="0 0 1000 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path id="workflow-path" d="M100 100 C 300 20, 500 180, 900 100" stroke="#2F9E44" stroke-width="6" stroke-linecap="round"/>
        </svg>
        <div id="workflow-steps" class="steps-grid">
          <!-- Dynamically populated steps -->
        </div>
      </div>
    </section>

    <!-- Why It Works Section -->
    <section id="why-it-works" class="why-section reveal-on-scroll">
      <div class="section-header text-center">
        <h2 class="section-title" data-i18n="whyItWorks.title" data-hover-ml="കേരളത്തിലെ ചെറുകിട വ്യാപാരികൾക്കായി തയ്യാറാക്കിയത്">Built For Kerala's Local Businesses</h2>
      </div>
      
      <!-- Interactive Before/After Demo -->
      <div class="demo-mockup-container clay-card">
        <div class="mockup-state before-state">
          <span class="state-label" data-i18n="whyItWorks.beforeLabel">Without Visible Kerala</span>
          <!-- Missing pin graphic, unverified listing -->
        </div>
        <div class="mockup-state after-state">
          <span class="state-label" data-i18n="whyItWorks.afterLabel">With Visible Kerala</span>
          <!-- Full green pin, 5 stars, Open Now badge -->
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact-section reveal-on-scroll">
      <div class="contact-clay-card">
        <h2 class="section-title" data-i18n="contact.title" data-hover-ml="നിങ്ങളുടെ ബിസിനസ്സും ഓൺലൈനിലെത്തിക്കാം.">Let's Get You Found.</h2>
        <p class="contact-subhead" data-i18n="contact.subhead">Message us on WhatsApp for the fastest reply, or fill out the form below.</p>
        
        <form id="contact-form" action="https://api.web3forms.com/submit" method="POST" class="clay-form">
          <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY">
          
          <div class="form-group">
            <label data-i18n="contact.nameLabel">Full Name*</label>
            <input type="text" name="name" required class="clay-input">
          </div>
          
          <div class="form-group">
            <label data-i18n="contact.bizLabel">Business Name*</label>
            <input type="text" name="business_name" required class="clay-input">
          </div>
          
          <div class="form-group">
            <label data-i18n="contact.phoneLabel">Phone/WhatsApp Number*</label>
            <input type="tel" name="phone" required class="clay-input">
          </div>
          
          <div class="form-group">
            <label data-i18n="contact.typeLabel">Business Type</label>
            <select name="business_type" id="biz-type-select" class="clay-select"></select>
          </div>
          
          <div class="form-group">
            <label data-i18n="contact.msgLabel">Message (Optional)</label>
            <textarea name="message" rows="4" class="clay-input"></textarea>
          </div>
          
          <button type="submit" class="btn-clay-primary full-width" data-i18n="contact.submitBtn">Send Message</button>
        </form>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="footer-content text-center">
      <img src="assets/logo-mark-isolated.png" alt="Logo" class="footer-logo">
      <h3 class="footer-title">Visible Kerala</h3>
      <p class="footer-serving" data-i18n="contact.footerServing">Serving small businesses across all 14 districts of Kerala.</p>
      <p class="copyright">© 2026 Visible Kerala. All rights reserved.</p>
    </div>
  </footer>

  <script src="app.js"></script>
</body>
</html>
```

---

## 7. Quality Assurance & Deployment Checklist

Before handing off to Netlify, Vercel, or GitHub Pages deployment, execute this verification matrix:

- [ ] **Asset Background Chroma-Key:** Check isolated PNG logo mark over `#1B5E20` deep green background to guarantee zero white fringe or jagged edge artifacts.
- [ ] **Malayalam Script Rendering Test:** Verify rendering of Malayalam conjunct characters (കൂട്ടക്ഷരങ്ങൾ, e.g., ണ്ട, ക്ക, ച്ച) on iOS Safari and Android Chrome using `Baloo Chettan 2` and `Manjari`. Ensure character kerning does not overlap or break.
- [ ] **Mobile Performance Budget:** Confirm compressed image sizes and lean CSS/JS payloads keep total initial page transfer weight **below 800KB** for fast 3G/4G cellular loading in rural Kerala districts.
- [ ] **Form API Endpoint Verification:** Ensure Web3Forms or EmailJS API keys are properly configured and route submission notifications directly to `visiblekerala@gmail.com` within 60 seconds.
- [ ] **WhatsApp Deep Link Encoding:** Check that URL encoded strings (`%20`, `%27`) in WhatsApp CTA links parse cleanly into pre-filled chat messages on desktop WhatsApp Web and mobile WhatsApp applications.
- [ ] **3D Tilt Performance:** Verify that card hover animations using CSS `perspective()` run at a smooth 60fps without causing horizontal layout scrollbar overflow on tablet viewports (~768px).
