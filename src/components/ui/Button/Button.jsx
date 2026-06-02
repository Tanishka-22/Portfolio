const Button = ({ children, onClick, type = "button", disabled = false, className = "", variant = "primary" }) => {
  const baseStyles = "px-4 py-2 text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-300 active:scale-95";
  
  const variants = {
    primary: "rounded-lg border border-stone-50/30 bg-stone-100 text-stone-900 hover:bg-white hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]",
    secondary: "rounded-full bg-white text-black hover:bg-gray-200 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] w-fit",
  };

  const disabledStyles = disabled ? "cursor-not-allowed opacity-50 active:scale-100" : "";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${disabledStyles} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
