import React, { useState } from "react";
import { MenuIcon, XIcon, MusicIcon } from "lucide-react";
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-orange-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <MusicIcon className="h-8 w-8 text-orange-500" />
            <span className="text-2xl font-bold text-white">DJ</span>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              data-aos="fade-down"
              data-aos-duration="1500"
              href="./#home"
              className="text-white hover:text-orange-500 transition-colors"
            >
              Home
            </a>
            <a
              data-aos="fade-down"
              data-aos-duration="2000"
              href="./#services"
              className="text-white hover:text-orange-500 transition-colors"
            >
              Serviços
            </a>
            <a
              data-aos="fade-down"
              data-aos-duration="2500"
              href="#about"
              className="text-white hover:text-orange-500 transition-colors"
            >
              Sobre
            </a>
            <a
              data-aos="fade-down"
              data-aos-duration="3000"
              href="#contact"
              className="text-white hover:text-orange-500 transition-colors"
            >
              Contatos
            </a>
          </nav>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-orange-500/20">
            <div className="flex flex-col space-y-2">
              <a
                href="#home"
                className="text-white hover:text-orange-500 transition-colors py-2"
              >
                Home
              </a>
              <a
                href="#services"
                className="text-white hover:text-orange-500 transition-colors py-2"
              >
                Serviços
              </a>
              <a
                href="#about"
                className="text-white hover:text-orange-500 transition-colors py-2"
              >
                Sobre
              </a>
              <a
                href="#contact"
                className="text-white hover:text-orange-500 transition-colors py-2"
              >
                Contatos
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
