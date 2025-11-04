import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/header';
import Hero from './components/hero';
import Services from './components/services';
import Aboutme from './components/aboutme';

// Componente Loading
function Loading() {
  return (
    <motion.div
      className="fixed inset-0 bg-white z-50 flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <motion.img
          src="/Logo-removebg-preview.png"
          alt="Loading"
          className="w-32 h-32 mx-auto mb-4"
          animate={{ 
            rotate: 360,
          }}
          transition={{ 
            rotate: { duration: 2, repeat: Infinity, ease: "linear" }
          }}
        />
        <p className="text-purple-600 font-semibold text-center">Cargando...</p>
      </motion.div>
    </motion.div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='App'>
      <AnimatePresence>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Header />
            <section id="Inicio">
              <Hero />
            </section>
            <section id="Servicios">
              <Services />
            </section>
            <section id="Sobre Mí">
              <Aboutme />
            </section>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;