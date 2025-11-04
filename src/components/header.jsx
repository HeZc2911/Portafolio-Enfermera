import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Efecto para detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openWhatsApp = () => {
    window.open('https://wa.me/3248967226', '_blank');
  };

  return (
    <motion.header 
      className={`fixed top-0 w-full z-50 transition-colors duration-400 ${
        isScrolled 
          ? 'bg-purple-50 shadow-md' 
          : 'bg-transparent '
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-4"
            whileHover={{ scale: 1.05 }}
          >
            <img 
              loading='eager'
              src="/Portafolio-Enfermera/Logo-removebg-preview.png"
              alt="logo" 
              className="w-24 h-24"
            />
          </motion.div>

          {/* Navegación Desktop */}
          <nav className="hidden md:flex space-x-10 items-center">
            {['Inicio', 'Servicios', 'Sobre Mí'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item}`}
                className={`font-semibold backdrop-blur-sm rounded-lg px-2 py-2 ${
                  isScrolled
                    ? 'text-gray-800 hover:text-purple-600'
                    : 'text-white hover:text-blue-200'
                }`}
                // ✅ AGREGAR ESTAS PROPS PARA ANIMACIÓN ESCALONADA
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: index * 0.1 + 0.3,  // ← Escalonado + delay inicial
                  duration: 0.4 
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.09 }
                }}
              >
                {item}
              </motion.a>
            ))}
            
            {/* Botón WhatsApp - Cambia color según scroll */}
            <motion.button 
              onClick={openWhatsApp}
              className="bg-green-500 text-white px-4 py-2 rounded-lg"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "#16a34a", // hover:bg-green-600
                transition: { duration: 0.2 } // Rápido, sin spring
              }}
              whileTap={{ scale: 0.95 }}
            >
              Reservar cita
            </motion.button>
          </nav>

          {/* Menú móvil - Botón cambia color según scroll */}
          <motion.button 
            className={`md:hidden p-2 cursor-pointer ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            ☰
          </motion.button>

          {/* Menú desplegable móvil */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div 
                className='md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t'
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
              >
                {['Inicio', 'Servicios', 'Sobre Mí'].map((item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item}`}
                    className="block py-3 px-4 text-gray-800 hover:text-purple-600 font-semibold"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </motion.a>
                ))}
                <motion.button 
                  onClick={openWhatsApp}
                  className="block w-full text-left py-3 px-4 bg-green-500 text-white hover:bg-green-600 font-semibold"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Reservar Cita
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
}