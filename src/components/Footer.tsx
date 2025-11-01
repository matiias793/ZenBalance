import { Heart, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 px-4" style={{
      background: 'linear-gradient(135deg, #374151, #1f2937)',
      color: 'white'
    }}>
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{
                background: 'linear-gradient(135deg, #ec4899, #8b5cf6)'
              }}>
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <h3 className="text-2xl font-bold">Zen Balance</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Tu espacio de bienestar y relajación en Paysandú. Descubre el equilibrio perfecto 
              entre cuerpo y mente a través de nuestros servicios especializados de masajes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors" style={{
                backgroundColor: '#4b5563'
              }}>
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors" style={{
                backgroundColor: '#4b5563'
              }}>
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors" style={{
                backgroundColor: '#4b5563'
              }}>
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Nuestros Servicios</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#servicios" className="hover:text-purple-400 transition-colors">Masaje Relajante</a></li>
              <li><a href="#servicios" className="hover:text-purple-400 transition-colors">Masaje Terapéutico y Descontracturante</a></li>
              <li><a href="#servicios" className="hover:text-purple-400 transition-colors">Masaje Deportivo</a></li>
              <li><a href="#servicios" className="hover:text-purple-400 transition-colors">Masaje Reflexología</a></li>
              <li><a href="#servicios" className="hover:text-purple-400 transition-colors">Servicio a Domicilio</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-300">
              <li>+598 472 123 456</li>
              <li>contacto.zenbalance@gmail.com</li>
              <li>Av. Artigas 1234</li>
              <li>Paysandú, Uruguay</li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Zen Balance. Todos los derechos reservados.
            </p>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Desarrollado con</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>para Zen Balance</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
