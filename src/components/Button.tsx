interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'tix' | 'youtube';
  className?: string; // ← Tambah ini
  onClick?: () => void;
}

export default function Button({ children, variant = 'primary', className = '', onClick }: ButtonProps) {
  const baseStyles = "px-6 py-3 font-display font-bold border-2 border-gjls-black shadow-brutal hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-sm transition-all cursor-pointer rounded-full";
  
  const variants = {
    primary: "bg-gjls-pink text-white",
    secondary: "bg-gjls-teal text-white",
    outline: "bg-gjls-cream text-gjls-black",
    tix: "bg-brand-tix text-white",
    youtube: "bg-brand-youtube text-white",
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`} // ← Tambah className
    >
      {children}
    </button>
  );
}