import { Program } from "@/types";

export const programs: Program[] = [
  {
    id: "alcohol-recovery",
    image: "/images/programs/alcohol.jpeg",
    title: {
      en: "Alcohol Recovery",
      ne: "मद्यपान पुनर्स्थापना",
    },
    description: {
      en: "A comprehensive, medically supervised program designed to help individuals overcome alcohol dependency with compassion and clinical expertise.",
      ne: "मद्यपानको निर्भरताबाट मुक्त हुन सहयोग गर्ने करुणामय तथा चिकित्सकीय निगरानीमा सञ्चालन हुने समग्र कार्यक्रम।",
    },
    duration: {
      en: "3–6 months",
      ne: "३–६ महिना",
    },
    icon: "Heart",
    color: "from-purple-600 to-violet-500",
    features: [
      { en: "Medical detoxification", ne: "चिकित्सकीय डिटक्स" },
      { en: "Individual therapy", ne: "व्यक्तिगत थेरापी" },
      { en: "Group counseling", ne: "समूह परामर्श" },
      { en: "Relapse prevention", ne: "पुनःलत रोकथाम" },
      { en: "Family involvement", ne: "परिवारको सहभागिता" },
      { en: "Aftercare planning", ne: "उपचारपछिको योजना" },
    ],
  },

  {
    id: "drug-recovery",
    image: "/images/programs/drug.jpg",
    title: {
      en: "Drug Recovery",
      ne: "लागूपदार्थ पुनर्स्थापना",
    },
    description: {
      en: "Evidence-based treatment for substance use disorders, combining medical care, psychotherapy, and holistic healing modalities.",
      ne: "लागूपदार्थ दुरुपयोगको उपचारका लागि चिकित्सकीय सेवा, मनोचिकित्सा र समग्र उपचार पद्धतिको संयोजन।",
    },
    duration: {
      en: "3–6 months",
      ne: "३–६ महिना",
    },
    icon: "Shield",
    color: "from-violet-600 to-indigo-500",
    features: [
      { en: "Comprehensive assessment", ne: "समग्र मूल्याङ्कन" },
      { en: "Medically assisted treatment", ne: "चिकित्सकीय सहयोगसहित उपचार" },
      { en: "Cognitive behavioral therapy", ne: "संज्ञानात्मक व्यवहार थेरापी" },
      { en: "Mindfulness practices", ne: "माइन्डफुलनेस अभ्यास" },
      { en: "Nutrition counseling", ne: "पोषण परामर्श" },
      { en: "Life skills training", ne: "जीवन सीप तालिम" },
    ],
  },

  {
    id: "detox-programs",
    image: "/images/programs/medical.jpg",
    title: {
      en: "Medical Detox",
      ne: "चिकित्सकीय डिटक्स",
    },
    description: {
      en: "Safe, comfortable medically supervised detoxification to manage withdrawal symptoms with round-the-clock clinical support.",
      ne: "२४ घण्टा चिकित्सकीय निगरानीमा सुरक्षित तथा सहज डिटक्स कार्यक्रम।",
    },
    duration: {
      en: "10–20 days",
      ne: "१०–२० दिन",
    },
    icon: "Activity",
    color: "from-pink-600 to-rose-500",
    features: [
      { en: "24/7 medical monitoring", ne: "२४/७ चिकित्सकीय निगरानी" },
      { en: "Medication management", ne: "औषधि व्यवस्थापन" },
      { en: "Comfort-focused care", ne: "सहजतामुखी सेवा" },
      { en: "Nutritional support", ne: "पोषण सहयोग" },
      { en: "Psychological support", ne: "मनोवैज्ञानिक सहयोग" },
      { en: "Transition planning", ne: "स्थानान्तरण योजना" },
    ],
  },

  {
    id: "gambling-addiction",
    image: "/images/programs/glaming-addiction.webp",
    title: {
      en: "Gambling Addiction Recovery",
      ne: "जुवा लत पुनर्स्थापना",
    },
    description: {
      en: "Specialized support for individuals struggling with compulsive gambling through behavioral therapy, financial counseling, and structured relapse prevention.",
      ne: "जुवाको बाध्यकारी लतबाट मुक्त हुन व्यवहार थेरापी, वित्तीय परामर्श र पुनःलत रोकथाममा आधारित विशेष कार्यक्रम।",
    },
    duration: {
      en: "3–6 months",
      ne: "३–६ महिना",
    },
    icon: "Dice5",
    color: "from-amber-600 to-orange-500",
    features: [
      { en: "Behavioral assessment", ne: "व्यवहार मूल्याङ्कन" },
      { en: "Cognitive behavioral therapy", ne: "संज्ञानात्मक व्यवहार थेरापी" },
      { en: "Financial counseling", ne: "वित्तीय परामर्श" },
      { en: "Impulse control training", ne: "आवेग नियन्त्रण तालिम" },
      { en: "Relapse prevention", ne: "पुनःलत रोकथाम" },
      { en: "Family involvement", ne: "परिवारको सहभागिता" },
    ],
  },

  {
    id: "sex-addiction",
    image: "/images/programs/sex.webp",
    title: {
      en: "Sex Addiction Recovery",
      ne: "यौन लत पुनर्स्थापना",
    },
    description: {
      en: "Compassionate, confidential support for individuals facing sexual behavioral addiction through therapy, boundary-setting, and healthy relationship rebuilding.",
      ne: "यौन व्यवहारसम्बन्धी लतबाट मुक्त हुन थेरापी, सीमा निर्धारण र स्वस्थ सम्बन्ध पुनर्निर्माणमा आधारित गोपनीय सहयोग।",
    },
    duration: {
      en: "3–6 months",
      ne: "३–६ महिना",
    },
    icon: "ShieldCheck",
    color: "from-teal-600 to-cyan-500",
    features: [
      { en: "Confidential assessment", ne: "गोपनीय मूल्याङ्कन" },
      { en: "Individual therapy", ne: "व्यक्तिगत थेरापी" },
      { en: "Boundary-setting skills", ne: "सीमा निर्धारण सीप" },
      {
        en: "Healthy relationship rebuilding",
        ne: "स्वस्थ सम्बन्ध पुनर्निर्माण",
      },
      { en: "Relapse prevention", ne: "पुनःलत रोकथाम" },
      { en: "Family involvement", ne: "परिवारको सहभागिता" },
    ],
  },

  {
    id: "counseling-family-support",
    image: "/images/programs/family.jpg",
    title: {
      en: "Individual & Family Counseling",
      ne: "व्यक्तिगत तथा पारिवारिक परामर्श",
    },
    description: {
      en: "Professional counseling services for individuals and families to strengthen relationships, improve communication, and support long-term recovery.",
      ne: "व्यक्तिगत तथा पारिवारिक सम्बन्ध सुदृढ गर्दै दीर्घकालीन पुनर्स्थापनामा सहयोग गर्ने व्यावसायिक परामर्श सेवा।",
    },
    duration: {
      en: "Flexible",
      ne: "लचिलो",
    },
    icon: "Users",
    color: "from-indigo-500 to-purple-500",
    features: [
      { en: "Individual counseling", ne: "व्यक्तिगत परामर्श" },
      { en: "Family therapy sessions", ne: "पारिवारिक थेरापी सत्र" },
      { en: "Communication skills", ne: "सञ्चार सीप" },
      { en: "Support groups", ne: "सहयोग समूह" },
      { en: "Goal setting", ne: "लक्ष्य निर्धारण" },
      { en: "Aftercare guidance", ne: "उपचारपछिको मार्गदर्शन" },
    ],
  },
];
