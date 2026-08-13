// ─────────────────────────────────────────────────────────────────
// RAINBOW GROUP — Central Site Data
// Category A = verified public info | Category C = placeholder (marked)
// ─────────────────────────────────────────────────────────────────

export const siteConfig = {
  name: "Rainbow Group of Companies",
  tagline: "Building institutions. Nurturing generations.",
  location: "Thane, Maharashtra",
  established: "2 Decades", // Category A — stated on public site
  address: {
    line1: "2nd Floor, Chestnut Plaza",
    line2: "Opp. Edenwoods, Khewra Cir Marg",
    line3: "Manpada, Thane (W) – 400610",
    full: "2nd Floor, Chestnut Plaza, Opp. Edenwoods, Khewra Cir Marg, Manpada, Thane (W) – 400610",
  },
  phone: {
    admissions: "+91 82915 68972",
    jobs: "+91 87799 81827",
  },
  hours: "Monday – Saturday, 9:00 am – 6:00 pm",
  linkedin: "https://in.linkedin.com/company/rainbow-group-of-companies-india",
  whatsapp: "+91 82915 68972", // using admissions number as default
};

export const stats = [
  { value: "50,000+", label: "Learners Empowered" },
  { value: "500+", label: "Employees" },
  { value: "20+", label: "Years of Excellence" },
  { value: "Pan-Thane", label: "Multiple Branches" },
];

export const pillars = [
  {
    icon: "BookOpen",
    title: "Excellence in Learning",
    subtitle: "Academics",
    description:
      "Internationally aligned curricula that challenge and inspire every learner at every stage.",
  },
  {
    icon: "Sprout",
    title: "Holistic Growth",
    subtitle: "Development",
    description:
      "Nurturing social, emotional, and intellectual development in equal measure.",
  },
  {
    icon: "Heart",
    title: "Trust & Transparency",
    subtitle: "Community",
    description:
      "Built on open partnerships between parents, educators, and students.",
  },
  {
    icon: "Compass",
    title: "Future-Ready Minds",
    subtitle: "Vision",
    description:
      "Preparing students for a rapidly evolving world with 21st-century skills and values.",
  },
];

export const institutions = [
  {
    id: "rainbow-international-school",
    name: "Rainbow International School",
    shortName: "RIS",
    badge: "K–12  ·  International School",
    tagline: "Where curiosity meets excellence.",
    description:
      "A premier K–12 institution with an internationally benchmarked curriculum focused on holistic development, critical thinking, and global citizenship within a vibrant campus.",
    longDescription:
      "Rainbow International School stands as a testament to what education can be when rigour meets warmth. Our internationally aligned curriculum challenges students to think deeply, communicate confidently, and engage meaningfully with the world. From early primary through senior secondary, every stage is designed to nurture the unique potential within each child.",
    href: "/institutions/rainbow-international-school",
    externalUrl: null,
    image: null, // [Client to supply: high-res campus photography]
    color: "navy" as const,
    ageRange: "Grades 1 – 12",
    highlights: [
      {
        title: "International Curriculum",
        description: "[Curriculum details to be provided by client — e.g., CBSE / IB / IGCSE alignment]",
      },
      {
        title: "Experienced Faculty",
        description: "A team of dedicated educators committed to inspiring every learner.",
      },
      {
        title: "Modern Infrastructure",
        description: "[Campus facilities details to be provided by client]",
      },
      {
        title: "Holistic Development",
        description: "Sports, arts, leadership, and community activities alongside academics.",
      },
    ],
    admissionsNote: "Admissions are open for the upcoming academic year. Contact our team to schedule a campus visit and learn more about our enrolment process.",
  },
  {
    id: "rainbow-preschool-international",
    name: "Rainbow Preschool International",
    shortName: "RPI",
    badge: "Early Years  ·  Preschool",
    tagline: "A joyful start to a lifelong journey.",
    description:
      "Designed for the earliest and most critical years of learning: a joyful, play-based foundation where children discover, grow, and develop a lifelong love for learning.",
    longDescription:
      "At Rainbow Preschool International, we understand that the first five years of a child's life are the most formative. Our play-based, child-centred approach creates an environment of warmth, wonder, and structured discovery — where every child feels safe to explore, ask questions, and grow at their own pace.",
    href: "/institutions/rainbow-preschool-international",
    externalUrl: null,
    image: null, // [Client to supply: classroom photography]
    color: "coral" as const,
    ageRange: "Ages 1.5 – 6 years",
    highlights: [
      {
        title: "Play-Based Learning",
        description: "Structured discovery through play, creativity, and hands-on exploration.",
      },
      {
        title: "Trained Early-Childhood Educators",
        description: "Specialists in early-years development and child-centred pedagogy.",
      },
      {
        title: "Safe & Nurturing Environment",
        description: "[Safety features and environment details to be provided by client]",
      },
      {
        title: "Bilingual Exposure",
        description: "[Language programme details to be provided by client]",
      },
    ],
    admissionsNote: "We welcome children from 1.5 years. Enrolment is rolling — reach out to schedule a school tour and meet our early-years team.",
  },
];

// Category C placeholders — replace with real content when client provides
export const leadership = [
  {
    name: "[Leadership information to be provided by client]",
    role: "[Founder / Chairman]",
    bio: "[Founder biography and vision statement to be provided by client.]",
    image: null,
  },
  {
    name: "[Leadership information to be provided by client]",
    role: "[Managing Director / CEO]",
    bio: "[Director biography to be provided by client.]",
    image: null,
  },
];

export const testimonials = [
  {
    quote: "[Parent testimonial to be provided by client]",
    author: "[Parent Name]",
    detail: "[Child's year group], [Institution name]",
    image: null,
  },
  {
    quote: "[Parent testimonial to be provided by client]",
    author: "[Parent Name]",
    detail: "[Child's year group], [Institution name]",
    image: null,
  },
  {
    quote: "[Parent testimonial to be provided by client]",
    author: "[Parent Name]",
    detail: "[Child's year group], [Institution name]",
    image: null,
  },
];

export const careers = {
  heading: "Shape the future with Rainbow",
  intro:
    "We are always looking for passionate educators, administrators, and support professionals who believe in the power of quality education. If you are driven by purpose and want to make a lasting difference in young lives, we would love to hear from you.",
  openings: [
    // [Client to supply: open job listings]
  ],
  linkedin: "https://in.linkedin.com/company/rainbow-group-of-companies-india",
};
