import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <Logo size="lg" showText={true} animated={false} className="text-white" />
            </div>
            <p className="text-gray-300 leading-relaxed">
              Jasa pembuatan website profesional dengan desain modern, elegant, dan mewah. 
              Semua jenis website dapat dibuat sesuai kebutuhan Anda.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Layanan</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Website Perusahaan</li>
              <li>Toko Online / E-Commerce</li>
              <li>Website Portfolio</li>
              <li>Website Blog</li>
              <li>Website Custom</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak</h4>
            <div className="space-y-3 text-gray-300">
              <a
                href="https://wa.me/6285187047492"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-green-400 transition-colors"
              >
                <span className="text-xl">💬</span>
                <span>+62 851 8704 7492</span>
              </a>
              <p className="text-sm text-gray-400">
                Harga mulai dari Rp 400.000
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Mssmel Web Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

