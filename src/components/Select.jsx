import React from "react";
import { useId } from "react";

function Select({ options, className = "", label, ...props }, ref) {
    
  const Id = React.useId();
  return (
    <div className={"w-full"}>
      {label && <label>{label}</label>}
      <select
        {...props}
        ref={ref}
        id={Id}
        className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      >
        {options?.map((option, index) => {
          return (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default React.forwardRef(Select);
