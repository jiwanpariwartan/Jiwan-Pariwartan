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
      en: "30–90 days",
      ne: "३०–९० दिन",
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
      en: "45–120 days",
      ne: "४५–१२० दिन",
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
    id: "mental-wellness",
    image: "/images/programs/mental.jpg",
    title: {
      en: "Mental Wellness",
      ne: "मानसिक स्वास्थ्य",
    },
    description: {
      en: "Holistic mental health support addressing depression, anxiety, trauma, and co-occurring disorders through integrated therapeutic approaches.",
      ne: "डिप्रेसन, चिन्ता, आघात तथा अन्य मानसिक समस्याका लागि समग्र मानसिक स्वास्थ्य सहयोग।",
    },
    duration: {
      en: "Ongoing",
      ne: "निरन्तर",
    },
    icon: "Brain",
    color: "from-indigo-600 to-purple-500",
    features: [
      { en: "Psychiatric evaluation", ne: "मनोचिकित्सकीय मूल्याङ्कन" },
      { en: "Trauma-informed care", ne: "आघात-सम्बन्धी उपचार" },
      { en: "EMDR therapy", ne: "EMDR थेरापी" },
      { en: "Meditation & yoga", ne: "ध्यान तथा योग" },
      { en: "Art therapy", ne: "कला थेरापी" },
      { en: "Peer support groups", ne: "सहकर्मी सहयोग समूह" },
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
      en: "7–21 days",
      ne: "७–२१ दिन",
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
    id: "family-support",
    image: "/images/programs/family.jpg",
    title: {
      en: "Family Support",
      ne: "पारिवारिक सहयोग",
    },
    description: {
      en: "Healing extends beyond the individual. Our family program helps loved ones understand addiction and rebuild healthy relationships.",
      ne: "हाम्रो पारिवारिक कार्यक्रमले परिवारलाई लतसम्बन्धी ज्ञान दिई स्वस्थ सम्बन्ध पुनर्निर्माण गर्न सहयोग गर्छ।",
    },
    duration: {
      en: "Ongoing",
      ne: "निरन्तर",
    },
    icon: "Users",
    color: "from-amber-600 to-orange-500",
    features: [
      { en: "Family therapy sessions", ne: "पारिवारिक थेरापी सत्र" },
      { en: "Education workshops", ne: "शैक्षिक कार्यशाला" },
      { en: "Communication skills", ne: "सञ्चार सीप" },
      { en: "Boundary setting", ne: "सीमा निर्धारण" },
      { en: "Support groups", ne: "सहयोग समूह" },
      { en: "Aftercare resources", ne: "उपचारपछिका स्रोतहरू" },
    ],
  },

  {
    id: "counseling",
    image: "/images/programs/individual.jpg",
    title: {
      en: "Individual Counseling",
      ne: "व्यक्तिगत परामर्श",
    },
    description: {
      en: "One-on-one therapeutic sessions with certified addiction counselors providing personalized guidance and emotional support.",
      ne: "प्रमाणित परामर्शदातासँग व्यक्तिगत मार्गदर्शन तथा भावनात्मक सहयोग प्रदान गर्ने सत्रहरू।",
    },
    duration: {
      en: "Flexible",
      ne: "लचिलो",
    },
    icon: "MessageCircle",
    color: "from-teal-600 to-cyan-500",
    features: [
      { en: "Licensed therapists", ne: "इजाजतप्राप्त थेरापिस्ट" },
      { en: "Personalized treatment", ne: "व्यक्तिगत उपचार योजना" },
      { en: "Trauma processing", ne: "आघात व्यवस्थापन" },
      { en: "Grief counseling", ne: "शोक परामर्श" },
      { en: "Motivational interviewing", ne: "प्रेरणात्मक अन्तर्वार्ता" },
      { en: "Goal setting", ne: "लक्ष्य निर्धारण" },
    ],
  },
];
