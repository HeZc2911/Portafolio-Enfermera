import { motion } from 'framer-motion';

export default function Aboutme() {
    return (
        <section className="bg-white p-5">
            <div className="grid grid-cols-2 items-center mx-40 mt-10 mb-20 gap-10">
                
                {/* Columna izquierda - Foto y datos */}
                <motion.div 
                    className="flex flex-col justify-center items-center bg-purple-100 h-full w-full rounded-2xl p-4"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.img 
                        src="/Portafolio-Enfermera/foto Isabb.png" 
                        alt="Isabella Palacio - Aux Enfermería" 
                        className="w-80 h-100"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    />
                    <motion.h4 
                        className="font-semibold text-lg mt-10"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Isabella Palacio Villarreal
                    </motion.h4>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        belapalaciovillarreal@gmail.com
                    </motion.p>
                    <motion.a 
                        className="bg-green-500 rounded-full p-2 mt-10 text-md font-bold text-white cursor-pointer hover:bg-green-600 transition-colors"
                        href="/HV Isabella Palacio Villareal fecha 9 de sept de 2025docx.pdf"
                        download='Hv_Isabella_Palacio.pdf'
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, type: "spring" }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Descarga mi Hoja de vida
                    </motion.a>
                </motion.div>

                {/* Columna derecha - Contenido */}
                <div className="flex flex-col gap-8">
                    
                    {/* Sección Sobre mí */}
                    <motion.div 
                        className="bg-purple-100 rounded-2xl p-8"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <motion.h2 
                            className="text-3xl font-bold text-gray-800 mb-10"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            Sobre mí
                        </motion.h2>
                        
                        <motion.div 
                            className="flex items-center gap-2 mb-7"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <motion.svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                className="text-weird-green w-7 h-7 stroke-current" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                strokeWidth="1.5"
                                animate={{ rotate: [0, 10, 0] }}
                                transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </motion.svg>
                            <p className="text-weird-green font-semibold text-md">Abierta a Trabajar</p>
                        </motion.div>
                        
                        <motion.p 
                            className="text-lg leading-relaxed text-gray-800 mb-6"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                        >
                            Bachiller académico con enfoque en 
                            mercadotecnia y técnica laboral en
                            Auxiliar en enfermería.
                        </motion.p>
                        
                        <motion.p 
                            className="text-lg leading-relaxed text-gray-800"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                        >
                            Carismática y comprometida con 
                            enfoque al logro, sentido de 
                            responsabilidad y capacidad de trabajo. 
                            Soy deportista apasionada por el 
                            baloncesto, lo que me ha enseñado 
                            disciplina y trabajo en equipo. Estoy 
                            comprometida con alcanzar mis 
                            objetivos personales y profesionales, con 
                            esfuerzo, equilibrio y constancia. 
                        </motion.p>
                    </motion.div>

                    {/* Sección Trayectoria */}
                    <motion.div 
                        className="bg-purple-100 rounded-2xl p-8"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <motion.h2 
                            className="text-2xl font-bold text-gray-800 mb-12"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            Mi trayectoria
                        </motion.h2>
                        
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <h3 className="text-md font-bold text-gray-800">Aux Enfermería</h3>
                            <p className="text-md text-gray-800 leading-relaxed mb-6">
                                Censa, Medellín feb 2025 - dic 2025
                            </p>
                        </motion.div>
                        
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                        >
                            <h3 className="text-md font-bold text-gray-800">Bachiller</h3>
                            <p className="text-md text-gray-800 leading-relaxed mb-6">    
                                Colegio Juan De La Cruz Posada, Villa Hermosa  
                                Medellín, 2024. 
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}