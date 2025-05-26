import React from "react";
import { useId } from "react";

const Input = React.forwardRef(function Input(
  { label, type = "text", placeholder = "", className = "", ...props },
  ref
) {
  const Id = useId();
  return (
    <div className="w-full">
      {" "}
    
      {label && (
        <label className="inline-block mb-1 pl-1" htmlFor={Id}>
          {label}
        </label>
      )}
      <input
        type={type}
        ref={ref}
        className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
        id={Id}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
});

export default Input;
