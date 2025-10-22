import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Play, Eye, Sparkles, Heart } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const photos = [
    { src: '/assets/jeje mc 1.JPG', alt: 'JJ MC Professional 1', category: 'mc' },
    { src: '/assets/jeje mc 2.JPG', alt: 'JJ MC Professional 2', category: 'mc' },
    { src: '/assets/jeje mc 3.JPG', alt: 'JJ MC Professional 3', category: 'mc' },
    { src: '/assets/jeje mc 4.JPG', alt: 'JJ MC Professional 4', category: 'mc' },
    { src: '/assets/jeje mc adat.JPG', alt: 'JJ MC Adat Wedding', category: 'wedding' },
    { src: '/assets/melayu.JPG', alt: 'JJ MC Melayu Wedding', category: 'wedding' },
    { src: '/assets/foto 27.JPG', alt: 'Wedding Event 27', category: 'wedding' },
    { src: '/assets/foto 28.JPG', alt: 'Wedding Event 28', category: 'wedding' },
  ];

  const openModal = (photo, index) => {
    setSelectedImage(photo);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % photos.length;
    setSelectedImage(photos[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex = currentIndex === 0 ? photos.length - 1 : currentIndex - 1;
    setSelectedImage(photos[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  return (
    <section id="gallery" className="py-20 bg-stone-900 relative overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(251,191,36,0.2),transparent_50%)]"></div>
        <div className="absolute top-20 left-[5%] w-[500px] h-[500px] bg-amber-600/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-[5%] w-96 h-96 bg-orange-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Premium section header */}
        <div className="text-center mb-16">
          {/* Premium badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-amber-400/30 mb-10 shadow-xl">
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
            <Heart className="w-4 h-4 text-amber-400" fill="currentColor" />
            <span className="text-amber-100 text-sm font-bold tracking-wider">Portfolio Kami</span>
          </div>
          
          {/* Premium title */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-8 tracking-tight leading-tight">
            <span className="block mb-3">Galeri Momen</span>
            <span className="block bg-gradient-to-r from-amber-300 via-orange-300 to-amber-300 bg-clip-text text-transparent font-bold animate-gradient bg-[length:200%_auto]">
              Berkesan
            </span>
          </h2>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-amber-400"></div>
            <Sparkles className="w-5 h-5 text-amber-400" />
            <div className="w-20 h-[2px] bg-gradient-to-l from-transparent via-amber-400 to-amber-400"></div>
          </div>
          
          <p className="text-lg md:text-xl text-amber-100 leading-relaxed max-w-3xl mx-auto">
            Setiap acara memiliki <span className="font-bold text-amber-300">cerita yang unik</span>. Lihat bagaimana kami menciptakan momen tak terlupakan dengan sentuhan profesional
          </p>
        </div>

        {/* Premium Photo Grid with masonry layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer border-2 border-amber-500/30 shadow-2xl hover:shadow-amber-500/50 hover:border-amber-400/70"
              onClick={() => openModal(photo, index)}
            >
              {/* Image */}
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              />
              
              {/* Elegant gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 right-2 md:right-4">
                  <div className="text-white text-xs md:text-sm font-light mb-1">
                    {photo.category === 'mc' ? 'MC Professional' : 'Wedding Event'}
                  </div>
                  <div className="text-white/70 text-xs font-light line-clamp-1">
                    {photo.alt}
                  </div>
                </div>
              </div>
              
              {/* Elegant hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/30 to-orange-500/30 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center border border-stone-200 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Eye className="w-5 h-5 md:w-7 md:h-7 text-amber-600" />
                </div>
              </div>

              {/* Category badge */}
              <div className="absolute top-2 md:top-4 left-2 md:left-4 px-2 md:px-3 py-1 bg-white/90 backdrop-blur-md rounded-full border border-stone-200 shadow-md">
                <span className="text-stone-700 text-xs font-light">
                  {photo.category === 'mc' ? 'MC' : 'Wedding'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Elegant CTA section */}
        <div className="text-center bg-white/90 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-12 border border-stone-200 shadow-xl">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-stone-800 mb-4 md:mb-6 tracking-wide">
              <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Ingin Melihat
              </span>
              <br />
              <span className="text-stone-700">Portfolio Lengkap?</span>
            </h3>
            
            <p className="text-stone-600 font-light leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
              Dapatkan akses ke galeri eksklusif dengan ratusan momen bersejarah yang telah kami dokumentasikan
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <button className="px-6 md:px-10 py-3 md:py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-light tracking-wide rounded-xl md:rounded-2xl hover:from-amber-700 hover:to-orange-700 transform hover:scale-105 transition-all duration-500 shadow-xl flex items-center justify-center text-sm md:text-base">
                <Play className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3" />
                <span>Portfolio Lengkap</span>
              </button>
              
              <button className="px-6 md:px-10 py-3 md:py-4 border-2 border-stone-300 text-stone-700 font-light tracking-wide rounded-xl md:rounded-2xl hover:bg-stone-100 hover:border-stone-400 transition-all duration-300 flex items-center justify-center text-sm md:text-base">
                <Sparkles className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3" />
                <span>Video Highlight</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div className="relative max-w-6xl max-h-full">
            {/* Premium image container */}
            <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-full object-contain"
              />
              
              {/* Glass morphism overlay for controls */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none">
              </div>
            </div>
            
            {/* Premium close button */}
            <button
              onClick={closeModal}
              className="absolute -top-2 -right-2 w-12 h-12 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 border border-white/30 hover:scale-110"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Premium navigation buttons */}
            <button
              onClick={prevImage}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 border border-white/30 hover:scale-110"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 border border-white/30 hover:scale-110"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Premium image info */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/20 backdrop-blur-xl rounded-2xl px-8 py-4 text-white border border-white/30">
                <div className="flex items-center justify-between">
                  <div className="text-left">
                    <div className="text-lg font-light mb-1">
                      {selectedImage.alt}
                    </div>
                    <div className="text-sm text-white/70 font-light">
                      {selectedImage.category === 'mc' ? 'MC Professional Event' : 'Wedding Ceremony'}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-light text-white/70">
                      {currentIndex + 1} of {photos.length}
                    </div>
                    <div className="flex items-center mt-1">
                      {photos.map((_, index) => (
                        <div
                          key={index}
                          className={`w-2 h-2 rounded-full mx-1 transition-all duration-300 ${
                            index === currentIndex 
                              ? 'bg-white scale-125' 
                              : 'bg-white/40 hover:bg-white/60'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;