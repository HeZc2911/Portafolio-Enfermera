import { useState, useEffect } from "react";
import { motion } from 'framer-motion';

export default function Hero() {
  const [imagenActual, setImagenActual] = useState(0);

  const imagenes = [
    "/Portafolio-Enfermera/enfermera.jpg",
    "/Portafolio-Enfermera/enfermera1.jpg", 
    "/Portafolio-Enfermera/enfermera2.jpg",
  ]

  const siguienteImagen = () => {
    setImagenActual((prev) => (prev + 1) % imagenes.length);
  }
  
  useEffect(() => {
    const intervalo = setInterval(siguienteImagen, 5000)
    return () => clearInterval(intervalo)
  }, [])

  return (
    <section className="relative h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Imagen de fondo + overlay */}
      <div className="absolute inset-0">
        {imagenes.map((imagen, index) => (
          <img
            loading="eager"
            key={index}
            src={imagen}
            alt="Hero"
            className={`
              absolute inset-0 w-full h-full object-cover 
              transition-opacity duration-1000
              ${index === imagenActual ? 'opacity-100' : 'opacity-0'}
            `}
          />
        ))}
        <div className="absolute inset-0 bg-purple-900/20"></div>
      </div>

      {/* Texto de fondo con Playwrite */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-[60px] md:text-[160px] font-playwrite text-purple-300/60 select-none pointer-events-none italic">
          Aux Enfermería
        </h1>
      </div>

      {/* Contenido principal CON ANIMACIONES */}
      <motion.div 
        className="relative z-10 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <motion.h1 
          className="text-6xl md:text-8xl pt-20 font-semibold font-playfair italic text-white"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          ISABELLA PALACIO
        </motion.h1>
        
        <motion.p 
          className="mt-4 text-xl md:text-2xl text-white font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Entendiendo tus necesidades, cuidando con el alma
        </motion.p>
      </motion.div>
    </section>
  );
}