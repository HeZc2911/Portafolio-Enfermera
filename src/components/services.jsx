import {useState, useEffect} from "react";
import { motion, AnimatePresence } from 'framer-motion';

const servicios = [
    {
        id: 1,
        title: "Cuidado de pacientes post-operatorios",
        description: "Atención especializada para una recuperación óptima después de procedimientos quirúrgicos. Incluye monitoreo constante de signos vitales, cuidado profesional de heridas, administración puntual de medicamentos analgésicos y preventivos, así como educación al paciente sobre los cuidados necesarios durante el proceso de cicatrización.",
        precio: "40$ por visita",
        icon: "/Portafolio-Enfermera/healthcare.png",
        img: "/Portafolio-Enfermera/Cuidado.jpg",
    },
    {
        id: 2,
        title: "Administración de Medicamentos",
        description: "Aplicación precisa y segura de tratamientos médicos prescritos, con riguroso control de horarios, dosificación y seguimiento de posibles efectos secundarios. Garantizo la técnica adecuada para cada tipo de medicamento, ya sea oral, intramuscular o subcutáneo.",
        precio: "30$ por visita",
        icon: "/Portafolio-Enfermera/medicinas.png",
        img: "/Portafolio-Enfermera/adminmedicamentos.jpg",
    },
    {
        id: 3,
        title: "Control de Signos Vitales",
        description: "Seguimiento profesional y detallado de presión arterial, temperatura corporal, frecuencia cardiaca, respiratoria y saturación de oxígeno. Este monitoreo constante permite detectar cambios tempranos, prevenir complicaciones y ajustar tratamientos según la evolución del paciente.",
        precio: "50$ por visita",
        icon: "/Portafolio-Enfermera/signos.png",
        img: "/Portafolio-Enfermera/signosvitales.jpg",
    },
    {
        id: 4,
        title: "Inyectología",
        description: "Administración segura y experta de inyecciones, vacunas, medicamentos intravenosos y subcutáneos. Utilizo técnica estéril, manejo adecuado del dolor y seguimiento de posibles reacciones adversas, garantizando comfort y seguridad en cada procedimiento.",
        precio: "25$ por visita",
        icon: "/Portafolio-Enfermera/jeringa.png",
        img: "/Portafolio-Enfermera/Inyeccion.jpg",
    },
    {
        id: 5,
        title: "Atención Geriátrica",
        description: "Cuidado integral y compasivo diseñado específicamente para adultos mayores. Incluye acompañamiento en actividades diarias, prevención de caídas, manejo de condiciones crónicas como diabetes e hipertensión, y apoyo emocional para mejorar su calidad de vida",
        precio: "60$ por visita",
        icon: "/Portafolio-Enfermera/geriatria.png",
        img: "/Portafolio-Enfermera/ancianos.jpg",
    },
    {
        id: 6,
        title: "Educación en Salud",
        description: "Programas de enseñanza personalizados que empoderan al paciente y su familia. Cubro temas como autocuidado, manejo de condiciones médicas específicas, prevención de enfermedades, alimentación saludable y reconocimiento de signos de alarma que requieren atención médica",
        precio: "30$ por hora",
        icon: "/Portafolio-Enfermera/educacion.png",
        img: "/Portafolio-Enfermera/educacionsalud.jpg",
     }
];

export default function Services() {
  const [servicioSeleccionado, setServicioSeleccionado] = useState(null);
  
  useEffect(() => {
    if (servicioSeleccionado) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [servicioSeleccionado]);

  return (
    <section className="pt-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-5xl font-bold text-purple-900 mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Servicios de Enfermería
        </motion.h2>
        
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 px-8 pb-20">
          {servicios.map((service, index) => (
            <motion.div 
              key={service.id}
              className="bg-white rounded-lg shadow text-center cursor-pointer bg-gradient-to-br from-purple-100/60 via-purple-50 to-purple-200/40 
                            shadow-sm shadow-purple-200 border-br border-purple-300/10"
              onClick={() => setServicioSeleccionado(service)}
              initial={{ opacity: 0, y: 50, scale: 0.7 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ 
                scale: 1.05,
                rotate: 1,
                transition: { type: "spring", stiffness: 500 },
                damping: 15
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.img 
                className="w-16 h-16 mx-auto m-4" 
                src={service.icon} 
                alt={service.title}
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
                loading="lazy"
              />
              <h2 className="text-xl tracking-tight">{service.title}</h2>
            </motion.div>
          ))}
        </section>

        <AnimatePresence>
          {servicioSeleccionado && (
            <motion.div 
              className="fixed inset-0 z-50 bg-purple-900/50 flex items-center justify-center p-4"
              onClick={() => setServicioSeleccionado(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div 
                className="w-full max-w-6xl h-auto max-h-[90vh] lg:w-[140vh] lg:h-[50vh] bg-white shadow-lg rounded-lg border-l-4 border-purple-500 
                           lg:grid lg:grid-cols-[6%_37%_57%] flex flex-col"
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 50 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Espacio del 6% - Solo en desktop */}
                <div className="hidden lg:block"></div>
                
                {/* Imagen - EXACTAMENTE como estaba en desktop */}
                <motion.div 
                  className="flex h-64 lg:h-[53vh] justify-center overflow-visible"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <img 
                    className="h-full object-cover lg:transform lg:translate-y-[-3%] lg:filter lg:drop-shadow-2xl lg:rounded-lg"
                    src={servicioSeleccionado.img} 
                    alt="imagen del servicio" 
                  />
                </motion.div>
                
                {/* Contenido */}
                <motion.div 
                  className="p-4 lg:p-8 flex flex-col justify-center gap-4 overflow-y-auto lg:overflow-visible"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.h1 
                    className="text-xl lg:text-2xl font-semibold text-gray-900"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {servicioSeleccionado.title}
                  </motion.h1>
                  
                  <motion.p 
                    className="text-base lg:text-lg text-gray-800 leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    {servicioSeleccionado.description}
                  </motion.p>
                  
                  <motion.p 
                    className="text-lg font-semibold text-green-600 mt-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, type: "spring" }}
                  >
                    {servicioSeleccionado.precio}
                  </motion.p>
                  
                  {/* Botón de cerrar para móvil */}
                  <motion.button
                    className="lg:hidden bg-purple-600 text-white py-2 px-4 rounded-lg mt-4"
                    onClick={() => setServicioSeleccionado(null)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Cerrar
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}