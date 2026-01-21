export type Profile = {
  id: number;
  name: string;
  headline: string;
  bio: string;
  location: string;
  email: string;
  githubUrl?: string | null;
  linkedinUrl?: string | null;
  resumeUrl?: string | null;
};

export type Experience = {
  id: number;
  company: string;
  role: string;
  location?: string | null;
  startDate: string;
  endDate?: string | null;
  description: string;
  technologies?: string[] | null;
};

export type Project = {
  id: number;
  title: string;
  description: string;
  imageUrl?: string | null;
  projectUrl?: string | null;
  githubUrl?: string | null;
  technologies?: string[] | null;
  isFeatured: boolean;
};

export type Skill = {
  id: number;
  category: string;
  items: string[];
};
