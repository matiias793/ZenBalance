// Configuración de EmailJS
export const EMAILJS_CONFIG = {
  // Reemplaza estos valores con tus credenciales de EmailJS
  PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'TU_PUBLIC_KEY',
  SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'TU_SERVICE_ID',
  TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'TU_TEMPLATE_ID',
};

// Template para el email
export const EMAIL_TEMPLATE = {
  subject: 'Nuevo mensaje de contacto - Zen Balance',
  html: `
    <h2>Nuevo mensaje de contacto recibido</h2>
    <p><strong>Nombre:</strong> {{from_name}}</p>
    <p><strong>Email:</strong> {{from_email}}</p>
    <p><strong>Teléfono:</strong> {{from_phone}}</p>
    <p><strong>Servicio de interés:</strong> {{service}}</p>
    <p><strong>Mensaje:</strong></p>
    <p>{{message}}</p>
    <hr>
    <p><em>Este mensaje fue enviado desde el formulario de contacto de Zen Balance</em></p>
  `
};

