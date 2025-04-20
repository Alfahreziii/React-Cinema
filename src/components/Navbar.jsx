import { useState, useRef, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom'
import { logout } from '../services/authService'; // Import fungsi logout dari authService

const Navbar = ({ links }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleLogout = () => {
      // Menggunakan service untuk logout (hapus data pengguna)
      logout();
      alert("Anda telah keluar.");
      window.location.href = "/login"; // Ganti dengan rute login sesuai kebutuhan
  };
    // Tutup dropdown jika klik di luar elemen dropdown
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };
  
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

  return (
    <nav className="bg-[#181A1C] w-full top-0 px-16 max-[480px]:px-5 max-[780px]:px-8 py-5 fixed z-[99999]">
        <div className="flex items-center">
            <div className="flex">
                <Link to="/" className="flex items-center">
                  <img src="/images/logo.png" alt="" className="w-[100px] mr-10 max-[710px]:hidden"/>
                  <img src="/images/logo2.png" alt="" className="w-[30px] mr-10 max-[480px]:mr-1 min-[710px]:hidden"/>
                </Link>
                {links.map((link) => (
                    <NavLink
                    key={links.id}
                    to={link.path}
                    className={({ isActive }) =>
                        isActive ? "text-white mx-10 max-[710px]:mx-3 max-[480px]:text-base text-lg active" : "max-[480px]:text-base text-white mx-10 max-[710px]:mx-3 text-lg"
                    }
                    >
                    {link.name}
                    </NavLink>
                ))}
            </div>
            <div className="flex ml-auto relative items-center" ref={dropdownRef}>
                <img src="/images/profile.png" 
                alt="profile" 
                onClick={() => setIsOpen(!isOpen)} 
                className="mr-2 rounded-full w-[35px] cursor-pointer"/>

                <svg onClick={() => setIsOpen(!isOpen)} className="w-5 text-white cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                </svg>

                {isOpen && (
                    <div className="absolute right-0 top-10 w-48 bg-[#181A1C] shadow-[#3E434A4F]/31 rounded-lg p-2" id="dropdown-menu">
                        <Link to="profile" className="text-white px-4 py-2 rounded hover:text-[#3254FF] flex">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 mr-1">
                        <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
                        </svg>
                        Profil Saya</Link>
                        <Link className="text-white px-4 py-2 rounded hover:text-[#3254FF] flex">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5 mr-1">
                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                        </svg>
                        Ubah Premium</Link>
                        <button onClick={handleLogout} className="text-white px-4 py-2 rounded hover:text-[#3254FF] flex">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5 mr-1">
                        <path fill-rule="evenodd" d="M16.5 3.75a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V15a.75.75 0 0 0-1.5 0v3.75a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5.25a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3V9A.75.75 0 1 0 9 9V5.25a1.5 1.5 0 0 1 1.5-1.5h6Zm-5.03 4.72a.75.75 0 0 0 0 1.06l1.72 1.72H2.25a.75.75 0 0 0 0 1.5h10.94l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 0 0-1.06 0Z" clip-rule="evenodd" />
                        </svg>
                        Keluar</button>
                    </div>
                )}
            </div>
        </div>
    </nav>
  )
}

export default Navbar