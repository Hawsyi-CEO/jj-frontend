import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <ServicesSection />
      
      {/* Portfolio Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Recent Events</h2>
            <p className="subtitle">
              A glimpse of the magical moments we've helped create
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Elegant Wedding Reception",
                image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                category: "Wedding Organizer"
              },
              {
                title: "Corporate Gala Event",
                image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                category: "MC Services"
              },
              {
                title: "Traditional Engagement",
                image: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                category: "MC Services"
              }
            ].map((event, index) => (
              <div key={index} className="card overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-sm font-medium text-gold-300">{event.category}</div>
                    <h3 className="text-lg font-bold">{event.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-primary-50 to-gold-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="subtitle">
              Don't just take our word for it - hear from our happy clients
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah & David",
                event: "Wedding Reception",
                text: "JJ made our wedding day absolutely perfect! The coordination was flawless and the MC services were outstanding. Highly recommended!",
                rating: 5
              },
              {
                name: "PT. Mandiri Corp",
                event: "Annual Gala",
                text: "Professional, punctual, and engaging. JJ's MC services elevated our corporate event beyond expectations.",
                rating: 5
              },
              {
                name: "Rina & Ahmad",
                event: "Engagement Party",
                text: "From planning to execution, everything was handled beautifully. Our guests couldn't stop complimenting the event!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="card p-6">
                <div className="flex text-gold-500 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-primary-800">{testimonial.name}</div>
                  <div className="text-sm text-primary-600">{testimonial.event}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-elegant">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Ready to Create Your Perfect Event?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Let's discuss your vision and bring it to life with our professional services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/booking" className="btn-primary bg-gold-500 hover:bg-gold-600">
              Book Consultation
            </a>
            <a href="https://wa.me/6281234567890" className="btn-secondary bg-white/10 border-white text-white hover:bg-white hover:text-primary-800">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;