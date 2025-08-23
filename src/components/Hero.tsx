import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-16">
      {/* Fondo con gradiente */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(135deg, rgba(248, 187, 217, 0.3) 0%, rgba(225, 190, 231, 0.3) 50%, rgba(197, 202, 233, 0.3) 100%)'
      }}></div>
      
      <div className="container mx-auto text-center relative z-10">
        {/* Logo principal */}
        <div className="flex justify-center mb-8">
          <div className="relative w-32 h-32 md:w-48 md:h-48">
            <Image
              src="/logo.png"
              alt="Zen Balance"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* Título principal */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span style={{
            background: 'linear-gradient(135deg, #ec4899, #8b5cf6, #3b82f6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Zen Balance
          </span>
        </h1>

        {/* Subtítulo */}
        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
          Descubre el equilibrio perfecto entre cuerpo y mente a través de nuestros 
          servicios de masajes terapéuticos y relajación en Paysandú
        </p>

        {/* Botones de acción */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#servicios"
            className="btn-primary text-lg px-8 py-4"
          >
            Ver Servicios
          </a>
          <a
            href="#contacto"
            className="px-8 py-4 text-lg font-medium text-gray-700 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:bg-white"
          >
            Reservar Ahora
          </a>
        </div>

        {/* Características destacadas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
          <div className="card text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full flex items-center justify-center">
              <span className="text-2xl">🧘</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Relajación Total</h3>
            <p className="text-gray-600">Libera tensiones y encuentra tu paz interior</p>
          </div>

          <div className="card text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full flex items-center justify-center">
              <span className="text-2xl">💆</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Bienestar Integral</h3>
            <p className="text-gray-600">Cuidamos tu cuerpo, mente y espíritu</p>
          </div>

          <div className="card text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full flex items-center justify-center">
              <span className="text-2xl">✨</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Experiencia Única</h3>
            <p className="text-gray-600">Cada sesión es personalizada para ti</p>
          </div>
        </div>
      </div>
    </section>
  );
}
