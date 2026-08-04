import { TestimonialVideo, DoctorTestimonial, WorldCard, StatItem } from '../types'

export const HERO_CONTENT = {
  announcementBadge: "✨ Schedule for 2024 / Sessions Available",
  heading: "Herschel Lazaroff is a renowned healer",
  subheading: "who helps people overcome deep-rooted challenges, improve their well-being, and unlock their full potential through his unique energy-based approach.",
  ctaPrimary: "Book A Session",
  ctaSecondary: "Watch Videos",
  portraitImage: "/images/ISFeY2zA.jpeg",
  demoVideo: {
    title: "Healing Demonstration",
    duration: "Watch 5 Mins",
    previewImage: "/images/ISFeY2zA.jpeg"
  }
}

export const ABOUT_CONTENT = {
  tag: "ABOUT",
  headline: "Herschel Lazaroff is a one-of-a-kind healer helping people reach their fullest potential.",
  ctaText: "Learn More",
  leftPhoto: "/images/We2YVd6A.jpeg",
  leftPhotoCaption: "Herschel inspiring community gatherings",
  rightPhoto: "/images/aa1Z12IQ.jpeg",
  rightPhotoCaption: "Spreading kindness, laughter, and unconditional joy",
  fullBio: `For over three decades, Herschel Lazaroff has dedicated his life to removing the energetic blockages that hold individuals back from vibrant health, emotional serenity, and spiritual clarity. 

Combining ancient Kabbalistic wisdom with profound energetic intuition, Herschel works with people from all walks of life—from high-performing executives and medical doctors to individuals suffering from chronic physical or emotional pain.

His sessions are non-invasive, deeply transformative, and available in person in Monsey, NY, as well as remotely across the globe via Zoom and phone.`
}

export const STATS_CONTENT: StatItem[] = [
  {
    id: "years",
    value: "30+",
    label: "Years",
    sublabel: "In Practice"
  },
  {
    id: "in-person",
    value: "1,000+",
    label: "Sessions Guided",
    sublabel: "In Person"
  },
  {
    id: "online",
    value: "2300+",
    label: "Sessions Guided",
    sublabel: "Online"
  },
  {
    id: "screen-time",
    value: "4 h",
    label: "of screen time",
    sublabel: "on average 24/5"
  }
]

export const WORLD_CARDS: WorldCard[] = [
  {
    id: "soul-science",
    title: "Soul & Science",
    image: "/images/soul-science.png",
    tag: "METHODOLOGY",
    description: "Bridging ancient metaphysical wisdom with modern physiological awareness.",
    detailedText: "Herschel's methodology views the human being as an integrated whole of soul (Neshamah), energy pathways, and physical anatomy. By identifying vibrational friction before it manifests as physical or mental distress, he restores harmonic flow throughout the nervous system and aura."
  },
  {
    id: "client-stories",
    title: "Client Stories",
    image: "/images/client-stories.png",
    tag: "CASE STUDIES",
    description: "Heartfelt accounts of physical recovery, emotional rebirth, and spiritual breakthrough.",
    detailedText: "Discover how thousands of clients experienced immediate clarity, resolved chronic pain, unlocked creative vitality, and found profound inner peace after just one or two sessions with Herschel."
  },
  {
    id: "videos",
    title: "Videos",
    image: "/images/videos-ring.png",
    tag: "WATCH & LEARN",
    description: "Step-by-step energy teachings, recorded live demonstrations, and guided meditations.",
    detailedText: "Immerse yourself in Herschel's library of video teachings, practical breathing alignments, and recorded sessions showing the instant shifts that occur when energetic blockages dissolve."
  },
  {
    id: "meet-herschel",
    title: "Meet Herschel",
    image: "/images/MmmHMMww.jpeg",
    tag: "THE HEALER",
    description: "A lifelong journey of compassion, selfless dedication, and spiritual mastery.",
    detailedText: "Born into a tradition of deep spiritual service, Herschel has spent over thirty years traveling the world, offering his gift of healing to anyone in need. His mission is simple: to make sad people happy, happy people happier, and awesome people phenomenal."
  }
]

export const VIDEO_TESTIMONIALS: TestimonialVideo[] = [
  {
    id: "video-1",
    title: "The auto silence. More...",
    subtitle: "A silent space where inner noise ceases and natural healing commences.",
    image: "/images/MmmHMMww.jpeg",
    duration: "4:12",
    category: "Spiritual Healing"
  },
  {
    id: "video-2",
    title: "Peace upon all home — preserve your prep, until you choose otherwise.",
    subtitle: "Cultivating sanctuary in the home through energetic alignment and conscious presence.",
    image: "/images/UC4KZijt.jpeg",
    duration: "6:45",
    category: "Family & Peace"
  },
  {
    id: "video-3",
    title: "Evenings without the fever: The scroll walk when your night begins.",
    subtitle: "Releasing accumulated tension before sleep to wake up completely renewed.",
    image: "/images/We2YVd6A.jpeg",
    duration: "5:30",
    category: "Night Routine"
  },
  {
    id: "video-4",
    title: "Course video open. Best result — the heavy days won't impact you still.",
    subtitle: "Building emotional resilience against high-pressure environments and unexpected stress.",
    image: "/images/aa1Z12IQ.jpeg",
    duration: "8:15",
    category: "Client Review"
  },
  {
    id: "video-5",
    title: "Coffee first, healer later: The morning spirit.",
    subtitle: "Grounding your morning with intentional energy before engaging with the outside world.",
    image: "/images/ISFeY2zA.jpeg",
    duration: "3:50",
    category: "Daily Practice"
  },
  {
    id: "video-6",
    title: "The power of gratitude: Thank You Hashem live session.",
    subtitle: "How celebrating and connecting with higher frequencies transforms physical vitality.",
    image: "/images/MmmHMMww.jpeg",
    duration: "5:40",
    category: "Spiritual Healing"
  }
]

export const DOCTOR_TESTIMONIALS: DoctorTestimonial[] = [
  {
    id: "dr-iris",
    quote: "“After seeing what Herschel does, I would say that he is the spiritual version of performance medicine.”",
    name: "Dr. Iris Grenadir",
    title: "Cambridge, MA",
    avatar: "/images/doctor-iris.png"
  },
  {
    id: "dr-tzvi",
    quote: "“You are the spiritual module in a multi-disciplinary approach that makes them all work in harmony.”",
    name: "Dr. Tzvi Perlstein",
    title: "Orthopedic Surgeon",
    location: "New York, NY",
    avatar: "/images/interview-man.png"
  },
  {
    id: "dr-elena",
    quote: "“Herschel's ability to locate and release emotional trauma stored in somatic tissue is beyond anything I have witnessed in clinical practice.”",
    name: "Dr. Miriam Kaufman",
    title: "Neurologist & Researcher",
    location: "Jerusalem",
    avatar: "/images/woman-prayer.png"
  },
  {
    id: "dr-david",
    quote: "“Patients who reached a plateau in standard physical therapy showed immediate neuromuscular breakthroughs after working with Herschel.”",
    name: "Dr. David Ben-Zion",
    title: "Chief of Rehabilitation Medicine",
    location: "Tel Aviv",
    avatar: "/images/about-street.png"
  },
  {
    id: "dr-sarah",
    quote: "“His intuitive energetic diagnosis aligned perfectly with our medical imaging results. It is truly extraordinary.”",
    name: "Dr. Sarah Levin",
    title: "Integrative Health Director",
    location: "Boston, MA",
    avatar: "/images/meet-herschel.png"
  }
]

export const FOOTER_CONTENT = {
  address: "Monsey, NY - Sessions available in-person, by phone, or via Zoom",
  scheduleLinkText: "Schedule a call →",
  email: "herschel@happyherschel.com",
  navigation: [
    { label: "The Healer", href: "#about" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Videos", href: "#videos" },
    { label: "The Blog", href: "#blog" },
    { label: "Solutions", href: "#solutions" },
  ],
  shop: [
    { label: "Sessions", href: "#book" },
    { label: "Consultations", href: "#consultations" },
    { label: "Changelog", href: "#changelog" },
  ],
  social: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Facebook", href: "https://facebook.com" },
    { label: "Twitter", href: "https://twitter.com" },
  ],
  copyright: "© Herschel • Powered by Feelize",
  termsLink: "Terms & Conditions"
}
