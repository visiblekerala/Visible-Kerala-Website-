'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

/* ========================================
   BILINGUAL CONTENT DICTIONARY
   ======================================== */
const siteContent = {
  en: {
    nav: {
      services: 'Services',
      howItWorks: 'How It Works',
      whyItWorks: 'Why It Works',
      contact: 'Contact',
      cta: 'Chat on WhatsApp',
    },
    hero: {
      eyebrow: 'Google Business Profile · WhatsApp Business · Social Media',
      headline: 'From Invisible to Unmissable.',
      subhead:
        '9 out of 10 small businesses in Kerala don\'t show up when someone searches for them on Google. We make sure yours does — fully set up in a day, at a price a small shop can afford.',
      primaryCta: 'Chat on WhatsApp',
      secondaryCta: 'See Packages',
    },
    services: {
      title: 'Simple Packages. No Surprises.',
      subtitle: 'Everything you need to get discovered by local customers.',
      popularBadge: 'Most Popular',
      ctaButton: 'Get Started on WhatsApp',
      packages: [
        {
          name: 'Starter',
          price: '₹499',
          pitch: 'Get found on Google + WhatsApp.',
          includes: [
            'Google Business Profile setup',
            'WhatsApp Business setup with auto-reply',
            'Basic map pinning',
          ],
        },
        {
          name: 'Standard',
          price: '₹799',
          pitch: 'Look professional everywhere customers search.',
          includes: [
            'Everything in Starter',
            'Custom digital logo cleanup',
            '5 branded social media posts',
            'Instagram or Facebook page setup',
          ],
        },
        {
          name: 'Premium',
          price: '₹1,299',
          pitch: 'The complete visibility package.',
          includes: [
            'Everything in Standard',
            'Full Instagram bio & highlight setup',
            'Google review automated link system',
            '1 month of priority support',
          ],
        },
        {
          name: 'Retainer',
          price: '₹599/month',
          pitch: 'Stay visible, every single month.',
          includes: [
            '8 custom posts per month',
            'Customer review reply management',
            'Ongoing holiday/hours updates',
            'Cancel anytime with zero fees',
          ],
        },
      ],
    },
    howItWorks: {
      title: 'Three Steps. One Week. Zero Hassle.',
      subtitle: 'You run your business; we handle the digital setup.',
      steps: [
        {
          title: '1. We Check',
          desc: 'We search your business live and show you exactly what customers see today — good or bad.',
          icon: '🔍',
        },
        {
          title: '2. We Build',
          desc: 'Google Business Profile, WhatsApp Business, and your social pages — set up properly, usually within a day.',
          icon: '🛠️',
        },
        {
          title: "3. You're Found",
          desc: "Customers searching nearby now find you — number, hours, and photos, right there on Google Maps.",
          icon: '📍',
        },
      ],
    },
    whyItWorks: {
      title: "Built For Kerala's Local Businesses",
      subtitle:
        "No confusing jargon. Just real results you can see on your own phone.",
      beforeLabel: 'Without Visible Kerala',
      afterLabel: 'With Visible Kerala',
      trustPoints: [
        'Pay only after you see your profile live on Google.',
        'We use Google, WhatsApp, and Instagram — the same free tools trusted by millions worldwide.',
        'You keep full 100% ownership — every account stays securely in your name, always.',
      ],
    },
    contact: {
      title: "Let's Get You Found.",
      subhead:
        'Message us on WhatsApp for the fastest reply, or fill out the form below.',
      nameLabel: 'Full Name*',
      bizLabel: 'Business Name*',
      phoneLabel: 'Phone/WhatsApp Number*',
      typeLabel: 'Business Type',
      types: [
        'Tuition Centre',
        'Salon / Beauty Parlour',
        'Homestay / Lodge',
        'Bakery / Caterer',
        'Clinic / Pharmacy',
        'Hardware / Auto Shop',
        'Tailoring / Boutique',
        'Other',
      ],
      msgLabel: 'Message (Optional)',
      submitBtn: 'Send Message',
      successMsg:
        "Thanks! We'll reach out to your WhatsApp within a few hours.",
      footerServing:
        'Serving small businesses across all 14 districts of Kerala.',
    },
  },
  ml: {
    nav: {
      services: 'സേവനങ്ങൾ',
      howItWorks: 'പ്രവർത്തനരീതി',
      whyItWorks: 'എന്തുകൊണ്ട് ഞങ്ങൾ?',
      contact: 'ബന്ധപ്പെടുക',
      cta: 'വാട്സ്ആപ്പിൽ സംസാരിക്കാം',
    },
    hero: {
      eyebrow:
        'ഗൂഗിൾ ബിസിനസ് പ്രൊഫൈൽ · വാട്സ്ആപ്പ് ബിസിനസ് · സോഷ്യൽ മീഡിയ',
      headline: 'അറിയപ്പെടാത്ത അവസ്ഥയിൽ നിന്ന് എപ്പോഴും മുന്നിൽ!',
      subhead:
        'കേരളത്തിലെ 10-ൽ 9 ചെറുകിട സംരംഭങ്ങളും ഗൂഗിളിൽ തിരയുമ്പോൾ കാണാറില്ല. നിങ്ങളുടെ സ്ഥാപനം ഉപഭോക്താക്കൾ എളുപ്പത്തിൽ കണ്ടെത്താൻ ഞങ്ങൾ സഹായിക്കുന്നു — ചെറിയ ചെലവിൽ, ഒറ്റ ദിവസം കൊണ്ട് പൂർണ്ണമായും സജ്ജമാക്കാം.',
      primaryCta: 'വാട്സ്ആപ്പിൽ സംസാരിക്കാം',
      secondaryCta: 'പാക്കേജുകൾ കാണുക',
    },
    services: {
      title: 'ലളിതമായ പാക്കേജുകൾ. മറഞ്ഞിരിക്കുന്ന ചെലവുകളില്ല.',
      subtitle: 'നാട്ടിലെ ഉപഭോക്താക്കൾ നിങ്ങളെ കണ്ടെത്താൻ വേണ്ടതെല്ലാം.',
      popularBadge: 'ഏറ്റവും ജനപ്രിയം',
      ctaButton: 'വാട്സ്ആപ്പിൽ തുടങ്ങാം',
      packages: [
        {
          name: 'സ്റ്റാർട്ടർ',
          price: '₹499',
          pitch: 'ഗൂഗിളിലും വാട്സ്ആപ്പിലും നിങ്ങളുടെ സാന്നിധ്യം ഉറപ്പാക്കാം.',
          includes: [
            'ഗൂഗിൾ ബിസിനസ് പ്രൊഫൈൽ നിർമ്മാണം',
            'ഓട്ടോ-റിപ്ലൈ സഹിതം വാട്സ്ആപ്പ് ബിസിനസ് സജ്ജീകരണം',
            'ഗൂഗിൾ മാപ്പിൽ കൃത്യമായ സ്ഥാനം ചേർക്കൽ',
          ],
        },
        {
          name: 'സ്റ്റാൻഡേർഡ്',
          price: '₹799',
          pitch: 'ഉപഭോക്താക്കൾ തിരയുമ്പോഴെല്ലാം മികച്ച പ്രൊഫഷണൽ ലുക്ക്.',
          includes: [
            'സ്റ്റാർട്ടർ പാക്കേജിലെ എല്ലാം',
            'ഡിജിറ്റൽ ലോഗോ ക്ലീൻ-അപ്പ്',
            'ബിസിനസ്സിനായി 5 സോഷ്യൽ മീഡിയ പോസ്റ്റുകൾ',
            'ഇൻസ്റ്റാഗ്രാം അല്ലെങ്കിൽ ഫേസ്ബുക്ക് പേജ് നിർമ്മാണം',
          ],
        },
        {
          name: 'പ്രീമിയം',
          price: '₹1,299',
          pitch: 'ബിസിനസ്സ് വളർത്താൻ സമഗ്രമായ വിസിബിലിറ്റി പാക്കേജ്.',
          includes: [
            'സ്റ്റാൻഡേർഡ് പാക്കേജിലെ എല്ലാം',
            'പൂർണ്ണമായ ഇൻസ്റ്റാഗ്രാം ബയോ & ഹൈലൈറ്റ് സജ്ജീകരണം',
            'ഗൂഗിൾ റിവ്യൂ വർദ്ധിപ്പിക്കാനുള്ള ഓട്ടോമാറ്റിക് ലിങ്ക് സിസ്റ്റം',
            '1 മാസത്തെ മുൻഗണനാ സപ്പോർട്ട്',
          ],
        },
        {
          name: 'റിട്ടൈനർ',
          price: '₹599/month',
          pitch: 'ഓരോ മാസവും സജീവമായി നിലനിൽക്കാം, പുതിയ കസ്റ്റമേഴ്സിനെ നേടാം.',
          includes: [
            'മാസം തോറും 8 കസ്റ്റം ഡിസൈൻ പോസ്റ്റുകൾ',
            'കസ്റ്റമർ റിവ്യൂകൾക്ക് കൃത്യമായ മറുപടി നൽകൽ',
            'അവധി ദിനങ്ങളും പ്രവൃത്തി സമയവും അപ്ഡേറ്റ് ചെയ്യൽ',
            'എപ്പോൾ വേണമെങ്കിലും കാൻസൽ ചെയ്യാം, അധിക ചാർജ്ജില്ല',
          ],
        },
      ],
    },
    howItWorks: {
      title: '3 പടികൾ. 1 ആഴ്ച. യാതൊരു ബുദ്ധിമുട്ടുമില്ല.',
      subtitle: 'നിങ്ങൾ ബിസിനസ്സ് നോക്കിക്കോളൂ; ഡിജിറ്റൽ കാര്യങ്ങൾ ഞങ്ങൾ ചെയ്തേക്കാം.',
      steps: [
        {
          title: '1. ഞങ്ങൾ പരിശോധിക്കുന്നു',
          desc: 'നിങ്ങളുടെ ബിസിനസ്സ് നിലവിൽ ഗൂഗിളിൽ തിരഞ്ഞു നോക്കി ഉപഭോക്താക്കൾ എന്താണ് കാണുന്നതെന്ന് ഞങ്ങൾ കൃത്യമായി കാണിച്ചു തരുന്നു.',
          icon: '🔍',
        },
        {
          title: '2. ഞങ്ങൾ നിർമ്മിക്കുന്നു',
          desc: 'ഗൂഗിൾ ബിസിനസ് പ്രൊഫൈൽ, വാട്സ്ആപ്പ് ബിസിനസ്, സോഷ്യൽ മീഡിയ പേജുകൾ എന്നിവ സാധാരണയായി ഒറ്റ ദിവസം കൊണ്ട് കൃത്യമായി സജ്ജമാക്കുന്നു.',
          icon: '🛠️',
        },
        {
          title: '3. ഉപഭോക്താക്കൾ കണ്ടെത്തുന്നു',
          desc: 'അടുത്തുള്ള കസ്റ്റമേഴ്സ് തിരയുമ്പോൾ ഫോൺ നമ്പർ, പ്രവൃത്തി സമയം, ഫോട്ടോകൾ എന്നിവ സഹിതം ഗൂഗിൾ മാപ്പിൽ നിങ്ങളെ ആദ്യം കാണുന്നു.',
          icon: '📍',
        },
      ],
    },
    whyItWorks: {
      title: 'കേരളത്തിലെ ചെറുകിട വ്യാപാരികൾക്കായി തയ്യാറാക്കിയത്',
      subtitle: 'സങ്കീർണ്ണമായ സാങ്കേതിക പദങ്ങളില്ല. നിങ്ങളുടെ സ്വന്തം ഫോണിൽ കാണാൻ കഴിയുന്ന യഥാർത്ഥ മാറ്റങ്ങൾ.',
      beforeLabel: 'വിസിബിൾ കേരള ഇല്ലാതെ',
      afterLabel: 'വിസിബിൾ കേരളയ്‌ക്കൊപ്പം',
      trustPoints: [
        'നിങ്ങളുടെ പ്രൊഫൈൽ ഗൂഗിളിൽ ലൈവായി കണ്ടതിന് ശേഷം മാത്രം പണം നൽകിയാൽ മതി.',
        'ലോകമെമ്പാടുമുള്ള കോടിക്കണക്കിന് ബിസിനസുകൾ വിശ്വസിക്കുന്ന ഗൂഗിൾ, വാട്സ്ആപ്പ്, ഇൻസ്റ്റാഗ്രാം എന്നിവയുടെ സൗജന്യ ടൂളുകൾ മാത്രം ഉപയോഗിക്കുന്നു.',
        '100% ഉടമസ്ഥാവകാശം നിങ്ങൾക്ക് തന്നെ — എല്ലാ അക്കൗണ്ടുകളും എപ്പോഴും നിങ്ങളുടെ സ്വന്തം പേരിലായിരിക്കും.',
      ],
    },
    contact: {
      title: 'നിങ്ങളുടെ ബിസിനസ്സും ഓൺലൈനിലെത്തിക്കാം.',
      subhead: 'ഏറ്റവും വേഗത്തിൽ മറുപടി ലഭിക്കാൻ വാട്സ്ആപ്പിൽ മെസ്സേജ് അയയ്ക്കൂ, അല്ലെങ്കിൽ താഴെയുള്ള ഫോം പൂരിപ്പിക്കൂ.',
      nameLabel: 'പൂർണ്ണ പേര്*',
      bizLabel: 'ബിസിനസ്സിന്റെ പേര്*',
      phoneLabel: 'ഫോൺ/വാട്സ്ആപ്പ് നമ്പർ*',
      typeLabel: 'ബിസിനസ് തരം',
      types: [
        'ട്യൂഷൻ സെന്റർ',
        'സലൂൺ / ബ്യൂട്ടി പാർലർ',
        'ഹോംസ്റ്റേ / ലോഡ്ജ്',
        'ബേക്കറി / കാറ്ററിംഗ്',
        'ക്ലിനിക് / ഫാർമസി',
        'ഹാർഡ്‌വെയർ / ഓട്ടോ ഷോപ്പ്',
        'ടെയ്‌ലറിംഗ് / ബോട്ടീക്',
        'മറ്റുള്ളവ',
      ],
      msgLabel: 'സന്ദേശം (ആവശ്യമെങ്കിൽ മാത്രം)',
      submitBtn: 'സന്ദേശം അയയ്ക്കൂ',
      successMsg: 'നന്ദി! ഏതാനും മണിക്കൂറുകൾക്കുള്ളിൽ ഞങ്ങൾ വാട്സ്ആപ്പിൽ ബന്ധപ്പെടുന്നതാണ്.',
      footerServing: 'കേരളത്തിലെ 14 ജില്ലകളിലുമുള്ള ചെറുകിട സംരംഭങ്ങൾക്ക് അഭിമാനത്തോടെ സേവനം നൽകുന്നു.',
    },
  },
};

const WA_BASE = 'https://wa.me/917012025737?text=';
const WA_MSG_DEFAULT = encodeURIComponent(
  "Hi! I'd like to know more about getting my business visible on Google."
);
const WA_MSG_PKG = (name: string) =>
  encodeURIComponent(`Hi! I'm interested in the ${name} package for my business.`);

export default function Home() {
  const [lang, setLang] = useState<'en' | 'ml'>('en');
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAfter, setShowAfter] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [sliderRunning, setSliderRunning] = useState(true);

  const navRef = useRef<HTMLElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const sliderTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const packagesGridRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cardRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const workflowSectionRef = useRef<HTMLDivElement>(null);

  const t = siteContent[lang];

  // ---- 1. Initialize language from localStorage ----
  useEffect(() => {
    const saved = localStorage.getItem('vk_lang');
    if (saved === 'ml' || saved === 'en') {
      setLang(saved);
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
      setNavScrolled(window.scrollY > 100);
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

  // ---- 5. SVG path scroll drawing ----
  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;
    const len = path.getTotalLength();
    path.style.strokeDasharray = `${len} ${len}`;
    path.style.strokeDashoffset = String(len);

    const onScroll = () => {
      if (!workflowSectionRef.current) return;
      const rect = workflowSectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const sectionHeight = rect.height;
      const scrollProgress = Math.max(
        0,
        Math.min(1, (window.scrollY - sectionTop + window.innerHeight * 0.6) / sectionHeight)
      );
      const drawLen = len * scrollProgress * 1.4;
      path.style.strokeDashoffset = String(Math.max(0, len - drawLen));
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ---- 6. Intersection Observer for scroll reveals & step animations ----
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
          }
        });
      },
      { threshold: 0.15 }
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
            }, idx * 300);
          }
        });
      },
      { threshold: 0.3 }
    );

    stepRefs.current.forEach((el) => {
      if (el) stepObserver.observe(el);
    });

    return () => {
      observer.disconnect();
      stepObserver.disconnect();
    };
  }, []);

  // ---- 7. Before/After toggle with auto-loop ----
  const manualToggleRef = useRef(false);

  const resetSlider = useCallback(() => {
    if (sliderTimerRef.current) clearTimeout(sliderTimerRef.current);
    setShowAfter(false);
    setSliderRunning(true);
    const tick = () => {
      sliderTimerRef.current = setTimeout(() => {
        setShowAfter(true);
        sliderTimerRef.current = setTimeout(() => {
          setShowAfter(false);
          if (!manualToggleRef.current) tick();
        }, 4000);
      }, 4000);
    };
    tick();
  }, []);

  useEffect(() => {
    resetSlider();
    return () => {
      if (sliderTimerRef.current) clearTimeout(sliderTimerRef.current);
    };
  }, [resetSlider]);

  const handleDemoToggle = (toAfter: boolean) => {
    manualToggleRef.current = true;
    if (sliderTimerRef.current) clearTimeout(sliderTimerRef.current);
    setShowAfter(toAfter);
    setSliderRunning(false);
    // Resume auto-loop after 12 seconds of inactivity
    setTimeout(() => {
      manualToggleRef.current = false;
      resetSlider();
    }, 12000);
  };

  // ---- 8. Contextual hover tooltips ----
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

  // ---- 9. 3D Card tilt effect ----
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
        const rotX = ((y - cy) / cy) * -6;
        const rotY = ((x - cx) / cx) * 6;
        card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-5px)`;
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
  }, [lang]); // rebind when lang changes (cards re-render)

  // ---- Helpers ----
  const toggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'ml' : 'en'));
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  // ---- RENDER ----
  return (
    <>
      {/* Tooltip element */}
      <div ref={tooltipRef} className="clay-tooltip" />

      {/* ===== STICKY NAVIGATION ===== */}
      <header ref={navRef} className={`sticky-nav ${navScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <a href="#" className="brand-logo" onClick={closeMobileMenu}>
            <img src="/logo-mark-isolated.png" alt="Visible Kerala" className="logo-mark" />
            <span className="wordmark">Visible Kerala</span>
          </a>

          <nav className="nav-links">
            <a href="#services" data-hover-ml="സേവനങ്ങൾ">{t.nav.services}</a>
            <a href="#how-it-works" data-hover-ml="പ്രവർത്തനരീതി">{t.nav.howItWorks}</a>
            <a href="#why-it-works" data-hover-ml="എന്തുകൊണ്ട് ഞങ്ങൾ?">{t.nav.whyItWorks}</a>
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
        <a href="#services" onClick={closeMobileMenu}>{t.nav.services}</a>
        <a href="#how-it-works" onClick={closeMobileMenu}>{t.nav.howItWorks}</a>
        <a href="#why-it-works" onClick={closeMobileMenu}>{t.nav.whyItWorks}</a>
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
              style={{ fontSize: 'clamp(2rem, 5.5vw, 3.2rem)', color: 'var(--vk-deep-green)', marginBottom: '1rem' }}
              data-hover-ml="അറിയപ്പെടാത്ത അവസ്ഥയിൽ നിന്ന് എപ്പോഴും മുന്നിൽ!"
            >
              {t.hero.headline}
            </h1>
            <p className="hero-subhead">{t.hero.subhead}</p>
            <div className="hero-cta-group">
              <a
                href={`${WA_BASE}${WA_MSG_DEFAULT}`}
                className="btn-clay-primary lg pulse-glow"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.hero.primaryCta}
              </a>
              <a href="#services" className="btn-clay-secondary lg">
                {t.hero.secondaryCta}
              </a>
            </div>
          </div>

          <div className="hero-visual-3d">
            <div className="floating-pin-wrapper">
              <img src="/logo-full.png" alt="Visible Kerala Map Pin" className="bobbing-pin" />
              <div className="pin-shadow" />
            </div>
          </div>
        </section>

        {/* ===== SERVICES SECTION ===== */}
        <section id="services" className="services-section reveal-on-scroll">
          <div className="section-header text-center">
            <h2
              className="section-title"
              style={{ fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', color: 'var(--vk-deep-green)' }}
              data-hover-ml="ലളിതമായ പാക്കേജുകൾ. മറഞ്ഞിരിക്കുന്ന ചെലവുകളില്ല."
            >
              {t.services.title}
            </h2>
            <p className="section-subtitle">{t.services.subtitle}</p>
          </div>

          <div ref={packagesGridRef} className="clay-grid">
            {t.services.packages.map((pkg, idx) => (
              <a
                key={pkg.name + lang}
                href={`${WA_BASE}${WA_MSG_PKG(pkg.name)}`}
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
                <span className="btn-clay-primary" style={{ fontSize: '0.85rem', padding: '0.55rem 1rem' }}>
                  {t.services.ctaButton}
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* ===== HOW IT WORKS SECTION ===== */}
        <section id="how-it-works" className="workflow-section reveal-on-scroll" ref={workflowSectionRef}>
          <div className="section-header text-center" style={{ maxWidth: 900, margin: '0 auto 2.5rem' }}>
            <h2
              className="section-title"
              style={{ fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', color: 'var(--vk-deep-green)' }}
              data-hover-ml="3 പടികൾ. 1 ആഴ്ച. യാതൊരു ബുദ്ധിമുട്ടുമില്ല."
            >
              {t.howItWorks.title}
            </h2>
            <p className="section-subtitle">{t.howItWorks.subtitle}</p>
          </div>

          <div className="workflow-container">
            <svg className="workflow-svg" viewBox="0 0 1000 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
              <path
                ref={pathRef}
                id="workflow-path"
                d="M100 100 C 300 20, 500 180, 900 100"
                stroke="#2F9E44"
                strokeWidth="6"
                strokeLinecap="round"
              />
            </svg>
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

        {/* ===== WHY IT WORKS SECTION ===== */}
        <section id="why-it-works" className="why-section reveal-on-scroll">
          <div className="section-header text-center">
            <h2
              className="section-title"
              style={{ fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', color: 'var(--vk-deep-green)' }}
              data-hover-ml="കേരളത്തിലെ ചെറുകിട വ്യാപാരികൾക്കായി തയ്യാറാക്കിയത്"
            >
              {t.whyItWorks.title}
            </h2>
            <p className="section-subtitle">{t.whyItWorks.subtitle}</p>
          </div>

          {/* Before / After Demo Mockup */}
          <div className="demo-mockup-container">
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
                {/* BEFORE State */}
                <div className={`mockup-pane before-pane ${showAfter ? 'hidden' : ''}`}>
                  <div className="mock-shop-name">Kerala General Store</div>
                  <div className="mock-shop-rating">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <span key={s} className="mock-star">★</span>
                    ))}
                    <span style={{ marginLeft: 4, fontSize: '0.82rem', color: '#bbb' }}>(0 reviews)</span>
                  </div>
                  <div style={{ marginBottom: '0.75rem' }}>
                    <span className="mock-badge gray">Unverified</span>
                    <span className="mock-badge gray">No Hours</span>
                  </div>
                  <div className="mock-placeholder-box">No photos added</div>
                  <div className="mock-info-row missing">✗ Phone number not listed</div>
                  <div className="mock-info-row missing">✗ Address incomplete</div>
                  <div className="mock-map-area no-pin">No location pin set</div>
                </div>

                {/* AFTER State */}
                <div className={`mockup-pane after-pane ${showAfter ? 'active' : ''}`}>
                  <div className="mock-shop-name" style={{ color: 'var(--vk-deep-green)' }}>Kerala General Store</div>
                  <div className="mock-shop-rating">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <span key={s} className="mock-star filled">★</span>
                    ))}
                    <span style={{ marginLeft: 4, fontSize: '0.82rem', color: 'var(--vk-primary-green)', fontWeight: 700 }}>(4.8 · 24 reviews)</span>
                  </div>
                  <div style={{ marginBottom: '0.75rem' }}>
                    <span className="mock-badge green">Verified</span>
                    <span className="mock-badge green">Open Now</span>
                    <span className="mock-badge green">Popular</span>
                  </div>
                  <div style={{ background: 'linear-gradient(135deg, rgba(47,158,68,0.06), rgba(15,113,115,0.04))', borderRadius: 12, height: 80, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem', color: 'var(--vk-primary-green)', fontWeight: 600, fontSize: '0.9rem' }}>
                    📷 5 Storefront Photos
                  </div>
                  <div className="mock-info-row verified">✓ +91 70120 25737</div>
                  <div className="mock-info-row verified">✓ Main Road, Near Junction, Kerala</div>
                  <div className="mock-map-area has-pin">📍 Precisely pinned on Google Maps</div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Points */}
          <div className="trust-points">
            {t.whyItWorks.trustPoints.map((point, idx) => (
              <div key={point + lang} className="trust-point">
                <div className="trust-icon">{idx === 0 ? '💰' : idx === 1 ? '🛡️' : '🔐'}</div>
                <p className="trust-text">{point}</p>
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
              data-hover-ml="നിങ്ങളുടെ ബിസിനസ്സും ഓൺലൈനിലെത്തിക്കാം."
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
                    <label>{t.contact.typeLabel}</label>
                    <select name="business_type" className="clay-select">
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
                  <button type="submit" className="btn-clay-primary full-width lg">
                    {t.contact.submitBtn}
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
          <p className="footer-tagline">{t.hero.headline}</p>

          <div className="footer-links">
            <a href="#services">{t.nav.services}</a>
            <a href="#how-it-works">{t.nav.howItWorks}</a>
            <a href="#why-it-works">{t.nav.whyItWorks}</a>
            <a href="#contact">{t.nav.contact}</a>
          </div>

          <div className="footer-contact">
            <a href="mailto:visiblekerala@gmail.com">✉ visiblekerala@gmail.com</a>
            <a href="tel:+917012025737">📞 +91 70120 25737</a>
          </div>

          <p className="footer-serving">{t.contact.footerServing}</p>
          <p className="copyright">© 2026 Visible Kerala. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}