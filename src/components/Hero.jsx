import { Link } from 'react-router-dom';
import { Calendar, Users, Sparkles, Heart, Award, TrendingUp, Shield } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = ({ previewData }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Use preview data if available (for admin), otherwise use default
  const data = previewData || {
    title: 'Wujudkan Momen Pernikahan',
    titleHighlight: 'Impian',
    subtitle: 'Bersama Partner Terpercaya Anda',
    description: 'Dengan pengalaman lebih dari 8 tahun, kami telah membantu ratusan pasangan mewujudkan pernikahan impian mereka. Dari MC profesional hingga wedding organizer lengkap, kami siap membuat momen spesial Anda menjadi kenangan yang tak terlupakan.',
    imageUrl: '/assets/jeje mc 1.JPG',
    stats: [
      { number: '500+', label: 'Acara Sukses' },
      { number: '8+', label: 'Tahun Pengalaman' },
      { number: '99%', label: 'Kepuasan Klien' },
      { number: '200+', label: 'Pasangan Bahagia' }
    ],
    badges: [
      { icon: '🎓', text: 'Profesional Bersertifikat' },
      { icon: '😊', text: '500+ Klien Puas' },
      { icon: '⭐', text: '8+ Tahun Pengalaman' }
    ]
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-stone-900">
      {/* Premium background effects - sama dengan Gallery */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(251,191,36,0.2),transparent_50%)]"></div>
        <div className="absolute top-20 left-[5%] w-[500px] h-[500px] bg-amber-600/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-[5%] w-96 h-96 bg-orange-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Floating elements for depth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[15%] w-2 h-2 bg-amber-400 rounded-full opacity-60 animate-float"></div>
        <div className="absolute top-40 right-[20%] w-3 h-3 bg-orange-400 rounded-full opacity-40 animate-float-delayed"></div>
        <div className="absolute bottom-40 left-[25%] w-2 h-2 bg-amber-400 rounded-full opacity-50 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="text-left animate-fadeIn">
            {/* Premium badge - warna untuk dark background */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-amber-400/30 mb-8 shadow-xl hover:shadow-amber-400/50 transition-all duration-500 hover:scale-105">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                <Heart className="w-4 h-4 text-amber-400" fill="currentColor" />
              </div>
              <span className="text-amber-100 text-sm font-bold tracking-wide">MC & Wedding Organizer Profesional Sejak 2016</span>
              <Award className="w-4 h-4 text-amber-400" />
            </div>

            {/* Hero title - Perbaikan layout agar tidak terpotong */}
            <div className="mb-10" style={{ animationDelay: '0.2s' }}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-6 tracking-tight leading-tight">
                <span className="block mb-2 font-light text-white">
                  {data.title}
                </span>
                <span className="block bg-gradient-to-r from-amber-300 via-orange-300 to-amber-300 bg-clip-text text-transparent font-bold animate-gradient bg-[length:200%_auto] leading-tight">
                  {data.titleHighlight}
                </span>
                <span className="block text-2xl md:text-3xl lg:text-4xl font-light text-amber-100 mt-4 leading-relaxed">
                  {data.subtitle}
                </span>
              </h1>
            </div>

            {/* Premium subtitle */}
            <div className="mb-10 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-amber-400/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-[2px] bg-gradient-to-r from-amber-400 to-orange-400"></div>
                  <Sparkles className="w-5 h-5 text-amber-400" />
                </div>
                <p className="text-lg md:text-xl text-amber-100 leading-relaxed">
                  {data.description}
                </p>
              </div>
            </div>

            {/* Premium CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
              <button
                onClick={() => {
                  const phoneNumber = '6289516438703';
                  
                  // Try WhatsApp app intent first
                  try {
                    window.location.href = `whatsapp://send?phone=${phoneNumber}`;
                  } catch (error) {
                    // Fallback to API endpoint
                    try {
                      window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}`, '_blank');
                    } catch (fallbackError) {
                      // Final fallback to phone
                      window.location.href = `tel:+${phoneNumber}`;
                    }
                  }
                }}
                className="group relative px-8 py-4 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600 bg-[length:200%_auto] text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-amber-500/50 transform hover:scale-105 hover:-translate-y-1 transition-all duration-500 inline-flex items-center justify-center overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-700 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Calendar className="w-5 h-5 mr-3 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                <span className="relative z-10">Konsultasi Gratis Sekarang</span>
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-amber-400 to-orange-400 blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              </button>
              <button
                onClick={() => {
                  const servicesSection = document.getElementById('services');
                  if (servicesSection) {
                    const navHeight = 80;
                    const elementPosition = servicesSection.offsetTop - navHeight;
                    window.scrollTo({
                      top: elementPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="group relative px-8 py-4 bg-white/90 backdrop-blur-sm border-2 border-amber-600 text-amber-700 font-semibold rounded-xl hover:bg-amber-50 hover:border-amber-700 hover:shadow-xl transition-all duration-500 inline-flex items-center justify-center"
              >
                <Users className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
                <span>Lihat Paket Layanan</span>
              </button>
            </div>

            {/* Premium trust badges */}
            <div className="flex flex-wrap gap-4 animate-fadeIn" style={{ animationDelay: '0.8s' }}>
              {[
                { icon: Award, text: "Profesional Bersertifikat" },
                { icon: Shield, text: "500+ Klien Puas" },
                { icon: TrendingUp, text: "8+ Tahun Pengalaman" }
              ].map((badge, index) => {
                const IconComponent = badge.icon;
                return (
                  <div key={index} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2.5 rounded-xl shadow-lg border border-amber-400/30 hover:shadow-amber-400/50 hover:scale-105 transition-all duration-300">
                    <IconComponent className="w-5 h-5 text-amber-400" />
                    <span className="text-sm font-bold text-amber-100">{badge.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* MC Photo Section */}
          <div className="relative animate-fadeIn" style={{ animationDelay: '0.4s' }}>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-72 h-72 bg-gradient-to-br from-amber-400/20 to-orange-400/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-gradient-to-br from-amber-400/15 to-orange-400/15 rounded-full blur-3xl"></div>
            
            {/* Photo Container */}
            <div className="relative z-10">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-amber-500/30 backdrop-blur-sm">
                <img 
                  src={data.imageUrl} 
                  alt="MC Profesional JJ Events" 
                  className="w-full h-auto object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 via-transparent to-transparent"></div>
                
                {/* Badge on photo */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-stone-900/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-amber-400/30">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                        <Heart className="w-6 h-6 text-white" fill="currentColor" />
                      </div>
                      <div>
                        <div className="font-bold text-white text-lg">Master of Ceremony</div>
                        <div className="text-sm text-amber-200">Berpengalaman & Terpercaya</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating stats */}
              <div className="absolute -right-4 top-1/4 bg-stone-900/90 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-amber-400/30 hover:scale-110 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">500+</div>
                  <div className="text-xs font-bold text-amber-200">Acara Sukses</div>
                </div>
              </div>

              <div className="absolute -left-4 top-2/3 bg-stone-900/90 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-amber-400/30 hover:scale-110 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">99%</div>
                  <div className="text-xs font-bold text-amber-200">Kepuasan</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Premium stats grid - moved below */}
        <div className="mt-20 relative animate-fadeIn" style={{ animationDelay: '1s' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-3xl blur-2xl"></div>
          <div className="relative bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-amber-400/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {[
                { number: "500+", label: "Acara Sukses", sublabel: "Event Terlaksana", icon: Heart },
                { number: "8+", label: "Tahun Pengalaman", sublabel: "Profesional", icon: Sparkles },
                { number: "99%", label: "Kepuasan Klien", sublabel: "Rating Tertinggi", icon: Users },
                { number: "200+", label: "Pasangan Bahagia", sublabel: "Pernikahan Sukses", icon: Heart }
              ].map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="group text-center p-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-amber-400/20 hover:border-amber-400/40 hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 hover:-translate-y-2">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm font-bold text-white mb-1 tracking-wide">
                      {stat.label}
                    </div>
                    <div className="text-xs text-amber-200 font-medium">
                      {stat.sublabel}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;