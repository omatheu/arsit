export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Coluna Especiais */}
          <div className="space-y-3">
            <h3 className="font-bold text-lg mb-4">Especiais</h3>
            <ul className="space-y-2">
              {['SOBRE A EMPRESA', 'SERVIÇOS', 'CASES'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna Outros Links */}
          <div className="space-y-3">
            <h3 className="font-bold text-lg mb-4">Outros</h3>
            <ul className="space-y-2">
              {['CARREIRAS', 'CONTATO'].map((item) => (
                <li key={item}>
                  <a
                    href={item === 'CONTATO' ? '#contato' : '#'}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>


          {/* Coluna Contato */}
          <div className="space-y-3">
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <div className="text-gray-300 space-y-2">
              <p>+55 (11) 4502-1422</p>
              <p>
                R. Cruz das Almas, 301<br/>
                CEP 04330-060<br/>
                Vila Campestre - São Paulo, Brasil
              </p>
            </div>
          </div>

          {/* Coluna Redes Sociais */}
          <div className="space-y-3">
            <h3 className="font-bold text-lg mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              {/* Facebook */}
              <a href="https://www.facebook.com/ArsitTecnologia" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>

              {/* Twitter/X */}
              <a href="https://x.com/ArsitTecnologia" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/arsit/" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Direitos reservados */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Arsit todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}