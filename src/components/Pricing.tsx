import { useEffect, useRef, useState } from 'react';

const Pricing = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Array.from(entry.target.parentElement?.children || []).indexOf(entry.target);
            setVisibleCards((prev) => {
              const newCards = [...prev];
              newCards[index] = true;
              return newCards;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('.pricing-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const handleWhatsApp = (packageName: string) => {
    const message = encodeURIComponent(`Halo, saya tertarik dengan paket ${packageName}. Bisa diskusi lebih lanjut?`);
    window.open(`https://wa.me/6285187047492?text=${message}`, '_blank');
  };

  const packages = [
    {
      name: 'Paket Basic',
      price: '400.000',
      description: 'Website sederhana untuk kebutuhan dasar',
      features: [
        '1 Halaman Website',
        'Desain Modern & Responsif',
        'Optimasi SEO Dasar',
        'Hosting Setup',
        'Support 1 Bulan',
      ],
      popular: false,
    },
    {
      name: 'Paket Professional',
      price: '1.500.000',
      description: 'Website lengkap dengan fitur profesional',
      features: [
        '5-10 Halaman Website',
        'Desain Premium & Custom',
        'Optimasi SEO Lengkap',
        'Form Kontak & Integrasi',
        'Hosting & Domain 1 Tahun',
        'Support 3 Bulan',
        'Google Analytics Setup',
      ],
      popular: true,
    },
    {
      name: 'Paket Enterprise',
      price: 'Custom',
      description: 'Website dengan fitur khusus sesuai kebutuhan',
      features: [
        'Halaman Unlimited',
        'Desain Custom Premium',
        'Fitur Khusus & Integrasi',
        'E-Commerce Ready',
        'Hosting & Domain Premium',
        'Support 6 Bulan',
        'Maintenance & Update',
        'Training & Dokumentasi',
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" ref={sectionRef} className="py-20 bg-gradient-to-br from-white via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4 animate-slide-in">
            Paket Harga
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Pilih paket yang sesuai dengan kebutuhan Anda
          </p>
          <div className="mt-4 inline-block px-6 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full shadow-lg animate-bounce-subtle">
            <p className="text-blue-700 font-semibold">
              💰 Harga Mulai Dari Rp 400.000
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`pricing-card relative rounded-2xl shadow-xl overflow-hidden transform transition-all duration-700 ${
                visibleCards[index]
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-10 scale-95'
              } ${
                pkg.popular
                  ? 'ring-4 ring-blue-500 md:scale-105 hover:scale-110'
                  : 'bg-white border border-gray-200 hover:scale-105'
              }`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white text-center py-3 text-sm font-bold animate-shimmer">
                  <span className="inline-block animate-pulse">⭐</span> PAKET TERPOPULER
                </div>
              )}
              
              {/* Glow Effect for Popular */}
              {pkg.popular && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 animate-pulse pointer-events-none"></div>
              )}

              <div className={`p-8 ${pkg.popular ? 'pt-16' : ''}`}>
                <div className="text-center mb-6 relative z-10">
                  <div className="inline-block mb-4 transform hover:scale-110 transition-transform duration-300">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-2xl shadow-lg">
                      {index === 0 ? '🚀' : index === 1 ? '⭐' : '💎'}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {pkg.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {pkg.description}
                  </p>
                  <div className="mb-4">
                    {pkg.price === 'Custom' ? (
                      <div className="animate-pulse">
                        <p className="text-3xl font-bold gradient-text">Custom</p>
                        <p className="text-sm text-gray-500 mt-1">Diskusikan kebutuhan Anda</p>
                      </div>
                    ) : (
                      <div className="relative">
                        <span className="text-2xl text-gray-600">Rp</span>
                        <span className="text-4xl font-bold gradient-text inline-block animate-number-glow">
                          {pkg.price}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <ul className="space-y-3 mb-8 relative z-10">
                  {pkg.features.map((feature, idx) => (
                    <li 
                      key={idx} 
                      className="flex items-start gap-2 group/item animate-fade-in-left"
                      style={{ animationDelay: `${(idx + 1) * 0.1}s` }}
                    >
                      <span className="text-green-500 text-xl transform group-hover/item:scale-125 transition-transform duration-300">✓</span>
                      <span className="text-gray-700 group-hover/item:text-blue-600 transition-colors">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleWhatsApp(pkg.name)}
                  className={`relative w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 overflow-hidden group ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white hover:shadow-glow transform hover:scale-105'
                      : 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 hover:from-blue-100 hover:to-purple-100'
                  }`}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    💬 Diskusi Paket Ini
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="inline-block glass-effect rounded-2xl px-8 py-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <p className="text-gray-700 mb-2">
              <span className="font-semibold animate-pulse">💡 Butuh paket khusus?</span>
            </p>
            <button
              onClick={() => handleWhatsApp('Custom')}
              className="text-blue-600 font-bold hover:text-purple-600 hover:underline transition-colors flex items-center gap-2 mx-auto group"
            >
              Hubungi kami untuk diskusi custom
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

