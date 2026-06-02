const Button = ({ children, onClick, type = "button", disabled = false, className = "", variant = "primary" }) => {
  const baseStyles = "rounded px-4 py-2 text-sm font-semibold flex items-center justify-center gap-2 transition-colors";
  
  const variants = {
    primary: "border border-stone-50/30 bg-stone-200 text-stone-900 hover:bg-stone-300",
    secondary: "rounded-full bg-white text-black hover:bg-gray-300 w-fit",
  };

  const disabledStyles = disabled ? "cursor-not-allowed opacity-50" : "";

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
