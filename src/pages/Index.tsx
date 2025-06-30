import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import RaceResults from "../components/RaceResults";
import RecommendedHorses from "../components/RecommendedHorses";
import FeaturedSection from "../components/FeaturedSection";
import RightSidebar from "../components/RightSidebar";
import Footer from "../components/Footer";
import HorseGallery from "../components/HorseGallery";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <HeroSection />

      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-white text-2xl font-bold">
            Current Race Results
          </h2>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors">
              Harek
            </button>
            <div className="relative">
              <div className="w-8 h-8 rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="flex-1">
            <RaceResults />
            <div className="mt-8">
              <RecommendedHorses />
            </div>
            <div className="mt-8">
              <FeaturedSection />
            </div>
            <div className="mt-8">
              <HorseGallery />
            </div>
          </div>
          <div className="w-80">
            <RightSidebar />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
