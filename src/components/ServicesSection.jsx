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
    <section id="services" className="py-24 bg-gradient-to-br from-stone-100 via-amber-50 to-orange-50 relative overflow-hidden">
      {/* Elegant background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-amber-200/30 to-orange-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-stone-200/20 to-amber-200/25 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-orange-100/15 to-amber-100/15 rounded-full blur-3xl"></div>
      </div>

      {/* Soft overlay */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Elegant section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-stone-200 mb-8 shadow-lg">
            <Sparkles className="w-4 h-4 text-amber-600 mr-2" />
            <span className="text-stone-700 text-sm font-light tracking-wide">Layanan Eksklusif</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-light text-stone-800 mb-8 tracking-tight">
            <span className="text-stone-800">
              Layanan
            </span>
            <br />
            <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 bg-clip-text text-transparent">
              Profesional
            </span>
          </h2>
          
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-8"></div>
          
          <p className="text-xl text-stone-600 font-light leading-relaxed max-w-3xl mx-auto">
            Wujudkan acara impian Anda dengan layanan profesional yang dirancang khusus untuk menciptakan momen tak terlupakan
          </p>
        </div>

        {/* Elegant service cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20 px-4">
          {services.map((service, index) => {
            const IconComponent = getServiceIcon(service.category);
            const gradientClass = getServiceGradient(service.category);
            
            return (
              <div 
                key={service.id}
                className="group relative h-full"
                onMouseEnter={() => setActiveService(index)}
              >
                {/* Card with elegant styling */}
                <div className="relative bg-white/90 backdrop-blur-xl border border-stone-200 rounded-2xl p-6 md:p-8 h-full hover:bg-white hover:border-amber-300 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col">
                  {/* Elegant gradient border effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${gradientClass} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`}></div>
                  
                  {/* Service icon with elegant styling */}
                  <div className="relative mb-6">
                    <div className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r ${gradientClass} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                      <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                    <div className="w-full h-[1px] bg-gradient-to-r from-stone-200 via-amber-300 to-transparent"></div>
                  </div>
                  
                  {/* Service content */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-xl md:text-2xl font-light text-stone-800 mb-3 tracking-wide group-hover:text-amber-700 transition-colors duration-300">
                      {service.name}
                    </h3>
                    
                    <p className="text-stone-600 mb-6 leading-relaxed font-light text-sm md:text-base flex-1">
                      {service.description}
                    </p>

                    {/* Elegant features list */}
                    <div className="mb-6">
                      <div className="space-y-2">
                        {service.features?.slice(0, 3).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-stone-600 font-light text-xs md:text-sm leading-relaxed">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Service details */}
                    <div className="space-y-3 mb-6 pt-4 border-t border-stone-200">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <Clock className="w-3 h-3 md:w-4 md:h-4 text-amber-600 mr-2" />
                          <span className="text-xs text-stone-500 font-light tracking-wider uppercase">Durasi</span>
                        </div>
                        <span className="text-stone-700 font-light text-xs md:text-sm">{service.duration}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <MessageCircle className="w-3 h-3 md:w-4 md:h-4 text-amber-600 mr-2" />
                          <span className="text-xs text-stone-500 font-light tracking-wider uppercase">Konsultasi</span>
                        </div>
                        <span className="text-amber-600 font-light text-xs md:text-sm">Via WhatsApp</span>
                      </div>
                    </div>

                    {/* Elegant CTA button */}
                    <button className={`group/btn w-full relative px-4 py-3 bg-gradient-to-r ${gradientClass} text-white font-light tracking-wide rounded-lg hover:shadow-lg transition-all duration-500 mt-auto`}>
                      <div className="relative flex items-center justify-center">
                        <span className="text-sm">Konsultasi Gratis</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Elegant CTA section */}
        <div className="text-center pt-16 border-t border-stone-200">
          <h3 className="text-3xl md:text-4xl font-light text-stone-800 mb-6 tracking-wide">
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Siap Mewujudkan
            </span>
            <br />
            <span className="text-stone-700">Acara Impian Anda?</span>
          </h3>
          
          <p className="text-stone-600 max-w-2xl mx-auto font-light leading-relaxed mb-8 text-lg">
            Setiap momen berharga layak dirayakan dengan sempurna. Mari kita ciptakan pengalaman yang tak akan pernah terlupakan.
          </p>
          
          <p className="text-stone-500 max-w-xl mx-auto font-light mb-12">
            Konsultasi gratis untuk membahas visi, kebutuhan, dan mewujudkan acara sesuai impian Anda
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/booking" 
              className="px-12 py-5 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-light tracking-wide rounded-2xl hover:from-amber-700 hover:to-orange-700 transform hover:scale-105 hover:-translate-y-1 transition-all duration-500 shadow-xl flex items-center justify-center"
            >
              <MessageCircle className="w-5 h-5 mr-3" />
              <span>Mulai Konsultasi Gratis</span>
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <Link 
              to="#gallery" 
              className="px-12 py-5 border-2 border-stone-300 text-stone-700 font-light tracking-wide rounded-2xl hover:bg-stone-100 hover:border-stone-400 transition-all duration-300 flex items-center justify-center"
            >
              <Sparkles className="w-5 h-5 mr-3" />
              <span>Lihat Portfolio</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;