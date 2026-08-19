export type ExperienceEntry = {
  role: string;
  company: string;
  location?: string;
  start: string;
  end: string;
  bullets: string[];
};

export type PreviousRole = {
  role: string;
  company: string;
  location: string;
  start: string;
  end: string;
};

export type EducationEntry = {
  degree: string;
  school: string;
  year: string;
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type ProjectCase = {
  slug: string;
  title: string;
  summary: string;
  challenge: string;
  approach: string;
  outcome: string;
  stack: string[];
};

export type ServiceOffering = {
  slug: string;
  title: string;
  description: string;
  icon: "shield" | "scale" | "lock" | "cloud" | "radar" | "code";
  deliverables: string[];
};

export type BlogFrontmatter = {
  title: string;
  excerpt: string;
  date: string;
  tag: string;
  readingTime?: string;
};

export type BlogPost = BlogFrontmatter & {
  slug: string;
  content: string;
};
