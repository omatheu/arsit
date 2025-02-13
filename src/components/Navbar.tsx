import { useState } from 'react';
import { Search } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center py-4 px-6 bg-white shadow-sm">
      <a href="/">
        <img src="/logo-completo.png" alt="Logo Arsit" className="h-8 w-auto" />
      </a>

      <div className="hidden md:flex space-x-8 text-sm text-black">
        <a href="#" className="hover:text-sky-600">A EMPRESA</a>
        <div className="relative">
          <button onClick={() => setIsOpen(!isOpen)} className="hover:text-sky-600 flex items-center">
            SERVIÇOS <span className="ml-1 text-sky-600">&#x25BE;</span>
          </button>
          {isOpen && (
            <div className="absolute bg-white shadow-lg mt-2 rounded-lg p-2 space-y-2">
              <a href="#" className="block hover:text-sky-600">Serviço 1</a>
              <a href="#" className="block hover:text-sky-600">Serviço 2</a>
            </div>
          )}
        </div>
        <a href="#" className="hover:text-sky-600">PROJETOS</a>
        <a href="#" className="hover:text-sky-600">PODCAST</a>
        <a href="#" className="hover:text-sky-600">BLOG</a>
        <a href="#" className="hover:text-sky-600">INOVAÇÃO</a>
        <a href="#" className="hover:text-sky-600">CARREIRAS</a>
        <a href="#" className="hover:text-sky-600">CONTATO</a>
      </div>

      <div className="flex items-center space-x-4">
        <Search className="text-sky-600 cursor-pointer" size={20} />
        <span className="text-sm">
          <a href="#" className="font-bold">EN</a> / <a href="#" className="hover:underline">ES</a>
        </span>
      </div>
    </nav>
  );
}

