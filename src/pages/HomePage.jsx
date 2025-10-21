import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import Gallery from '../components/Gallery';
import { Star } from 'lucide-react';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <ServicesSection />
      <Gallery />

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-gradient-to-br from-stone-50 via-amber-50 to-orange-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-200/25 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-stone-200 mb-8 shadow-lg">
              <Star className="w-4 h-4 text-amber-600 mr-2" />
              <span className="text-stone-700 text-sm font-light tracking-wide">Testimoni Klien</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-stone-800 mb-8 tracking-wide">
              <span className="text-stone-800">Kata Mereka</span>
              <br />
              <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 bg-clip-text text-transparent">Tentang Kami</span>
            </h2>
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-8"></div>
            <p className="text-stone-600 font-light leading-relaxed max-w-2xl mx-auto text-lg">
              Kepercayaan dan kepuasan klien adalah prioritas utama kami
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah & David",
                event: "Wedding Reception",
                text: "JJ membuat hari pernikahan kami benar-benar sempurna! Koordinasinya sangat baik dan layanan MC-nya luar biasa.",
                rating: 5
              },
              {
                name: "PT. Mandiri Corp",
                event: "Annual Gala",
                text: "Profesional, tepat waktu, dan engaging. Layanan MC JJ meningkatkan acara korporat kami melampaui ekspektasi.",
                rating: 5
              },
              {
                name: "Rina & Ahmad",
                event: "Engagement Party",
                text: "Dari perencanaan hingga eksekusi, semuanya ditangani dengan indah. Tamu kami tidak berhenti memuji acara tersebut!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white/90 backdrop-blur-sm border border-stone-200 rounded-2xl p-8 hover:shadow-xl hover:bg-white transition-all duration-500 hover:-translate-y-2">
                <div className="flex text-amber-500 mb-6 justify-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5" fill="currentColor" />
                  ))}
                </div>
                <p className="text-stone-600 mb-6 italic font-light leading-relaxed text-center">"{testimonial.text}"</p>
                <div className="border-t border-stone-200 pt-4 text-center">
                  <div className="font-light text-stone-800 text-lg">{testimonial.name}</div>
                  <div className="text-sm text-amber-600 font-light">{testimonial.event}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-amber-100 via-orange-100 to-stone-100 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-20 w-64 h-64 bg-amber-300/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-80 h-80 bg-orange-300/15 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-12 border border-stone-200 shadow-xl">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-stone-800 mb-4 md:mb-6 tracking-wide">
              <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Siap Mewujudkan</span>
              <br />
              <span className="text-stone-700">Acara Sempurna Anda?</span>
            </h2>
            <p className="text-lg md:text-xl text-stone-600 mb-8 md:mb-10 font-light leading-relaxed max-w-2xl mx-auto">
              Mari diskusikan visi Anda dan wujudkan dengan layanan profesional kami yang berpengalaman lebih dari 8 tahun.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
              <a href="/booking" className="px-8 md:px-12 py-3 md:py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-light tracking-wide rounded-xl hover:from-amber-700 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg text-sm md:text-base">
                Konsultasi Gratis
              </a>
              <a href="https://wa.me/6289516438703" className="px-8 md:px-12 py-3 md:py-4 border-2 border-stone-300 text-stone-700 font-light tracking-wide rounded-xl hover:bg-stone-100 hover:border-stone-400 transition-all duration-300 text-sm md:text-base">
                WhatsApp Kami
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;