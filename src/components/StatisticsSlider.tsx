const statsData = [
  { value: '+ 1.500', description: 'clientes' },
  { value: '86', description: 'NPS 2024' },
  { value: '7 das 10', description: 'maiores empresas do Brasil são clientes da ARSIT' },
  { value: '10', description: 'países em atuação' },
  { value: '+ 25', description: 'unidades na América Latina' },
  { value: '+ 5.800', description: 'colaboradores no Brasil e demais países na América Latina' },
  { value: '+ 1.900', description: 'especialistas em Cloud' },
  { value: '+ 800', description: 'Desenvolvedores, UX e Agilistas' },
  { value: '+ 260', description: 'especialistas de SAP' },
  { value: '+ 250', description: 'especialistas de Cyber' },
];

export default function StatisticsSlider() {
    return (
      <div className="w-full mx-auto text-center py-10 px-4 lg:px-8 max-w-7xl">
        {/* Seção de texto introdutório */}
        <div className="mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 leading-tight">
            Somos o catalisador da <span className="text-blue-600">transformação</span>, conectando <span className="text-blue-600">tecnologia</span> para um mundo melhor.
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Se tem um desafio para fazer a jornada pra nuvem ou transformar o seu negócio com a tecnologia, nós temos a experiência para te apoiar!
          </p>
        </div>

        {/* Grid de estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {statsData.map((stat, index) => (
            <div 
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <p className="text-gray-700 text-sm lg:text-base leading-tight">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Linha divisória */}
        <div className="mt-12 mb-8 border-t border-blue-200 mx-auto w-24"></div>

        {/* Texto adicional */}
        <div className="text-gray-500 text-sm">
          Dados atualizados em 2024
        </div>
      </div>
    );
}