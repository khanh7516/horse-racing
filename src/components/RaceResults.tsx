const RaceResults = () => {
  return (
    <div>
      <div className="bg-gray-800 rounded-lg p-6">
        <div className="flex space-x-6">
          <div className="w-1/2">
            <h3 className="text-white text-lg font-semibold mb-4">
              Recommended Horses
            </h3>

            <div className="space-y-3">
              <div className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <span>AI-Driven Horses</span>
                </div>
                <span className="text-white text-lg">›</span>
              </div>

              <div className="bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                    </svg>
                  </div>
                  <span>AI-Driven Insights</span>
                </div>
                <span className="text-white text-lg">›</span>
              </div>

              <div className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                    </svg>
                  </div>
                  <span>AI-Driven Insights</span>
                </div>
                <span className="text-white text-lg">›</span>
              </div>
            </div>
          </div>

          <div className="w-1/2">
            <img
              src="https://plus.unsplash.com/premium_photo-1661964201700-be5a77a1e7e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFjZSUyMGhvcnNlfGVufDB8fDB8fHww"
              alt="Thoroughbred race horses during competition"
              className="w-full h-60 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RaceResults;
