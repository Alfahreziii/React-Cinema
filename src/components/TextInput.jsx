// components/TextInput.jsx
import React from "react";

const TextInput = ({
  id,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  className = "",
  icon = null,
  ...props
}) => {
  return (
    <div className="w-full mt-6">
      {label && (
        <label htmlFor={id} className="text-white text-lg font-lato font-medium mb-2 block">
          {label}
        </label>
      )}
      <div className="relative w-full">
        <input
          id={id}
          type={type}
          className={`w-full border rounded-full h-[45px] text-white border-[#E7E3FC3B]/35 placeholder-[#C1C2C4] px-5 placeholder-lato max-[1300px]:text-base text-lg ${icon ? "pr-12" : ""} ${className}`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          {...props}
        />
        {icon && <div className="absolute inset-y-0 right-4 flex items-center">{icon}</div>}
      </div>
    </div>
  );
};

export default TextInput;
