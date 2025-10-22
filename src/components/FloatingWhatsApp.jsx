import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000); // Show after 2 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = '6289516438703';
    const message = 'Halo! Saya tertarik dengan layanan JJ MC & Wedding Organizer. Bisakah kita diskusi lebih lanjut?';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Try different methods to open WhatsApp
    try {
      // Method 1: window.open
      const newWindow = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      
      // Method 2: If popup blocked, try window.location
      if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
        window.location.href = whatsappUrl;
      }
    } catch (error) {
      console.error('Error opening WhatsApp:', error);
      // Fallback: direct navigation
      window.location.href = whatsappUrl;
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 flex items-center justify-center transform hover:scale-110"
        aria-label="Chat via WhatsApp"
      >
        {/* Pulsing animation rings */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
        <div className="absolute inset-0 rounded-full bg-green-500 animate-pulse opacity-30"></div>
        
        {/* WhatsApp Icon */}
        <svg 
          className="w-8 h-8 text-white relative z-10" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>

        {/* Hover tooltip */}
        <div 
          className={`absolute right-20 top-1/2 -translate-y-1/2 px-4 py-2 bg-stone-800 text-white text-sm font-light rounded-lg shadow-xl transition-all duration-300 pointer-events-none whitespace-nowrap ${
            isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
          }`}
        >
          Chat via WhatsApp
          {/* Arrow */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0 h-0 border-l-8 border-l-stone-800 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
        </div>
      </button>

      {/* Online status indicator */}
      <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-400 border-2 border-white rounded-full flex items-center justify-center">
        <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default FloatingWhatsApp;