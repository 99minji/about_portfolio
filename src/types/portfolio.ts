export interface ProjectImage {
  src: string;
  alt: string;
}

export interface ProjectCaseStudy {
  title: string;
  problem: string;
  solution: string;
  flow: string[];
}

export interface Project {
  number: string;
  slug: string;
  title: string;
  description: string;
  detailDescription: string;
  role: string;
  period: string;
  tech: string[];
  highlights: string[];
  overview: string;
  caseStudies: ProjectCaseStudy[];
  image: ProjectImage;
  accent: "moss" | "sand";
}

export interface Experience {
  company: string;
  period: string;
  role: string;
  description: string;
  responsibilities: string[];
}
