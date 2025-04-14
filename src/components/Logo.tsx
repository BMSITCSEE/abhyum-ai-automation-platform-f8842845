
import { FC } from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

const Logo: FC<LogoProps> = ({ className = "", showText = true }) => {
  // Determine if we're on GitHub Pages
  const isGitHubPages = window.location.hostname.includes('github.io');
  
  // For GitHub Pages, we need to make sure we're using the correct absolute path for assets
  // The public URL is different from the base URL used for routing
  const imageBasePath = isGitHubPages 
    ? 'https://bmsitcsee.github.io/abhyum-ai-automation-platform-f8842845'
    : '';
  
  // Full path to the logo image
  const imagePath = `${imageBasePath}/lovable-uploads/a1acf0e4-7de4-48f7-aaba-31fec0f2b0e5.png`;
  
  console.log("Logo paths:", { isGitHubPages, imageBasePath, imagePath });
  
  return (
    <Link to="/" className={`flex items-center gap-2 ${className}`}>
      <div className="w-10 h-10">
        <img 
          src={imagePath}
          alt="Abhyum Logo" 
          className="w-full h-full object-contain" 
          onError={(e) => {
            console.error('Logo image failed to load, falling back to placeholder', {
              attemptedPath: imagePath
            });
            // Make sure the placeholder path is also using the correct absolute path
            e.currentTarget.src = `${imageBasePath}/placeholder.svg`;
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
