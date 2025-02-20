import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="p-5 bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">Carlos Patiño</h1>
        <div className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/projects">Proyectos</Link>
          <Link href="/contact">Contacto</Link>
        </div>
      </div>
    </nav>
  );
}
