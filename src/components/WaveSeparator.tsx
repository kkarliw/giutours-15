interface WaveSeparatorProps {
  variant?: 'cyan' | 'primary' | 'blue' | 'yellow';
  flip?: boolean;
  className?: string;
}

const WaveSeparator = ({ variant = 'cyan', flip = false, className = '' }: WaveSeparatorProps) => {
  const colors = {
    cyan: 'hsl(var(--cyan))',
    primary: 'hsl(var(--primary))',
    blue: 'hsl(var(--secondary-blue))',
    yellow: 'hsl(var(--yellow))',
  };

  const fillColor = colors[variant];

  return (
    <div className={`w-full overflow-hidden ${flip ? 'rotate-180' : ''} ${className}`}>
      <svg 
        viewBox="0 0 1440 80" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className="w-full h-auto"
        preserveAspectRatio="none"
      >
        <path 
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z" 
          fill={fillColor}
          fillOpacity="0.1"
        />
        <path 
          d="M0,50 C360,10 720,90 1080,50 C1260,30 1380,60 1440,50 L1440,80 L0,80 Z" 
          fill={fillColor}
          fillOpacity="0.05"
        />
      </svg>
    </div>
  );
};

export default WaveSeparator;