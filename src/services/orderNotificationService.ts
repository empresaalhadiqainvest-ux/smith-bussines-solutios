import { OWNER_CONTACT } from '../data/servicesData';

export interface OrderNotificationPayload {
  orderId: string;
  clientName: string;
  companyName: string;
  clientContact: string;
  scaleLabel: string;
  priorityLabel: string;
  estimatedWeeks: number;
  functions: string[];
  notes: string;
  formattedSummary: string;
}

export interface OrderDispatchResult {
  ok: boolean;
  provider: 'webhook' | 'emailjs' | 'formsubmit';
  message: string;
}

const FORMSUBMIT_AJAX_ENDPOINT = `https://formsubmit.co/ajax/${OWNER_CONTACT.email}`;
const EMAILJS_API_ENDPOINT = 'https://api.emailjs.com/api/v1.0/email/send';

export async function dispatchOrderNotification(
  payload: OrderNotificationPayload
): Promise<OrderDispatchResult> {
  const webhookUrl = import.meta.env.VITE_ORDER_WEBHOOK_URL?.trim();
  const emailJsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim();
  const emailJsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID?.trim();
  const emailJsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim();

  // Structured console log for local/dev webhook inspection
  console.info('[SBS Order Dispatch]', {
    brand: OWNER_CONTACT.brandName,
    orderId: payload.orderId,
    clientName: payload.clientName,
    companyName: payload.companyName,
    clientContact: payload.clientContact,
    scale: payload.scaleLabel,
    priority: payload.priorityLabel,
    estimatedWeeks: payload.estimatedWeeks,
    functions: payload.functions,
    notes: payload.notes,
    timestamp: new Date().toISOString(),
  });

  // 1. Priority: Custom Webhook Endpoint (Discord / Slack / n8n / Make / Custom API)
  if (webhookUrl) {
    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // Discord & Slack compatible top-level summary text
          content: `**${OWNER_CONTACT.brandName} · Nueva Orden ${payload.orderId}**\n\`\`\`\n${payload.formattedSummary}\n\`\`\``,
          text: `${OWNER_CONTACT.brandName} · Nueva Orden ${payload.orderId}\n${payload.formattedSummary}`,
          // Structured JSON fields for n8n / Make / custom endpoints
          orderId: payload.orderId,
          brand: OWNER_CONTACT.brandName,
          clientName: payload.clientName,
          companyName: payload.companyName,
          clientContact: payload.clientContact,
          scale: payload.scaleLabel,
          priority: payload.priorityLabel,
          estimatedWeeks: payload.estimatedWeeks,
          functionsCount: payload.functions.length,
          functions: payload.functions,
          notes: payload.notes || 'Sin notas adicionales',
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error(`Webhook HTTP ${response.status}`);
      }

      return {
        ok: true,
        provider: 'webhook',
        message: `Orden ${payload.orderId} recibida correctamente en el webhook configurado.`,
      };
    } catch (error) {
      console.error('Webhook dispatch failed:', error);
      return {
        ok: false,
        provider: 'webhook',
        message:
          'No se pudo conectar con el webhook configurado. Puedes enviar la orden directamente por WhatsApp o Correo.',
      };
    }
  }

  // 2. EmailJS REST API if credentials are configured in environment
  if (emailJsServiceId && emailJsTemplateId && emailJsPublicKey) {
    try {
      const response = await fetch(EMAILJS_API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: emailJsServiceId,
          template_id: emailJsTemplateId,
          user_id: emailJsPublicKey,
          template_params: {
            to_email: OWNER_CONTACT.email,
            brand_name: OWNER_CONTACT.brandName,
            order_id: payload.orderId,
            from_name: payload.clientName,
            company_name: payload.companyName,
            client_contact: payload.clientContact,
            scale: payload.scaleLabel,
            priority: payload.priorityLabel,
            estimated_weeks: `${payload.estimatedWeeks} semanas`,
            functions_list: payload.functions.join('\n- '),
            notes: payload.notes || 'Ninguna',
            message: payload.formattedSummary,
          },
        }),
      });

      if (!response.ok) {
        throw new Error(`EmailJS HTTP ${response.status}`);
      }

      return {
        ok: true,
        provider: 'emailjs',
        message: `Orden ${payload.orderId} enviada vía EmailJS a ${OWNER_CONTACT.email}.`,
      };
    } catch (error) {
      console.error('EmailJS dispatch failed:', error);
      return {
        ok: false,
        provider: 'emailjs',
        message:
          'Error al enviar vía EmailJS. Utiliza el envío directo por WhatsApp o Correo como respaldo.',
      };
    }
  }

  // 3. Default zero-config FormSubmit AJAX endpoint targeting OWNER_CONTACT.email
  try {
    const response = await fetch(FORMSUBMIT_AJAX_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        _subject: `[${OWNER_CONTACT.brandName}] Nueva Orden ${payload.orderId} - ${payload.companyName}`,
        _template: 'table',
        _captcha: 'false',
        Orden_ID: payload.orderId,
        Solicitante: payload.clientName,
        Empresa: payload.companyName,
        Contacto_Cliente: payload.clientContact,
        Escala_Operativa: payload.scaleLabel,
        Prioridad: payload.priorityLabel,
        Plazo_Estimado: `${payload.estimatedWeeks} ${
          payload.estimatedWeeks === 1 ? 'semana' : 'semanas'
        }`,
        Cantidad_Funciones: payload.functions.length,
        Funciones_Seleccionadas: payload.functions.join(' | '),
        Notas_Adicionales: payload.notes || 'Sin notas adicionales',
      }),
    });

    if (!response.ok) {
      throw new Error(`FormSubmit HTTP ${response.status}`);
    }

    const data = (await response.json()) as { success?: string | boolean; message?: string };
    if (data.success === false || data.success === 'false') {
      throw new Error(data.message || 'El servidor de mensajería rechazó el envío.');
    }

    return {
      ok: true,
      provider: 'formsubmit',
      message: `Orden ${payload.orderId} enviada al correo ${OWNER_CONTACT.email}.`,
    };
  } catch (error) {
    console.error('FormSubmit dispatch failed:', error);
    return {
      ok: false,
      provider: 'formsubmit',
      message:
        'No se pudo completar el envío automático de red. Usa los botones de WhatsApp o Correo directo debajo para entregarla al instante.',
    };
  }
}
