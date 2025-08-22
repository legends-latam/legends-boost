const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center max-w-4xl mx-auto p-8">
        <h1 className="text-6xl font-bold mb-6 text-green-400">
          LEGENDS ESPORTS
        </h1>
        <p className="text-2xl mb-8 text-gray-300">
          ¿Por qué sigues en el mismo rank después de 1000+ partidas?
        </p>
        <p className="text-xl mb-8 text-blue-400">
          La IA analiza +50 variables por partida para mostrarte EXACTAMENTE qué te impide mejorar
        </p>
        <button className="bg-green-500 hover:bg-green-600 text-black font-bold py-4 px-8 rounded-lg text-xl transition-all">
          ANALIZA TU JUEGO GRATIS
        </button>
        <div className="mt-8 grid grid-cols-3 gap-6 text-center">
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="text-3xl font-bold text-green-400">68%</div>
            <div className="text-sm text-gray-400">Mejora Promedio</div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="text-3xl font-bold text-blue-400">2.3x</div>
            <div className="text-sm text-gray-400">Más Rápido</div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="text-3xl font-bold text-purple-400">15.2K</div>
            <div className="text-sm text-gray-400">Jugadores</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
