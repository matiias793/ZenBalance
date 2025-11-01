'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactBackup() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    
    // Debug: Mostrar los datos del formulario
    console.log('=== DEBUGGING FORMULARIO ===');
    console.log('Datos del formulario:');
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
    
    try {
      console.log('Intentando método 1: FormData con Accept header...');
      
      // Método 1: FormData con Accept header
      const response1 = await fetch('https://formspree.io/f/mkgzddgb', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      console.log('Respuesta método 1:', response1.status, response1.statusText);

             if (response1.ok) {
         const result = await response1.json();
         console.log('✅ Éxito con método 1:', result);
         setSubmitStatus('success');
         const form = e.currentTarget;
         if (form) {
           form.reset();
         }
         return;
       }

      // Si el primer método falla, intentar método 2
      console.log('Método 1 falló, intentando método 2: JSON...');
      
      const response2 = await fetch('https://formspree.io/f/mkgzddgb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          phone: formData.get('phone'),
          service: formData.get('service'),
          message: formData.get('message')
        })
      });

      console.log('Respuesta método 2:', response2.status, response2.statusText);

             if (response2.ok) {
         const result = await response2.json();
         console.log('✅ Éxito con método 2:', result);
         setSubmitStatus('success');
         const form = e.currentTarget;
         if (form) {
           form.reset();
         }
         return;
       }

      // Si ambos métodos fallan, intentar método 3 (sin headers)
      console.log('Método 2 falló, intentando método 3: FormData sin headers...');
      
      const response3 = await fetch('https://formspree.io/f/mkgzddgb', {
        method: 'POST',
        body: formData
      });

      console.log('Respuesta método 3:', response3.status, response3.statusText);

             if (response3.ok) {
         console.log('✅ Éxito con método 3');
         setSubmitStatus('success');
         const form = e.currentTarget;
         if (form) {
           form.reset();
         }
         return;
       }

      // Si todos los métodos fallan
      console.error('❌ Todos los métodos fallaron');
      console.error('Método 1:', response1.status, response1.statusText);
      console.error('Método 2:', response2.status, response2.statusText);
      console.error('Método 3:', response3.status, response3.statusText);
      
      throw new Error(`Todos los métodos fallaron. Último error: ${response3.status} ${response3.statusText}`);

    } catch (error) {
      console.error('❌ Error completo:', error);
      setSubmitStatus('error');
      
      if (error instanceof Error) {
        setErrorMessage(`Error: ${error.message}. Por favor intenta nuevamente o contáctanos por teléfono.`);
      } else {
        setErrorMessage('Hubo un error al enviar tu mensaje. Por favor intenta nuevamente o contáctanos por teléfono.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setSubmitStatus('idle');
    setErrorMessage('');
  };

  return (
    <section id="contacto" className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-title">
          <span style={{
            background: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Contacto
          </span>
        </h2>

        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          ¿Listo para comenzar tu viaje hacia el bienestar? Contáctanos y reserva tu 
          sesión de relajación personalizada en Paysandú
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div className="space-y-8">
            <div className="card">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Información de Contacto
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{
                    background: 'linear-gradient(135deg, #f8bbd9, #e1bee7)'
                  }}>
                    <Phone className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Teléfono</h4>
                    <p className="text-gray-600">+598 472 123 456</p>
                    <p className="text-gray-600">+598 99 123 456</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{
                    background: 'linear-gradient(135deg, #c5cae9, #e1bee7)'
                  }}>
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                    <p className="text-gray-600">contacto.zenbalance@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{
                    background: 'linear-gradient(135deg, #e1bee7, #f8bbd9)'
                  }}>
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Ubicación</h4>
                    <p className="text-gray-600">Av. Artigas 1234</p>
                    <p className="text-gray-600">Paysandú, Uruguay</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{
                    background: 'linear-gradient(135deg, #c8e6c9, #c5cae9)'
                  }}>
                    <Clock className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Horarios</h4>
                    <p className="text-gray-600">De Lunes a Viernes</p>
                    <p className="text-gray-600">7:00 - 22:00 hs</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Beneficios */}
            <div className="card">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                ¿Por qué elegirnos?
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full" style={{
                    background: 'linear-gradient(135deg, #ec4899, #8b5cf6)'
                  }}></div>
                  <span className="text-gray-700">Profesionales certificados</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full" style={{
                    background: 'linear-gradient(135deg, #ec4899, #8b5cf6)'
                  }}></div>
                  <span className="text-gray-700">Ambiente relajante y seguro</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full" style={{
                    background: 'linear-gradient(135deg, #ec4899, #8b5cf6)'
                  }}></div>
                  <span className="text-gray-700">Productos orgánicos de calidad</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full" style={{
                    background: 'linear-gradient(135deg, #ec4899, #8b5cf6)'
                  }}></div>
                  <span className="text-gray-700">Servicio personalizado</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full" style={{
                    background: 'linear-gradient(135deg, #ec4899, #8b5cf6)'
                  }}></div>
                  <span className="text-gray-700">Flexibilidad de horarios</span>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="card">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Envíanos un Mensaje
            </h3>
            
            {/* Mensaje de éxito */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <div>
                    <h4 className="font-semibold text-green-800">¡Mensaje enviado con éxito!</h4>
                    <p className="text-green-700">Gracias por contactarnos. Te responderemos pronto.</p>
                  </div>
                </div>
                <button
                  onClick={resetForm}
                  className="mt-3 text-sm text-green-600 hover:text-green-800 underline"
                >
                  Enviar otro mensaje
                </button>
              </div>
            )}

            {/* Mensaje de error */}
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <AlertCircle className="w-6 h-6 text-red-600" />
                  <div>
                    <h4 className="font-semibold text-red-800">Error al enviar mensaje</h4>
                    <p className="text-red-700">{errorMessage}</p>
                  </div>
                </div>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="+598 99 123 456"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Servicio de interés
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="relajante">Masaje Relajante</option>
                    <option value="terapeutico-descontracturante">Masaje Terapéutico y Descontracturante</option>
                    <option value="deportivo">Masaje Deportivo</option>
                    <option value="reflexologia">Masaje Reflexología</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Cuéntanos sobre tus necesidades o consultas..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || submitStatus === 'success'}
                className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Enviar Mensaje</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
