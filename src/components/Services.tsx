import React, { useEffect, useRef, useState } from 'react';

const Services = () => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Array.from(entry.target.parentElement?.children || []).indexOf(entry.target);
            setVisibleItems((prev) => {
              const newItems = [...prev];
              newItems[index] = true;
              return newItems;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = sectionRef.current?.querySelectorAll('.service-card');
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: 'Website Perusahaan',
      description: 'Website profesional untuk perusahaan dengan fitur lengkap',
      icon: '🏢',
    },
    {
      title: 'Toko Online / E-Commerce',
      description: 'Website untuk jualan online dengan sistem pembayaran terintegrasi',
      icon: '🛒',
    },
    {
      title: 'Website Portfolio',
      description: 'Tampilkan karya dan skill Anda dengan website portfolio yang menarik',
      icon: '🎯',
    },
    {
      title: 'Website Blog',
      description: 'Platform untuk berbagi konten dan artikel Anda',
      icon: '📝',
    },
    {
      title: 'Website Landing Page',
      description: 'Halaman penjualan yang powerful untuk konversi tinggi',
      icon: '📄',
    },
    {
      title: 'Website Custom',
      description: 'Website sesuai kebutuhan khusus Anda - semua website dapat dibuat!',
      icon: '⚙️',
    },
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1.5s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4 animate-slide-in">
            Layanan Kami
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Semua jenis website dapat dibuat sesuai kebutuhan Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card group relative p-6 bg-white rounded-xl shadow-md hover:shadow-2xl transform transition-all duration-700 border border-gray-100 ${
                visibleItems[index]
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-10 scale-95'
              } hover:-translate-y-2`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="text-5xl transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Border Glow Effect */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-300/50 transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="inline-block glass-effect rounded-2xl px-8 py-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <p className="text-lg text-gray-700 font-semibold">
              <span className="inline-block animate-pulse">💡</span> Punya ide website khusus? <span className="text-blue-600 font-bold hover:text-purple-600 transition-colors">Kami bisa mewujudkannya!</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

