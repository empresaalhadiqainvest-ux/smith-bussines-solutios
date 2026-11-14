export type PillarId = 'estrategia' | 'automatizacion' | 'cloud' | 'ciberseguridad';

export type OperationalScale = 'startup' | 'pyme' | 'corporativo';

export type DeploymentPriority = 'estandar' | 'prioritario' | 'express';

export interface CapabilityPillar {
  id: PillarId;
  indexLabel: string;
  title: string;
  summary: string;
  fullDesc: string;
  deliverables: string[];
  presetFunctionIds: string[];
}

export interface SelectableFunction {
  id: string;
  pillar: PillarId;
  title: string;
  description: string;
  sprintDays: number;
}

export interface ScenarioPreset {
  id: string;
  label: string;
  description: string;
  functionIds: string[];
}

export interface SentOrderRecord {
  orderId: string;
  createdAt: string;
  channel: 'whatsapp' | 'email' | 'clipboard';
  clientName: string;
  companyName: string;
  clientContact: string;
  scaleLabel: string;
  priorityLabel: string;
  estimatedWeeks: number;
  functions: string[];
  notes: string;
}
