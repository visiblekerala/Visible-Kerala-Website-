/* ========================================
   VISIBLE KERALA — Standalone JS
   ======================================== */

// Content dictionary extracted from page.tsx
const siteContent = {
  en: {
    nav: { services:'Services', howItWorks:'How It Works', whyItWorks:'Why It Works', contact:'Contact', cta:'Chat on WhatsApp' },
    hero: {
      eyebrow: 'Google Business Profile \u00b7 WhatsApp Business \u00b7 Social Media',
      headline: 'From Invisible to Unmissable.',
      subhead: "9 out of 10 small businesses in Kerala don't show up when someone searches for them on Google. We make sure yours does \u2014 fully set up in a day, at a price a small shop can afford.",
      primaryCta: 'Chat on WhatsApp', secondaryCta: 'See Packages'
    },
    services: {
      title: 'Simple Packages. No Surprises.', subtitle: 'Everything you need to get discovered by local customers.',
      popularBadge: 'Most Popular', ctaButton: 'Get Started on WhatsApp',
      packages: [
        { name:'Starter', price:'\u20b9499', pitch:'Get found on Google + WhatsApp.', includes:['Google Business Profile setup','WhatsApp Business setup with auto-reply','Basic map pinning'] },
        { name:'Standard', price:'\u20b9799', pitch:'Look professional everywhere customers search.', includes:['Everything in Starter','Custom digital logo cleanup','5 branded social media posts','Instagram or Facebook page setup'] },
        { name:'Premium', price:'\u20b91,299', pitch:'The complete visibility package.', includes:['Everything in Standard','Full Instagram bio & highlight setup','Google review automated link system','1 month of priority support'] },
        { name:'Retainer', price:'\u20b9599/month', pitch:'Stay visible, every single month.', includes:['8 custom posts per month','Customer review reply management','Ongoing holiday/hours updates','Cancel anytime with zero fees'] }
      ]
    },
    howItWorks: {
      title: 'Three Steps. One Week. Zero Hassle.', subtitle: 'You run your business; we handle the digital setup.',
      steps: [
        { title:'1. We Check', desc:'We search your business live and show you exactly what customers see today \u2014 good or bad.', icon:'\ud83d\udd0d' },
        { title:'2. We Build', desc:'Google Business Profile, WhatsApp Business, and your social pages \u2014 set up properly, usually within a day.', icon:'\ud83d\udee0\ufe0f' },
        { title:"3. You're Found", desc:'Customers searching nearby now find you \u2014 number, hours, and photos, right there on Google Maps.', icon:'\ud83d\udccd' }
      ]
    },
    whyItWorks: {
      title: "Built For Kerala's Local Businesses", subtitle: 'No confusing jargon. Just real results you can see on your own phone.',
      beforeLabel: 'Without Visible Kerala', afterLabel: 'With Visible Kerala',
      trustPoints: [
        'Pay only after you see your profile live on Google.',
        'We use Google, WhatsApp, and Instagram \u2014 the same free tools trusted by millions worldwide.',
        'You keep full 100% ownership \u2014 every account stays securely in your name, always.'
      ]
    },
    contact: {
      title: "Let's Get You Found.",
      subhead: 'Message us on WhatsApp for the fastest reply, or fill out the form below.',
      nameLabel:'Full Name*', bizLabel:'Business Name*', phoneLabel:'Phone/WhatsApp Number*',
      typeLabel:'Business Type',
      types: ['Tuition Centre','Salon / Beauty Parlour','Homestay / Lodge','Bakery / Caterer','Clinic / Pharmacy','Hardware / Auto Shop','Tailoring / Boutique','Other'],
      msgLabel:'Message (Optional)', submitBtn:'Send Message',
      successMsg: "Thanks! We'll reach out to your WhatsApp within a few hours.",
      footerServing: 'Serving small businesses across all 14 districts of Kerala.'
    }
  },
  ml: {
    nav: { services:'\u0d38\u0d47\u0d35\u0d28\u0d19\u0d4d\u0d19\u0d33\u0d4d', howItWorks:'\u0d2a\u0d4d\u0d30\u0d35\u0d30\u0d4d\u0d24\u0d4d\u0d24\u0d28\u0d30\u0d40\u0d24\u0d3f', whyItWorks:'\u0d0e\u0d28\u0d4d\u0d24\u0d41\u0d15\u0d4a\u0d23\u0d4d\u0d1f\u0d4d \u0d1e\u0d19\u0d4d\u0d19\u0d33\u0d4d?', contact:'\u0d2c\u0d28\u0d4d\u0d27\u0d2a\u0d4d\u0d2a\u0d46\u0d1f\u0d41\u0d15\u0d4d\u0d15\u0d3e\u0d02', cta:'\u0d35\u0d3e\u0d1f\u0d4d\u0d38\u0d46\u0d2a\u0d4d\u0d2a\u0d3f\u0d7d \u0d38\u0d02\u0d38\u0d3e\u0d30\u0d3f\u0d15\u0d4d\u0d15\u0d3e\u0d02' },
    hero: {
      eyebrow: '\u0d17\u0d42\u0d17\u0d3f\u0d7e \u0d2c\u0d3f\u0d38\u0d3f\u0d28\u0d38\u0d4d \u0d2a\u0d4d\u0d30\u0d4a\u0d2b\u0d48\u0d7b \u00b7 \u0d35\u0d3e\u0d1f\u0d4d\u0d38\u0d46\u0d2a\u0d4d\u0d2a\u0d4d \u0d2c\u0d3f\u0d38\u0d3f\u0d28\u0d38\u0d4d \u00b7 \u0d38\u0d4b\u0d37\u0d4d\u0d2f\u0d32\u0d4d \u0d2e\u0d40\u0d21\u0d3f\u0d2f',
      headline: '\u0d05\u0d31\u0d3f\u0d2f\u0d2a\u0d4d\u0d2a\u0d46\u0d1f\u0d3e\u0d24\u0d4d\u0d24 \u0d05\u0d35\u0d38\u0d4d\u0d25\u0d2f\u0d3f\u0d7d \u0d28\u0d3f\u0d28\u0d4d\u0d28\u0d4d \u0d0e\u0d2a\u0d4d\u0d2a\u0d4b\u0d34\u0d41\u0d02 \u0d2e\u0d41\u0d28\u0d4d\u0d28\u0d3f\u0d7d!',
      subhead: '\u0d15\u0d47\u0d30\u0d33\u0d24\u0d4d\u0d24\u0d3f\u0d7d 10-\u0d7d 9 \u0d1a\u0d46\u0d31\u0d41\u0d15\u0d3f\u0d1f \u0d38\u0d02\u0d30\u0d02\u0d2d\u0d19\u0d4d\u0d19\u0d33\u0d41\u0d02 \u0d17\u0d42\u0d17\u0d3f\u0d33\u0d3f\u0d7d \u0d24\u0d3f\u0d30\u0d2f\u0d41\u0d2e\u0d4d\u0d2a\u0d4b\u0d7e \u0d15\u0d3e\u0d23\u0d3e\u0d31\u0d3f\u0d32\u0d4d\u0d32. \u0d28\u0d3f\u0d19\u0d4d\u0d19\u0d33\u0d41\u0d1f\u0d46 \u0d38\u0d4d\u0d25\u0d3e\u0d2a\u0d28\u0d02 \u0d09\u0d2a\u0d2d\u0d4b\u0d15\u0d4d\u0d24\u0d3e\u0d15\u0d4d\u0d15\u0d7e \u0d0e\u0d33\u0d41\u0d2a\u0d4d\u0d2a\u0d24\u0d3f\u0d7d \u0d15\u0d23\u0d4d\u0d1f\u0d46\u0d24\u0d4d\u0d24\u0d3f\u0d15\u0d4d\u0d15\u0d3e\u0d7b \u0d1e\u0d19\u0d4d\u0d99\u0d33\u0d4d \u0d38\u0d39\u0d3e\u0d2f\u0d3f\u0d15\u0d4d\u0d15\u0d41\u0d28\u0d4d\u0d28\u0d41 \u2014 \u0d1a\u0d46\u0d31\u0d3f\u0d2f \u0d1a\u0d46\u0d32\u0d35\u0d3f\u0d7d, \u0d12\u0d31\u0d4d\u0d31 \u0d26\u0d3f\u0d35\u0d38\u0d02 \u0d15\u0d4a\u0d23\u0d4d\u0d1f\u0d4d \u0d2a\u0d42\u0d7c\u0d23\u0d4d\u0d23\u0d2e\u0d3e\u0d2f\u0d41\u0d02 \u0d38\u0d1c\u0d4d\u0d1c\u0d2e\u0d3e\u0d15\u0d4d\u0d15\u0d3e\u0d02.',
      primaryCta: '\u0d35\u0d3e\u0d1f\u0d4d\u0d38\u0d46\u0d2a\u0d4d\u0d2a\u0d3f\u0d7d \u0d38\u0d02\u0d38\u0d3e\u0d30\u0d3f\u0d95\u0d4d\u0d15\u0d3e\u0d02', secondaryCta: '\u0d2a\u0d3e\u0d15\u0d4d\u0d15\u0d47\u0d1c\u0d41\u0d15\u0d7e \u0d15\u0d3e\u0d23\u0d41\u0d15'
    },
    services: {
      title: '\u0d32\u0d33\u0d3f\u0d24\u0d2e\u0d3e\u0d2f \u0d2a\u0d3e\u0d15\u0d4d\u0d15\u0d47\u0d1c\u0d41\u0d15\u0d7e. \u0d2e\u0d31\u0d1e\u0d4d\u0d1e\u0d3f\u0d30\u0d3f\u0d15\u0d4d\u0d15\u0d41\u0d28\u0d4d\u0d28 \u0d1a\u0d46\u0d32\u0d35\u0d41\u0d15\u0d33\u0d3f\u0d32\u0d4d\uu0d32.', subtitle: '\u0d28\u0d3e\u0d1f\u0d4d\u0d1f\u0d3f\u0d32\u0d46 \u0d09\u0d2a\u0d2d\u0d4b\u0d15\u0d4d\u0d24\u0d3e\u0d15\u0d4d\u0d15\u0d7e \u0d28\u0d3f\u0d19\u0d4d\u0d19\u0d33\u0d46 \u0d15\u0d23\u0d4d\u0d1f\u0d46\u0d24\u0d4d\u0d24\u0d3f\u0d15\u0d4d\u0d15\u0d3e\u0d7b \u0d35\u0d47\u0d23\u0d4d\u0d1f\u0d24\u0d46\u0d32\u0d4d\u0d32\u0d3e\u0d02.',
      popularBadge: '\u0d0f\u0d31\u0d4d\u0d31\u0d35\u0d41\u0d02 \u0d1c\u0d28\u0d2a\u0d4d\u0d30\u0d3f\u0d2f\u0d02', ctaButton: '\u0d35\u0d3e\u0d1f\u0d4d\u0d38\u0d46\u0d2a\u0d4d\u0d2a\u0d3f\u0d7d \u0d24\u0d41\u0d1f\u0d19\u0d4d\u0d19\u0d3e\u0d02',
      packages: [
        { name:'\u0d38\u0d4d\u0d31\u0d4d\u0d31\u0d3e\u0d7c\u0d1f\u0d4d\u0d1f\u0d7c', price:'\u20b9499', pitch:'\u0d17\u0d42\u0d17\u0d3f\u0d33\u0d3f\u0d32\u0d41\u0d02 \u0d35\u0d3e\u0d1f\u0d4d\u0d38\u0d46\u0d2a\u0d4d\u0d2a\u0d3f\u0d32\u0d41\u0d02 \u0d28\u0d3f\u0d19\u0d4d\u0d19\u0d33\u0d41\u0d1f\u0d46 \u0d38\u0d3e\u0d28\u0d4d\u0d28\u0d3f\u0d27\u0d4d\u0d2f\u0d02 \u0d09\u0d31\u0d2a\u0d4d\u0d2a\u0d3e\u0d15\u0d4d\u0d15\u0d3e\u0d02.', includes:['\u0d17\u0d42\u0d17\u0d3f\u0d7e \u0d2c\u0d3f\u0d38\u0d3f\u0d28\u0d38\u0d4d \u0d2a\u0d4d\u0d30\u0d4a\u0d2b\u0d48\u0d7b \u0d28\u0d3f\u0d7c\u0d2e\u0d4d\u0d2e\u0d3e\u0d23\u0d02','\u0d13\u0d1f\u0d4d\u0d1f\u0d4b-\u0d31\u0d3f\u0d2a\u0d4d\u0d32\u0d48 \u0d38\u0d39\u0d3f\u0d24\u0d02 \u0d35\u0d3e\u0d1f\u0d4d\u0d38\u0d46\u0d2a\u0d4d\u0d2a\u0d4d \u0d2c\u0d3f\u0d38\u0d3f\u0d28\u0d38\u0d4d \u0d38\u0d1c\u0d4d\u0d1c\u0d40\u0d15\u0d30\u0d23\u0d02','\u0d17\u0d42\u0d17\u0d3f\u0d7e \u0d2e\u0d3e\u0d2a\u0d4d\u0d2a\u0d3f\u0d7d \u0d15\u0d43\u0d24\u0d4d\u0d2f\u0d2e\u0d3e\u0d2f \u0d38\u0d4d\u0d25\u0d3e\u0d28\u0d02 \u0d1a\u0d47\u0d30\u0d4d\u0d15\u0d4d\u0d15\u0d32\u0d4d'] },
        { name:'\u0d38\u0d4d\u0d31\u0d4d\u0d31\u0d3e\u0d7b\u0d21\u0d47\u0d7c\u0d21\u0d4d', price:'\u20b9799', pitch:'\u0d09\u0d2a\u0d2d\u0d4b\u0d15\u0d4d\u0d24\u0d3e\u0d15\u0d4d\u0d95\u0d7e \u0d24\u0d3f\u0d30\u0d2f\u0d41\u0d2e\u0d4d\u0d2a\u0d4b\u0d34\u0d46\u0d32\u0d4d\u0d32\u0d3e\u0d2f\u0d41\u0d02 \u0d2e\u0d3f\u0d15\u0d1a\u0d4d\u0d1a \u0d2a\u0d4d\u0d30\u0d4a\u0d2b\u0d37\u0d23\u0d32\u0d4d \u0d32\u0d41\u0d15\u0d4d\u0d15\u0d4d.', includes:['\u0d38\u0d4d\u0d31\u0d4d\u0d31\u0d3e\u0d7c\u0d1f\u0d4d\u0d1f\u0d7c \u0d2a\u0d3e\u0d15\u0d4d\u0d15\u0d47\u0d1c\u0d3f\u0d32\u0d46 \u0d0e\u0d32\u0d4d\u0d32\u0d3e\u0d02','\u0d21\u0d3f\u0d1c\u0d3f\u0d31\u0d4d\u0d31\u0d7d \u0d32\u0d4b\u0d17\u0d4b \u0d15\u0d4d\u0d32\u0d40\u0d7b-\u0d05\u0d2a\u0d4d\u0d2a\u0d4d','\u0d2c\u0d3f\u0d38\u0d3f\u0d28\u0d38\u0d4d\u0d38\u0d3f\u0d28\u0d3e\u0d2f\u0d3f 5 \u0d38\u0d4b\u0d37\u0d4d\u0d2f\u0d32\u0d4d \u0d2e\u0d40\u0d21\u0d3f\u0d2f \u0d2a\u0d4b\u0d38\u0d4d\u0d31\u0d4d\u0d31\u0d41\u0d15\u0d7e','\u0d07\u0d7b\u0d38\u0d4d\u0d31\u0d4d\u0d31\u0d3e\u0d17\u0d4d\u0d30\u0d3e\u0d02 \u0d05\u0d32\u0d4d\u0d32\u0d46\u0d19\u0d4d\u0d15\u0d3f\u0d7d \u0d2b\u0d47\u0d38\u0d4d\u0d2c\u0d41\u0d15\u0d4d\u0d15\u0d4d \u0d2a\u0d47\u0d1c\u0d4d \u0d28\u0d3f\u0d7c\u0d2e\u0d4d\u0d2e\u0d3e\u0d23\u0d02'] },
        { name:'\u0d2a\u0d4d\u0d30\u0d40\u0d2e\u0d3f\u0d2f\u0d02', price:'\u20b91,299', pitch:'\u0d2c\u0d3f\u0d38\u0d3f\u0d28\u0d38\u0d4d\u0d38\u0d4d \u0d35\u0d33\u0d7c\u0d24\u0d4d\u0d24\u0d3e\u0d7b \u0d38\u0d2e\u0d17\u0d4d\u0d30\u0d2e\u0d3e\u0d2f \u0d35\u0d3f\u0d38\u0d3f\u0d2c\u0d3f\u0d32\u0d3f\u0d31\u0d4d\u0d31\u0d3f \u0d2a\u0d3e\u0d15\u0d4d\u0d15\u0d47\u0d1c\u0d4d.', includes:['\u0d38\u0d4d\u0d31\u0d4d\u0d31\u0d3e\u0d7b\u0d21\u0d47\u0d7c\u0d21\u0d4d \u0d2a\u0d3e\u0d15\u0d4d\u0d15\u0d47\u0d1c\u0d3f\u0d32\u0d46 \u0d0e\u0d32\u0d4d\u0d32\u0d3e\u0d02','\u0d2a\u0d42\u0d7c\u0d23\u0d4d\u0d23\u0d2e\u0d3e\u0d2f \u0d07\u0d7b\u0d38\u0d4d\u0d31\u0d4d\u0d31\u0d3e\u0d17\u0d4d\u0d30\u0d3e\u0d02 \u0d2c\u0d2f\u0d4b & \u0d39\u0d3e\u0d2f\u0d4d\u0d32\u0d48\u0d31\u0d4d\u0d31\u0d4d \u0d38\u0d1c\u0d4d\u0d1c\u0d40\u0d15\u0d30\u0d23\u0d02','\u0d17\u0d42\u0d17\u0d3f\u0d7e \u0d31\u0d3f\u0d35\u0d4d\u0d2f\u0d42 \u0d35\u0d7c\u0d26\u0d4d\u0d27\u0d3f\u0d2a\u0d4d\u0d2a\u0d3f\u0d15\u0d4d\u0d15\u0d3e\u0d7b \u0d13\u0d1f\u0d4d\u0d1f\u0d4b\u0d2e\u0d3e\u0d31\u0d4d\u0d31\u0d3f\u0d15\u0d4d \u0d32\u0d3f\u0d19\u0d4d\u0d15\u0d4d \u0d38\u0d3f\u0d38\u0d4d\u0d31\u0d4d\u0d31\u0d02','1 \u0d2e\u0d3e\u0d38\u0d24\u0d4d\u0d24\u0d46 \u0d2e\u0d41\u0d7b\u0d17\u0d23\u0d28\u0d3e \u0d38\u0d2a\u0d4d\u0d2a\u0d4b\u0d7c\u0d1f\u0d4d\u0d1f\u0d4d'] },
        { name:'\u0d31\u0d3f\u0d1f\u0d4d\u0d31\u0d48\u0d28\u0d7c', price:'\u20b9599/month', pitch:'\u0d13\u0d30\u0d4b \u0d2e\u0d3e\u0d38\u0d35\u0d41\u0d02 \u0d38\u0d1c\u0d40\u0d35\u0d2e\u0d3e\u0d2f\u0d3f \u0d28\u0d3f\u0d32\u0d28\u0d3f\u0d7d\u0d15\u0d4d\u0d15\u0d3e\u0d02, \u0d2a\u0d41\u0d24\u0d3f\u0d2f \u0d15\u0d38\u0d4d\u0d31\u0d2e\u0d47\u0d34\u0d4d\u0d38\u0d3f\u0d28\u0d46 \u0d28\u0d47\u0d1f\u0d3e\u0d02.', includes:['\u0d2e\u0d3e\u0d38\u0d02 \u0d24\u0d4b\u0d31\u0d41\u0d02 8 \u0d15\u0d38\u0d4d\u0d31\u0d02 \u0d21\u0d3f\u0d38\u0d48\u0d7b \u0d2a\u0d4b\u0d38\u0d4d\u0d31\u0d4d\u0d31\u0d41\u0d15\u0d7e','\u0d15\u0d38\u0d4d\u0d31\u0d2e\u0d7c \u0d31\u0d3f\u0d35\u0d4d\u0d2f\u0d42\u0d15\u0d7e\u0d15\u0d4d\u0d15\u0d4d \u0d15\u0d43\u0d24\u0d4d\u0d2f\u0d2e\u0d3e\u0d2f \u0d2e\u0d31\u0d41\u0d2a\u0d1f\u0d3f \u0d28\u0d32\u0d4d\u0d15\u0d3f\u0d2f\u0d7d','\u0d05\u0d35\u0d27\u0d3f \u0d26\u0d3f\u0d28\u0d19\u0d4d\u0d19\u0d33\u0d41\u0d02 \u0d2a\u0d4d\u0d30\u0d35\u0d43\u0d24\u0d4d\u0d24\u0d3f \u0d38\u0d2e\u0d2f\u0d35\u0d41\u0d02 \u0d05\u0d2a\u0d4d\u0d21\u0d47\u0d31\u0d4d\u0d31\u0d4d \u0d1a\u0d46\u0d2f\u0d4d\u0d2f\u0d32\u0d4d','\u0d0e\u0d2a\u0d4d\u0d2a\u0d4b\u0d34\u0d41\u0d02 \u0d35\u0d47\u0d23\u0d4d\u0d1f\u0d2e\u0d46\u0d19\u0d4d\u0d15\u0d3f\u0d7d \u0d15\u0d3e\u0d7b\u0d38\u0d7d \u0d1a\u0d46\u0d2f\u0d4d\u0d2f\u0d3e\u0d02, \u0d05\u0d27\u0d3f\u0d15 \u0d1a\u0d3e\u0d7c\u0d1c\u0d4d\u0d1c\u0d3f\u0d32\u0d4d\u0d32'] }
      ]
    },
    howItWorks: {
      title: '3 \u0d2a\u0d1f\u0d3f\u0d15\u0d7e. 1 \u0d06\u0d34\u0d4d\u0d1a. \u0d2f\u0d3e\u0d24\u0d4a\u0d30\u0d41 \u0d2c\u0d41\u0d26\u0d4d\u0d27\u0d3f\u0d2e\u0d41\u0d1f\u0d4d\u0d1f\u0d41\u0d2e\u0d3f\u0d32\u0d4d\u0d32.', subtitle: '\u0d28\u0d3f\u0d19\u0d4d\u0d19\u0d7e \u0d2c\u0d3f\u0d38\u0d3f\u0d28\u0d38\u0d4d\u0d38\u0d4d \u0d28\u0d4b\u0d15\u0d4d\u0d15\u0d3f\u0d15\u0d4d\u0d15\u0d4b\u0d33\u0d42; \u0d21\u0d3f\u0d1c\u0d3f\u0d31\u0d4d\u0d31\u0d7d \u0d15\u0d3e\u0d30\u0d4d\u0d2f\u0d19\u0d4d\u0d19\u0d7e \u0d1e\u0d19\u0d4d\u0d19\u0d7e \u0d1a\u0d46\u0d2f\u0d4d\u0d24\u0d47\u0d15\u0d4d\u0d15\u0d3e\u0d02.',
      steps: [
        { title:'1. \u0d1e\u0d19\u0d4d\u0d99\u0d7e \u0d2a\u0d30\u0d3f\u0d36\u0d4b\u0d27\u0d3f\u0d15\u0d4d\u0d15\u0d41\u0d28\u0d4d\u0d28\u0d41', desc:'\u0d28\u0d3f\u0d19\u0d4d\u0d19\u0d33\u0d41\u0d1f\u0d46 \u0d2c\u0d3f\u0d38\u0d3f\u0d28\u0d38\u0d4d \u0d28\u0d3f\u0d32\u0d35\u0d3f\u0d7d \u0d17\u0d42\u0d17\u0d3f\u0d33\u0d3f\u0d7d \u0d24\u0d3f\u0d30\u0d1e\u0d4d\u0d1e\u0d41 \u0d28\u0d4b\u0d15\u0d4d\u0d15\u0d3f \u0d09\u0d2a\u0d2d\u0d4b\u0d15\u0d4d\u0d24\u0d3e\u0d15\u0d4d\u0d15\u0d7b \u0d0e\u0d28\u0d4d\u0d24\u0d3e\u0d23\u0d4d \u0d15\u0d3e\u0d23\u0d41\u0d28\u0d4d\u0d28\u0d24\u0d46\u0d28\u0d4d\u0d28\u0d4d \u0d1e\u0d99\u0d4d\u0d19\u0d7e \u0d15\u0d43\u0d24\u0d4d\u0d2f\u0d2e\u0d3e\u0d2f\u0d3f \u0d15\u0d3e\u0d23\u0d3f\u0d1a\u0d4d\u0d1a\u0d41 \u0d24\u0d30\u0d41\u0d28\u0d4d\u0d28\u0d41.', icon:'\ud83d\udd0d' },
        { title:'2. \u0d1e\u0d19\u0d4d\u0d99\u0d7e \u0d28\u0d3f\u0d7c\u0d2e\u0d4d\u0d2e\u0d3f\u0d15\u0d4d\u0d15\u0d41\u0d28\u0d4d\u0d28\u0d41', desc:'\u0d17\u0d42\u0d17\u0d3f\u0d7e \u0d2c\u0d3f\u0d38\u0d3f\u0d28\u0d38\u0d4d \u0d2a\u0d4d\u0d30\u0d4a\u0d2b\u0d48\u0d7b, \u0d35\u0d3e\u0d1f\u0d4d\u0d38\u0d46\u0d2a\u0d4d\u0d2a\u0d4d \u0d2c\u0d3f\u0d38\u0d3f\u0d28\u0d38\u0d4d, \u0d38\u0d4b\u0d37\u0d4d\u0d2f\u0d32\u0d4d \u0d2e\u0d40\u0d21\u0d3f\u0d2f \u0d2a\u0d47\u0d1c\u0d41\u0d15\u0d7e \u0d0e\u0d28\u0d4d\u0d28\u0d3f\u0d35 \u0d38\u0d3e\u0d27\u0d3e\u0d30\u0d23\u0d2e\u0d3e\u0d2f\u0d3f \u0d12\u0d31\u0d4d\u0d31 \u0d26\u0d3f\u0d35\u0d38\u0d02 \u0d15\u0d4a\u0d23\u0d4d\u0d1f\u0d4d \u0d15\u0d43\u0d24\u0d4d\u0d2f\u0d2e\u0d3e\u0d2f\u0d3f \u0d38\u0d1c\u0d4d\u0d1c\u0d2e\u0d3e\u0d15\u0d4d\u0d15\u0d41\u0d28\u0d4d\u0d28\u0d41.', icon:'\ud83d\udee0\ufe0f' },
        { title:'3. \u0d09\u0d2a\u0d2d\u0d4b\u0d15\u0d4d\u0d24\u0d3e\u0d15\u0d4d\u0d15\u0d7e \u0d15\u0d23\u0d4d\u0d1f\u0d46\u0d24\u0d4d\u0d24\u0d41\u0d28\u0d4d\u0d28\u0d41', desc:'\u0d05\u0d1f\u0d41\u0d24\u0d4d\u0d24\u0d41\u0d33\u0d4d\u0d33 \u0d15\u0d38\u0d4d\u0d31\u0d2e\u0d47\u0d34\u0d4d\u0d38\u0d4d \u0d24\u0d3f\u0d30\u0d2f\u0d41\u0d2e\u0d4d\u0d2a\u0d4b\u0d7e \u0d2b\u0d4b\u0d7a \u0d28\u0d2e\u0d4d\u0d2c\u0d7c, \u0d2a\u0d4d\u0d30\u0d35\u0d43\u0d24\u0d4d\u0d24\u0d3f \u0d38\u0d2e\u0d2f\u0d02, \u0d2b\u0d4b\u0d1f\u0d4d\u0d1f\u0d4b\u0d15\u0d7e\u0d7e \u0d0e\u0d28\u0d4d\u0d28\u0d3f\u0d35 \u0d38\u0d39\u0d3f\u0d24\u0d02 \u0d17\u0d42\u0d17\u0d3f\u0d7e \u0d2e\u0d3e\u0d2a\u0d4d\u0d2a\u0d3f\u0d7d \u0d28\u0d3f\u0d19\u0d4d\u0d19\u0d33\u0d46 \u0d06\u0d26\u0d4d\u0d2f\u0d02 \u0d15\u0d3e\u0d23\u0d41\u0d28\u0d4d\u0d28\u0d41.', icon:'\ud83d\udccd' }
      ]
    },
    whyItWorks: {
      title: '\u0d15\u0d47\u0d30\u0d33\u0d24\u0d4d\u0d24\u0d3f\u0d32\u0d46 \u0d1a\u0d46\u0d31\u0d41\u0d15\u0d3f\u0d1f \u0d35\u0d4d\u0d2f\u0d3e\u0d2a\u0d3e\u0d30\u0d3f\u0d15\u0d7e\u0d15\u0d4d\u0d15\u0d3e\u0d2f\u0d3f \u0d24\u0d2f\u0d4d\u0d2f\u0d3e\u0d31\u0d3e\u0d15\u0d4d\u0d15\u0d3f\u0d2f\u0d24\u0d4d', subtitle: '\u0d38\u0d19\u0d4d\u0d15\u0d40\u0d7c\u0d23\u0d4d\u0d23\u0d2e\u0d3e\u0d2f \u0d38\u0d3e\u0d19\u0d4d\u0d15\u0d47\u0d24\u0d3f\u0d15 \u0d2a\u0d26\u0d19\u0d4d\u0d19\u0d33\u0d3f\u0d32\u0d4d\u0d32. \u0d28\u0d3f\u0d19\u0d4d\u0d99\u0d33\u0d41\u0d1f\u0d46 \u0d38\u0d4d\u0d35\u0d28\u0d4d\u0d24\u0d02 \u0d2b\u0d4b\u0d7a \u0d15\u0d3e\u0d23\u0d3e\u0d7b \u0d15\u0d34\u0d3f\u0d2f\u0d41\u0d28\u0d4d\u0d28 \u0d2f\u0d25\u0d3e\u0d7c\u0d24\u0d4d\u0d25 \u0d2e\u0d3e\u0d31\u0d4d\u0d31\u0d19\u0d4d\u0d19\u0d7e.',
      beforeLabel: '\u0d35\u0d3f\u0d38\u0d3f\u0d2c\u0d3f\u0d7e \u0d15\u0d47\u0d30\u0d33 \u0d07\u0d32\u0d4d\u0d32\u0d3e\u0d24\u0d46', afterLabel: '\u0d35\u0d3f\u0d38\u0d3f\u0d2c\u0d3f\u0d7e \u0d15\u0d47\u0d30\u0d33\u0d2f\u0d4d\u200c\u0d15\u0d4d\u0d15\u0d4a\u0d2a\u0d4d\u0d2a\u0d02',
      trustPoints: [
        '\u0d28\u0d3f\u0d19\u0d4d\u0d19\u0d33\u0d41\u0d1f\u0d46 \u0d2a\u0d4d\u0d30\u0d4a\u0d2b\u0d48\u0d7b \u0d17\u0d42\u0d17\u0d3f\u0d7b \u0d32\u0d48\u0d35\u0d3e\u0d2f\u0d3f \u0d15\u0d23\u0d4d\u0d1f\u0d24\u0d3f\u0d28\u0d4d \u0d36\u0d47\u0d37\u0d02 \u0d2e\u0d3e\u0d24\u0d4d\u0d30\u0d2e\u0d47\u0d7d \u0d2a\u0d23\u0d02 \u0d28\u0d32\u0d4d\u0d15\u0d3f\u0d2f\u0d3e\u0d7d \u0d2e\u0d24\u0d3f.',
        '\u0d32\u0d4b\u0d15\u0d2e\u0d46\u0d2e\u0d4d\u0d2a\u0d3e\u0d1f\u0d41\u0d2e\u0d41\u0d33\u0d4d\u0d33 \u0d95\u0d4b\u0d1f\u0d40\u0d15\u0d4d\u0d15\u0d23\u0d15\u0d4d\u0d15\u0d7e\u0d7e \u0d35\u0d3f\u0d36\u0d4d\u0d35\u0d38\u0d3f\u0d15\u0d4d\u0d15\u0d41\u0d28\u0d4d\u0d28 \u0d17\u0d42\u0d17\u0d3f\u0d7b, \u0d35\u0d3e\u0d1f\u0d4d\u0d38\u0d46\u0d2a\u0d4d\u0d2a\u0d4d, \u0d07\u0d7b\u0d38\u0d4d\u0d31\u0d4d\u0d31\u0d3e\u0d17\u0d4d\u0d30\u0d02 \u0d0e\u0d28\u0d4d\u0d28\u0d3f\u0d35\u0d2f\u0d41\u0d1f\u0d46 \u0d38\u0d4c\u0d1c\u0d28\u0d4d\u0d2f \u0d1f\u0d42\u0d33\u0d4d\u200c\u0d15\u0d3e\u0d7e \u0d2e\u0d3e\u0d24\u0d4d\u0d30\u0d2e\u0d47\u0d7d \u0d09\u0d2a\u0d2f\u0d4b\u0d17\u0d3f\u0d15\u0d4d\u0d15\u0d41\u0d28\u0d4d\u0d28\u0d41.',
        '100% \u0d09\u0d1f\u0d2e\u0d38\u0d4d\u0d25\u0d3e\u0d35\u0d15\u0d3e\u0d36\u0d02 \u0d28\u0d3f\u0d19\u0d4d\u0d99\u0d33\u0d4d\u0d15\u0d4d\u0d15\u0d4d \u0d24\u0d28\u0d4d\u0d28\u0d46 \u2014 \u0d0e\u0d32\u0d4d\u0d32\u0d3e \u0d05\u0d15\u0d4d\u0d15\u0d4c\u0d23\u0d4d\u0d1f\u0d41\u0d95\u0d33\u0d41\u0d02 \u0d0e\u0d2a\u0d4d\u0d2a\u0d4b\u0d34\u0d41\u0d02 \u0d28\u0d3f\u0d99\u0d4d\u0d19\u0d33\u0d41\u0d1f\u0d46 \u0d38\u0d4d\u0d35\u0d28\u0d4d\u0d24\u0d02 \u0d2a\u0d47\u0d30\u0d3f\u0d7d \u0d86\u0d2f\u0d3f\u0d30\u0d3f\u0d15\u0d4d\u0d15\u0d41\u0d02.'
      ]
    },
    contact: {
      title: '\u0d28\u0d3f\u0d19\u0d4d\u0d19\u0d33\u0d41\u0d1f\u0d46 \u0d2c\u0d3f\u0d38\u0d3f\u0d28\u0d38\u0d4d\u0d38\u0d41\u0d02 \u0d13\u0d23\u0d4d\u0d32\u0d48\u0d28\u0d3f\u0d32\u0d46\u0d24\u0d4d\u0d24\u0d3f\u0d15\u0d4d\u0d15\u0d3e\u0d02.',
      subhead: '\u0d0f\u0d31\u0d4d\u0d31\u0d35\u0d41\u0d02 \u0d35\u0d47\u0d17\u0d24\u0d4d\u0d24\u0d3f\u0d7d \u0d2e\u0d31\u0d41\u0d2a\u0d1f\u0d3f \u0d32\u0d2d\u0d3f\u0d15\u0d4d\u0d15\u0d3e\u0d7b \u0d35\u0d3e\u0d1f\u0d4d\u0d38\u0d46\u0d2a\u0d4d\u0d2a\u0d3f\u0d7d \u0d2e\u0d46\u0d38\u0d4d\u0d38\u0d47\u0d1c\u0d4d\u0d1c\u0d4d \u0d05\u0d2f\u0d2f\u0d4d\u0d15\u0d42, \u0d05\u0d32\u0d46\u0d19\u0d4d\u0d15\u0d3f\u0d7d \u0d24\u0d3e\u0d34\u0d46\u0d2f\u0d41\u0d33\u0d4d\u0d33\u0d4b\u0d23\u0d35\u0d4b\u0d7b \u0d2a\u0d42\u0d30\u0d3f\u0d2a\u0d4d\u0d2a\u0d3f\u0d15\u0d4d\u0d15\u0d42.',
      nameLabel:'\u0d2a\u0d42\u0d7c\u0d23\u0d4d\u0d23 \u0d2a\u0d47\u0d30\u0d4d*', bizLabel:'\u0d2c\u0d3f\u0d38\u0d3f\u0d28\u0d38\u0d4d\u0d38\u0d3f\u0d7b\u0d31\u0d4d\u0d31 \u0d2a\u0d47\u0d30\u0d4d*', phoneLabel:'\u0d2b\u0d4b\u0d7a/\u0d35\u0d3e\u0d1f\u0d4d\u0d38\u0d46\u0d2a\u0d4d\u0d2a\u0d4d \u0d28\u0d2e\u0d4d\u0d2a\u0d7c*',
      typeLabel:'\u0d2c\u0d3f\u0d38\u0d3f\u0d28\u0d38\u0d4d\u0d38\u0d4d \u0d24\u0d30\u0d02',
      types: ['\u0d1f\u0d4d\u0d2f\u0d42\u0d37\u0d7b \u0d38\u0d46\u0d7b\u0d31\u0d4d','\u0d38\u0d32\u0d42\u0d7a / \u0d2c\u0d4d\u0d2f\u0d42\u0d1f\u0d3f \u0d2a\u0d3e\u0d7c\u0d32\u0d7c','\u0d39\u0d4b\u0d2e\u0d4d\u0d38\u0d4d\u0d31\u0d47 / \u0d32\u0d4b\u0d1c\u0d4d','\u0d2c\u0d47\u0d15\u0d4d\u0d15\u0d31\u0d3f / \u0d15\u0d3e\u0d31\u0d4d\u0d31\u0d31\u0d3f\u0d02\u0d17\u0d4d','\u0d15\u0d4d\u0d32\u0d3f\u0d28\u0d3f\u0d15\u0d4d / \u0d2b\u0d3e\u0d7c\u0d2e\u0d38\u0d3f','\u0d39\u0d3e\u0d7c\u0d21\u0d4d\u0d35\u0d47\u0d7c / \u0d13\u0d1f\u0d4d\u0d1f\u0d4b \u0d37\u0d4b\u0d2a\u0d4d','\u0d1f\u0d46\u0d7c\u0d31\u0d3f\u0d19\u0d4d / \u0d2c\u0d4b\u0d1f\u0d40\u0d15\u0d4d','\u0d2e\u0d31\u0d4d\u0d31\u0d41\u0d33\u0d4d\u0d33\u0d35'],
      msgLabel:'\u0d38\u0d28\u0d4d\u0d26\u0d47\u0d36\u0d02 (\u0d06\u0d35\u0d36\u0d4d\u0d2f\u0d2e\u0d46\u0d19\u0d4d\u0d15\u0d3f\u0d7d \u0d2e\u0d3e\u0d24\u0d4d\u0d30\u0d02)', submitBtn:'\u0d38\u0d28\u0d4d\u0d26\u0d47\u0d36\u0d02 \u0d05\u0d2f\u0d2f\u0d4d\u0d15\u0d42',
      successMsg: '\u0d28\u0d28\u0d26\u0d3f! \u0d0f\u0d24\u0d3e\u0d28\u0d41\u0d02 \u0d2e\u0d23\u0d3f\u0d15\u0d4d\u0d15\u0d42\u0d7b\u0d41\u0d33\u0d4d\u0d33\u0d3f\u0d7d \u0d1e\u0d19\u0d4d\u0d19\u0d7e \u0d35\u0d3e\u0d1f\u0d4d\u0d38\u0d46\u0d2a\u0d4d\u0d2a\u0d3f\u0d7d \u0d2c\u0d28\u0d4d\u0d27\u0d2a\u0d4d\u0d2a\u0d46\u0d1f\u0d41\u0d28\u0d4d\u0d28\u0d24\u0d3e\u0d23\u0d4d.',
      footerServing: '\u0d15\u0d47\u0d30\u0d33\u0d24\u0d4d\u0d24\u0d3f\u0d7d\u0d46 14 \u0d1c\u0d3f\u0d32\u0d4d\u0d32\u0d15\u0d33\u0d3f\u0d7d\u0d49\u0d2e\u0d41\u0d33\u0d4d\u0d33 \u0d1a\u0d46\u0d31\u0d41\u0d15\u0d3f\u0d1f \u0d38\u0d02\u0d30\u0d02\u0d2d\u0d19\u0d4d\u0d19\u0d33\u0d4d\u0d15\u0d4d\u0d15\u0d3e\u0d2f\u0d3f \u0d05\u0d2d\u0d3f\u0d2e\u0d3e\u0d28\u0d24\u0d4d\u0d24\u0d4b\u0d1f\u0d46 \u0d38\u0d47\u0d35\u0d28\u0d02 \u0d28\u0d7d\u0d15\u0d41\u0d28\u0d4d\u0d28\u0d41.'
    }
  }
};

const WA_BASE = 'https://wa.me/917012025737?text=';
const WA_MSG_DEFAULT = encodeURIComponent("Hi! I'd like to know more about getting my business visible on Google.");
const WA_MSG_PKG = (name) => encodeURIComponent("Hi! I'm interested in the " + name + " package for my business.");

/* ========================================
   STATE
   ======================================== */
let currentLang = localStorage.getItem('vk_lang') || 'en';
let showAfter = false;
let sliderTimerRef = null;
let manualToggleRef = false;

function getT() { return siteContent[currentLang]; }

/* ========================================
   LANGUAGE
   ======================================== */
function resolve(key) {
  const parts = key.split('.');
  let obj = getT();
  for (const p of parts) { if (obj && obj[p] !== undefined) obj = obj[p]; else return key; }
  return obj;
}

function toggleLang() {
  currentLang = currentLang === 'en' ? 'ml' : 'en';
  localStorage.setItem('vk_lang', currentLang);
  applyLang();
}

function applyLang() {
  if (currentLang === 'ml') document.body.classList.add('lang-ml-active');
  else document.body.classList.remove('lang-ml-active');
  var pill = document.getElementById('lang-toggle');
  if (currentLang === 'ml') pill.classList.add('active-ml');
  else pill.classList.remove('active-ml');
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var text = resolve(el.getAttribute('data-i18n'));
    if (typeof text === 'string') el.textContent = text;
  });
  renderPackages();
  renderSteps();
  renderTrustPoints();
  renderBizTypes();
  initCardTilt();
  initTooltips();
}

/* ========================================
   MOBILE MENU
   ======================================== */
function toggleMobileMenu() {
  var menu = document.getElementById('mobile-nav-menu');
  var btn = document.querySelector('.nav-mobile-toggle');
  menu.classList.toggle('open');
  btn.classList.toggle('open');
}
function closeMobileMenu() {
  document.getElementById('mobile-nav-menu').classList.remove('open');
  document.querySelector('.nav-mobile-toggle').classList.remove('open');
}

/* ========================================
   PACKAGES
   ======================================== */
function renderPackages() {
  var t = getT();
  var grid = document.getElementById('packages-grid');
  grid.innerHTML = t.services.packages.map(function(pkg, idx) {
    return '<a href="' + WA_BASE + WA_MSG_PKG(pkg.name) + '" target="_blank" rel="noopener noreferrer" class="clay-card-3d clay-card-link' + (idx === 1 ? ' popular-card' : '') + '" style="text-decoration:none;color:inherit;cursor:pointer">' +
      (idx === 1 ? '<span class="popular-badge">' + t.services.popularBadge + '</span>' : '') +
      '<div class="package-name">' + pkg.name + '</div>' +
      '<div class="package-price">' + pkg.price + '</div>' +
      '<p class="package-pitch">' + pkg.pitch + '</p>' +
      '<ul class="package-includes">' + pkg.includes.map(function(i){return '<li>' + i + '</li>';}).join('') + '</ul>' +
      '<span class="btn-clay-primary" style="font-size:0.85rem;padding:0.55rem 1rem">' + t.services.ctaButton + '</span>' +
    '</a>';
  }).join('');
}

/* ========================================
   STEPS
   ======================================== */
function renderSteps() {
  var t = getT();
  var grid = document.getElementById('steps-grid');
  grid.innerHTML = t.howItWorks.steps.map(function(step, idx) {
    return '<div class="step-card" data-step-idx="' + idx + '">' +
      '<div class="step-icon">' + step.icon + '</div>' +
      '<h3 class="step-title">' + step.title + '</h3>' +
      '<p class="step-desc">' + step.desc + '</p></div>';
  }).join('');
  document.querySelectorAll('.step-card').forEach(function(el) { stepObserver.observe(el); });
}

/* ========================================
   TRUST POINTS
   ======================================== */
function renderTrustPoints() {
  var t = getT();
  var icons = ['\ud83d\udcb0', '\ud83d\udee1\ufe0f', '\ud83d\udd10'];
  var container = document.getElementById('trust-points');
  container.innerHTML = t.whyItWorks.trustPoints.map(function(pt, i) {
    return '<div class="trust-point"><div class="trust-icon">' + icons[i] + '</div><p class="trust-text">' + pt + '</p></div>';
  }).join('');
}

/* ========================================
   BIZ TYPES
   ======================================== */
function renderBizTypes() {
  var t = getT();
  var sel = document.getElementById('biz-type-select');
  sel.innerHTML = '<option value="">Select...</option>' + t.contact.types.map(function(type) {
    return '<option value="' + type + '">' + type + '</option>';
  }).join('');
}

/* ========================================
   BEFORE/AFTER DEMO
   ======================================== */
function updateDemoPanes() {
  var before = document.getElementById('before-pane');
  var after = document.getElementById('after-pane');
  var btnBefore = document.getElementById('btn-before');
  var btnAfter = document.getElementById('btn-after');
  if (showAfter) {
    before.classList.add('hidden'); after.classList.add('active');
    btnBefore.classList.remove('active'); btnAfter.classList.add('active');
  } else {
    before.classList.remove('hidden'); after.classList.remove('active');
    btnBefore.classList.add('active'); btnAfter.classList.remove('active');
  }
}

function resetSlider() {
  if (sliderTimerRef) clearTimeout(sliderTimerRef);
  showAfter = false;
  manualToggleRef = false;
  updateDemoPanes();
  function tick() {
    sliderTimerRef = setTimeout(function() {
      showAfter = true; updateDemoPanes();
      sliderTimerRef = setTimeout(function() {
        showAfter = false; updateDemoPanes();
        if (!manualToggleRef) tick();
      }, 4000);
    }, 4000);
  }
  tick();
}

function handleDemoToggle(toAfter) {
  manualToggleRef = true;
  if (sliderTimerRef) clearTimeout(sliderTimerRef);
  showAfter = toAfter;
  updateDemoPanes();
  setTimeout(function() { manualToggleRef = false; resetSlider(); }, 12000);
}

/* ========================================
   CONTACT FORM
   ======================================== */
function handleFormSubmit(e) {
  e.preventDefault();
  var area = document.getElementById('contact-form-area');
  area.innerHTML = '<div class="form-success"><div class="success-checkmark">\u2713</div><p class="success-message">' + getT().contact.successMsg + '</p></div>';
}

/* ========================================
   3D CARD TILT
   ======================================== */
var cardTiltHandlers = [];
function initCardTilt() {
  cardTiltHandlers.forEach(function(h) {
    h.el.removeEventListener('mousemove', h.onMove);
    h.el.removeEventListener('mouseleave', h.onLeave);
  });
  cardTiltHandlers = [];
  document.querySelectorAll('.clay-card-link').forEach(function(card) {
    function onMove(e) {
      var rect = card.getBoundingClientRect();
      var x = e.clientX - rect.left, y = e.clientY - rect.top;
      var cx = rect.width / 2, cy = rect.height / 2;
      var rotX = ((y - cy) / cy) * -6, rotY = ((x - cx) / cx) * 6;
      card.style.transform = 'perspective(1000px) rotateX(' + rotX + 'deg) rotateY(' + rotY + 'deg) translateY(-5px)';
      card.style.boxShadow = 'var(--clay-card-hover)';
    }
    function onLeave() {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
      card.style.boxShadow = 'var(--clay-shadow-md)';
    }
    card.addEventListener('mousemove', onMove);
    card.addEventListener('mouseleave', onLeave);
    cardTiltHandlers.push({el:card, onMove:onMove, onLeave:onLeave});
  });
}

/* ========================================
   TOOLTIPS
   ======================================== */
var tooltipHandlers = [];
function initTooltips() {
  var tooltip = document.getElementById('clay-tooltip');
  tooltipHandlers.forEach(function(h) {
    h.el.removeEventListener('mouseenter', h.onEnter);
    h.el.removeEventListener('mouseleave', h.onLeave);
  });
  tooltipHandlers = [];
  if (currentLang !== 'en') return;
  document.querySelectorAll('[data-hover-ml]').forEach(function(el) {
    function onEnter() {
      if (currentLang !== 'en') return;
      var mlText = el.getAttribute('data-hover-ml');
      if (!mlText) return;
      tooltip.textContent = mlText;
      tooltip.classList.add('show');
      var rect = el.getBoundingClientRect();
      tooltip.style.top = (rect.top + window.scrollY - 50) + 'px';
      tooltip.style.left = (rect.left + rect.width / 2) + 'px';
    }
    function onLeave() { tooltip.classList.remove('show'); }
    el.addEventListener('mouseenter', onEnter);
    el.addEventListener('mouseleave', onLeave);
    tooltipHandlers.push({el:el, onEnter:onEnter, onLeave:onLeave});
  });
}

/* ========================================
   OBSERVERS
   ======================================== */
var stepObserver;
function initObservers() {
  var revealObs = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) { if (entry.isIntersecting) entry.target.classList.add('reveal-visible'); });
  }, {threshold:0.15});
  document.querySelectorAll('.reveal-on-scroll').forEach(function(el) { revealObs.observe(el); });

  stepObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        var idx = Number(entry.target.getAttribute('data-step-idx'));
        setTimeout(function() { entry.target.classList.add('visible'); }, idx * 300);
      }
    });
  }, {threshold:0.3});
  document.querySelectorAll('.step-card').forEach(function(el) { stepObserver.observe(el); });
}

/* ========================================
   SVG PATH DRAW
   ======================================== */
function initPathDraw() {
  var path = document.getElementById('workflow-path');
  if (!path) return;
  var len = path.getTotalLength();
  path.style.strokeDasharray = len + ' ' + len;
  path.style.strokeDashoffset = String(len);
  var section = document.getElementById('how-it-works');
  function onScroll() {
    if (!section) return;
    var rect = section.getBoundingClientRect();
    var sectionTop = rect.top + window.scrollY;
    var sectionHeight = rect.height;
    var scrollProgress = Math.max(0, Math.min(1, (window.scrollY - sectionTop + window.innerHeight * 0.6) / sectionHeight));
    var drawLen = len * scrollProgress * 1.4;
    path.style.strokeDashoffset = String(Math.max(0, len - drawLen));
  }
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();
}

/* ========================================
   STICKY NAV
   ======================================== */
function initStickyNav() {
  var nav = document.getElementById('sticky-nav');
  function onScroll() {
    if (window.scrollY > 100) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, {passive:true});
}

/* ========================================
   INIT
   ======================================== */
document.addEventListener('DOMContentLoaded', function() {
  applyLang();
  initObservers();
  initPathDraw();
  initStickyNav();
  resetSlider();
  document.getElementById('contact-form').addEventListener('submit', handleFormSubmit);
  window.addEventListener('resize', function() { if (window.innerWidth >= 768) closeMobileMenu(); });
});