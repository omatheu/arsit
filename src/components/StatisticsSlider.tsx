import { useEffect, useState } from 'react';

const statsData = [
  { value: 1500, prefix: '+ ', description: 'clientes em todo o Brasil' },
  { value: 86, prefix: '', description: 'NPS de satisfação em 2024' },
  { value: 10, prefix: '+ ', description: 'profissionais dedicados' },
  { value: 5800, prefix: '+ ', description: 'projetos entregues com sucesso' },
];

export default function StatisticsSlider() {
  const [animatedValues, setAnimatedValues] = useState(
    statsData.map(() => 0)
  );

  useEffect(() => {
    const intervals = statsData.map((stat, index) => {
      const increment = stat.value / 100; // controla a velocidade
      let currentValue = 0;

      return setInterval(() => {
        currentValue += increment;
        setAnimatedValues((prevValues) => {
          const newValues = [...prevValues];
          newValues[index] = Math.min(
            Math.floor(currentValue),
            stat.value
          );
          return newValues;
        });

        if (currentValue >= stat.value) {
          clearInterval(intervals[index]);
        }
      }, 20); // intervalo de atualização (ms)
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <div className="w-full mx-auto text-center py-10 px-4 lg:px-8 max-w-7xl">
      <div className="mb-12 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 leading-tight">
          Transformamos negócios com{' '}
          <span className="text-blue-600">tecnologia</span> e inovação.
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          Conte com a nossa experiência para acelerar a sua transformação digital.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {statsData.map((stat, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 border border-gray-100 hover:shadow-xl transition-shadow"
          >
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {stat.prefix}
              {animatedValues[index].toLocaleString()}
            </div>
            <p className="text-gray-700 text-sm lg:text-base leading-tight">
              {stat.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 mb-8 border-t border-blue-200 mx-auto w-24"></div>

      <div className="text-gray-500 text-sm">Dados atualizados em 2024</div>
    </div>
  );
}
