export const IconButtons = ({ className, size = "sm", children }) => {
  const baseClass =
    "group relative overflow-hidden flex justify-center items-center rounded-[8px] border-3 transition-all duration-300 ease-in-out cursor-pointer" +
    "[&_svg]:w-5 [&_svg]:h-6 lg:[&_svg]:w-8 lg:[&_svg]:h-8";

  const sizeClass = {
    sm: "px-1.5 py-2 lg:p-2",
    default: "p-2 lg:6",
    lg: "p-6 lg:p-10",
  };
  const classes = `${baseClass} ${sizeClass[size]} ${className || ""}`;
  return <button className={classes}>{children}</button>;
};
