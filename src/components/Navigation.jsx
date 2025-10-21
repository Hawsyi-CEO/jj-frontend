import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Beranda', href: '/', type: 'route' },
    { name: 'Layanan', href: 'services', type: 'scroll' },
    { name: 'Portfolio', href: 'gallery', type: 'scroll' },
    { name: 'Testimoni', href: 'testimonials', type: 'scroll' },
    { name: 'Kontak', href: 'contact', type: 'scroll' },
  ];

  const handleNavigation = (item, e) => {
    if (item.type === 'scroll') {
      e.preventDefault();
      
      // If not on home page, navigate to home first
      if (location.pathname !== '/') {
        navigate('/');
        // Wait for navigation to complete, then scroll
        setTimeout(() => {
          scrollToSection(item.href);
        }, 100);
      } else {
        scrollToSection(item.href);
      }
      
      // Close mobile menu if open
      setIsOpen(false);
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80; // Height of fixed navigation
      const elementPosition = element.offsetTop - navHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-xl border-b border-stone-200 shadow-lg' 
        : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Elegant Logo */}
          <Link to="/" className="flex items-center group">
            <div className="relative">
              <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-3 py-2 md:px-4 md:py-2 rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <span className="text-xl md:text-2xl font-light tracking-[0.2em]">JJ</span>
              </div>
            </div>
            <div className="ml-3 md:ml-4 hidden sm:block">
              <div className="text-xs font-light text-stone-700 tracking-[0.15em] uppercase flex items-center">
                <Sparkles className="w-3 h-3 mr-1 text-amber-600" />
                Master of Ceremony
              </div>
              <div className="text-xs font-light text-stone-500 tracking-[0.15em] uppercase">
                & Wedding Organizer
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navigation.map((item) => (
              item.type === 'route' ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="relative text-stone-600 hover:text-stone-800 text-sm font-light tracking-wide transition-all duration-300 group py-2 px-2"
                >
                  {item.name}
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-amber-500 to-orange-500 group-hover:w-full transition-all duration-300"></div>
                  <div className="absolute inset-0 bg-stone-100/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </Link>
              ) : (
                <button
                  key={item.name}
                  onClick={(e) => handleNavigation(item, e)}
                  className="relative text-stone-600 hover:text-stone-800 text-sm font-light tracking-wide transition-all duration-300 group py-2 px-2"
                >
                  {item.name}
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-amber-500 to-orange-500 group-hover:w-full transition-all duration-300"></div>
                  <div className="absolute inset-0 bg-stone-100/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </button>
              )
            ))}
            
            {/* Elegant CTA Button */}
            <Link
              to="/booking"
              className="px-6 py-2 md:px-8 md:py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white text-sm font-light tracking-wide rounded-lg hover:from-amber-700 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Konsultasi Gratis
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-stone-600 hover:text-stone-800 transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-stone-200">
          <div className="px-4 pt-6 pb-8 space-y-6">
            {navigation.map((item) => (
              item.type === 'route' ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block text-stone-600 hover:text-stone-800 text-base font-light tracking-wide transition-colors duration-300 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ) : (
                <button
                  key={item.name}
                  onClick={(e) => handleNavigation(item, e)}
                  className="block w-full text-left text-stone-600 hover:text-stone-800 text-base font-light tracking-wide transition-colors duration-300 py-2"
                >
                  {item.name}
                </button>
              )
            ))}
            <div className="pt-4">
              <Link
                to="/booking"
                className="block w-full text-center px-8 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-light tracking-wide rounded-xl hover:from-amber-700 hover:to-orange-700 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Konsultasi Gratis
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;