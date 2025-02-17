import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center py-4 px-6 bg-white shadow-sm">
      <a href="/">
        <img src="/logo-completo.png" alt="Logo Arsit" className="h-8 w-auto" />
      </a>

      <div className="hidden md:flex space-x-8 text-sm text-black">
        <a href="/" className="hover:text-sky-600">A EMPRESA</a>
        <div className="relative">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="hover:text-sky-600 flex items-center"
          >
            SERVIÇOS <span className="ml-1 text-sky-600">&#x25BE;</span>
          </button>
          {isOpen && (
            <div className="absolute bg-white shadow-lg mt-2 rounded-lg p-2 space-y-2 min-w-[220px]">
              <a href="#redes" className="block hover:text-sky-600 p-2">
                Redes cabeadas e Wi-Fi empresarial
              </a>
              <a href="#servidores" className="block hover:text-sky-600 p-2">
                Servidores e Virtualização
              </a>
              <a href="#cftv" className="block hover:text-sky-600 p-2">
                CFTV e Segurança Eletrônica
              </a>
              <a href="#voip" className="block hover:text-sky-600 p-2">
                Telefonia IP/VoIP
              </a>
              <a href="#suporte" className="block hover:text-sky-600 p-2">
                Suporte Técnico - Computadores/Notebooks
              </a>
              <a href="#cloud" className="block hover:text-sky-600 p-2">
                Soluções em Nuvem e Backup
              </a>
              <a href="#consultoria" className="block hover:text-sky-600 p-2">
                Consultoria em TI
              </a>
            </div>
          )}
        </div>
        <a href="/projects" className="hover:text-sky-600">PROJETOS</a>
        <a href="/careers" className="hover:text-sky-600">CARREIRAS</a>
        <a href="/contact" className="hover:text-sky-600">CONTATO</a>
      </div>

      {/* <div className="flex items-center space-x-4">
        <Search className="text-sky-600 cursor-pointer" size={20} />
      </div> */}
    </nav>
  );
}

