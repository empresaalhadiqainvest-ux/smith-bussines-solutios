export type SolutionType = 'automation' | 'software' | 'consulting';
export type ProjectScale = 'startup' | 'pyme' | 'corporate';
export type DeliverySpeed = 'standard' | 'priority' | 'express';

export interface CalculatorState {
  solutionType: SolutionType;
  scale: ProjectScale;
  deliverySpeed: DeliverySpeed;
  selectedAddons: string[];
}

export interface ServiceItem {
  id: string;
  solutionType: SolutionType;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  tag: string;
  deliverables: string[];
  technologies: string[];
  typicalTimeline: string;
  roiMetric: string;
  startingPrice: number;
}

export interface ProposalFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  solutionType: SolutionType;
  scale: ProjectScale;
  deliverySpeed: DeliverySpeed;
  addons: string[];
  estimatedTotal: number;
  estimatedWeeks: number;
  additionalNotes: string;
}

export type WhitepaperCategory =
  | 'all'
  | 'ai'
  | 'fintech'
  | 'architecture'
  | 'operations';

export interface WhitepaperAuthor {
  name: string;
  role: string;
  avatar: string;
}

export interface WhitepaperContentSection {
  heading: string;
  body: string;
  takeaway?: string;
}

export interface WhitepaperItem {
  id: string;
  title: string;
  slug: string;
  category: 'ai' | 'fintech' | 'architecture' | 'operations';
  categoryLabel: string;
  publishDate: string;
  readTime: string;
  fileFormat: string;
  fileSize: string;
  downloadCount: number;
  featured?: boolean;
  executiveSummary: string;
  keyFindings: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  author: WhitepaperAuthor;
  tags: string[];
  tableOfContents: string[];
  fullSections: WhitepaperContentSection[];
}

