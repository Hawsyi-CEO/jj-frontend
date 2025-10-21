import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mic, Heart, Crown, Sparkles, Clock, MessageCircle, ArrowRight, Star } from 'lucide-react';
import { servicesApi } from '../services/api';

const ServicesSection = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await servicesApi.getAll();
        const servicesData = Array.isArray(response.data) ? response.data : response.data?.data || [];
        
        // Create unique premium services
        const uniqueServices = [
          {
            id: 'mc',
            name: 'Master of Ceremony',
            description: 'Pemandu acara profesional yang akan membuat setiap momen berjalan sempurna dengan penuh kehangatan dan profesionalisme tingkat enterprise',
            duration: '4-6 jam',
            category: 'mc',
            features: [
              'Professional hosting dengan pengalaman 8+ tahun',
              'Penguasaan alur acara dan timing yang sempurna',
              'Interaksi yang engaging dengan tamu dan VIP',
              'Adaptasi dengan berbagai jenis acara formal'
            ]
          },
          {
            id: 'wedding_organizer',
            name: 'Wedding Organizer',
            description: 'Layanan lengkap perencanaan pernikahan dari konsep hingga eksekusi dengan perhatian detail yang luar biasa dan sentuhan personal',
            duration: '3-6 bulan',
            category: 'wedding_organizer',
            features: [
              'Konsep dan tema pernikahan yang personal',
              'Koordinasi vendor dan timeline yang presisi',
              'Manajemen budget yang transparan',
              'Day-of coordination yang flawless'
            ]
          },
          {
            id: 'premium_package',
            name: 'Premium Complete Package',
            description: 'Paket lengkap MC + Wedding Organizer untuk pengalaman pernikahan yang tak terlupakan dengan layanan VIP eksklusif',
            duration: 'Full service',
            category: 'premium',
            features: [
              'Full MC + Wedding Organizer services',
              'Konsultasi unlimited sepanjang planning',
              'Priority support dan emergency handling',
              'Exclusive coordination untuk acara mewah'
            ]
          }
        ];
        
        setServices(uniqueServices);
      } catch (error) {
        console.error('Error fetching services:', error);
        // Fallback to premium services
        setServices([
          {
            id: 'mc',
            name: 'Master of Ceremony',
            description: 'Pemandu acara profesional yang akan membuat setiap momen berjalan sempurna dengan penuh kehangatan dan profesionalisme tingkat enterprise',
            duration: '4-6 jam',
            category: 'mc',
            features: [
              'Professional hosting dengan pengalaman 8+ tahun',
              'Penguasaan alur acara dan timing yang sempurna',
              'Interaksi yang engaging dengan tamu dan VIP',
              'Adaptasi dengan berbagai jenis acara formal'
            ]
          },
          {
            id: 'wedding_organizer',
            name: 'Wedding Organizer',
            description: 'Layanan lengkap perencanaan pernikahan dari konsep hingga eksekusi dengan perhatian detail yang luar biasa dan sentuhan personal',
            duration: '3-6 bulan',
            category: 'wedding_organizer',
            features: [
              'Konsep dan tema pernikahan yang personal',
              'Koordinasi vendor dan timeline yang presisi',
              'Manajemen budget yang transparan',
              'Day-of coordination yang flawless'
            ]
          },
          {
            id: 'premium_package',
            name: 'Premium Complete Package',
            description: 'Paket lengkap MC + Wedding Organizer untuk pengalaman pernikahan yang tak terlupakan dengan layanan VIP eksklusif',
            duration: 'Full service',
            category: 'premium',
            features: [
              'Full MC + Wedding Organizer services',
              'Konsultasi unlimited sepanjang planning',
              'Priority support dan emergency handling',
              'Exclusive coordination untuk acara mewah'
            ]
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const getServiceIcon = (category) => {
    switch(category) {
      case 'mc': return Mic;
      case 'wedding_organizer': return Heart;
      case 'premium': return Crown;
      default: return Sparkles;
    }
  };

  const getServiceGradient = (category) => {
    switch(category) {
      case 'mc': return 'from-amber-600 to-orange-600';
      case 'wedding_organizer': return 'from-orange-600 to-red-600';
      case 'premium': return 'from-amber-700 to-orange-700';
      default: return 'from-amber-600 to-orange-600';
    }
  };

  if (loading) {
    return (
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-8 bg-slate-700 rounded w-64 mx-auto mb-4"></div>
            <div className="h-4 bg-slate-700 rounded w-96 mx-auto mb-12"></div>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-slate-800 rounded-2xl p-8 h-96"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="services" className="py-20 bg-stone-900 relative overflow-hidden">
      {/* Premium background effects - sama dengan Gallery */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(251,191,36,0.2),transparent_50%)]"></div>
        <div className="absolute top-20 left-[5%] w-[500px] h-[500px] bg-amber-600/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-[5%] w-96 h-96 bg-orange-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Premium section header */}
        <div className="text-center mb-16">
          {/* Premium badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-amber-400/30 mb-10 shadow-xl hover:shadow-amber-400/50 transition-all duration-500">
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-amber-100 text-sm font-bold tracking-wider">Layanan Premium</span>
          </div>
          
          {/* Premium title */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-8 tracking-tight leading-tight">
            <span className="block mb-3 text-white">Paket Layanan</span>
            <span className="block bg-gradient-to-r from-amber-300 via-orange-300 to-amber-300 bg-clip-text text-transparent font-bold animate-gradient bg-[length:200%_auto]">
              Eksklusif Kami
            </span>
          </h2>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-amber-400"></div>
            <Sparkles className="w-5 h-5 text-amber-400" />
            <div className="w-20 h-[2px] bg-gradient-to-l from-transparent via-amber-400 to-amber-400"></div>
          </div>
          
          <p className="text-lg md:text-xl text-amber-100 leading-relaxed max-w-3xl mx-auto">
            Wujudkan acara impian Anda dengan <span className="font-bold text-amber-300">layanan profesional premium</span> yang dirancang khusus untuk menciptakan momen tak terlupakan
          </p>
        </div>

        {/* Premium service cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-20 px-4">
          {services.map((service, index) => {
            const IconComponent = getServiceIcon(service.category);
            const gradientClass = getServiceGradient(service.category);
            
            return (
              <div 
                key={service.id}
                className="group relative h-full"
                onMouseEnter={() => setActiveService(index)}
              >
                {/* Premium card with enhanced styling - dark theme */}
                <div className="relative bg-white/5 backdrop-blur-xl border-2 border-amber-400/20 rounded-2xl p-6 h-full hover:border-amber-400/50 hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 hover:-translate-y-2 flex flex-col">
                  {/* Premium gradient glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${gradientClass} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl`}></div>
                  
                  {/* Service icon with premium styling */}
                  <div className="relative mb-5">
                    <div className="relative">
                      {/* Icon glow */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${gradientClass} rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity`}></div>
                      {/* Icon container */}
                      <div className={`relative w-16 h-16 bg-gradient-to-br ${gradientClass} rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="w-full h-[1px] bg-gradient-to-r from-amber-400/30 via-amber-400 to-transparent mt-4"></div>
                  </div>
                  
                  {/* Service content with premium styling */}
                  <div className="flex-1 flex flex-col relative z-10">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-amber-300 transition-colors duration-300">
                      {service.name}
                    </h3>
                    
                    <p className="text-amber-100 mb-5 leading-relaxed font-medium text-sm md:text-base flex-1">
                      {service.description}
                    </p>

                    {/* Premium features list */}
                    <div className="mb-5 bg-white/5 rounded-xl p-4 border border-amber-400/20">
                      <div className="space-y-2">
                        {service.features?.slice(0, 4).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start group/item hover:translate-x-1 transition-transform duration-300">
                            <div className="flex items-center justify-center w-5 h-5 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg mr-2 flex-shrink-0 group-hover/item:scale-110 transition-transform mt-0.5">
                              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                            </div>
                            <span className="text-amber-100 font-medium text-xs md:text-sm leading-relaxed">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Service details with premium design */}
                    <div className="space-y-2 mb-4 pt-4 border-t border-amber-400/20">
                      <div className="flex justify-between items-center bg-white/5 rounded-lg p-2.5">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-amber-400" />
                          <span className="text-xs text-amber-200 font-semibold">Durasi</span>
                        </div>
                        <span className="text-white font-bold text-xs">{service.duration}</span>
                      </div>
                      <div className="flex justify-between items-center bg-white/5 rounded-lg p-2.5">
                        <div className="flex items-center gap-2">
                          <MessageCircle className="w-4 h-4 text-green-400" />
                          <span className="text-xs text-amber-200 font-semibold">Konsultasi</span>
                        </div>
                        <span className="text-green-400 font-bold text-xs">Gratis WhatsApp</span>
                      </div>
                    </div>

                    {/* Elegant CTA button */}
                    <Link to="/booking" className={`group/btn w-full relative px-5 py-3 bg-gradient-to-r ${gradientClass} bg-[length:200%_auto] text-white font-bold tracking-wide rounded-xl hover:shadow-2xl transition-all duration-500 mt-auto overflow-hidden`}>
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-700 to-orange-700 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative flex items-center justify-center gap-2">
                        <Sparkles className="w-4 h-4" />
                        <span className="text-sm">Pesan Sekarang</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;