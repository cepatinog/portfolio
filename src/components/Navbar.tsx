import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
  const controls = useAnimation();
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        // Esconder Navbar con difuminado al bajar
        controls.start({ y: -20, opacity: 0, filter: "blur(10px)" });
      } else {
        // Mostrar Navbar con efecto de difuminado al subir
        controls.start({ y: 0, opacity: 1, filter: "blur(0px)" });
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, controls]);

  return (
    <motion.nav 
      className="fixed top-0 w-full h-16 bg-gray-900 text-white shadow-lg z-50 backdrop-blur-lg"
      initial={{ y: -100, opacity: 0, filter: "blur(10px)" }}
      animate={controls}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto flex justify-between items-center px-6 h-full">
        <h1 className="text-2xl font-bold">Carlos Patiño</h1>
        <div className="flex space-x-6">
          <Link href="/" className="hover:text-blue-400 transition duration-300">
            Home
          </Link>
          <Link href="/projects" className="hover:text-blue-400 transition duration-300">
            Proyectos
          </Link>
          <Link href="/contact" className="hover:text-blue-400 transition duration-300">
            Contacto
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
