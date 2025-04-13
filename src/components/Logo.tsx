
import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

// Get base URL dynamically based on current environment
const Logo: FC<LogoProps> = ({ className = "", showText = true }) => {
  const location = useLocation();
  // Determine if we're on GitHub Pages
  const isGitHubPages = window.location.hostname.includes('github.io');
  
  // For GitHub Pages with HashRouter, the base path is different
  const basePath = isGitHubPages 
    ? '' // With HashRouter, we don't need a base path
    : '/abhyum-ai-automation-platform-f8842845';
  
  // For the image path, we always need the full path on GitHub Pages
  const imagePath = `${isGitHubPages ? '/abhyum-ai-automation-platform-f8842845' : basePath}/lovable-uploads/a1acf0e4-7de4-48f7-aaba-31fec0f2b0e5.png`;
  
  return (
    <Link to="/" className={`flex items-center gap-2 ${className}`}>
      <div className="w-10 h-10">
        <img 
          src={imagePath}
          alt="Abhyum Logo" 
          className="w-full h-full object-contain" 
          onError={(e) => {
            console.error('Logo image failed to load');
            e.currentTarget.src = `${basePath}/placeholder.svg`;
          }}
        />
      </div>
      {showText && (
        <span className="text-xl font-bold gradient-text">Abhyum</span>
      )}
    </Link>
  );
};

export default Logo;
