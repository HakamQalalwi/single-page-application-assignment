import React from "react";
import { renderClasses } from "../utils/renderClasses";

interface ButtonProps {
  children: React.ReactNode;
  theme?: string;
  className?: string[];
  onClick: () => void;
}

function Button({
  children,
  theme,
  className: customClass = [],
  onClick,
}: ButtonProps) {
  const combinedClasses = renderClasses([theme, ...customClass]);

  return (
    <button className={combinedClasses} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
