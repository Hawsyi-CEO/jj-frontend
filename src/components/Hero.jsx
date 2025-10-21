import { Link } from 'react-router-dom';
import { Calendar, Users, Sparkles, Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-12 md:py-20">
      {/* Elegant cream background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-stone-100 to-orange-100"></div>
      
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-gradient-to-r from-amber-200/30 to-orange-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-gradient-to-r from-stone-200/20 to-amber-200/25 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-orange-100/15 to-amber-100/15 rounded-full blur-3xl"></div>
      </div>

      {/* Soft cream overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-stone-50/40 to-transparent"></div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Elegant badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-amber-200 mb-8 shadow-lg">
            <Heart className="w-4 h-4 text-amber-600 mr-2" />
            <span className="text-stone-700 text-sm font-light tracking-wide">Elegant Wedding Services</span>
          </div>

          {/* Hero title with elegant typography */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-stone-800 mb-8 tracking-tight leading-tight">
              <span className="block text-stone-800 mb-2">
                Momen
              </span>
              <span className="block bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 bg-clip-text text-transparent font-normal mb-4">
                Bersejarah
              </span>
              <span className="block text-2xl md:text-3xl lg:text-4xl font-light text-stone-600">
                Dimulai dari Sini
              </span>
            </h1>
          </div>

          {/* Elegant subtitle */}
          <div className="max-w-4xl mx-auto mb-20">
            <p className="text-lg md:text-xl text-stone-700 font-light leading-relaxed mb-6">
              Master of Ceremony & Wedding Organizer Profesional
            </p>
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-8"></div>
            <p className="text-base md:text-lg text-stone-600 font-light leading-relaxed px-4">
              Menciptakan pengalaman tak terlupakan dengan sentuhan elegan di setiap momen berharga Anda
            </p>
          </div>

          {/* Elegant CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-24 px-4">
            <Link
              to="/booking"
              className="group relative px-8 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-light tracking-wide rounded-lg hover:from-amber-700 hover:to-orange-700 transform hover:scale-105 hover:-translate-y-1 transition-all duration-500 inline-flex items-center justify-center shadow-lg"
            >
              <Calendar className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              <span>Konsultasi Gratis</span>
            </Link>
            <Link
              to="#services"
              className="group px-8 py-3 border-2 border-stone-300 text-stone-700 font-light tracking-wide rounded-lg hover:bg-stone-100 hover:border-stone-400 transition-all duration-300 inline-flex items-center justify-center"
            >
              <Users className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
              <span>Lihat Layanan</span>
            </Link>
          </div>

          {/* Elegant stats */}
          <div className="border-t border-stone-300 pt-12 px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
              {[
                { number: "500+", label: "Acara Sukses", icon: Heart },
                { number: "8+", label: "Tahun Pengalaman", icon: Sparkles },
                { number: "99%", label: "Kepuasan Klien", icon: Users },
                { number: "200+", label: "Pasangan Bahagia", icon: Heart }
              ].map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="group text-center p-4 md:p-6 rounded-lg bg-white/70 backdrop-blur-sm border border-stone-200 hover:bg-white/90 hover:shadow-lg transition-all duration-500">
                    <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-amber-600 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-2xl md:text-3xl font-light text-stone-800 mb-1 group-hover:text-amber-700 transition-colors duration-300">
                      {stat.number}
                    </div>
                    <div className="text-xs md:text-sm text-stone-600 font-light tracking-wide uppercase">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Elegant scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center">
          <div className="w-[2px] h-16 bg-gradient-to-b from-amber-500 to-transparent">
            <div className="w-[2px] h-6 bg-stone-700 animate-bounce"></div>
          </div>
          <span className="text-stone-500 text-xs mt-2 font-light">Scroll</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;