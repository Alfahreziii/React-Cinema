import React, { useState } from "react";

const TextInput = ({
  label,
  id,
  type,
  value : propValue,
  onChange: propOnChange,
  name,
  icon,
  ...props
}) => {
    const [localValue, setLocalValue] = useState("");

    const value = propValue !== undefined ? propValue : localValue;
    const onChange = propOnChange !== undefined ? propOnChange : (e) => setLocalValue(e.target.value);
  
    const hasValue = value?.toString().length > 0;
    const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative w-full mt-8">
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        name={name}
        className="bg-[#22282A] w-full h-[60px] font-lato px-4 pt-4 pb-2 text-white border border-[#E7E3FC3B]/23 rounded-md placeholder-transparent focus:outline-none focus:border-white transition-all"
        placeholder={label}
        {...props}
      />
      <label
        htmlFor={id}
        className={`absolute left-4 top-2 text-[#9D9EA1] text-base transition-all duration-200 
          ${isFocused || hasValue ? "text-sm mb-2 top-1" : "top-4"}
        `}
      >
        {label}
      </label>
      {icon && <div className="absolute inset-y-0 right-4 flex items-center">{icon}</div>}
    </div>
  );
};

export default TextInput;
