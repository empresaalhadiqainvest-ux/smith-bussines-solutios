import { ServiceItem } from '../types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'software',
    solutionType: 'software',
    title: 'Tiendas E-Commerce & Páginas Web de Alto Desempeño',
    shortDesc: 'Desarrollo de tiendas online ultrarrápidas en Headless React 19, Shopify Plus y WooCommerce, con checkouts en menos de 0.4s y pasarelas de pago globales.',
    fullDesc: 'Ingeniería frontend y backend de clase mundial para marcas y negocios que no pueden permitirse perder ventas. Creamos tiendas e-commerce a medida con tiempos de carga sub-segundo, túneles de compra optimizados para móvil, inventario en tiempo real y conexión con pasarelas de pago internacionales (Stripe, PayPal, MercadoPago).',
    image: '/src/assets/images/service_software_1794103684606.jpg',
    tag: 'E-Commerce & Plataformas Web',
    deliverables: [
      'Storefront ultrarrápido en React 19 / Next.js / Shopify Headless',
      'Checkout optimizado en 1-Click con Apple Pay, Google Pay y tarjetas',
      'Panel administrativo ejecutivo con gestión de stock y roles (RBAC)',
      'Sincronización multi-divisa (USD / EUR / Moneda Local) y cálculo de aranceles',
      'Optimización SEO Técnico y Core Web Vitals certificados al 98%'
    ],
    technologies: ['React 19', 'Next.js', 'Shopify Plus', 'Stripe', 'Tailwind CSS', 'PostgreSQL'],
    typicalTimeline: '3 a 5 semanas',
    roiMetric: '+215% velocidad de carga y conversión de carritos',
    startingPrice: 3200,
  },
  {
    id: 'automation',
    solutionType: 'automation',
    title: 'Chatbots IA para Ventas & Automatización 24/7',
    shortDesc: 'Agentes conversacionales inteligentes en WhatsApp y Web que atienden clientes, recuperan carritos abandonados y procesan pedidos en piloto automático.',
    fullDesc: 'Transformamos tu canal de WhatsApp y web en un equipo comercial incansable que opera las 24 horas del día. Nuestros chatbots de IA están entrenados con el catálogo de tu negocio: responden dudas complejas, recomiendan productos personalizados, envían links de pago directo y actualizan tu CRM automáticamente.',
    image: '/src/assets/images/service_automation_1794103683596.jpg',
    tag: 'Chatbots IA & Tareas Automatizadas',
    deliverables: [
      'Agente de Ventas con IA conectado a WhatsApp Business API y Web Widget',
      'Flujos automáticos de recuperación de carritos abandonados y re-engagement',
      'Integración con CRM (HubSpot, Salesforce, Zoho) y facturación automática',
      'Extracción inteligente de comprobantes de pago por OCR y conciliación contable',
      'Monitoreo en tiempo real con panel de métricas de conversión comercial'
    ],
    technologies: ['WhatsApp Cloud API', 'Python / n8n', 'IA Generativa', 'Stripe API', 'PostgreSQL'],
    typicalTimeline: '2 a 4 semanas',
    roiMetric: '-75% tiempo de atención humana y +38% carritos recuperados',
    startingPrice: 1800,
  },
  {
    id: 'consulting',
    solutionType: 'consulting',
    title: 'Sistemas de Ventas Integrales & Ingeniería de Ingresos',
    shortDesc: 'Estructuración de embudos de conversión masiva, modelos de pricing dinámico, auditorías de rentabilidad y asesoría directiva para escalar la facturación.',
    fullDesc: 'Acompañamos a directores y dueños de negocio a convertir visitas en flujo de caja predecible. Auditamos fugas de clientes en el checkout, rediseñamos estrategias de precios, optimizamos márgenes brutos y diseñamos la arquitectura técnica para rondas de inversión o expansión internacional.',
    image: '/src/assets/images/service_consulting_1794103683222.jpg',
    tag: 'Sistemas de Venta & Estrategia',
    deliverables: [
      'Auditoría forense de embudo de ventas y tasa de abandono de checkout',
      'Estrategia de pricing dinámico, márgenes de contribución y LTV/CAC',
      'Arquitectura de suscripciones recurrentes y pasarelas de pago redundantes',
      'Dashboards ejecutivos de ingresos, retención y análisis de cohorte en tiempo real'
    ],
    technologies: ['Modelos DCF & LTV', 'Power BI / SQL Dashboards', 'Stripe Billing', 'Staging de Pagos'],
    typicalTimeline: '2 a 5 semanas',
    roiMetric: '+42% incremento en margen neto y ticket promedio',
    startingPrice: 2400,
  },
];

export const CALCULATOR_OPTIONS = {
  solutions: [
    {
      id: 'software' as const,
      title: 'Tienda E-Commerce & Web',
      subtitle: 'Storefront ultra-rápido, checkout 0.4s y pasarelas globales',
      basePrice: 3200,
      baseWeeks: 4,
      badge: 'Más Solicitado',
    },
    {
      id: 'automation' as const,
      title: 'Chatbot IA de Ventas & Tareas',
      subtitle: 'Agente en WhatsApp 24/7, recuperación de carritos y CRM',
      basePrice: 1800,
      baseWeeks: 3,
      badge: 'Conversión 24/7',
    },
    {
      id: 'consulting' as const,
      title: 'Sistema de Ventas & Estrategia',
      subtitle: 'Embudo de conversión, pricing dinámico y auditoría de ingresos',
      basePrice: 2400,
      baseWeeks: 3,
      badge: 'Rentabilidad',
    },
  ],
  scales: [
    {
      id: 'startup' as const,
      title: 'Startup / Marca Emergente',
      description: 'Lanzamiento ágil de tienda, catálogo esencial y pasarela Stripe/PayPal.',
      multiplier: 1.0,
      weeksOffset: 0,
    },
    {
      id: 'pyme' as const,
      title: 'PYME / E-Commerce en Expansión',
      description: 'Volumen creciente de pedidos, sincronización ERP/CRM y chatbot IA comercial.',
      multiplier: 1.65,
      weeksOffset: 1,
    },
    {
      id: 'corporate' as const,
      title: 'Empresa / Cadena Multimarca',
      description: 'Multi-tienda internacional, multi-divisa, alta concurrencia y SLA 99.99%.',
      multiplier: 2.8,
      weeksOffset: 2,
    },
  ],
  deliverySpeeds: [
    {
      id: 'standard' as const,
      title: 'Estándar',
      timelineText: '4 semanas promedio',
      description: 'Planificación metódica con sprint continuo sin recargo de urgencia.',
      multiplier: 1.0,
      weeksMultiplier: 1.0,
    },
    {
      id: 'priority' as const,
      title: 'Prioritario',
      timelineText: '2 semanas aceleradas',
      description: 'Equipo de ingenieros con asignación dedicada preferente.',
      multiplier: 1.25,
      weeksMultiplier: 0.6,
    },
    {
      id: 'express' as const,
      title: 'Express / Misión Crítica',
      timelineText: '1 semana intensiva',
      description: 'Sprint intensivo acelerado con disponibilidad inmediata 24/7.',
      multiplier: 1.6,
      weeksMultiplier: 0.35,
    },
  ],
  addons: [
    {
      id: 'whatsapp_ai_bot',
      name: 'Agente IA WhatsApp para Ventas Directas',
      price: 550,
      desc: 'Atiende dudas, recomienda productos y envía links de pago en WhatsApp.',
    },
    {
      id: 'cart_recovery_engine',
      name: 'Sistema Automatizado de Recuperación de Carritos',
      price: 450,
      desc: 'Secuencias inteligentes por WhatsApp y Email para cerrar ventas perdidas.',
    },
    {
      id: 'payments_gateway',
      name: 'Integración Multi-Pasarela Global (Stripe, PayPal, MercadoPago)',
      price: 500,
      desc: 'Configuración de 1-Click checkout con Apple Pay y tarjetas internacionales.',
    },
    {
      id: 'support_24_7',
      name: 'Soporte Técnico & Mantenimiento Proactivo (3 meses)',
      price: 450,
      desc: 'Supervisión de servidores, parches de seguridad y garantía de uptime.',
    },
  ],
};

export const CASE_STUDIES = [
  {
    client: 'Aurora Brands Global',
    sector: 'Moda D2C & Retail Internacional',
    solution: 'Tienda E-Commerce Headless React 19',
    metric: '+215% ventas móviles en Q1',
    summary: 'Migración de tienda monolítica lenta a arquitectura Headless con checkout de 0.38 segundos. Reducción del 64% en tasa de rebote durante picos de tráfico.',
    timeline: '4 semanas de despliegue',
  },
  {
    client: 'Distribuidora Mayorista Andina',
    sector: 'Comercio B2B & Cadena de Suministro',
    solution: 'Chatbot IA de Ventas en WhatsApp Business',
    metric: '4,200 pedidos mensuales automáticos',
    summary: 'Implementación de agente comercial IA que consulta stock en SAP, genera presupuestos y cobra mediante enlaces seguros sin intervención de operadores humanos.',
    timeline: '3 semanas de despliegue',
  },
  {
    client: 'Sterling Watchmaker Co.',
    sector: 'Artículos de Lujo & High-Ticket',
    solution: 'Sistema de Ventas & Visor 3D Interactivo',
    metric: '$3.4M USD transaccionados',
    summary: 'Desarrollo de catálogo interactivo con personalizador 3D en tiempo real y embudo de conversión para transacciones de alto valor superiores a $4,000 USD.',
    timeline: '5 semanas de ejecución',
  },
];
