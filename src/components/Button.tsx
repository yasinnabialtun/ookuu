import React, { ReactNode } from "react";
import ookuuLogo from "../assets/ookuulogopng.png";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

const Button: React.FC<ButtonProps> = ({ children, className = "", ...props }) => {
  return (
    <button
      {...props}
      className={`relative flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 ${className}`}
    >
      {children}
      <img
        src={ookuuLogo}
        alt="Ookuu Logo"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-5 opacity-0 hover:opacity-100 transition-opacity"
      />
    </button>
  );
};

export default Button;
