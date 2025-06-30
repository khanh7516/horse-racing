import { Button } from "@/components/ui/button";

const FeaturedSection = () => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 mt-8">
      <div className="grid grid-cols-2 gap-8">
        {/* Featured Info Section */}
        <div
          className="relative bg-cover bg-center bg-no-repeat rounded-lg overflow-hidden min-h-[200px]"
          style={{
            backgroundImage:
              "url('https://media.istockphoto.com/id/494957334/photo/horse-racing.webp?a=1&b=1&s=612x612&w=0&k=20&c=BYksiXklnq5eWqmsATvIXiMFfqbcCLeJ9Wf5tHaKV4g=')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          <div className="relative z-10 p-6 flex flex-col justify-between h-full">
            <h3 className="text-white text-xl font-bold mb-6">Featured Info</h3>
            <div className="flex space-x-3 mt-auto">
              <Button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 text-sm rounded-md font-medium">
                Pie
              </Button>
              <Button
                variant="outline"
                className="border-gray-400 text-gray-300 hover:bg-gray-600 hover:text-white bg-transparent px-4 py-2 text-sm rounded-md font-medium"
              >
                Parricis
              </Button>
            </div>
          </div>
        </div>

        {/* Carry-over Info Section */}
        <div>
          <h3 className="text-white text-xl font-bold mb-4">Carry-over Info</h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <span className="text-yellow-400 font-semibold text-sm">$7M</span>
              <span className="text-gray-300 text-sm">Surprise</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-yellow-400 font-semibold text-sm">$7M</span>
              <span className="text-gray-300 text-sm">Jurplect</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-yellow-400 font-semibold text-sm">$7V</span>
              <span className="text-gray-300 text-sm">Jackpot</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
