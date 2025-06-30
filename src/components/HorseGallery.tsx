const HorseGallery = () => {
  const horseImages = [
    {
      src: "https://plus.unsplash.com/premium_photo-1661964201700-be5a77a1e7e4?q=80&w=1361&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Champion thoroughbred racehorse",
      title: "Thunder Strike",
      stats: "12 Wins • 4 Places",
    },
    {
      src: "https://images.unsplash.com/photo-1516673699707-4f2a243fafaf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFjZSUyMGhvcnNlfGVufDB8fDB8fHww",
      alt: "Jockey riding racehorse",
      title: "Lightning Bolt",
      stats: "8 Wins • 6 Places",
    },
    {
      src: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=300&h=200&fit=crop&q=80",
      alt: "Horse racing competition",
      title: "Wind Runner",
      stats: "15 Wins • 3 Places",
    },
    {
      src: "https://images.unsplash.com/photo-1526094798790-1df6f28275cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFjZSUyMGhvcnNlfGVufDB8fDB8fHww",
      alt: "Racing horses on track",
      title: "Storm Chaser",
      stats: "6 Wins • 8 Places",
    },
  ];

  return (
    <div className="bg-gray-800 rounded-lg p-6 mt-8">
      <h3 className="text-white text-xl font-bold mb-6 text-center">
        Featured Racing Horses
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {horseImages.map((horse, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg"
          >
            <img
              src={horse.src}
              alt={horse.alt}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-bold text-lg">{horse.title}</h4>
                <p className="text-sm text-gray-300">{horse.stats}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorseGallery;
