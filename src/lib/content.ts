// ─────────────────────────────────────────────────────────────
// SREE AMBAALS MATRIC HR. SEC. SCHOOL — WEBSITE CONTENT
// Edit text here to update any section of the site
// ─────────────────────────────────────────────────────────────

export const SITE = {
  name: "Sree Ambaals Matric HR. Sec. School",
  shortName: "Sree Ambaals",
  tagline: "உலகத்தரம் வாய்ந்த கல்வி உள்ளூர் சூழலில்",
  description:
    "Sree Ambaals Matric HR. Sec. School, Padalur, offers a holistic learning environment where academic excellence meets co-curricular achievement. Admissions open for the new academic year.",
  url: "https://sreeambaals-padalur.vercel.app",
  logo: "/logo.jpg",
  email: "sreeambaalsschool@gmail.com",
  phone: "+91 95007 77333",
  address: "Sree Ambaals Matric HR. Sec. School, Padalur, Lalgudi Taluk, Trichy District, Tamil Nadu — 621 715",
  social: {
    instagram: "https://instagram.com/sreeambaals",
    youtube: "https://youtube.com/@sreeambaals",
    facebook: "https://facebook.com/sreeambaals",
    whatsapp: "https://wa.me/919500777333",
  },
  keywords: [
    "Sree Ambaals Matric School Padalur",
    "best matric school Trichy",
    "schools in Padalur",
    "CBSE matric school Tamil Nadu",
    "top school Lalgudi Taluk",
    "Sree Ambaals admissions",
    "school events Padalur",
  ],
} as const;

export const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const HERO = {
  headline: "Where Every Child Discovers Excellence",
  motto: "பெரிதினும் பெரிது கேள்",
  subheadline:
    "A trusted Matric Higher Secondary School in Padalur shaping confident learners through strong academics, values, sports, arts, and community events.",
  ctaPrimary: "Explore Our School",
  ctaSecondary: "Admissions Enquiry",
  stats: [
    { value: "25+", label: "Years of Excellence" },
    { value: "3000+", label: "Students" },
    { value: "100%", label: "Board Results" },
  ],
} as const;

export const FEATURES = [
  {
    title: "Academic Excellence",
    body: "Rigorous Matric and Higher Secondary curriculum delivered by experienced faculty focused on conceptual clarity and board success.",
    icon: "School",
  },
  {
    title: "Holistic Development",
    body: "Yoga, sports, arts, environmental clubs, and leadership programs that nurture confident, well-rounded individuals.",
    icon: "Heart",
  },
  {
    title: "Parent Partnership",
    body: "Transparent communication, regular progress updates, and open houses so parents stay connected to their child's journey.",
    icon: "Users",
  },
  {
    title: "Safe Campus",
    body: "Spacious classrooms, monitored premises, and caring staff create a secure environment where children thrive.",
    icon: "ShieldCheck",
  },
] as const;

export const EVENTS = [
  {
    id: "international-yoga-day",
    title: "International Yoga Day",
    category: "Wellness",
    shortDesc:
      "Hundreds of students and staff come together for guided yoga, breathing exercises, and mindfulness sessions.",
    fullDesc:
      "Every year on June 21st, Sree Ambaals celebrates International Yoga Day with mass yoga demonstrations, pranayama workshops, and talks on healthy living. The event brings together students, teachers, and invited guests to promote physical fitness and mental well-being as part of everyday school life.",
    audience: "All Grades",
    duration: "Annual Event",
    image: "/uploads/photo_01.jpg",
    highlights: [
      "Mass yoga demonstration by students",
      "Guest sessions by wellness experts",
      "Pranayama and meditation workshops",
      "Awareness on healthy lifestyle habits",
    ],
    benefits: [
      "Improves focus and fitness",
      "Reduces exam stress",
      "Builds discipline and mindfulness",
    ],
  },
  {
    id: "environment-clean-india-drive",
    title: "Environment & Clean India Drive",
    category: "Community",
    shortDesc:
      "Students take active part in cleanliness campaigns and environmental action beyond the classroom.",
    fullDesc:
      "Our Environment and Clean India initiatives teach students the value of sustainability through hands-on activities. From campus clean-ups to community drives and tree planting, children learn that small actions create a cleaner, greener future for everyone.",
    audience: "All Grades",
    duration: "Annual / Monthly Drives",
    image: "/uploads/photo_05.jpg",
    highlights: [
      "Community clean-up drives",
      "Tree and sapling plantation",
      "Awareness rallies and skits",
      "Waste segregation projects",
    ],
    benefits: [
      "Builds civic responsibility",
      "Encourages teamwork",
      "Creates real community impact",
    ],
  },
  {
    id: "awards-achievements",
    title: "Awards & Achievements",
    category: "Recognition",
    shortDesc:
      "Celebrating student and school excellence at state, national, and international platforms.",
    fullDesc:
      "Sree Ambaals takes pride in the achievements of its students in academics, sports, arts, and co-curricular competitions. Our annual awards ceremonies and felicitation events honor top performers, inspire peers, and recognize the dedication of teachers and families.",
    audience: "All Grades",
    duration: "Throughout the Year",
    image: "/uploads/photo_07.jpg",
    highlights: [
      "Academic toppers felicitation",
      "Sports and arts achievers honoured",
      "Regional and national recognitions",
      "Scholarship announcements",
    ],
    benefits: [
      "Motivates students to excel",
      "Builds self-confidence",
      "Strengthens school pride",
    ],
  },
  {
    id: "silver-jubilee",
    title: "Silver Jubilee Celebration",
    category: "Milestone",
    shortDesc:
      "25 years of nurturing young minds — a landmark celebration of our school legacy.",
    fullDesc:
      "The Silver Jubilee marks 25 glorious years of Sree Ambaals Matric HR. Sec. School. The celebration brings together alumni, staff, students, and parents to reflect on our journey, honor our founders, and renew our commitment to quality education and community service.",
    audience: "School Community",
    duration: "Special Event",
    image: "/uploads/photo_10.jpg",
    highlights: [
      "Cultural programs by students",
      "Alumni reunion and speeches",
      "Founders and staff felicitation",
      "Special exhibitions and competitions",
    ],
    benefits: [
      "Builds legacy and belonging",
      "Connects generations",
      "Inspires future milestones",
    ],
  },
  {
    id: "guest-visits",
    title: "Guest Visits & Seminars",
    category: "Awareness",
    shortDesc:
      "Police officials, educators, and community leaders visit to guide and inspire students.",
    fullDesc:
      "We regularly invite police officers, educators, medical professionals, and social leaders to interact with our students. These visits provide practical knowledge on road safety, discipline, career planning, and social responsibility beyond textbook learning.",
    audience: "Middle & High School",
    duration: "Quarterly",
    image: "/uploads/photo_03.jpg",
    highlights: [
      "Safety awareness sessions",
      "Career guidance talks",
      "Interactive Q&A with guests",
      "Community role-model interactions",
    ],
    benefits: [
      "Broadens student perspective",
      "Reinforces values and discipline",
      "Connects school to real world",
    ],
  },
  {
    id: "sports-arts",
    title: "Sports, Arts & Cultural Fests",
    category: "Co-Curricular",
    shortDesc:
      "Annual competitions and celebrations where every student gets a stage to shine.",
    fullDesc:
      "From sports meets to dance, music, drama, and art competitions, our co-curricular calendar is designed to discover and develop every child's talent. These events build teamwork, creativity, and confidence in a fun, supportive atmosphere.",
    audience: "All Grades",
    duration: "Annual",
    image: "/uploads/photo_15.jpg",
    highlights: [
      "Inter-house sports tournaments",
      "Dance, music, and drama performances",
      "Art and craft exhibitions",
      "Annual day celebrations",
    ],
    benefits: [
      "Develops creativity and talent",
      "Encourages healthy competition",
      "Builds teamwork and confidence",
    ],
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "The teachers at Sree Ambaals truly care about every child. My son has grown not just in marks, but in confidence and discipline.",
    name: "Mrs. Lakshmi R.",
    role: "Parent, Padalur",
  },
  {
    quote:
      "I am proud to be part of a school that balances academic rigor with values, yoga, and community service.",
    name: "Mr. K. Rajasekar",
    role: "Faculty Member",
  },
  {
    quote:
      "Winning the district science competition gave me the confidence to dream bigger. Thank you to my teachers for believing in me.",
    name: "Harini S.",
    role: "Grade 10 Student",
  },
  {
    quote:
      "The clean India drive taught my daughter responsibility. She now reminds our family about waste segregation every day.",
    name: "Mr. Velmurugan",
    role: "Parent, Trichy",
  },
] as const;

export const FAQ = [
  {
    q: "Which boards does Sree Ambaals follow?",
    a: "We offer the Matriculation curriculum for primary and middle school and the State Board syllabus for Higher Secondary classes, preparing students for board exams and competitive entrances.",
  },
  {
    q: "What co-curricular activities are available?",
    a: "Students participate in yoga, sports, arts, music, dance, environmental clubs, science exhibitions, debate, and annual cultural fests.",
  },
  {
    q: "How can I apply for admission?",
    a: "You can visit our campus, call our admissions desk, or fill out the enquiry form on the Contact page. Our team will guide you through the process.",
  },
  {
    q: "Is transportation available?",
    a: "Yes, we operate a fleet of school buses covering Padalur and nearby areas with trained drivers and attenders for student safety.",
  },
] as const;

export const BLOG_POSTS = [
  {
    slug: "why-yoga-matters-for-students",
    title: "Why Yoga Matters for Students Today",
    excerpt:
      "Discover how regular yoga practice improves concentration, reduces stress, and builds discipline in school-aged children.",
    date: "2026-01-15",
    readTime: "4 min read",
    image: "/uploads/photo_01.jpg",
  },
  {
    slug: "how-parents-can-support-learning-at-home",
    title: "How Parents Can Support Learning at Home",
    excerpt:
      "Simple routines and conversation habits that help children stay motivated, organized, and curious beyond school hours.",
    date: "2026-01-08",
    readTime: "5 min read",
    image: "/uploads/photo_16.jpg",
  },
  {
    slug: "teaching-environmental-responsibility",
    title: "Teaching Environmental Responsibility in School",
    excerpt:
      "How clean-up drives, gardening, and waste-awareness projects shape responsible future citizens.",
    date: "2025-12-20",
    readTime: "4 min read",
    image: "/uploads/photo_06.jpg",
  },
] as const;

export const GALLERY = [
  { src: "/uploads/photo_15.jpg", alt: "Aerial view of Sree Ambaals school assembly ground" },
  { src: "/uploads/photo_01.jpg", alt: "International Yoga Day celebration with students" },
  { src: "/uploads/photo_03.jpg", alt: "Guest seminar at Sree Ambaals school" },
  { src: "/uploads/photo_05.jpg", alt: "Students participating in environment clean drive" },
  { src: "/uploads/photo_06.jpg", alt: "Community clean India campaign group photo" },
  { src: "/uploads/photo_07.jpg", alt: "Student receiving award from management" },
  { src: "/uploads/photo_09.jpg", alt: "Top achievers felicitated by school management" },
  { src: "/uploads/photo_08.jpg", alt: "Sree Ambaals school building at sunset" },
  { src: "/uploads/photo_11.jpg", alt: "Yoga Day chief guest honored on stage" },
  { src: "/uploads/photo_12.jpg", alt: "School correspondent portrait" },
  { src: "/uploads/photo_14.jpg", alt: "Principal at work desk" },
  { src: "/uploads/photo_13.jpg", alt: "Teacher on school campus" },
  { src: "/uploads/photo_04.jpg", alt: "School representatives receiving education award" },
  { src: "/uploads/photo_18.jpg", alt: "Management with guest police officers" },
  { src: "/uploads/photo_02.jpg", alt: "Sree Ambaals school official logo" },
  { src: "/uploads/photo_10.jpg", alt: "Sree Ambaals Silver Jubilee emblem" },
] as const;

export const VIDEOS = [
  { src: "/uploads/video_1.mp4", title: "School Highlights" },
  { src: "/uploads/video_2.mp4", title: "Yoga Day Event" },
  { src: "/uploads/video_3.mp4", title: "Campus & Activities" },
  { src: "/uploads/video_4.mp4", title: "Annual Celebrations" },
] as const;
