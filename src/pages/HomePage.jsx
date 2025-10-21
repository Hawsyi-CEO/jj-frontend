import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import Gallery from '../components/Gallery';
import { Star, Heart, Phone, Mail, Instagram, MapPin } from 'lucide-react';

const HomePage = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <ServicesSection />
      <Gallery />

      {/* Premium Testimonials Section */}
      <section id="testimonials" className="py-20 bg-stone-900 relative overflow-hidden">
        {/* Premium Background effects - sama dengan Gallery */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(251,191,36,0.2),transparent_50%)]"></div>
          <div className="absolute top-20 left-[5%] w-[500px] h-[500px] bg-amber-600/15 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-[5%] w-96 h-96 bg-orange-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            {/* Premium badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-amber-400/30 mb-10 shadow-xl hover:shadow-amber-400/50 transition-all duration-500">
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
              <Star className="w-4 h-4 text-amber-400" fill="currentColor" />
              <span className="text-amber-100 text-sm font-bold tracking-wider">Testimoni Klien</span>
              <Star className="w-4 h-4 text-amber-400" fill="currentColor" />
            </div>
            
            {/* Premium title */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-8 tracking-tight leading-tight">
              <span className="block mb-3 text-white">Kata Klien</span>
              <span className="block bg-gradient-to-r from-amber-300 via-orange-300 to-amber-300 bg-clip-text text-transparent font-bold animate-gradient bg-[length:200%_auto]">
                Yang Bahagia
              </span>
            </h2>
            
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-amber-400"></div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400" fill="currentColor" />
                ))}
              </div>
              <div className="w-20 h-[2px] bg-gradient-to-l from-transparent via-amber-400 to-amber-400"></div>
            </div>
            
            <p className="text-amber-100 leading-relaxed max-w-2xl mx-auto text-lg md:text-xl">
              Kepercayaan dan kepuasan klien adalah <span className="font-bold text-amber-300">prioritas utama</span> kami dalam setiap acara
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                name: "Sarah & David",
                event: "Resepsi Pernikahan 2024",
                text: "Gila sih, JJ Events bikin hari pernikahan kita sempurna banget! Koordinasinya rapi pol, MC-nya profesional dan bikin suasana makin hidup. Tamu-tamu pada puas semua. Recommended banget deh!",
                rating: 5,
                image: "👰",
                color: "rose"
              },
              {
                name: "Keluarga Besar Wijaya",
                event: "Acara Pernikahan Adat 2024",
                text: "Pokoknya top markotop! Dari awal konsultasi sampai hari H, semuanya lancar jaya. MC-nya paham banget budaya dan adat, bikin acara sakral tapi tetap meriah. Mantap jiwa!",
                rating: 5,
                image: "🏢",
                color: "amber"
              },
              {
                name: "Rina & Ahmad",
                event: "Lamaran & Tunangan 2024",
                text: "Worth it banget! Planning-nya detail, hari H eksekusinya ciamik. Para tamu nggak berhenti muji acaranya. JJ bikin momen spesial kita jadi unforgettable dengan skill mereka yang oke punya!",
                rating: 5,
                image: "💑",
                color: "orange"
              }
            ].map((testimonial, index) => (
              <div key={index} className="group relative bg-white/5 backdrop-blur-lg border-2 border-amber-400/20 rounded-3xl p-8 hover:shadow-2xl hover:shadow-amber-500/20 hover:border-amber-400/50 transition-all duration-500 hover:-translate-y-3">
                {/* Premium card decoration */}
                <div className={`absolute top-6 right-6 text-6xl opacity-10 group-hover:opacity-20 transition-opacity`}>
                  {testimonial.image}
                </div>
                
                {/* Rating stars with animation */}
                <div className="flex text-amber-500 mb-6 justify-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 drop-shadow-md group-hover:scale-110 transition-transform" fill="currentColor" style={{ transitionDelay: `${i * 50}ms` }} />
                  ))}
                </div>
                
                {/* Testimonial text */}
                <p className="text-amber-100 mb-8 font-medium leading-relaxed text-center relative z-10">
                  <span className="text-3xl text-amber-400 font-serif absolute -left-2 -top-2">"</span>
                  {testimonial.text}
                  <span className="text-3xl text-amber-400 font-serif">"</span>
                </p>
                
                {/* Client info with premium design */}
                <div className="border-t-2 border-amber-400/20 pt-6 text-center">
                  <div className="font-bold text-white text-xl mb-1">{testimonial.name}</div>
                  <div className="text-sm font-semibold text-amber-300">
                    {testimonial.event}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Footer Section */}
      <footer className="bg-stone-900 border-t border-amber-500/20 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.1),transparent_70%)]"></div>
          <div className="absolute top-0 left-[20%] w-96 h-96 bg-amber-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-[20%] w-80 h-80 bg-orange-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Heart className="w-6 h-6 text-white" fill="currentColor" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-600 bg-clip-text text-transparent">
                    JJ Events
                  </h3>
                  <p className="text-amber-400 text-sm">Wedding Organizer & MC</p>
                </div>
              </div>
              <p className="text-amber-100 leading-relaxed mb-6 max-w-md">
                Profesional MC dan Wedding Organizer dengan pengalaman 8+ tahun menciptakan momen tak terlupakan untuk pernikahan Anda.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://instagram.com/jjevents" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center text-amber-400 hover:bg-amber-500 hover:text-white transition-all hover:scale-110"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://wa.me/6289516438703" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center text-amber-400 hover:bg-green-500 hover:text-white transition-all hover:scale-110"
                >
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Menu Cepat</h4>
              <ul className="space-y-3">
                {['Beranda', 'Layanan', 'Galeri', 'Testimonial'].map((item, index) => (
                  <li key={index}>
                    <a 
                      href={`#${item.toLowerCase()}`}
                      className="text-amber-100 hover:text-amber-400 transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-amber-400 rounded-full group-hover:scale-150 transition-transform"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Hubungi Kami</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-amber-100">
                  <Phone className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-amber-200 mb-1">WhatsApp</p>
                    <a href="https://wa.me/6289516438703" className="hover:text-amber-400 transition-colors">
                      +62 895-1643-8703
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-amber-100">
                  <Mail className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-amber-200 mb-1">Email</p>
                    <a href="mailto:info@jjevents.com" className="hover:text-amber-400 transition-colors">
                      info@jjevents.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-amber-100">
                  <MapPin className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-amber-200 mb-1">Lokasi</p>
                    <p>Yogyakarta, Indonesia</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-amber-200 text-sm text-center md:text-left">
                © {new Date().getFullYear()} JJ Events. All rights reserved.
              </p>
              <div className="flex items-center gap-6 text-sm">
                <a href="#" className="text-amber-200 hover:text-amber-400 transition-colors">
                  Privacy Policy
                </a>
                <span className="text-amber-500/30">•</span>
                <a href="#" className="text-amber-200 hover:text-amber-400 transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;