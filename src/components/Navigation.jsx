import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Beranda', href: '/' },
    { name: 'Layanan', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Tentang', href: '/about' },
    { name: 'Kontak', href: '/contact' },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-primary-100 fixed w-full z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="text-2xl font-light text-primary-950 tracking-widest">
                JJ
              </div>
              <div className="ml-4 hidden sm:block">
                <div className="text-xs font-light text-primary-600 tracking-wider uppercase">Master of Ceremony</div>
                <div className="text-xs font-light text-primary-500 tracking-wider uppercase">& Wedding Organizer</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-primary-600 hover:text-primary-950 text-sm font-light tracking-wide transition-colors duration-300 relative group"
              >
                {item.name}
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary-400 group-hover:w-full transition-all duration-300"></div>
              </Link>
            ))}
            <Link
              to="/booking"
              className="btn-primary text-sm ml-6"
            >
              Konsultasi
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary-600 hover:text-primary-950 p-2"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-primary-100">
          <div className="px-4 pt-6 pb-8 space-y-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block text-primary-600 hover:text-primary-950 text-base font-light tracking-wide transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                to="/booking"
                className="block w-full text-center btn-primary"
                onClick={() => setIsOpen(false)}
              >
                Konsultasi
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;