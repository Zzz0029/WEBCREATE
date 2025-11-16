import { useEffect, useRef, useState } from 'react';

const Features = () => {
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

    const items = sectionRef.current?.querySelectorAll('.feature-card');
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: '🎨',
      title: 'Desain Modern & Elegan',
      description: 'Website dengan tampilan mewah, elegant, dan modern yang menarik perhatian pengunjung.',
    },
    {
      icon: '📱',
      title: 'Responsif di Semua Device',
      description: 'Website yang sempurna tampil di desktop, tablet, dan smartphone.',
    },
    {
      icon: '⚡',
      title: 'Loading Super Cepat',
      description: 'Optimasi performa untuk kecepatan loading yang maksimal.',
    },
    {
      icon: '🔒',
      title: 'Aman & Terpercaya',
      description: 'Keamanan data dan website Anda adalah prioritas utama kami.',
    },
    {
      icon: '🚀',
      title: 'SEO Friendly',
      description: 'Website yang dioptimasi untuk mesin pencari agar mudah ditemukan.',
    },
    {
      icon: '💼',
      title: 'Semua Jenis Website',
      description: 'Website perusahaan, toko online, portfolio, blog, dan semua jenis website dapat dibuat.',
    },
  ];

  return (
    <section id="features" ref={sectionRef} className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4 animate-slide-in">
            Mengapa Pilih Kami?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Layanan profesional dengan kualitas terbaik untuk website impian Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`feature-card group relative p-8 glass-effect rounded-2xl shadow-lg hover:shadow-2xl transform transition-all duration-700 ${
                visibleItems[index]
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-10 scale-95'
              } hover:-translate-y-2`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="text-6xl mb-4 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 inline-block">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

