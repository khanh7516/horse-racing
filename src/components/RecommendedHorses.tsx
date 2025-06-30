const RecommendedHorses = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-gray-800/70 to-transparent"></div>
        </div>
        <div className="relative z-10">
          <h3 className="text-white text-xl font-bold mb-2">Featured Horses</h3>
          <p className="text-gray-300 mb-1">Cursed race Picks</p>
          <p className="text-gray-300">Race Picks</p>
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop&q=80"
            alt="AI-analyzed horse performance"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-gray-800/70 to-transparent"></div>
        </div>
        <div className="relative z-10">
          <h3 className="text-white text-xl font-bold mb-2">
            Potential Horses
          </h3>
          <p className="text-gray-300 mb-1">AI-Based Potential Horse</p>
          <p className="text-gray-300">Predictions</p>
        </div>
      </div>
    </div>
  );
};

export default RecommendedHorses;
