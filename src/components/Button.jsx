export const Button = ({ className, size = "sm", children }) => {
  const baseClass =
    "relative overflow-hidden flex justify-center items-center font-bold rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-button-primary bg-button-primary text-white hover:bg-button-primary/90 shadow-lg shadow-button-primary/10 transition-all duration-300 ease-in-out cursor-pointer active:scale-95";

  const sizeClass = {
    sm: "px-6 py-3 text-[10px] lg:px-6 lg:py-3 lg:text-base",
    default: "px-3 py-2 text-sm lg:px-6 lg:py-3 lg:text-base",
    lg: "px-6 py-4 text-lg lg:px-12 lg:py-6",
  };
  const classes = `${baseClass} ${sizeClass[size]} ${className || ""}`;
  return (
    <button className={classes}>
      <span className="relative flex justify-center item-align gap-2">
        {children}
      </span>
    </button>
  );
};
