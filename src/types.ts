export interface TestimonialVideo {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  duration: string;
  category: string;
  quote?: string;
  author?: string;
  videoUrl?: string;
}

export interface DoctorTestimonial {
  id: string;
  quote: string;
  name: string;
  title: string;
  location?: string;
  avatar: string;
}

export interface WorldCard {
  id: string;
  title: string;
  image: string;
  tag: string;
  description: string;
  detailedText: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  sublabel: string;
}

export interface SessionBooking {
  sessionType: 'in-person' | 'zoom' | 'phone';
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  intention: string;
}
