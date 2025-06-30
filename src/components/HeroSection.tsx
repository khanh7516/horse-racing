const HeroSection = () => {
  return (
    <div className="relative bg-gray-900">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1526094798790-1df6f28275cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFjZSUyMGhvcnNlfGVufDB8fDB8fHww)`,
        }}
      ></div>

      <div className="relative z-20 flex items-center justify-center h-full px-6 pt-8">
        <div className="h-[90%] bg-gray-800/90 p-6 rounded-lg max-w-2xl w-full">
          <h2 className="text-white text-xl font-bold mb-4 text-center">
            Upcoming Race Schedules
          </h2>

          <div className="grid grid-cols-4 gap-4 mb-6 text-sm">
            <div className="text-center border-r border-gray-500">
              <div className="text-gray-400">DA7</div>
              <div className="text-white font-bold">1DM3</div>
            </div>
            <div className="text-center border-r border-gray-500">
              <div className="text-gray-400">DD47</div>
              <div className="text-white font-bold">1DH2</div>
            </div>
            <div className="text-center border-r border-gray-500">
              <div className="text-gray-400">TATS</div>
              <div className="text-white font-bold">2DDG</div>
            </div>
            <div className="text-center">
              <div className="text-gray-400">DA4S</div>
              <div className="text-white font-bold">2DH1</div>
            </div>
          </div>

          <div className="bg-red-500 rounded-t overflow-hidden">
            <div className="grid grid-cols-4 text-center text-white text-sm">
              <div className="bg-red-600 py-2">Trifecta</div>
              <div className="bg-red-500 py-2">Perfecta</div>
              <div className="bg-red-500 py-2">Tricast</div>
              <div className="bg-red-600 py-2">Odds</div>
            </div>
          </div>

          <div className="mb-4 bg-gray-900 px-3 py-2">
            <div className="grid grid-cols-7 mb-3">
              <div className="col-span-2 text-white">Grant Barns</div>
              <div className="text-center text-white">19</div>
              <div className="text-center text-white">1.02</div>
              <div className="text-center text-white">19</div>
              <div className="text-center text-white">28</div>
              <div className="text-center text-white">19 2</div>
            </div>
            <div className="grid grid-cols-7">
              <div className="col-span-2 text-green-400">Atlantic Victory</div>
              <div className="text-center text-green-400">2</div>
              <div className="text-center text-green-400">2.56</div>
              <div className="text-center text-green-400">3</div>
              <div className="text-center text-green-400">6</div>
              <div className="text-center text-green-400">19 2</div>
            </div>
            <div className="text-gray-400 text-xs mt-1">LOADING</div>
          </div>

          <div className="mt-4 space-y-2 px-3">
            <div className="flex justify-between items-center text-sm pb-2 border-b border-gray-700">
              <span className="text-gray-300">Past Performance</span>
              <div className="flex space-x-1">
                <span className="bg-green-600 text-white px-3 py-1 text-xs rounded">
                  EXACTA
                </span>
                <span className="bg-green-600 text-white px-3 py-1 text-xs rounded">
                  TRIFECTA
                </span>
              </div>
            </div>

            <div className="flex justify-between items-center text-sm py-2 border-b border-gray-700">
              <span className="text-gray-300">Racetrack</span>
              <span className="text-white">20</span>
              <span className="bg-white text-black px-3 py-1 text-xs rounded">
                C663
              </span>
            </div>

            <div className="flex justify-between items-center text-sm py-2 border-b border-gray-700">
              <span className="text-gray-300">Circuit Race</span>
              <span className="text-white">29</span>
              <span className="bg-white text-black px-3 py-1 text-xs rounded">
                H161
              </span>
            </div>

            <div className="flex justify-between items-center text-sm py-2 border-b border-gray-700">
              <span className="text-gray-300">Dirt Racing</span>
              <span className="text-white">19</span>
              <span className="bg-white text-black px-3 py-1 text-xs rounded">
                H144
              </span>
            </div>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center space-x-2 mt-6">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
