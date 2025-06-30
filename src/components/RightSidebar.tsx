const RightSidebar = () => {
  return (
    <div className="space-y-6">
      <div className="bg-gray-800 rounded-lg p-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1544737151439-6dc4ac2b9319?w=400&h=300&fit=crop&q=80"
            alt="Horse racing background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-800"></div>
        </div>
        <div className="relative z-10">
          <h3 className="text-white text-lg font-bold mb-4">
            Past Perf Horses
          </h3>
          <h4 className="text-white text-base font-semibold mb-3">
            Participations
          </h4>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <tbody className="space-y-1">
                <tr className="border-b border-gray-700">
                  <td className="text-gray-300 py-1">Trechilis</td>
                  <td className="text-white text-right py-1">6,78</td>
                  <td className="text-white text-right py-1">19,06</td>
                  <td className="text-white text-right py-1">1,90</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="text-gray-300 py-1">Seac'lleng</td>
                  <td className="text-white text-right py-1">8,96</td>
                  <td className="text-white text-right py-1">00,06</td>
                  <td className="text-white text-right py-1">15,00</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="text-gray-300 py-1">Tehcentis</td>
                  <td className="text-white text-right py-1">9,77</td>
                  <td className="text-white text-right py-1">32,06</td>
                  <td className="text-white text-right py-1">26,00</td>
                </tr>
                <tr>
                  <td className="text-gray-300 py-1">Helec Mtriru</td>
                  <td className="text-white text-right py-1">1,98</td>
                  <td className="text-white text-right py-1">39,03</td>
                  <td className="text-white text-right py-1">23,00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg p-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&q=80"
            alt="Racing statistics background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-800"></div>
        </div>
        <div className="relative z-10">
          <h3 className="text-white text-lg font-bold mb-4">Featured Info</h3>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-gray-300 text-left py-1">Racecourse</th>
                  <th className="text-gray-300 text-right py-1">Jockeys</th>
                  <th className="text-gray-300 text-right py-1">Trained</th>
                  <th className="text-gray-300 text-right py-1">Horses</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-700">
                  <td className="text-gray-300 py-1">Tellarcrimlia</td>
                  <td className="text-white text-right py-1">03,15</td>
                  <td className="text-white text-right py-1">2,86</td>
                  <td className="text-white text-right py-1">22,00</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="text-gray-300 py-1">Telit misimign</td>
                  <td className="text-white text-right py-1">22,18</td>
                  <td className="text-white text-right py-1">2,82</td>
                  <td className="text-white text-right py-1">28,00</td>
                </tr>
                <tr>
                  <td className="text-gray-300 py-1">Taritzemelgien</td>
                  <td className="text-white text-right py-1">33,18</td>
                  <td className="text-white text-right py-1">4,95</td>
                  <td className="text-white text-right py-1">22,00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg p-6">
        <h3 className="text-white text-lg font-bold mb-4">Carry-over Info</h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-gray-300 text-left py-1">Main</th>
                <th className="text-gray-300 text-right py-1">Main</th>
                <th className="text-gray-300 text-right py-1">Surprise</th>
                <th className="text-gray-300 text-right py-1">Sabet</th>
                <th className="text-gray-300 text-right py-1">Jackpot</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-gray-300 py-1">Credit</td>
                <td className="text-white text-right py-1">105,00</td>
                <td className="text-white text-right py-1">4,00</td>
                <td className="text-white text-right py-1">3,00</td>
                <td className="text-white text-right py-1">-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
