import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/services" element={<HomePage />} />
          <Route path="/portfolio" element={<HomePage />} />
          <Route path="/about" element={<HomePage />} />
          <Route path="/contact" element={<HomePage />} />
        </Routes>
        
        {/* Footer */}
        <footer className="bg-primary-950 text-white py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="md:col-span-2">
                <div className="flex items-center mb-8">
                  <div className="text-2xl font-light text-white tracking-widest">
                    JJ
                  </div>
                  <div className="ml-4">
                    <div className="text-xs font-light text-gray-400 tracking-wider uppercase">Master of Ceremony</div>
                    <div className="text-xs font-light text-gray-500 tracking-wider uppercase">& Wedding Organizer</div>
                  </div>
                </div>
                <p className="text-gray-400 mb-8 max-w-lg font-light leading-relaxed">
                  Menciptakan momen ajaib dan pengalaman tak terlupakan untuk acara istimewa Anda. 
                  Layanan MC dan wedding organizer profesional dengan perhatian pada setiap detail.
                </p>
              </div>
              
              <div>
                <h4 className="text-sm font-light tracking-wider uppercase text-gray-300 mb-6">Kontak</h4>
                <div className="space-y-4 text-gray-400">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="font-light">+62 895-1643-8703</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="font-light">hello@jj-events.com</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="font-light">Jakarta, Indonesia</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-primary-800 mt-12 pt-8">
              <div className="flex justify-between items-center">
                <p className="text-gray-500 text-sm font-light">
                  &copy; {new Date().getFullYear()} JJ Events. All rights reserved.
                </p>
                <div className="text-xs text-gray-600 font-light tracking-wider uppercase">
                  Crafted with excellence
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
