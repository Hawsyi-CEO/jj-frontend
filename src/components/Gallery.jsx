import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Play, Eye, Sparkles, Heart } from 'lucide-react';

// Import foto-foto
import foto1 from '../assets/foto/jeje mc 1.JPG';
import foto2 from '../assets/foto/jeje mc 2.JPG';
import foto3 from '../assets/foto/jeje mc 3.JPG';
import foto4 from '../assets/foto/jeje mc 4.JPG';
import foto5 from '../assets/foto/jeje mc 5.JPG';
import foto6 from '../assets/foto/jeje mc 6.JPG';
import foto7 from '../assets/foto/jeje mc 7.JPG';
import foto8 from '../assets/foto/jeje mc 8.JPG';
import foto9 from '../assets/foto/jeje mc 9.JPG';
import foto10 from '../assets/foto/jeje mc 10.JPG';
import foto11 from '../assets/foto/jejej mc 11.JPG';
import foto12 from '../assets/foto/jeje mc 12.JPG';
import fotoAdat from '../assets/foto/jeje mc adat.JPG';
import fotoMelayu from '../assets/foto/melayu.JPG';
import foto27 from '../assets/foto/foto 27.JPG';
import foto28 from '../assets/foto/foto 28.JPG';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const photos = [
    { src: foto1, alt: 'JJ MC Professional 1', category: 'mc' },
    { src: foto2, alt: 'JJ MC Professional 2', category: 'mc' },
    { src: foto3, alt: 'JJ MC Professional 3', category: 'mc' },
    { src: foto4, alt: 'JJ MC Professional 4', category: 'mc' },
    { src: fotoAdat, alt: 'JJ MC Adat Wedding', category: 'wedding' },
    { src: fotoMelayu, alt: 'JJ MC Melayu Wedding', category: 'wedding' },
    { src: foto27, alt: 'Wedding Event 27', category: 'wedding' },
    { src: foto28, alt: 'Wedding Event 28', category: 'wedding' },
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
    <section id="gallery" className="py-24 bg-gradient-to-br from-orange-50 via-amber-50 to-stone-100 relative overflow-hidden">
      {/* Elegant background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-16 w-96 h-96 bg-gradient-to-r from-orange-200/25 to-amber-200/25 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-16 w-80 h-80 bg-gradient-to-r from-amber-200/20 to-stone-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-gradient-to-r from-orange-100/15 to-amber-100/15 rounded-full blur-3xl"></div>
      </div>

      {/* Soft overlay */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Elegant section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-stone-200 mb-8 shadow-lg">
            <Heart className="w-4 h-4 text-amber-600 mr-2" />
            <span className="text-stone-700 text-sm font-light tracking-wide">Momen Berkesan</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-light text-stone-800 mb-8 tracking-tight">
            <span className="text-stone-800">
              Momen
            </span>
            <br />
            <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 bg-clip-text text-transparent">
              Bersejarah
            </span>
          </h2>
          
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-8"></div>
          
          <p className="text-xl text-stone-600 font-light leading-relaxed max-w-3xl mx-auto">
            Setiap acara memiliki cerita yang unik. Lihat bagaimana kami menciptakan momen tak terlupakan dengan sentuhan profesional
          </p>
        </div>

        {/* Premium Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 mb-16">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-xl md:rounded-2xl cursor-pointer border border-stone-200 shadow-lg hover:shadow-xl"
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