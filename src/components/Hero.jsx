import { Link } from 'react-router-dom';
import { Star, Award, Calendar, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-primary-950 mb-6 tracking-tight leading-none">
              Wujudkan
              <br />
              <span className="font-normal">Hari Sempurna</span>
              <br />
              <span className="text-primary-400 font-extralight">Yang Tak Terlupakan</span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="max-w-2xl mx-auto mb-12">
            <p className="text-lg text-primary-600 font-light leading-relaxed">
              Layanan Master of Ceremony & Wedding Organizer Profesional
            </p>
            <p className="text-base text-primary-500 mt-2 font-light">
              Menciptakan momen ajaib untuk acara istimewa Anda
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link
              to="/booking"
              className="btn-primary inline-flex items-center justify-center group"
            >
              <Calendar className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
              Konsultasi Gratis
            </Link>
            <Link
              to="#services"
              className="btn-secondary inline-flex items-center justify-center group"
            >
              <Users className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
              Lihat Layanan
            </Link>
          </div>

          {/* Stats - Clean & Minimal */}
          <div className="border-t border-primary-100 pt-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-light text-primary-950 mb-2">100+</div>
                <div className="text-sm text-primary-500 font-light tracking-wider uppercase">Acara Sukses</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-light text-primary-950 mb-2">5+</div>
                <div className="text-sm text-primary-500 font-light tracking-wider uppercase">Tahun Pengalaman</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-light text-primary-950 mb-2">98%</div>
                <div className="text-sm text-primary-500 font-light tracking-wider uppercase">Kepuasan Klien</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-light text-primary-950 mb-2">50+</div>
                <div className="text-sm text-primary-500 font-light tracking-wider uppercase">Pasangan Bahagia</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-[1px] h-16 bg-primary-300">
          <div className="w-[1px] h-4 bg-primary-900 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;