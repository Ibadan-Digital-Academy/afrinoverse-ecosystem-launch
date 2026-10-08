export interface EngineItem {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  pipeline: string;
  borderColor: string;
  details?: string[];
}

export interface BuildStage {
  step: number;
  label: string;
  summary: string;
  deliverables: string[];
}

export interface ProductItem {
  websiteUrl?: string;
  id: string;
  name: string;
  badge: string;
  version: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  features: {
    title: string;
    description: string;
  }[];
  category: string;
  metrics: string;
  status: string;
  highlights: string[];
}

export interface IncubationStep {
  stepNumber: string;
  title: string;
  phase: string;
  description: string;
  keyOutputs: string[];
}

export interface StakeholderItem {
  number: string;
  title: string;
  description: string;
  offerings: string[];
}

export interface PartnerFormData {
  fullName: string;
  email: string;
  organization: string;
  role: string;
  interest: string;
  message: string;
}
