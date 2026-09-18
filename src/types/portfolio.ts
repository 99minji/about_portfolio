export interface ProjectImage {
  src: string;
  alt: string;
}

export interface ProjectCaseStudy {
  title: string;
  problem: string;
  solution: string;
  result?: string;
  status?: "complete" | "in-progress";
  flow: string[];
}

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface ProjectScreenshot {
  src: string;
  alt: string;
  title: string;
  caption: string;
  position?: "left" | "center" | "right";
}

export interface Project {
  company?: string;
  category: "company" | "independent";
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
  metrics?: ProjectMetric[];
  screenshots?: ProjectScreenshot[];
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
  projects?: ProjectLink[];
}

export interface ProjectLink {
  title: string;
  href: string;
}
