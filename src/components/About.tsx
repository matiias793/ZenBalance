export default function About() {
  return (
    <section id="quienes-somos" className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-title">
          <span style={{
            background: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Quienes Somos
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenido */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              En <strong className="text-purple-600">Zen Balance</strong>, creemos en el poder 
              transformador del toque terapéutico y la relajación profunda. Nuestro equipo de 
              profesionales certificados está dedicado a brindarte una experiencia única de 
              bienestar integral.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Con años de experiencia en técnicas de masaje terapéutico, relajación y 
              bienestar holístico, hemos ayudado a cientos de personas a encontrar su 
              equilibrio natural y liberar las tensiones acumuladas en su vida diaria.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="card text-center">
                <div className="text-3xl mb-3">🌟</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Experiencia</h3>
                <p className="text-gray-600">Más de 10 años en el sector del bienestar</p>
              </div>

              <div className="card text-center">
                <div className="text-3xl mb-3">🎓</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Certificación</h3>
                <p className="text-gray-600">Profesionales certificados internacionalmente</p>
              </div>

              <div className="card text-center">
                <div className="text-3xl mb-3">💝</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Personalizado</h3>
                <p className="text-gray-600">Cada tratamiento adaptado a tus necesidades</p>
              </div>

              <div className="card text-center">
                <div className="text-3xl mb-3">🌿</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Natural</h3>
                <p className="text-gray-600">Productos orgánicos y técnicas naturales</p>
              </div>
            </div>
          </div>

          {/* Imagen */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <div className="w-full h-full" style={{
                background: 'linear-gradient(135deg, #f8bbd9, #e1bee7, #c5cae9)'
              }}>
                <div className="text-center p-8 h-full flex flex-col items-center justify-center">
                  <div className="text-8xl mb-4">🧘‍♀️</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Tu Bienestar es Nuestra Pasión
                  </h3>
                  <p className="text-gray-600">
                    Descubre el poder transformador de nuestros tratamientos
                  </p>
                </div>
              </div>
            </div>
            
            {/* Elementos decorativos */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-20" style={{
              background: 'linear-gradient(135deg, #ec4899, #8b5cf6)'
            }}></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full opacity-20" style={{
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)'
            }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
