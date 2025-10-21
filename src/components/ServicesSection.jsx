import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mic, Heart, Users, Star, Clock, MapPin } from 'lucide-react';
import { servicesApi } from '../services/api';

const ServicesSection = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await servicesApi.getAll();
        // Ensure services is always an array
        const servicesData = Array.isArray(response.data) ? response.data : response.data?.data || [];
        setServices(servicesData);
      } catch (error) {
        console.error('Error fetching services:', error);
        // Fallback data for demo
        setServices([
          {
            id: 1,
            name: 'Master of Ceremony',
            description: 'Professional MC services for weddings, engagements, and formal events',
            price_range: '2,000,000 - 5,000,000',
            duration: '4-6 hours',
            category: 'mc',
            features: [
              'Professional hosting',
              'Event flow management',
              'Guest entertainment',
              'Microphone & sound system',
              'Custom script preparation'
            ]
          },
          {
            id: 2,
            name: 'Wedding Organizer',
            description: 'Complete wedding planning and coordination services',
            price_range: '15,000,000 - 50,000,000',
            duration: '3-6 months planning',
            category: 'wedding_organizer',
            features: [
              'Full wedding planning',
              'Vendor coordination',
              'Timeline management',
              'Decoration setup',
              'Day-of coordination',
              'Guest management'
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
    return category === 'mc' ? Mic : Heart;
  };

  const getServiceColor = (category) => {
    return category === 'mc' ? 'from-blue-500 to-purple-600' : 'from-rose-500 to-pink-600';
  };

  if (loading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-64 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-96 mx-auto mb-12"></div>
            <div className="grid md:grid-cols-2 gap-8">
              {[1, 2].map((i) => (
                <div key={i} className="bg-white rounded-xl p-8 shadow-lg">
                  <div className="h-64 bg-gray-300 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="services" className="py-24 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="section-title">Layanan Kami</h2>
          <div className="w-24 h-[1px] bg-primary-400 mx-auto mb-8"></div>
          <p className="subtitle max-w-2xl mx-auto">
            Kami menyediakan layanan acara yang komprehensif untuk membuat hari istimewa Anda menjadi sempurna.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {Array.isArray(services) && services.map((service, index) => {
            const IconComponent = getServiceIcon(service.category);
            
            return (
              <div key={service.id} className="group">
                <div className="card p-12 h-full">
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6 text-primary-600" />
                    </div>
                    <div className="w-full h-[1px] bg-primary-200"></div>
                  </div>
                  
                  <h3 className="text-xl font-normal text-primary-950 mb-6 tracking-wide">
                    {service.name}
                  </h3>
                  
                  <p className="text-primary-600 mb-8 leading-relaxed font-light">
                    {service.description}
                  </p>

                  {service.features && service.features.length > 0 && (
                    <div className="mb-8">
                      <div className="space-y-3">
                        {service.features.slice(0, 4).map((feature, index) => (
                          <div key={index} className="flex items-start">
                            <div className="w-1 h-1 bg-primary-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                            <span className="text-sm text-primary-600 font-light">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="space-y-4 mb-8 pt-4 border-t border-primary-100">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-primary-500 font-light tracking-wider uppercase">Durasi</span>
                      <span className="text-sm text-primary-700 font-light">{service.duration}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-primary-500 font-light tracking-wider uppercase">Investasi</span>
                      <span className="text-sm text-primary-700 font-light">IDR {service.price_range}</span>
                    </div>
                  </div>

                  <button className="w-full btn-secondary group-hover:bg-primary-900 group-hover:text-white group-hover:border-primary-900 transition-all duration-300">
                    Konsultasi
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-20 pt-16 border-t border-primary-200">
          <p className="text-primary-600 max-w-2xl mx-auto font-light leading-relaxed">
            Setiap acara adalah unik. Kami menawarkan paket yang disesuaikan dengan kebutuhan, 
            anggaran, dan visi Anda.
          </p>
          <div className="mt-6">
            <Link to="/booking" className="inline-flex items-center text-primary-900 font-light hover:text-primary-600 transition-colors">
              Konsultasi Gratis
              <div className="w-6 h-[1px] bg-primary-400 ml-3"></div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;