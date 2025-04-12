
import { FC } from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

// Get the base URL from Vite's environment variables
const basename = import.meta.env.BASE_URL || '/';

const Logo: FC<LogoProps> = ({ className = "", showText = true }) => {
  return (
    <Link to="/" className={`flex items-center gap-2 ${className}`}>
      <div className="w-10 h-10">
        <img 
          src={`${basename}lovable-uploads/a1acf0e4-7de4-48f7-aaba-31fec0f2b0e5.png`}
          alt="Abhyum Logo" 
          className="w-full h-full object-contain" 
        />
      </div>
      {showText && (
        <span className="text-xl font-bold gradient-text">Abhyum</span>
      )}
    </Link>
  );
};

export default Logo;
