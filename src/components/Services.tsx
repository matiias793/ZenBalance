import Image from 'next/image';

const services = [
  {
    id: 1,
    name: "Masaje Relajante",
    description: "Libera tensiones y encuentra la paz interior con nuestro masaje relajante que combina técnicas suaves y aromaterapia.",
    duration: "60 minutos",
    price: "$2.500",
    image: "/masaje1.png",
    features: ["Alivia el estrés", "Mejora el sueño", "Relajación profunda", "Aromaterapia incluida"]
  },
  {
    id: 2,
    name: "Masaje Terapéutico",
    description: "Tratamiento especializado para aliviar dolores musculares y mejorar la movilidad con técnicas avanzadas.",
    duration: "90 minutos",
    price: "$3.500",
    image: "/masaje2.png",
    features: ["Alivia dolores musculares", "Mejora la movilidad", "Técnicas especializadas", "Evaluación previa"]
  },
  {
    id: 3,
    name: "Masaje Descontracturante",
    description: "Enfocado en liberar contracturas y tensiones acumuladas en zonas específicas del cuerpo.",
    duration: "45 minutos",
    price: "$1.800",
    image: "/masaje1.png",
    features: ["Libera contracturas", "Alivia tensiones", "Enfoque específico", "Resultados inmediatos"]
  },
  {
    id: 4,
    name: "Masaje Holístico",
    description: "Experiencia completa que integra cuerpo, mente y espíritu para un bienestar total.",
    duration: "120 minutos",
    price: "$4.500",
    image: "/masaje2.png",
    features: ["Bienestar integral", "Equilibrio energético", "Meditación guiada", "Experiencia completa"]
  }
];

export default function Services() {
  return (
    <section id="servicios" className="py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <h2 className="section-title">
          <span style={{
            background: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Nuestros Servicios
          </span>
        </h2>

        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Descubre nuestra amplia gama de servicios de masajes diseñados para 
          satisfacer todas tus necesidades de bienestar y relajación en Paysandú
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.id} className="card group hover:scale-105 transition-all duration-500">
              {/* Imagen del servicio */}
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Información del servicio */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors">
                  {service.name}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Características */}
                <div className="grid grid-cols-2 gap-2">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full" style={{
                        background: 'linear-gradient(135deg, #ec4899, #8b5cf6)'
                      }}></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Duración y precio */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-500">
                      ⏱️ {service.duration}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold" style={{
                      background: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}>
                      {service.price}
                    </span>
                  </div>
                </div>

                {/* Botón de reserva */}
                <button className="w-full btn-primary mt-4">
                  Reservar Ahora
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Información adicional */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card text-center">
            <div className="text-4xl mb-4">🎁</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Primera Sesión</h3>
            <p className="text-gray-600">20% de descuento en tu primera visita</p>
          </div>

          <div className="card text-center">
            <div className="text-4xl mb-4">📅</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Reservas Flexibles</h3>
            <p className="text-gray-600">Horarios disponibles de lunes a domingo</p>
          </div>

          <div className="card text-center">
            <div className="text-4xl mb-4">🏠</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Servicio a Domicilio</h3>
            <p className="text-gray-600">Llevamos la relajación hasta tu hogar en Paysandú</p>
          </div>
        </div>
      </div>
    </section>
  );
}
