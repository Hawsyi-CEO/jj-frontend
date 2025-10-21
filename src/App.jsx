import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <main className="pt-16 md:pt-20">
          <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/services" element={<HomePage />} />
          <Route path="/portfolio" element={<HomePage />} />
          <Route path="/about" element={<HomePage />} />
          <Route path="/contact" element={<HomePage />} />
          </Routes>
        </main>
        
        {/* Elegant Footer */}
        <footer id="contact" className="bg-gradient-to-br from-stone-800 via-stone-900 to-stone-800 relative overflow-hidden">
          {/* Elegant background effects */}
          <div className="absolute inset-0">
            <div className="absolute bottom-0 left-20 w-96 h-96 bg-gradient-to-r from-amber-600/15 to-orange-600/15 rounded-full blur-3xl"></div>
            <div className="absolute top-0 right-20 w-80 h-80 bg-gradient-to-r from-orange-600/10 to-amber-600/10 rounded-full blur-3xl"></div>
          </div>
          
          {/* Soft overlay */}
          <div className="absolute inset-0 bg-stone-900/70 backdrop-blur-sm"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
            <div className="grid md:grid-cols-12 gap-8 md:gap-16">
              {/* Elegant Brand Section */}
              <div className="md:col-span-7">
                <div className="flex flex-col sm:flex-row sm:items-center mb-8 md:mb-12">
                  <div className="text-4xl md:text-5xl font-light bg-gradient-to-r from-amber-400 via-orange-400 to-amber-400 bg-clip-text text-transparent tracking-[0.3em] mb-4 sm:mb-0">
                    JJ
                  </div>
                  <div className="sm:ml-8 border-l border-stone-600 pl-0 sm:pl-8 border-l-0 sm:border-l">
                    <div className="text-xs md:text-sm font-light text-amber-300 tracking-[0.3em] uppercase mb-2">Master of Ceremony</div>
                    <div className="text-xs md:text-sm font-light text-stone-300 tracking-[0.3em] uppercase">& Wedding Organizer</div>
                  </div>
                </div>
                
                <p className="text-stone-200 mb-6 md:mb-8 max-w-lg font-light leading-relaxed text-lg md:text-xl">
                  Menciptakan momen ajaib dan pengalaman tak terlupakan untuk acara istimewa Anda dengan sentuhan profesional yang elegan.
                </p>
                
                <p className="text-stone-400 max-w-lg font-light leading-relaxed mb-8 md:mb-12 text-sm md:text-base">
                  Layanan MC dan wedding organizer profesional dengan perhatian pada setiap detail untuk mewujudkan impian acara sempurna yang berkesan selamanya.
                </p>

                {/* Elegant social links */}
                <div className="flex items-center space-x-6">
                  <div className="text-xs text-stone-400 font-light tracking-[0.3em] uppercase">Follow us</div>
                  <div className="w-12 h-[1px] bg-gradient-to-r from-amber-500 to-transparent"></div>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-stone-700/50 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-stone-600/50 transition-all duration-300 border border-stone-600 cursor-pointer">
                      <svg className="w-4 h-4 text-stone-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </div>
                    <div className="w-10 h-10 bg-stone-700/50 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-stone-600/50 transition-all duration-300 border border-stone-600 cursor-pointer">
                      <svg className="w-4 h-4 text-stone-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.758-1.378l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                      </svg>
                    </div>
                    <div className="w-10 h-10 bg-stone-700/50 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-stone-600/50 transition-all duration-300 border border-stone-600 cursor-pointer">
                      <svg className="w-4 h-4 text-stone-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Elegant Contact Section */}
              <div className="md:col-span-5">
                <div className="bg-stone-800/50 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 border border-stone-700">
                  <h4 className="text-base md:text-lg font-light tracking-wide text-white mb-6 md:mb-8 flex items-center">
                    <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                      Hubungi Kami
                    </span>
                  </h4>
                  
                  <div className="space-y-6 md:space-y-8">
                    <div className="group">
                      <div className="flex items-center group-hover:scale-105 transition-transform duration-300">
                        <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl md:rounded-2xl flex items-center justify-center mr-4 md:mr-6 shadow-lg">
                          <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-xs text-amber-300 tracking-wider uppercase mb-1 md:mb-2">WhatsApp</div>
                          <div className="text-white font-light text-base md:text-lg">+62 895-1643-8703</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="group">
                      <div className="flex items-center group-hover:scale-105 transition-transform duration-300">
                        <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl md:rounded-2xl flex items-center justify-center mr-4 md:mr-6 shadow-lg">
                          <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-xs text-amber-300 tracking-wider uppercase mb-1 md:mb-2">Email</div>
                          <div className="text-white font-light text-base md:text-lg">hello@jj-events.com</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="group">
                      <div className="flex items-center group-hover:scale-105 transition-transform duration-300">
                        <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-amber-700 to-orange-700 rounded-xl md:rounded-2xl flex items-center justify-center mr-4 md:mr-6 shadow-lg">
                          <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-xs text-amber-300 tracking-wider uppercase mb-1 md:mb-2">Lokasi</div>
                          <div className="text-white font-light text-base md:text-lg">Jakarta, Indonesia</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Elegant footer bottom */}
            <div className="border-t border-stone-700 mt-12 md:mt-20 pt-8 md:pt-12">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8 text-center md:text-left">
                  <p className="text-stone-400 text-sm font-light">
                    &copy; {new Date().getFullYear()} JJ Events. All rights reserved.
                  </p>
                  <div className="hidden md:block w-[1px] h-8 bg-stone-600"></div>
                  <div className="text-xs text-stone-500 font-light tracking-[0.3em] uppercase">
                    Elegant Event Services
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 md:space-x-6">
                  <div className="text-xs text-stone-500 font-light tracking-[0.3em] uppercase">
                    Crafted with Excellence
                  </div>
                  <div className="w-16 md:w-20 h-[1px] bg-gradient-to-r from-amber-500 to-transparent"></div>
                  <div className="w-3 h-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-pulse"></div>
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
