export interface NavItemType {
  id: string;
  label: string;
  href: string;
}

export interface SkillType {
  name: string;
  percentage: number;
}

export interface ServiceType {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface ProjectType {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  link: string;
}

export interface TestimonialType {
  id: number;
  name: string;
  role: string;
  avatar: string;
  content: string;
}

export interface EducationType {
  id: number;
  degree: string;
  institute: string;
  duration: string;
  description: string;
}

export interface ExperienceType {
  id: number;
  role: string;
  company: string;
  duration: string;
  description: string;
}