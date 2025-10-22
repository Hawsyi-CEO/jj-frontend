import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { LogOut, Save, Eye, Edit, X, Lock, User, EyeOff, ArrowLeft } from 'lucide-react';
import HomePage from './pages/HomePage';
import FloatingWhatsApp from './components/FloatingWhatsApp';

// Login Component
function Login({ setIsAuthenticated }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    setTimeout(() => {
      if (formData.username === 'admin' && formData.password === 'admin123') {
        localStorage.setItem('adminToken', 'token');
        localStorage.setItem('adminUsername', formData.username);
        setIsAuthenticated(true);
        navigate('/admin/dashboard');
      } else {
        setError('Username atau password salah!');
      }
      setLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-900 via-stone-800 to-amber-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <button onClick={() => navigate('/')} className="flex items-center gap-2 text-amber-400 hover:text-amber-300 mb-8">
          <ArrowLeft className="w-5 h-5" />
          Kembali
        </button>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-600 rounded-2xl flex items-center justify-center mb-4">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white">Admin Login</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-amber-100 text-sm font-medium mb-2">Username</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-400" />
                <input
                  type="text"
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 focus:border-amber-400 rounded-xl text-white outline-none"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-amber-100 text-sm font-medium mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full pl-10 pr-12 py-3 bg-white/10 border border-white/20 focus:border-amber-400 rounded-xl text-white outline-none"
                  required
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-amber-400">
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {error && <div className="bg-red-500/20 border border-red-500/50 text-red-400 px-4 py-3 rounded-xl">{error}</div>}

            <button type="submit" disabled={loading} className="w-full py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-xl">
              {loading ? 'Loading...' : 'Masuk'}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-white/10 text-center text-xs text-amber-300">
            <p>Dev: admin / admin123</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Dashboard Component with Live Edit
function Dashboard({ setIsAuthenticated }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(true);
  const [content, setContent] = useState({ hero: {}, services: {}, testimonials: {}, footer: {} });
  const [editingElement, setEditingElement] = useState(null);
  const [tempValue, setTempValue] = useState('');

  useEffect(() => {
    fetch('http://localhost:8000/api/landing-content')
      .then(res => res.json())
      .then(data => { if (data.success) setContent(data.data); })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUsername');
    setIsAuthenticated(false);
    navigate('/admin/login');
  };

  const startEdit = (section, key, currentValue) => {
    if (!editMode) return;
    setEditingElement({ section, key });
    setTempValue(currentValue);
  };

  const cancelEdit = () => {
    setEditingElement(null);
    setTempValue('');
  };

  const saveEdit = async () => {
    if (!editingElement) return;
    const { section, key } = editingElement;

    try {
      const res = await fetch('http://localhost:8000/api/landing-content/upsert', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ section, key, value: tempValue })
      });
      const data = await res.json();

      if (data.success) {
        setContent(prev => ({
          ...prev,
          [section]: { ...prev[section], [key]: { ...prev[section][key], value: tempValue } }
        }));
        setEditingElement(null);
        setTempValue('');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const EditableText = ({ section, fieldKey, children, className = '', tag = 'p', multiline = false }) => {
    const isEditing = editingElement?.section === section && editingElement?.key === fieldKey;
    const currentValue = content[section]?.[fieldKey]?.value || children || '';
    const Tag = tag;

    if (!editMode) return <Tag className={className}>{currentValue}</Tag>;

    if (isEditing) {
      return (
        <div className="relative z-50">
          {multiline ? (
            <textarea value={tempValue} onChange={(e) => setTempValue(e.target.value)} className="w-full px-4 py-3 bg-white border-4 border-blue-500 rounded-xl text-stone-900" rows={4} autoFocus onKeyDown={(e) => { if (e.key === 'Escape') cancelEdit(); if (e.key === 'Enter' && e.ctrlKey) saveEdit(); }} />
          ) : (
            <input type="text" value={tempValue} onChange={(e) => setTempValue(e.target.value)} className="w-full px-4 py-3 bg-white border-4 border-blue-500 rounded-xl text-stone-900" autoFocus onKeyDown={(e) => { if (e.key === 'Escape') cancelEdit(); if (e.key === 'Enter') saveEdit(); }} />
          )}
          <div className="flex gap-2 mt-2">
            <button onClick={saveEdit} className="flex-1 px-4 py-2 bg-green-500 text-white rounded-lg flex items-center justify-center gap-2"><Save className="w-4 h-4" />Simpan</button>
            <button onClick={cancelEdit} className="px-4 py-2 bg-red-500 text-white rounded-lg"><X className="w-4 h-4" /></button>
          </div>
        </div>
      );
    }

    return (
      <div onClick={() => startEdit(section, fieldKey, currentValue)} className={`${className} relative group cursor-pointer hover:bg-blue-500/10 hover:outline hover:outline-4 hover:outline-blue-500/50 hover:outline-dashed rounded-lg px-2 -mx-2`}>
        <Tag>{currentValue}</Tag>
        {editMode && <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 bg-blue-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1"><Edit className="w-3 h-3" />Edit</div>}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-stone-900 flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-amber-400 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-900">
      <div className="fixed top-0 left-0 right-0 z-[100] bg-gradient-to-r from-blue-600 to-blue-700 border-b-4 border-blue-500">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center"><Edit className="w-5 h-5 text-white" /></div>
              <div>
                <h1 className="text-white font-bold text-sm">🎨 Live Editor</h1>
                <p className="text-blue-200 text-xs">Klik elemen untuk edit</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => setEditMode(!editMode)} className={`px-4 py-2 rounded-xl flex items-center gap-2 ${editMode ? 'bg-white/20 text-white' : 'bg-green-500 text-white'}`}>
              {editMode ? <Edit className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              {editMode ? 'Edit' : 'Preview'}
            </button>
            <button onClick={handleLogout} className="px-4 py-2 bg-red-500 text-white rounded-xl flex items-center gap-2"><LogOut className="w-4 h-4" />Logout</button>
          </div>
        </div>
      </div>

      <div className="pt-20">
        <section className="min-h-screen bg-stone-900 flex items-center py-20">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <EditableText section="hero" fieldKey="title" tag="h1" className="text-5xl font-bold text-white" multiline>Wujudkan Momen Pernikahan Impian</EditableText>
                <EditableText section="hero" fieldKey="subtitle" tag="h2" className="text-2xl text-amber-400">Bersama Partner Terpercaya</EditableText>
                <EditableText section="hero" fieldKey="description" tag="p" className="text-lg text-amber-100/80" multiline>MC Profesional & Wedding Organizer</EditableText>
              </div>
              <div className="aspect-square rounded-3xl border-4 border-amber-500/30 bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center">
                <p className="text-amber-400 text-lg">MC Photo</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-stone-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <EditableText section="services" fieldKey="title" tag="h2" className="text-4xl font-bold text-white">Paket Layanan</EditableText>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map(num => (
                <div key={num} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-600 rounded-xl mb-4"></div>
                  <EditableText section="services" fieldKey={`service_${num}_name`} tag="h3" className="text-xl font-bold text-white mb-2">Layanan {num}</EditableText>
                  <EditableText section="services" fieldKey={`service_${num}_price`} tag="p" className="text-2xl font-bold text-amber-400 mb-4">Rp 0</EditableText>
                  <EditableText section="services" fieldKey={`service_${num}_description`} tag="p" className="text-amber-100/70" multiline>Deskripsi</EditableText>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

// Protected Route Component
function ProtectedRoute({ children, isAuthenticated }) {
  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }
  return children;
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check authentication on mount
  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        
        {/* Admin Routes */}
        <Route path="/admin/login" element={isAuthenticated ? <Navigate to="/admin/dashboard" replace /> : <Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/admin/dashboard" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Dashboard setIsAuthenticated={setIsAuthenticated} /></ProtectedRoute>} />
        
        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      
      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </Router>
  );
}

export default App;
