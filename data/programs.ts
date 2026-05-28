import type { Program } from "@/types";

export const programs: Program[] = [
  {
    id: "alcohol-recovery",
    title: "Alcohol Recovery",
    description:
      "A comprehensive, medically supervised program designed to help individuals overcome alcohol dependency with compassion and clinical expertise.",
    duration: "30–90 days",
    icon: "Heart",
    color: "from-purple-600 to-violet-500",
    features: [
      "Medical detoxification",
      "Individual therapy",
      "Group counseling",
      "Relapse prevention",
      "Family involvement",
      "Aftercare planning",
    ],
  },
  {
    id: "drug-recovery",
    title: "Drug Recovery",
    description:
      "Evidence-based treatment for substance use disorders, combining medical care, psychotherapy, and holistic healing modalities.",
    duration: "45–120 days",
    icon: "Shield",
    color: "from-violet-600 to-indigo-500",
    features: [
      "Comprehensive assessment",
      "Medically assisted treatment",
      "Cognitive behavioral therapy",
      "Mindfulness practices",
      "Nutrition counseling",
      "Life skills training",
    ],
  },
  {
    id: "mental-wellness",
    title: "Mental Wellness",
    description:
      "Holistic mental health support addressing depression, anxiety, trauma, and co-occurring disorders through integrated therapeutic approaches.",
    duration: "Ongoing",
    icon: "Brain",
    color: "from-indigo-600 to-purple-500",
    features: [
      "Psychiatric evaluation",
      "Trauma-informed care",
      "EMDR therapy",
      "Meditation & yoga",
      "Art therapy",
      "Peer support groups",
    ],
  },
  {
    id: "detox-programs",
    title: "Medical Detox",
    description:
      "Safe, comfortable medically supervised detoxification to manage withdrawal symptoms with round-the-clock clinical support.",
    duration: "7–21 days",
    icon: "Activity",
    color: "from-pink-600 to-rose-500",
    features: [
      "24/7 medical monitoring",
      "Medication management",
      "Comfort-focused care",
      "Nutritional support",
      "Psychological support",
      "Transition planning",
    ],
  },
  {
    id: "family-support",
    title: "Family Support",
    description:
      "Healing extends beyond the individual. Our family program helps loved ones understand addiction and rebuild healthy relationships.",
    duration: "Ongoing",
    icon: "Users",
    color: "from-amber-600 to-orange-500",
    features: [
      "Family therapy sessions",
      "Education workshops",
      "Communication skills",
      "Boundary setting",
      "Support groups",
      "Aftercare resources",
    ],
  },
  {
    id: "counseling",
    title: "Individual Counseling",
    description:
      "One-on-one therapeutic sessions with certified addiction counselors providing personalized guidance and emotional support.",
    duration: "Flexible",
    icon: "MessageCircle",
    color: "from-teal-600 to-cyan-500",
    features: [
      "Licensed therapists",
      "Personalized treatment",
      "Trauma processing",
      "Grief counseling",
      "Motivational interviewing",
      "Goal setting",
    ],
  },
];
