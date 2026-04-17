import raw from "./metadata.json";

export type Subject = {
  code?: string;
  name: string;
  grade?: string;
  points?: number;
  credit?: number;
  credit_points?: number;
  marks?: number;
};

export type Semester = {
  sem: number;
  year: string;
  sgpa: number;
  credits_earned: number;
  total_points: number;
  subjects: Subject[];
};

export type EducationEntry = {
  id: string;
  degree: string;
  institute: string;
  board_or_university?: string;
  year?: string;
  start?: string;
  end?: string;
  final_cgpa?: number;
  percentage?: number;
  semesters?: Semester[];
  subjects?: Subject[];
  certificate_no?: string;
  statement_no?: string;
  unique_id?: string;
  result?: string;
  internal_assessment?: { name: string; grade: string };
};

export type Experience = {
  id: string;
  company: string;
  role: string;
  location: string;
  start: string;
  end: string | null;
  current?: boolean;
  highlights: string[];
};

export type Project = {
  id: string;
  name: string;
  subtitle: string;
  timeline: string;
  tools: string[];
  github?: string;
  highlights: string[];
  award?: string;
};

export type Achievement = {
  id: string;
  title: string;
  year: number;
  prize?: string;
  description: string;
  image: string;
};

type Meta = {
  personal: {
    name: string;
    tagline: string;
    summary: string;
    email: string;
    phone: string;
    location: string;
    links: { linkedin: string; github: string; portfolio?: string };
    dob: string;
  };
  education: EducationEntry[];
  experience: Experience[];
  projects: Project[];
  achievements: Achievement[];
  skills: Record<string, string[]>;
};

export const meta = raw as unknown as Meta;
