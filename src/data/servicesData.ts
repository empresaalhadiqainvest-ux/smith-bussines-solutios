import {
  CapabilityPillar,
  DeploymentPriority,
  OperationalScale,
  ScenarioPreset,
  SelectableFunction,
} from '../types';

export const OWNER_CONTACT = {
  email: 'empresaalhadiqainvest@gmail.com',
  whatsappNumber: '584220273766',
  whatsappDisplay: '0422 027 3766',
  holding: 'Al-Hadiqa Invest Holding',
  location: 'Maturín, Monagas, Venezuela',
};

export const CAPABILITY_PILLARS: CapabilityPillar[] = [
  {
    id: 'estrategia',
    indexLabel: '01',
    title: 'Consultoría Estratégica',
    summary:
      'Rediseño de modelos operativos, expansión comercial y gobernanza corporativa guiada por indicadores clave.',
    fullDesc:
      'Alineamos la dirección ejecutiva con ejecución técnica de precisión. Analizamos tus flujos comerciales y estructura operativa para escalar de forma ordenada y medible.',
    deliverables: [
      'Diagnóstico integral de madurez digital y eficiencia operativa.',
      'Hoja de ruta de transformación y priorización por sprints.',
      'Tableros ejecutivos de Business Intelligence y KPIs en vivo.',
      'Gobernanza técnica y capacitación directa a tu equipo.',
    ],
    presetFunctionIds: ['est-diagnostico', 'est-roadmap', 'est-kpi'],
  },
  {
    id: 'automatizacion',
    indexLabel: '02',
    title: 'Automatización & IA',
    summary:
      'Agentes autónomos en WhatsApp, flujos RPA, integración de modelos LLM y eliminación de tareas manuales.',
    fullDesc:
      'Sustituimos procesos repetitivos por flujos autónomos impulsados por inteligencia artificial, multiplicando la capacidad de respuesta comercial y administrativa 24/7.',
    deliverables: [
      'Agentes de IA entrenados con la base de conocimiento de tu empresa.',
      'Automatización de ventas, atención al cliente y recuperación en WhatsApp.',
      'Integración directa mediante API entre CRM, ERP y mensajería.',
      'Flujos automáticos de clasificación, seguimiento y reportes.',
    ],
    presetFunctionIds: ['ia-whatsapp', 'ia-llm', 'ia-rpa', 'ia-crm'],
  },
  {
    id: 'cloud',
    indexLabel: '03',
    title: 'Infraestructura Cloud & Web',
    summary:
      'Plataformas web ultrarrápidas, arquitecturas elásticas de alta disponibilidad y pipelines CI/CD automatizados.',
    fullDesc:
      'Construimos plataformas digitales resilientes, e-commerce de alto rendimiento y cimientos en la nube preparados para soportar picos de demanda sin caídas.',
    deliverables: [
      'Desarrollo de aplicaciones web y tiendas online a medida.',
      'Arquitectura cloud con auto-escalado y alta disponibilidad.',
      'Pipelines CI/CD automatizados para despliegues sin interrupciones.',
      'Optimización de velocidad de carga, SEO técnico y observabilidad.',
    ],
    presetFunctionIds: ['cloud-web', 'cloud-arquitectura', 'cloud-cicd'],
  },
  {
    id: 'ciberseguridad',
    indexLabel: '04',
    title: 'Ciberseguridad & Auditoría',
    summary:
      'Arquitectura Zero-Trust, pruebas de penetración, protección de datos críticos y continuidad de negocio.',
    fullDesc:
      'Protegemos la integridad de tus sistemas, propiedad intelectual y datos de clientes mediante auditorías técnicas, cifrado y protocolos de respuesta ante incidentes.',
    deliverables: [
      'Auditoría de vulnerabilidades y pruebas de penetración (Pentesting).',
      'Implementación de control de accesos Zero-Trust y cifrado.',
      'Planes de respaldo automatizado y recuperación ante desastres.',
      'Alineación a acuerdos de confidencialidad (NDA) y cumplimiento.',
    ],
    presetFunctionIds: ['sec-pentest', 'sec-zerotrust', 'sec-drp'],
  },
];

export const SELECTABLE_FUNCTIONS: SelectableFunction[] = [
  // Automatización & IA
  {
    id: 'ia-whatsapp',
    pillar: 'automatizacion',
    title: 'Agente Comercial IA en WhatsApp 24/7',
    description: 'Atención, calificación de prospectos y toma de pedidos automática vía WhatsApp Cloud API.',
    sprintDays: 5,
  },
  {
    id: 'ia-llm',
    pillar: 'automatizacion',
    title: 'Asistente LLM con Base de Conocimiento',
    description: 'Modelo entrenado con tus catálogos, manuales y políticas internas para respuestas exactas.',
    sprintDays: 5,
  },
  {
    id: 'ia-rpa',
    pillar: 'automatizacion',
    title: 'Automatización de Flujos Operativos (RPA)',
    description: 'Eliminación de captura manual de datos, facturación, notificaciones y reportes periódicos.',
    sprintDays: 4,
  },
  {
    id: 'ia-crm',
    pillar: 'automatizacion',
    title: 'Integración API con CRM / ERP',
    description: 'Sincronización bidireccional entre formularios web, WhatsApp, inventario y CRM.',
    sprintDays: 4,
  },

  // Infraestructura Cloud & Web
  {
    id: 'cloud-web',
    pillar: 'cloud',
    title: 'Plataforma Web / E-Commerce a Medida',
    description: 'Desarrollo en React / TypeScript ultrarrápido optimizado para conversión y dispositivos móviles.',
    sprintDays: 7,
  },
  {
    id: 'cloud-panel',
    pillar: 'cloud',
    title: 'Panel Administrativo & Portal de Órdenes',
    description: 'Centro de control personalizado para gestionar pedidos, usuarios y métricas operativas.',
    sprintDays: 6,
  },
  {
    id: 'cloud-arquitectura',
    pillar: 'cloud',
    title: 'Arquitectura Cloud & Auto-Escalado',
    description: 'Despliegue en infraestructura redundante con balanceo de carga y base de datos optimizada.',
    sprintDays: 5,
  },
  {
    id: 'cloud-cicd',
    pillar: 'cloud',
    title: 'Pipelines CI/CD & Optimización SEO',
    description: 'Despliegues automatizados sin tiempo muerto, caché global, PWA y rendimiento técnico.',
    sprintDays: 3,
  },

  // Ciberseguridad & Auditoría
  {
    id: 'sec-pentest',
    pillar: 'ciberseguridad',
    title: 'Auditoría de Vulnerabilidades & Pentesting',
    description: 'Escaneo ofensivo de endpoints, APIs y servidores con informe técnico de remediación.',
    sprintDays: 4,
  },
  {
    id: 'sec-zerotrust',
    pillar: 'ciberseguridad',
    title: 'Arquitectura Zero-Trust & Cifrado',
    description: 'Autenticación robusta, gestión estricta de roles (RBAC) y cifrado en tránsito y reposo.',
    sprintDays: 4,
  },
  {
    id: 'sec-drp',
    pillar: 'ciberseguridad',
    title: 'Respaldo Automático & Continuidad (DRP)',
    description: 'Copias de seguridad inmutables programadas y protocolo de recuperación rápida.',
    sprintDays: 3,
  },
  {
    id: 'sec-monitoreo',
    pillar: 'ciberseguridad',
    title: 'Monitoreo Proactivo & Alertas 24/7',
    description: 'Detección temprana de anomalías, registro de auditoría y alertas instantáneas.',
    sprintDays: 3,
  },

  // Consultoría Estratégica
  {
    id: 'est-diagnostico',
    pillar: 'estrategia',
    title: 'Diagnóstico 360° de Procesos y Cuellos de Botella',
    description: 'Mapeo técnico y operativo para detectar fricciones y oportunidades de automatización.',
    sprintDays: 3,
  },
  {
    id: 'est-roadmap',
    pillar: 'estrategia',
    title: 'Hoja de Ruta Tecnológica y Escalabilidad',
    description: 'Plan de implementación por fases alineado a objetivos comerciales trimestrales.',
    sprintDays: 3,
  },
  {
    id: 'est-kpi',
    pillar: 'estrategia',
    title: 'Tablero Ejecutivo de KPIs en Tiempo Real',
    description: 'Estructuración de métricas clave de operación, retención y cumplimiento por área.',
    sprintDays: 4,
  },
  {
    id: 'est-capacitacion',
    pillar: 'estrategia',
    title: 'Capacitación de Equipo & Documentación',
    description: 'Transferencia de conocimiento, manuales operativos y sesiones de entrenamiento.',
    sprintDays: 2,
  },
];

export const SCENARIO_PRESETS: ScenarioPreset[] = [
  {
    id: 'preset-ops',
    label: 'Eliminar Cuellos de Botella',
    description: 'Automatización IA en WhatsApp, flujos RPA y conexión CRM.',
    functionIds: ['ia-whatsapp', 'ia-rpa', 'ia-crm', 'est-diagnostico'],
  },
  {
    id: 'preset-cloud',
    label: 'Web + Cloud Escalable',
    description: 'Plataforma web moderna, panel de órdenes y despliegue automatizado.',
    functionIds: ['cloud-web', 'cloud-panel', 'cloud-arquitectura', 'cloud-cicd'],
  },
  {
    id: 'preset-sec',
    label: 'Blindaje Zero-Trust',
    description: 'Auditoría de seguridad, control de accesos y respaldos DRP.',
    functionIds: ['sec-pentest', 'sec-zerotrust', 'sec-drp', 'sec-monitoreo'],
  },
  {
    id: 'preset-full',
    label: 'Arquitectura Integral',
    description: 'Núcleo estratégico, IA comercial, plataforma web y seguridad.',
    functionIds: ['est-roadmap', 'ia-whatsapp', 'ia-llm', 'cloud-web', 'cloud-panel', 'sec-zerotrust'],
  },
];

export const OPERATIONAL_SCALES: {
  id: OperationalScale;
  title: string;
  description: string;
  weeksOffset: number;
}[] = [
  {
    id: 'startup',
    title: 'Startup / Emprendimiento',
    description: 'Implementación ágil enfocada en validación rápida y lanzamiento.',
    weeksOffset: 0,
  },
  {
    id: 'pyme',
    title: 'PyME en Expansión',
    description: 'Integración con flujos existentes, CRM y equipos multidisciplinarios.',
    weeksOffset: 1,
  },
  {
    id: 'corporativo',
    title: 'Corporativo / Holding',
    description: 'Alta concurrencia, múltiples sedes, SLA dedicado y gobernanza.',
    weeksOffset: 2,
  },
];

export const DEPLOYMENT_PRIORITIES: {
  id: DeploymentPriority;
  title: string;
  description: string;
  weeksMultiplier: number;
}[] = [
  {
    id: 'estandar',
    title: 'Estándar',
    description: 'Sprints semanales planificados con revisiones regulares.',
    weeksMultiplier: 1.0,
  },
  {
    id: 'prioritario',
    title: 'Prioritario',
    description: 'Célula técnica dedicada para acelerar entregas en paralelo.',
    weeksMultiplier: 0.75,
  },
  {
    id: 'express',
    title: 'Sprint Express',
    description: 'Despliegue intensivo de alta prioridad para salida inmediata.',
    weeksMultiplier: 0.55,
  },
];
