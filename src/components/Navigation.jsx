import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Phone } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Detect active section
      const sections = ['services', 'gallery', 'testimonials', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Beranda', href: '/', type: 'route', section: 'home' },
    { name: 'Layanan', href: 'services', type: 'scroll', section: 'services' },
    { name: 'Portfolio', href: 'gallery', type: 'scroll', section: 'gallery' },
    { name: 'Testimoni', href: 'testimonials', type: 'scroll', section: 'testimonials' },
  ];

  const handleNavigation = (item, e) => {
    e.preventDefault();
    
    if (item.type === 'route') {
      // Navigate to home and scroll to top
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (item.type === 'scroll') {
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
    }
    
    // Close mobile menu if open
    setIsOpen(false);
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
    <nav className={`fixed w-full z-50 transition-all duration-700 ${
      scrolled 
        ? 'bg-stone-900/95 backdrop-blur-xl shadow-2xl border-b border-amber-500/20' 
        : 'bg-stone-900/80 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Modern Minimal Logo */}
          <button onClick={() => handleNavigation('home')} className="flex items-center gap-3 group relative">
            {/* Animated underline */}
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 group-hover:w-full transition-all duration-500"></div>
            
            {/* Logo icon with subtle animation */}
            <div className="relative">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg group-hover:shadow-amber-500/50 transition-all duration-500 ${scrolled ? 'scale-100' : 'scale-110'}`}>
                <Heart className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" />
              </div>
              {/* Subtle pulse effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
            </div>
            
            {/* Logo text */}
            <div>
              <div className={`text-xl font-bold tracking-tight transition-colors duration-300 ${scrolled ? 'text-white' : 'text-white'}`}>JJ Events</div>
              <div className={`text-xs font-medium transition-colors duration-300 ${scrolled ? 'text-amber-300' : 'text-amber-200'}`}>MC & Wedding Organizer</div>
            </div>
          </button>

          {/* Modern Clean Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navigation.map((item) => {
              const isActive = item.section === 'home' 
                ? location.pathname === '/' && !activeSection 
                : activeSection === item.section;
              
              return (
                <button
                  key={item.name}
                  onClick={(e) => handleNavigation(item, e)}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                    isActive 
                      ? 'text-amber-400 bg-white/10' 
                      : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  {isActive && (
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-amber-400 rounded-full"></div>
                  )}
                </button>
              );
            })}
            
            {/* Divider */}
            <div className="w-px h-6 bg-white/20 mx-2"></div>
            
            {/* WhatsApp CTA Button dengan animasi smooth */}
            <a
              href="https://wa.me/6289516438703"
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-6 py-2 bg-gradient-to-r from-green-600 to-green-700 text-white text-sm font-semibold rounded-lg overflow-hidden group hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300"
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              <span className="relative z-10 flex items-center gap-2">
                <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                Pesan via WhatsApp
              </span>
            </a>
          </div>

          {/* Mobile menu button - Dark theme */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 text-white hover:text-amber-400 hover:bg-white/10 rounded-xl transition-all duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Dark theme */}
      {isOpen && (
        <div className="lg:hidden bg-stone-900/95 backdrop-blur-xl border-t border-amber-500/20 shadow-2xl animate-fadeIn">
          <div className="px-6 py-6 space-y-1">
            {navigation.map((item) => {
              const isActive = item.section === 'home' 
                ? location.pathname === '/' && !activeSection 
                : activeSection === item.section;
              
              return (
                <button
                  key={item.name}
                  onClick={(e) => {
                    handleNavigation(item, e);
                    setIsOpen(false);
                  }}
                  className={`block w-full text-left py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                    isActive 
                      ? 'text-amber-400 bg-white/10' 
                      : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </button>
              );
            })}
            
            <div className="pt-4 space-y-2">
              <a
                href="https://wa.me/6289516438703"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                <Phone className="w-4 h-4" />
                <span>Pesan via WhatsApp</span>
              </a>

              <Link
                to="/admin/login"
                className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-white/10 border border-amber-500/30 text-amber-400 font-semibold rounded-lg hover:bg-amber-600/20 hover:border-amber-500 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                <Lock className="w-4 h-4" />
                <span>Login Admin</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;