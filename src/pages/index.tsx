import MainLayout from "../layouts/MainLayout";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <MainLayout>
      <section className="flex flex-col items-center justify-center min-h-screen text-center bg-gradient-to-b from-gray-900 to-gray-800 text-white px-4">
        <motion.h1 
          className="text-5xl md:text-6xl font-extrabold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Bienvenido a mi Portafolio
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl text-gray-300 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Explora mis proyectos en inteligencia artificial y procesamiento de audio.
        </motion.p>
        <a href="/projects" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
          Ver Proyectos
        </a>
      </section>
    </MainLayout>
  );
}
