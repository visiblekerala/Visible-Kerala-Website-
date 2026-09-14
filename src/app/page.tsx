'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

/* ========================================
   BILINGUAL CONTENT DICTIONARY
   ======================================== */
const siteContent = {
  en: {
    nav: {
      services: 'Packages',
      howItWorks: 'How It Works',
      whyItWorks: 'Why It Works',
      portfolio: 'Showcase',
      contact: 'Contact',
      cta: 'Chat on WhatsApp',
    },
    hero: {
      eyebrow: 'Website Design · Hosting Included · Google Visibility',
      headline: 'From Invisible to Unmissable — Now With a Website to Match.',
      subhead:
        "9 out of 10 small businesses in Kerala either don't have a website, or have one no one can find. We build you a modern, mobile-friendly site — fully live in under a week — at a price that doesn't need a loan.",
      primaryCta: 'Chat on WhatsApp',
      secondaryCta: 'See Packages',
    },
    services: {
      title: 'Simple Packages. Hosting Included. No Hidden Costs.',
      subtitle:
        "Everything you need to go from no website to a working one — including the hosting, so you're never stuck figuring out renewals alone.",
      popularBadge: 'Most Popular',
      ctaButton: 'Get Started on WhatsApp',
      renewalTitle: 'Annual Renewal (From Year 2): ₹1,499/year',
      renewalText:
        'From Year 2: ₹1,499/year covers hosting, domain renewal, and minor updates. Cancel anytime — your site and content remain yours.',
      packages: [
        {
          name: 'Starter Site',
          price: '₹3,999',
          pitch: 'Your shop, finally online.',
          includes: [
            'Mobile-friendly website (up to 4 pages)',
            'Hosting + domain included for Year 1',
            'Free Google Business Profile + WhatsApp setup',
            'Delivered in 3–5 days',
          ],
        },
        {
          name: 'Business Site',
          price: '₹6,999',
          pitch: 'Everything customers look for, in one place.',
          includes: [
            'Everything in Starter',
            'Up to 8 pages + photo gallery + testimonials',
            'Google Maps embed + click-to-WhatsApp button',
            'Basic local SEO setup',
            'Delivered in 5–7 days',
          ],
        },
        {
          name: 'Complete Presence',
          price: '₹11,999',
          pitch: 'A website that works even while you sleep.',
          includes: [
            'Everything in Business Site',
            'Online booking / inquiry form with auto-reply',
            'Instagram feed integration',
            '1 year of priority support + updates',
            'Delivered in 7–10 days',
          ],
        },
      ],
    },
    howItWorks: {
      title: "Three Steps. One Week. A Website That's Actually Yours.",
      subtitle:
        'You run your business; we handle the design, coding, domain, and hosting.',
      steps: [
        {
          title: '1. We Understand',
          desc: 'We learn about your business — what you sell, your photos, your style — over a quick WhatsApp chat.',
          icon: '🔍',
        },
        {
          title: '2. We Build',
          desc: 'Your website is designed and built — usually ready to review within days, not weeks.',
          icon: '🛠️',
        },
        {
          title: '3. You Go Live',
          desc: 'You review it, we make small changes if needed, and it goes live — hosting already handled.',
          icon: '🚀',
        },
      ],
    },
    whyItWorks: {
      title: "Built for Kerala's Small Businesses. No Jargon, No Surprises.",
      subtitle:
        'Real websites that bring real customers to your shop or service.',
      beforeLabel: 'Without A Modern Website',
      afterLabel: 'With Visible Kerala Website',
      trustPoints: [
        'Pay only after you see your website live and working.',
        'Hosting is included — no separate bill to chase down every year.',
        'You keep full ownership — your domain, your content, always in your name.',
      ],
    },
    portfolio: {
      title: 'Websites Crafted for Kerala Businesses',
      subtitle:
        'Clean layouts tailored for our local shops, clinics, homestays, and boutiques.',
      viewLiveNotice: 'Custom built for mobile & desktop with WhatsApp ordering',
      items: [
        {
          title: 'Malabar Delights Bakery & Cafe',
          location: 'Calicut, Kerala',
          tag: 'Food & Dining',
          desc: 'Mouthwatering photo menu with instant WhatsApp cake & snack orders.',
          features: ['Bilingual Menu', 'WhatsApp Direct Order', 'Google Reviews'],
        },
        {
          title: 'Royal Palm Ayurvedic Homestay',
          location: 'Wayanad, Kerala',
          tag: 'Tourism & Stays',
          desc: 'Cottage tour gallery with inquiry booking and precise Google Maps pin.',
          features: ['Photo Gallery', 'Instant Inquiry Form', 'Google Maps Pin'],
        },
        {
          title: 'Aura Bridal Boutique & Tailoring',
          location: 'Kochi, Kerala',
          tag: 'Fashion & Retail',
          desc: 'Designer saree lookbook with custom stitching appointment via WhatsApp.',
          features: ['Lookbook Showcase', 'Measurement Chat', 'Instagram Feed'],
        },
      ],
    },
    contact: {
      title: "Let's Build Your Website.",
      subhead:
        'Message us on WhatsApp for the fastest reply, or fill out the form below.',
      primaryCta: 'Chat on WhatsApp',
      nameLabel: 'Full Name*',
      bizLabel: 'Business Name*',
      phoneLabel: 'Phone/WhatsApp Number*',
      emailLabel: 'Email Address*',
      typeLabel: 'Business Type',
      types: [
        'Tuition Centre',
        'Salon / Beauty Parlour',
        'Homestay / Lodge',
        'Bakery / Caterer',
        'Clinic / Pharmacy',
        'Hardware / Auto Shop',
        'Tailoring / Boutique',
        'Restaurant / Cafe',
        'Other',
      ],
      msgLabel: 'Message (Optional)',
      submitBtn: 'Send Message',
      successMsg:
        "Thanks! We'll reach out to your WhatsApp within a few hours.",
      footerServing:
        'Serving small businesses across all 14 districts of Kerala.',
      footerTagline:
        'Visible Kerala — From Invisible to Unmissable. Serving small businesses across all 14 districts of Kerala.',
    },
  },
  ml: {
    nav: {
      services: 'സേവനങ്ങൾ',
      howItWorks: 'പ്രവർത്തന രീതി',
      whyItWorks: 'പ്രത്യേകതകൾ',
      portfolio: 'മാതൃകകൾ',
      contact: 'ബന്ധപ്പെടുക',
      cta: 'WhatsApp ചാറ്റ്',
    },
    hero: {
      eyebrow: 'വെബ്സൈറ്റ് ഡിസൈൻ | ഹോസ്റ്റിംഗ് ഉൾപ്പെടെ | ഗൂഗിളിൽ ഒന്നാമതെത്താൻ',
      headline: 'നിങ്ങളുടെ ബിസിനസ്സ് ഇനി എല്ലാവരും കാണും, അറിയും!',
      subhead:
        `നിങ്ങളുടെ ബിസിനസ്സ് യാഥാർത്ഥ്യമാണ്, വെബ്സൈറ്റും അങ്ങനെയാവട്ടെ. വെറും 2 ദിവസത്തിനുള്ളിൽ നിങ്ങളുടെ സ്വന്തം വെബ്സൈറ്റ് റെഡിയാക്കാം.

കേരളത്തിലെ ഭൂരിഭാഗം ചെറുകിട ബിസിനസുകൾക്കും മികച്ചൊരു വെബ്സൈറ്റ് ഇല്ല എന്നതാണ് സത്യം. എന്നാൽ ഇനി അത് മാറും. മൊബൈൽ ഫോണുകളിൽ ഉൾപ്പെടെ മികച്ച രീതിയിൽ പ്രവർത്തിക്കുന്ന, ആകർഷകമായ ഒരു വെബ്സൈറ്റ് ഞങ്ങൾ നിർമ്മിച്ച് നൽകാം. അതും വെറും 2 ദിവസത്തിനുള്ളിൽ, നിങ്ങളുടെ ബജറ്റിലൊതുങ്ങുന്ന നിരക്കിൽ!`,
      primaryCta: 'WhatsApp-ൽ മെസ്സേജ് അയക്കൂ',
      secondaryCta: 'പാക്കേജുകൾ കാണുക',
    },
    services: {
      title: 'ലളിതമായ പാക്കേജുകൾ. ഒളിഞ്ഞിരിക്കുന്ന യാതൊരു ചിലവുകളുമില്ല.',
      subtitle:
        'നിങ്ങളുടെ ബിസിനസ്സിന് ഏറ്റവും അനുയോജ്യമായ പാക്കേജ് തിരഞ്ഞെടുക്കാം. ഹോസ്റ്റിംഗ് ഉൾപ്പെടെയുള്ള സേവനങ്ങൾ ലഭിക്കുന്നതിനാൽ സാങ്കേതിക കാര്യങ്ങളെയോർത്ത് നിങ്ങൾ ആശങ്കപ്പെടേണ്ടതില്ല.',
      popularBadge: 'ഏറ്റവും ജനപ്രിയം',
      ctaButton: 'WhatsApp-ൽ മെസ്സേജ് അയക്കൂ',
      renewalTitle: 'രണ്ടാം വർഷം മുതൽ: പ്രതിവർഷം വെറും ₹1,499 മാത്രം',
      renewalText:
        'രണ്ടാം വർഷം മുതൽ: ഹോസ്റ്റിംഗ്, ഡൊമെയ്ൻ പുതുക്കൽ, ചെറിയ അപ്ഡേറ്റുകൾ എന്നിവയ്ക്കായി പ്രതിവർഷം വെറും ₹1,499 മാത്രം. എപ്പോൾ വേണമെങ്കിലും സേവനം അവസാനിപ്പിക്കാം — വെബ്സൈറ്റിന്റെ പൂർണ്ണ അവകാശം എപ്പോഴും നിങ്ങൾക്ക് തന്നെയായിരിക്കും.',
      packages: [
        {
          name: 'സ്റ്റാർട്ടർ സൈറ്റ്',
          price: '₹3,999',
          pitch: 'തുടക്കക്കാർക്ക് അനുയോജ്യം',
          includes: [
            '4 പേജുകൾ വരെ മൊബൈൽ ഫ്രണ്ട്ലി സൈറ്റ്',
            'ഹോസ്റ്റിംഗും ഡൊമെയ്നും (ആദ്യ വർഷം സൗജന്യം)',
            'ഗൂഗിൾ പ്രൊഫൈൽ + WhatsApp സെറ്റപ്പ്',
            'ഡെലിവറി: വെറും 2 ദിവസത്തിനുള്ളിൽ',
          ],
        },
        {
          name: 'ബിസിനസ് സൈറ്റ്',
          price: '₹6,999',
          pitch: 'ഏറ്റവും ജനപ്രിയം',
          includes: [
            '8 പേജുകൾ വരെ + ഗാലറി + റിവ്യൂസ്',
            'ഹോസ്റ്റിംഗും ഡൊമെയ്നും (ആദ്യ വർഷം സൗജന്യം)',
            'ഗൂഗിൾ പ്രൊഫൈലും മാപ്പും + ലോക്കൽ SEO',
            'ഒറ്റ ക്ലിക്കിൽ WhatsApp മെസ്സേജ്',
            'ഡെലിവറി: വെറും 2 ദിവസത്തിനുള്ളിൽ',
          ],
        },
        {
          name: 'കംപ്ലീറ്റ് പ്രെസൻസ്',
          price: '₹11,999',
          pitch: 'വിപുലമായ ബിസിനസ്സുകൾക്ക്',
          includes: [
            '8+ പേജുകൾ + ബിസിനസ്സ് ടൂളുകൾ',
            'ഓൺലൈൻ ബുക്കിംഗ് + ഇൻസ്റ്റാഗ്രാം ഫീഡ്',
            'ഹോസ്റ്റിംഗും ഡൊമെയ്നും (ആദ്യ വർഷം സൗജന്യം)',
            'ഗൂഗിൾ പ്രൊഫൈലും മാപ്പും + WhatsApp',
            'ഡെലിവറി: വെറും 2 ദിവസത്തിനുള്ളിൽ',
          ],
        },
      ],
    },
    howItWorks: {
      title: 'വെറും 3 ഘട്ടങ്ങൾ, 2 ദിവസം. നിങ്ങളുടെ സ്വന്തം വെബ്സൈറ്റ് റെഡി!',
      subtitle:
        'നിങ്ങൾ ബിസിനസ്സ് നോക്കിക്കോളൂ; ഡിസൈനും കോഡിംഗും ഹോസ്റ്റിംഗും ഞങ്ങൾ ചെയ്തേക്കാം.',
      steps: [
        {
          title: 'ഘട്ടം 1: ഞങ്ങൾ നിങ്ങളെ കേൾക്കുന്നു',
          desc: 'WhatsApp-ലൂടെ നിങ്ങളുടെ ബിസിനസ്സിനെക്കുറിച്ചും ഉൽപ്പന്നങ്ങളെക്കുറിച്ചും ശൈലിയെക്കുറിച്ചും ഞങ്ങൾ ചോദിച്ചറിയുന്നു.',
          icon: '🔍',
        },
        {
          title: 'ഘട്ടം 2: ഞങ്ങൾ നിർമ്മിക്കുന്നു',
          desc: 'നിങ്ങളുടെ വിവരങ്ങളുടെ അടിസ്ഥാനത്തിൽ ഏറ്റവും മികച്ച രീതിയിൽ വെബ്സൈറ്റ് ഡിസൈൻ ചെയ്യുന്നു. ആഴ്ചകളല്ല, വെറും 2 ദിവസം മതി!',
          icon: '🛠️',
        },
        {
          title: 'ഘട്ടം 3: വെബ്സൈറ്റ് ലൈവാകുന്നു',
          desc: 'നിർമ്മാണം പൂർത്തിയായ വെബ്സൈറ്റ് നിങ്ങൾ പരിശോധിക്കുന്നു. ആവശ്യമായ മാറ്റങ്ങൾ വരുത്തിയ ശേഷം നിങ്ങളുടെ വെബ്സൈറ്റ് ലോകത്തിന് മുന്നിൽ സമർപ്പിക്കുന്നു.',
          icon: '🚀',
        },
      ],
    },
    whyItWorks: {
      title: 'കേരളത്തിലെ ചെറുകിട ബിസിനസ്സുകൾക്ക് ഏറ്റവും വിശ്വസിക്കാവുന്ന വെബ് ഡിസൈൻ പങ്കാളി',
      subtitle:
        'നിങ്ങളുടെ സ്വന്തം ഫോണിൽ കാണാൻ കഴിയുന്ന യഥാർത്ഥ മാറ്റങ്ങൾ.',
      beforeLabel: 'ആധുനിക വെബ്സൈറ്റ് ഇല്ലാത്ത അവസ്ഥ',
      afterLabel: 'വിസിബിൾ കേരള വെബ്സൈറ്റ് ഉള്ള അവസ്ഥ',
      trustPoints: [
        'പണം പിന്നീട് നൽകാം: നിങ്ങളുടെ വെബ്സൈറ്റ് ലൈവ് ആയ ശേഷം മാത്രം പണം നൽകിയാൽ മതി.',
        'എല്ലാം ഉൾപ്പെടുന്ന സേവനം: ഹോസ്റ്റിംഗ് ഉൾപ്പെടെയുള്ളവ പാക്കേജിൽ ഉള്ളതിനാൽ മറ്റ് സാങ്കേതിക ബില്ലുകളെക്കുറിച്ച് പേടിക്കേണ്ട.',
        'പൂർണ്ണ ഉടമസ്ഥാവകാശം: നിങ്ങളുടെ ഡൊമെയ്നും അതിലെ വിവരങ്ങളും പൂർണ്ണമായും നിങ്ങളുടെ പേരിൽ തന്നെയായിരിക്കും.',
      ],
    },
    portfolio: {
      title: 'കേരളത്തിലെ ബിസിനസ്സുകൾക്കായി രൂപകൽപ്പന ചെയ്തവ',
      subtitle:
        'നാട്ടിലെ കടകൾക്കും സ്ഥാപനങ്ങൾക്കും അനുയോജ്യമായ പ്രത്യേക മാതൃകകൾ.',
      viewLiveNotice: 'മൊബൈലിലും കമ്പ്യൂട്ടറിലും WhatsApp ഓർഡറിംഗോടെ പ്രവർത്തിക്കുന്നു',
      items: [
        {
          title: 'മലബാർ ഡിലൈറ്റ്സ് ബേക്കറി & കഫേ',
          location: 'കോഴിക്കോട്',
          tag: 'ഭക്ഷണശാല',
          desc: 'മനോഹരമായ ഫോട്ടോ മെനുവും തത്സമയ WhatsApp ഓർഡറിംഗും.',
          features: ['ദ്വിഭാഷാ മെനു', 'നേരിട്ട് WhatsApp ഓർഡറിംഗ്', 'ഗൂഗിൾ റിവ്യൂകൾ'],
        },
        {
          title: 'റോയൽ പാം ആയുർവേദിക് ഹോംസ്റ്റേ',
          location: 'വയനാട്',
          tag: 'ടൂറിസം & താമസം',
          desc: 'കോർട്ടേജ് ഫോട്ടോ ഗാലറിയും കൃത്യമായ ഗൂഗിൾ മാപ്പ് ലൊക്കേഷനും.',
          features: ['ഫോട്ടോ ഗാലറി', 'ഡയറക്റ്റ് ബുക്കിംഗ് ഫോം', 'ഗൂഗിൾ മാപ്സ് ലൊക്കേറ്റർ'],
        },
        {
          title: 'ഓറ ബ്രൈഡൽ ബോട്ടീക് & ടെയ്‌ലറിംഗ്',
          location: 'കൊച്ചി',
          tag: 'ഫാഷൻ & റീട്ടെയിൽ',
          desc: 'ഡിസൈനർ സാരി കളക്ഷനുകളും WhatsApp വഴി തയ്യൽ അളവ് അന്വേഷണങ്ങളും.',
          features: ['ലേറ്റസ്റ്റ് കളക്ഷൻ ലുക്ക്ബുക്ക്', 'അളവ് അന്വേഷണം', 'ഇൻസ്റ്റാഗ്രാം ഫീഡ്'],
        },
      ],
    },
    contact: {
      title: 'നിങ്ങളുടെ വെബ്സൈറ്റ് നിർമ്മാണം ഇന്നേ തുടങ്ങാം!',
      subhead:
        'വേഗത്തിൽ മറുപടി ലഭിക്കാൻ WhatsApp വഴി സന്ദേശമയക്കുകയോ താഴെയുള്ള ഫോം പൂരിപ്പിക്കുകയോ ചെയ്യുക.',
      primaryCta: 'WhatsApp-ൽ മെസ്സേജ് അയക്കൂ',
      nameLabel: 'പൂർണ്ണ നാമം*',
      bizLabel: 'ബിസിനസ്സിന്റെ പേര്*',
      phoneLabel: 'ഫോൺ / WhatsApp നമ്പർ*',
      emailLabel: 'ഇമെയിൽ ഐഡി*',
      typeLabel: 'ബിസിനസ്സ് തരം',
      types: [
        'ട്യൂഷൻ സെന്റർ',
        'സലൂൺ / ബ്യൂട്ടി പാർലർ',
        'ഹോംസ്റ്റേ / ലോഡ്ജ്',
        'ബേക്കറി / കാറ്ററിംഗ്',
        'ക്ലിനിക് / ഫാർമസി',
        'ഹാർഡ്‌വെയർ / ഓട്ടോമൊബൈൽ ഷോപ്പ്',
        'ടെയ്‌ലറിംഗ് / ബൊട്ടീക്ക്',
        'റെസ്റ്റോറന്റ് / കഫേ',
        'മറ്റുള്ളവ',
      ],
      msgLabel: 'നിങ്ങളുടെ സന്ദേശം (ഓപ്ഷണൽ)',
      submitBtn: 'സന്ദേശം അയക്കുക',
      successMsg:
        'നന്ദി! ഏതാനും മണിക്കൂറുകൾക്കുള്ളിൽ ഞങ്ങൾ WhatsApp-ൽ ബന്ധപ്പെടുന്നതാണ്.',
      footerServing:
        'കേരളത്തിലെ 14 ജില്ലകളിലുമുള്ള ചെറുകിട ബിസിനസ്സുകൾക്ക് വിശ്വാസ്യതയോടെ സേവനം നൽകുന്നു.',
      footerTagline:
        'നിങ്ങളുടെ ബിസിനസ്സ് ഇനി എല്ലാവരും കാണും, അറിയും!',
      copyright:
        '© 2026 Visible Kerala. എല്ലാ അവകാശങ്ങളും നിക്ഷിപ്തം.',
    },
  },
};

const WA_BASE = 'https://wa.me/917012025737?text=';
const WA_MSG_DEFAULT = encodeURIComponent(
  "Hi! I'd like to get a modern website built for my business with Visible Kerala."
);
const WA_MSG_PKG = (name: string, price: string) =>
  encodeURIComponent(`Hi! I'm interested in the ${name} package (${price}) for my business.`);

export default function Home() {
  const [lang, setLang] = useState<'en' | 'ml'>('en');
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAfter, setShowAfter] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');

  const navRef = useRef<HTMLElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const sliderTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const packagesGridRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cardRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const t = siteContent[lang];

  // ---- 1. Initialize language from localStorage ----
  useEffect(() => {
    const saved = localStorage.getItem('vk_lang');
    if (saved === 'ml' || saved === 'en') {
      requestAnimationFrame(() => {
        setLang(saved);
      });
    }
  }, []);

  // ---- 2. Apply language to body class ----
  useEffect(() => {
    if (lang === 'ml') {
      document.body.classList.add('lang-ml-active');
    } else {
      document.body.classList.remove('lang-ml-active');
    }
    localStorage.setItem('vk_lang', lang);
  }, [lang]);

  // ---- 3. Sticky nav scroll behavior ----
  useEffect(() => {
    const onScroll = () => {
      setNavScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ---- 4. Close mobile menu on resize ----
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // ---- 5. Intersection Observer for scroll reveals & step animations ----
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll('.reveal-on-scroll').forEach((el) => observer.observe(el));

    // Step cards observer
    const stepObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute('data-step-idx'));
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, idx * 250);
          }
        });
      },
      { threshold: 0.25 }
    );

    stepRefs.current.forEach((el) => {
      if (el) stepObserver.observe(el);
    });

    return () => {
      observer.disconnect();
      stepObserver.disconnect();
    };
  }, []);

  // ---- 6. Before/After toggle with auto-loop ----
  const manualToggleRef = useRef(false);

  useEffect(() => {
    const tick = () => {
      sliderTimerRef.current = setTimeout(() => {
        setShowAfter(true);
        sliderTimerRef.current = setTimeout(() => {
          setShowAfter(false);
          if (!manualToggleRef.current) tick();
        }, 4500);
      }, 4500);
    };
    tick();

    return () => {
      if (sliderTimerRef.current) clearTimeout(sliderTimerRef.current);
    };
  }, []);

  const handleDemoToggle = (toAfter: boolean) => {
    manualToggleRef.current = true;
    if (sliderTimerRef.current) clearTimeout(sliderTimerRef.current);
    setShowAfter(toAfter);
    setTimeout(() => {
      manualToggleRef.current = false;
      const tick = () => {
        sliderTimerRef.current = setTimeout(() => {
          setShowAfter(true);
          sliderTimerRef.current = setTimeout(() => {
            setShowAfter(false);
            if (!manualToggleRef.current) tick();
          }, 4500);
        }, 4500);
      };
      tick();
    }, 12000);
  };

  // ---- 7. Contextual hover tooltips ----
  useEffect(() => {
    const tooltip = tooltipRef.current;
    if (!tooltip) return;

    const handleEnter = (e: Event) => {
      if (lang !== 'en') return;
      const target = e.currentTarget as HTMLElement;
      const mlText = target.getAttribute('data-hover-ml');
      if (!mlText) return;
      tooltip.textContent = mlText;
      tooltip.classList.add('show');
      const rect = target.getBoundingClientRect();
      tooltip.style.top = `${rect.top + window.scrollY - 50}px`;
      tooltip.style.left = `${rect.left + rect.width / 2}px`;
    };

    const handleLeave = () => {
      tooltip.classList.remove('show');
    };

    document.querySelectorAll('[data-hover-ml]').forEach((el) => {
      el.addEventListener('mouseenter', handleEnter);
      el.addEventListener('mouseleave', handleLeave);
    });

    return () => {
      document.querySelectorAll('[data-hover-ml]').forEach((el) => {
        el.removeEventListener('mouseenter', handleEnter);
        el.removeEventListener('mouseleave', handleLeave);
      });
    };
  }, [lang]);

  // ---- 8. 3D Card tilt effect ----
  useEffect(() => {
    const cards = cardRefs.current;
    const handlers: Array<{ el: HTMLAnchorElement; onMove: (e: MouseEvent) => void; onLeave: () => void }> = [];

    cards.forEach((card) => {
      if (!card) return;
      const onMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cx = rect.width / 2;
        const cy = rect.height / 2;
        const rotX = ((y - cy) / cy) * -5;
        const rotY = ((x - cx) / cx) * 5;
        card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-6px)`;
        card.style.boxShadow = 'var(--clay-card-hover)';
      };
      const onLeave = () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
        card.style.boxShadow = 'var(--clay-shadow-md)';
      };
      card.addEventListener('mousemove', onMove);
      card.addEventListener('mouseleave', onLeave);
      handlers.push({ el: card, onMove, onLeave });
    });

    return () => {
      handlers.forEach(({ el, onMove, onLeave }) => {
        el.removeEventListener('mousemove', onMove);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, [lang]);

  // ---- Helpers ----
  const toggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'ml' : 'en'));
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError('');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setFormSubmitted(true);
        form.reset();
      } else {
        setFormError(result.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      setFormError('An unexpected error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Context Tooltip */}
      <div ref={tooltipRef} className="clay-tooltip" />

      {/* ===== STICKY NAVIGATION ===== */}
      <header ref={navRef} className={`sticky-nav ${navScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <a href="#" className="brand-logo" onClick={closeMobileMenu}>
            <img src="/logo-mark-isolated.png" alt="Visible Kerala" className="logo-mark" />
            <span className="wordmark">Visible Kerala</span>
          </a>

          <nav className="nav-links">
            <a href="#packages" data-hover-ml="പാക്കേജുകൾ">{t.nav.services}</a>
            <a href="#how-it-works" data-hover-ml="പ്രവർത്തന രീതി">{t.nav.howItWorks}</a>
            <a href="#why-it-works" data-hover-ml="പ്രത്യേകതകൾ">{t.nav.whyItWorks}</a>
            <a href="#showcase" data-hover-ml="മാതൃകകൾ">{t.nav.portfolio}</a>
            <a href="#contact" data-hover-ml="ബന്ധപ്പെടുക">{t.nav.contact}</a>
          </nav>

          <div className="nav-actions">
            <button
              id="lang-toggle"
              className={`lang-switch-pill ${lang === 'ml' ? 'active-ml' : ''}`}
              onClick={toggleLang}
              aria-label="Toggle Language"
            >
              <span className="lang-text en">EN</span>
              <span className="lang-text ml">മലയാളം</span>
            </button>

            <a
              href={`${WA_BASE}${WA_MSG_DEFAULT}`}
              className="btn-clay-primary pulse-glow"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.nav.cta}
            </a>

            <button
              className="nav-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <a href="#packages" onClick={closeMobileMenu}>{t.nav.services}</a>
        <a href="#how-it-works" onClick={closeMobileMenu}>{t.nav.howItWorks}</a>
        <a href="#why-it-works" onClick={closeMobileMenu}>{t.nav.whyItWorks}</a>
        <a href="#showcase" onClick={closeMobileMenu}>{t.nav.portfolio}</a>
        <a href="#contact" onClick={closeMobileMenu}>{t.nav.contact}</a>
      </div>

      <main>
        {/* ===== HERO SECTION ===== */}
        <section className="hero-section reveal-on-scroll">
          <div className="blob blob-1" />
          <div className="blob blob-2" />
          <div className="blob blob-3" />

          <div className="hero-content">
            <span className="eyebrow-pill">{t.hero.eyebrow}</span>
            <h1
              className="display-title"
              style={{ fontSize: 'clamp(2rem, 5.5vw, 3.2rem)', color: 'var(--vk-deep-green)', marginBottom: '1.25rem' }}
              data-hover-ml="നിങ്ങളുടെ ബിസിനസ്സ് ഇനി എല്ലാവരും കാണും, അറിയും!"
            >
              {t.hero.headline}
            </h1>
            <p className="hero-subhead" style={{ whiteSpace: 'pre-line' }}>{t.hero.subhead}</p>
            <div className="hero-cta-group">
              <a
                href={`${WA_BASE}${WA_MSG_DEFAULT}`}
                className="btn-clay-primary lg pulse-glow"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.hero.primaryCta}
              </a>
              <a href="#packages" className="btn-clay-secondary lg">
                {t.hero.secondaryCta}
              </a>
            </div>
          </div>

          <div className="hero-visual-3d">
            <div className="floating-pin-wrapper">
              <img src="/logo-full.png" alt="Visible Kerala Web Agency" className="bobbing-pin" />
              <div className="pin-shadow" />
            </div>
          </div>
        </section>

        {/* ===== PACKAGES SECTION ===== */}
        <section id="packages" className="services-section reveal-on-scroll">
          <div className="section-header text-center">
            <h2
              className="section-title"
              style={{ fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', color: 'var(--vk-deep-green)' }}
              data-hover-ml="ലളിതമായ പാക്കേജുകൾ. ഒളിഞ്ഞിരിക്കുന്ന യാതൊരു ചിലവുകളുമില്ല."
            >
              {t.services.title}
            </h2>
            <p className="section-subtitle">{t.services.subtitle}</p>
          </div>

          <div ref={packagesGridRef} className="clay-grid">
            {t.services.packages.map((pkg, idx) => (
              <a
                key={pkg.name + lang}
                href={`${WA_BASE}${WA_MSG_PKG(pkg.name, pkg.price)}`}
                target="_blank"
                rel="noopener noreferrer"
                ref={(el) => { cardRefs.current[idx] = el; }}
                className={`clay-card-3d ${idx === 1 ? 'popular-card' : ''}`}
                style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
              >
                {idx === 1 && <span className="popular-badge">{t.services.popularBadge}</span>}
                <div className="package-name">{pkg.name}</div>
                <div className="package-price">{pkg.price}</div>
                <p className="package-pitch">{pkg.pitch}</p>
                <ul className="package-includes">
                  {pkg.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <span className="btn-clay-primary" style={{ fontSize: '0.85rem', padding: '0.65rem 1rem' }}>
                  {t.services.ctaButton}
                </span>
              </a>
            ))}
          </div>

          {/* Annual Renewal Note Banner */}
          <div className="renewal-note-card">
            <div className="renewal-note-icon">🔄</div>
            <div>
              <div className="renewal-note-title">{t.services.renewalTitle}</div>
              <div className="renewal-note-text">{t.services.renewalText}</div>
            </div>
          </div>
        </section>

        {/* ===== HOW IT WORKS SECTION ===== */}
        <section id="how-it-works" className="workflow-section reveal-on-scroll">
          <div className="section-header text-center" style={{ maxWidth: 900, margin: '0 auto 2.5rem' }}>
            <h2
              className="section-title"
              style={{ fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', color: 'var(--vk-deep-green)' }}
              data-hover-ml="വെറും 3 ഘട്ടങ്ങൾ, 2 ദിവസം. നിങ്ങളുടെ സ്വന്തം വെബ്സൈറ്റ് റെഡി!"
            >
              {t.howItWorks.title}
            </h2>
            <p className="section-subtitle">{t.howItWorks.subtitle}</p>
          </div>

          <div className="workflow-container">
            <div className="steps-grid">
              {t.howItWorks.steps.map((step, idx) => (
                <div
                  key={step.title + lang}
                  ref={(el) => { stepRefs.current[idx] = el; }}
                  className="step-card"
                  data-step-idx={idx}
                >
                  <div className="step-icon">{step.icon}</div>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-desc">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== WHY IT WORKS / BEFORE-AFTER SHOWCASE ===== */}
        <section id="why-it-works" className="why-section reveal-on-scroll">
          <div className="section-header text-center">
            <h2
              className="section-title"
              style={{ fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', color: 'var(--vk-deep-green)' }}
              data-hover-ml="കേരളത്തിലെ ചെറുകിട ബിസിനസ്സുകൾക്ക് ഏറ്റവും വിശ്വസിക്കാവുന്ന വെബ് ഡിസൈൻ പങ്കാളി"
            >
              {t.whyItWorks.title}
            </h2>
            <p className="section-subtitle">{t.whyItWorks.subtitle}</p>
          </div>

          {/* Interactive Website Transformation Demo */}
          <div className="demo-mockup-container">
            {/* Browser top chrome */}
            <div className="browser-bar">
              <div className="browser-dots">
                <span className="browser-dot red" />
                <span className="browser-dot yellow" />
                <span className="browser-dot green" />
              </div>
              <div className="browser-url-bar">
                <span>🔒</span>
                <span>https://keralageneralstore.com</span>
              </div>
            </div>

            <div className="mockup-phone">
              {/* Toggle Buttons */}
              <div className="demo-toggle-row">
                <button
                  className={`demo-toggle-btn ${!showAfter ? 'active' : ''}`}
                  onClick={() => handleDemoToggle(false)}
                >
                  {t.whyItWorks.beforeLabel}
                </button>
                <button
                  className={`demo-toggle-btn after ${showAfter ? 'active' : ''}`}
                  onClick={() => handleDemoToggle(true)}
                >
                  {t.whyItWorks.afterLabel}
                </button>
              </div>

              <div className="mockup-content">
                {/* BEFORE State: No/Broken Website */}
                <div className={`mockup-pane before-pane ${showAfter ? 'hidden' : ''}`}>
                  <div className="mock-shop-name" style={{ color: '#888' }}>Kerala General Store</div>
                  <div style={{ marginBottom: '0.75rem', marginTop: '0.25rem' }}>
                    <span className="mock-badge gray">⚠️ No Mobile Website Found</span>
                  </div>
                  <div className="mock-placeholder-box" style={{ background: '#fdf3f2', border: '1px dashed #e2a8a8', color: '#c0392b' }}>
                    ❌ 404 / Unregistered Domain
                  </div>
                  <div className="mock-info-row missing">✗ Customers cannot browse your products</div>
                  <div className="mock-info-row missing">✗ No WhatsApp order button</div>
                  <div className="mock-info-row missing">✗ Missing from Google Search results</div>
                  <div className="mock-map-area no-pin" style={{ height: 60 }}>
                    Losing daily customers to competitors with websites
                  </div>
                </div>

                {/* AFTER State: Modern Kerala Website */}
                <div className={`mockup-pane after-pane ${showAfter ? 'active' : ''}`}>
                  <div className="web-mockup-after-content">
                    <div className="web-mockup-hero">
                      <span className="web-mockup-badge">✨ Live in 4 Days</span>
                      <h4>Kerala General Store</h4>
                      <p>Fresh Grocery, Spices & Household Essentials</p>
                    </div>

                    <div className="web-mockup-features">
                      <div className="web-feature-chip">📦 4-Page Site</div>
                      <div className="web-feature-chip">🌐 Hosting Incl.</div>
                      <div className="web-feature-chip">⭐ 4.9 Reviews</div>
                    </div>

                    <div className="web-mockup-cta">
                      <span>💬</span> Order on WhatsApp Direct
                    </div>

                    <div className="mock-info-row verified" style={{ fontSize: '0.78rem' }}>
                      ✓ Connected with Google Maps & Business Profile
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Points */}
          <div className="trust-points">
            {t.whyItWorks.trustPoints.map((point, idx) => (
              <div key={point + lang} className="trust-point">
                <div className="trust-icon">{idx === 0 ? '💰' : idx === 1 ? '🌐' : '🔐'}</div>
                <p className="trust-text">{point}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== PORTFOLIO / SHOWCASE SECTION ===== */}
        <section id="showcase" className="portfolio-section reveal-on-scroll">
          <div className="section-header text-center">
            <h2
              className="section-title"
              style={{ fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', color: 'var(--vk-deep-green)' }}
              data-hover-ml="കേരളത്തിലെ ബിസിനസ്സുകൾക്കായി രൂപകൽപ്പന ചെയ്തവ"
            >
              {t.portfolio.title}
            </h2>
            <p className="section-subtitle">{t.portfolio.subtitle}</p>
          </div>

          <div className="portfolio-grid">
            {t.portfolio.items.map((item, idx) => (
              <div key={item.title + lang} className="portfolio-card">
                <div className="portfolio-card-header">
                  <span className="portfolio-card-tag">{item.tag}</span>
                  <h3 className="portfolio-card-title">{item.title}</h3>
                  <div className="portfolio-card-location">📍 {item.location}</div>
                </div>

                <div className="portfolio-card-preview">
                  <div className="portfolio-preview-box">
                    <p>{item.desc}</p>
                  </div>
                  <ul className="portfolio-features-list">
                    {item.features.map((feat) => (
                      <li key={feat}>{feat}</li>
                    ))}
                  </ul>
                </div>

                <div className="portfolio-card-footer">
                  <span>Fast 3–5 Day Delivery</span>
                  <a
                    href={`${WA_BASE}${encodeURIComponent(`Hi! I loved the website layout for ${item.title}. Can we build something similar for my business?`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--vk-primary-green)', textDecoration: 'none' }}
                  >
                    Build This →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== CONTACT SECTION ===== */}
        <section id="contact" className="contact-section reveal-on-scroll">
          <div className="contact-clay-card">
            <h2
              className="section-title text-center"
              style={{ fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', color: 'var(--vk-deep-green)', marginBottom: '0.25rem' }}
              data-hover-ml="നിങ്ങളുടെ വെബ്സൈറ്റ് നിർമ്മാണം ഇന്നേ തുടങ്ങാം!"
            >
              {t.contact.title}
            </h2>
            <p className="contact-subhead">{t.contact.subhead}</p>

            {formSubmitted ? (
              <div className="form-success">
                <div className="success-checkmark">✓</div>
                <p className="success-message">{t.contact.successMsg}</p>
              </div>
            ) : (
              <>
                <a
                  href={`${WA_BASE}${WA_MSG_DEFAULT}`}
                  className="whatsapp-direct-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  {t.contact.primaryCta}
                </a>

                <div className="contact-divider">
                  <span>OR</span>
                </div>

                <form className="clay-form" onSubmit={handleFormSubmit}>
                  <div className="form-group">
                    <label>{t.contact.nameLabel}</label>
                    <input type="text" name="name" required className="clay-input" />
                  </div>
                  <div className="form-group">
                    <label>{t.contact.bizLabel}</label>
                    <input type="text" name="business_name" required className="clay-input" />
                  </div>
                  <div className="form-group">
                    <label>{t.contact.phoneLabel}</label>
                    <input type="tel" name="phone" required className="clay-input" />
                  </div>
                  <div className="form-group">
                    <label>{t.contact.emailLabel}</label>
                    <input type="email" name="email" required className="clay-input" />
                  </div>
                  <div className="form-group">
                    <label>{t.contact.typeLabel}</label>
                    <select name="business_type" className="clay-select" required>
                      <option value="">Select...</option>
                      {t.contact.types.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>{t.contact.msgLabel}</label>
                    <textarea name="message" rows={4} className="clay-input" style={{ resize: 'vertical' }} />
                  </div>
                  {formError && (
                    <div className="form-error" style={{ color: '#ef4444', marginBottom: '1rem', textAlign: 'center', fontSize: '0.875rem' }}>
                      {formError}
                    </div>
                  )}
                  <button type="submit" className="btn-clay-primary full-width lg" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : t.contact.submitBtn}
                  </button>
                </form>
              </>
            )}
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="site-footer">
        <div className="footer-content">
          <img src="/logo-mark-isolated.png" alt="Visible Kerala" className="footer-logo" />
          <h3 className="footer-title">Visible Kerala</h3>
          <p className="footer-tagline">{t.contact.footerTagline}</p>

          <div className="footer-links">
            <a href="#packages">{t.nav.services}</a>
            <a href="#how-it-works">{t.nav.howItWorks}</a>
            <a href="#why-it-works">{t.nav.whyItWorks}</a>
            <a href="#showcase">{t.nav.portfolio}</a>
            <a href="#contact">{t.nav.contact}</a>
          </div>

          <div className="footer-contact">
            <a href="mailto:visiblekerala@gmail.com">✉ visiblekerala@gmail.com</a>
            <a href="tel:+917012025737">📞 +91 70120 25737</a>
          </div>

          <p className="footer-serving">{t.contact.footerServing}</p>
          <p className="copyright">{(t.contact as any).copyright || "© 2026 Visible Kerala. All rights reserved."}</p>
        </div>
      </footer>
    </>
  );
}
