export const translations = {
  header: {
    nav: {
      home: { en: "Home", ne: "घर" },
      about: { en: "About", ne: "हाम्रो बारेमा" },
      programs: { en: "Programs", ne: "कार्यक्रमहरू" },
      gallery: { en: "Gallery", ne: "ग्यालरी" },
      contact: { en: "Contact", ne: "सम्पर्क" },
    },
    cta: { en: "Get Help Now", ne: "सहायता लिनुहोस्" },
    logotTitle: { en: "Jiwan Pariwartan", ne: "जीवन परिवर्तन" },
    logoSubtitle: { en: "Rehabilitation Center", ne: "पुनर्स्थापना केन्द्र" },
    phone: { en: "+977-9805667436", ne: "+९७७-९८०५६६७४३६" },
  },

  hero: {
    badge: {
      en: "Rehabilitation & Recovery Center · Nepal",
      ne: "पुनर्स्थापना र पुनरुद्धार केन्द्र · नेपाल",
    },
    slides: [
      {
        headline: { en: "A New Beginning", ne: "नयाँ शुरुआत" },
        sub: { en: "Awaits You", ne: "तपाईंको प्रतीक्षामा छ" },
        description: {
          en: "Find strength, hope, and healing at Nepal's most compassionate rehabilitation center. Every journey to recovery starts with a single, courageous step.",
          ne: "नेपालको सबैभन्दा करुणामय पुनर्स्थापना केन्द्रमा शक्ति, आशा र उपचार पाउनुहोस्। पुनरुद्धारको हरेक यात्रा एउटै साहसी कदमबाट सुरु हुन्छ।",
        },
      },
      {
        headline: { en: "Heal Your Mind,", ne: "आफ्नो मन निको पार्नुस्," },
        sub: { en: "Reclaim Your Life", ne: "आफ्नो जीवन फिर्ता लिनुस्" },
        description: {
          en: "Our evidence-based programs blend clinical expertise with holistic wellness to guide you toward lasting sobriety and mental wellbeing.",
          ne: "हाम्रा प्रमाण-आधारित कार्यक्रमहरूले दीर्घकालीन स्वस्थता र मानसिक कल्याणतर्फ मार्गदर्शन गर्न नैदानिक विशेषज्ञता र समग्र स्वास्थ्यलाई मिलाउँछन्।",
        },
      },
      {
        headline: { en: "You Are Not", ne: "तपाईं एक्लै" },
        sub: { en: "Alone in This", ne: "हुनुहुन्न" },
        description: {
          en: "Our team of compassionate professionals walks beside you every step of the way — from detox through recovery and beyond.",
          ne: "हाम्रो करुणामय पेशेवरहरूको टोली तपाईंको हरेक कदममा साथमा छ — डिटक्सदेखि पुनरुद्धार र त्यसभन्दा पनि परसम्म।",
        },
      },
    ],
    floatingCards: [
      {
        label: { en: "Safe & Private", ne: "सुरक्षित र गोप्य" },
        sub: { en: "Confidential care", ne: "गोपनीय सेवा" },
      },
      {
        label: { en: "2000+ Recovered", ne: "२०००+ ले पुनरुद्धार गरे" },
        sub: { en: "Lives transformed", ne: "जीवन परिवर्तन भयो" },
      },
      {
        label: { en: "Nepali & Western Support", ne: "नेपाली र पश्चिमी सहयोग" },
        sub: {
          en: "Support from Melbourne & Nepal",
          ne: "मेलबर्न र नेपालबाट सहयोग",
        },
      },
      {
        label: { en: "Expert Team", ne: "विशेषज्ञ टोली" },
        sub: { en: "Certified specialists", ne: "प्रमाणित विशेषज्ञहरू" },
      },
    ],
    whyChooseUs: {
      title: { en: "Why Choose Us", ne: "हामीलाई किन छान्ने" },
      items: [
        { en: "Evidence-based treatment", ne: "प्रमाण-आधारित उपचार" },
        { en: "Holistic healing approach", ne: "समग्र उपचार पद्धति" },
        { en: "Family-centered care", ne: "परिवार-केन्द्रित सेवा" },
        {
          en: "Aftercare & alumni support",
          ne: "पश्चात सेवा र पूर्व-विद्यार्थी सहयोग",
        },
      ],
    },
    ctaPrimary: {
      en: "Begin Your Recovery",
      ne: "आफ्नो पुनरुद्धार सुरु गर्नुहोस्",
    },
    ctaPhone: {
      en: "Call 24/7 Helpline",
      ne: "२४/७ हेल्पलाइनमा सम्पर्क गर्नुहोस्",
    },
    scrollCue: {
      en: "Scroll to explore",
      ne: "अन्वेषण गर्न स्क्रोल गर्नुहोस्",
    },
  },
} as const;

export type TranslationKey = typeof translations;
