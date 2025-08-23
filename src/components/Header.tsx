'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="glass-effect sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo y nombre */}
          <div className="flex items-center space-x-3">
            <div className="relative w-12 h-12 md:w-16 md:h-16 flex-shrink-0">
              <div className="w-full h-full bg-gradient-to-br from-pink-200 to-purple-200 rounded-full flex items-center justify-center">
                <span className="text-2xl md:text-3xl font-bold text-purple-600">Z</span>
              </div>
            </div>
            <h1 className="text-xl md:text-2xl font-bold" style={{
              background: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Zen Balance
            </h1>
          </div>

          {/* Botón de menú móvil */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-white/50 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Navegación desktop */}
          <nav className="hidden md:flex items-center space-x-2">
            <a href="#quienes-somos" className="nav-link">
              Quienes Somos
            </a>
            <a href="#servicios" className="nav-link">
              Nuestros Servicios
            </a>
            <a href="#contacto" className="nav-link">
              Contacto
            </a>
          </nav>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-2">
              <a
                href="#quienes-somos"
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Quienes Somos
              </a>
              <a
                href="#servicios"
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Nuestros Servicios
              </a>
              <a
                href="#contacto"
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
