export interface Education {
  degree: string;
  institution: string;
  year: string;
  details: string[];
}

export interface Publication {
  title: string;
  authors: string;
  journal: string;
  year: number;
  link?: string;
  abstract: string;
  tags?: string[];
}

export interface ResearchInterest {
  title: string;
  description: string;
  icon: string;
}

export interface Experience {
  role: string;
  institution: string;
  year: string;
  description: string;
  tags?: string[];
}

export interface NewsItem {
  date: string;
  content: string;
  link?: string;
}

export enum Section {
  HOME = 'home',
  RESEARCH = 'research',
  CV = 'cv',
}