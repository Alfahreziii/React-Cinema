import { useState } from "react";

const PasswordInput = ({
  id = "password",
  label = "Kata Sandi",
  placeholder = "Masukkan Kata Sandi",
  value,
  onChange,
  ...props

}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword(prev => !prev);

  return (
    <div className="w-full mt-6">
      <label htmlFor={id} className="text-white max-[500px]:text-base max-[500px]:font-light  text-lg font-lato font-medium mb-2 block">
        {label}
      </label>
      <div className="relative w-full">
        <input
          id={id}
          type={showPassword ? "text" : "password"}
          className="w-full border rounded-full h-[45px] text-white border-[#E7E3FC3B]/35 placeholder-[#C1C2C4] px-5 placeholder-lato max-[1300px]:text-base text-lg pr-12"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          {...props}
        />
        <button
          type="button"
          onClick={togglePassword}
          className="absolute inset-y-0 right-4 flex items-center"
        >
          {showPassword ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 text-gray-400">
              <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
              <path fillRule="evenodd" clipRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" />
            </svg>
          ) : (
            <img src="/images/mata.svg" alt="Mata Tertutup" className="w-6 h-6" />
          )}
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;
