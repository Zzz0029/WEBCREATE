import { useEffect, useState } from 'react';
import Logo from './Logo';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Halo, saya tertarik dengan layanan pembuatan website. Bisa diskusi lebih lanjut?');
    window.open(`https://wa.me/6285187047492?text=${message}`, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient dengan Animasi */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 animate-gradient-shift"></div>
      
      {/* Animated Background Elements - Enhanced */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-1000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-32">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Logo di Hero */}
          <div className="mb-8 flex justify-center animate-fade-in-up">
            <div className="transform hover:scale-110 transition-transform duration-300">
              <Logo size="xl" showText={true} animated={true} />
            </div>
          </div>

          {/* Badge dengan Animasi */}
          <div className="inline-flex items-center px-6 py-3 mb-8 glass-effect rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <span className="animate-spin-slow">✨</span>
              Profesional & Terpercaya
            </span>
          </div>

          {/* Main Heading dengan Typing Effect */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight animate-slide-in">
            Jasa Pembuatan Website
            <br />
            <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent animate-gradient-text inline-block">
              Profesional & Modern
            </span>
          </h1>

          {/* Subheading dengan Fade In */}
          <p className="text-xl md:text-2xl lg:text-3xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Wujudkan website impian Anda dengan desain elegan, modern, dan responsif.
            <br />
            <span className="font-semibold text-white inline-block animate-pulse-subtle">Semua jenis website dapat dibuat!</span>
          </p>

          {/* CTA Buttons dengan Enhanced Animasi */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <button
              onClick={handleWhatsApp}
              className="group relative px-10 py-5 bg-white text-blue-600 font-bold text-lg rounded-full shadow-2xl hover:shadow-glow transform hover:scale-110 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                <span className="text-2xl animate-bounce-subtle">💬</span>
                Diskusi Harga & Jasa
                <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </button>

            <a
              href="#pricing"
              className="group px-10 py-5 border-3 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-blue-600 transform hover:scale-110 transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Lihat Paket Harga
                <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-white transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></div>
            </a>
          </div>

          {/* Starting Price dengan Pulse Effect */}
          <div className="mt-12 inline-block animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
            <div className="glass-effect rounded-2xl px-10 py-6 shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-white/30">
              <p className="text-sm text-gray-600 mb-2 font-medium">Harga Mulai Dari</p>
              <p className="text-5xl font-bold gradient-text animate-number-glow">Rp 400.000</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator dengan Enhanced Animation */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer group">
        <div className="flex flex-col items-center gap-2">
          <span className="text-white text-sm font-medium opacity-70 group-hover:opacity-100 transition-opacity">Scroll</span>
          <svg className="w-6 h-6 text-white group-hover:text-yellow-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { 
            transform: translate(0, 0) scale(1) rotate(0deg); 
          }
          33% { 
            transform: translate(50px, -80px) scale(1.2) rotate(120deg); 
          }
          66% { 
            transform: translate(-40px, 40px) scale(0.9) rotate(240deg); 
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(20px);
            opacity: 0;
          }
        }
        
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes gradient-text {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes pulse-subtle {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
        
        .animate-blob {
          animation: blob 8s ease-in-out infinite;
        }
        
        .animate-float {
          animation: float linear infinite;
        }
        
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 10s ease infinite;
        }
        
        .animate-gradient-text {
          background-size: 200% 200%;
          animation: gradient-text 3s ease infinite;
        }
        
        .animate-pulse-subtle {
          animation: pulse-subtle 2s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
        
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Hero;

