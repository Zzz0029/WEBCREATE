import { useState } from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  animated?: boolean;
  logoUrl?: string; // Custom logo URL (optional)
}

const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  size = 'md', 
  showText = true,
  animated = true,
  logoUrl: customLogoUrl
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl',
  };

  // URL logo - gunakan file lokal terlebih dahulu
  const localLogoUrl = "/WebCreate.png";
  const logoUrl1 = customLogoUrl || localLogoUrl;
  // Fallback URLs jika file lokal tidak ditemukan
  const logoUrl2 = "https://i.ibb.co/Gv4nyrcM/Web-Create.png";
  const logoUrl3 = "https://i.ibb.co/Gv4nyrcM/Web-Create.jpg";
  
  // Gunakan URL pertama (file lokal), jika error akan coba yang lain
  const [logoUrl, setLogoUrl] = useState(logoUrl1);
  const [errorCount, setErrorCount] = useState(0);
  const [showFallback, setShowFallback] = useState(false);
  
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    const newCount = errorCount + 1;
    setErrorCount(newCount);
    
    // Coba URL alternatif
    if (newCount === 1) {
      setLogoUrl(logoUrl2);
    } else if (newCount === 2) {
      setLogoUrl(logoUrl3);
    } else {
      // Jika semua gagal, sembunyikan gambar dan tampilkan fallback
      target.style.display = 'none';
      setShowFallback(true);
    }
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Image */}
      <div className={`${sizeClasses[size]} relative ${animated ? 'animate-pulse-subtle' : ''} flex-shrink-0`}>
        {!showFallback ? (
          <img
            src={logoUrl}
            alt="Mssmel Web Services Logo"
            className="w-full h-full object-contain drop-shadow-lg"
            onError={handleImageError}
            key={logoUrl} // Force re-render saat URL berubah
          />
        ) : (
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full absolute inset-0"
          >
            <defs>
              <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="50%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#EC4899" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="48" fill="url(#logoGradient)" />
          </svg>
        )}
        
        {/* Glow Effect */}
        {animated && (
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-md opacity-30 animate-pulse -z-10"></div>
        )}
      </div>

      {/* Text */}
      {showText && (
        <div className={`flex flex-col ${className.includes('text-white') ? 'text-white' : ''}`}>
          <span className={`font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text ${className.includes('text-white') ? 'text-white' : 'text-transparent'} ${textSizeClasses[size]} leading-tight`}>
            Mssmel
          </span>
          <span className={`${className.includes('text-white') ? 'text-gray-200' : 'text-gray-600'} ${size === 'sm' ? 'text-xs' : size === 'md' ? 'text-sm' : size === 'lg' ? 'text-base' : 'text-lg'} leading-tight`}>
            Web Services
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;

