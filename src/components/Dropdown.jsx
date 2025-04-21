import { useState, useRef, useEffect } from "react";
import genre from "../data/genre";

const Dropdown = ({ selectedGenre, setSelectedGenre }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Tutup dropdown kalau klik di luar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative mb-6 w-full" ref={dropdownRef}>
      <button
        className="cursor-pointer w-full flex items-center text-left rounded px-4 py-2 text-white bg-[#22282A]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="mr-1">{selectedGenre || "Genre"}</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
            <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute z-30 mt-2 w-[22rem] bg-[#22282A] rounded shadow-md p-2">
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                setSelectedGenre("");
                setIsOpen(false);
              }}
              className="text-left cursor-pointer px-2 py-1 text-white hover:bg-[#3D4142] rounded text-sm"
            >
              Semua
            </button>
            {genre.map((g) => (
              <button
                key={g.id}
                onClick={() => {
                  setSelectedGenre(g.name);
                  setIsOpen(false);
                }}
                className={`text-left cursor-pointer text-white px-2 py-1 hover:bg-[#3D4142] rounded text-sm ${
                  selectedGenre === g.name ? "bg-[#3D4142] font-bold" : ""
                }`}
              >
                {g.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
