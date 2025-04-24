import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getCurrentUserProfile, updateUserProfile, changeUserPassword, deleteAccount } from "../services/authService";
import AlertMessage from '../components/AlertMessage';
import TextInput from '../components/TextInput';
import MovieSlider from "../components/MovieSlider";
import daftarSayaFilm from "../data/daftarSayaFilm";

const ProfilePage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: '', email: '', password: '' });
  const [newPassword, setNewPassword] = useState('');
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const profile = await getCurrentUserProfile();
      if (profile) {
        setUser({
          name: profile.displayName || '',
          email: profile.email || '',
          password: '' // password tidak disimpan/ditampilkan
        });
      }
    };

    fetchUser();
  }, [navigate]);


  const handleSave = async (e) => {
    e.preventDefault();
  
    let updateProfileResult = { success: false };
  
    // Update profil
    updateProfileResult = await updateUserProfile({ displayName: user.name });

    if (updateProfileResult.success) {
      // Jika ada password baru yang diubah
      if (newPassword) {
        const passwordResult = await changeUserPassword(newPassword);
        if (passwordResult.success) {
          setAlert({ message: "Profil dan password berhasil diperbarui", type: "success" });
        } else {
          setAlert({ message: `Gagal mengubah password: ${passwordResult.error}`, type: "error" });
        }
      } else {
        // Jika hanya profil yang diperbarui tanpa perubahan password
        setAlert({ message: "Profil berhasil diperbarui", type: "success" });
      }
  
      setNewPassword(''); // Reset password input setelah submit
    } else {
      setAlert({ message: `Gagal memperbarui profil: ${updateProfileResult.error}`, type: "error" });
    }
  };
  

  const handleDeleteAccount = async () => {
    const confirmDelete = window.confirm("Yakin ingin menghapus akun ini?");
    if (confirmDelete) {
      const result = await deleteAccount();
      if (result.success) {
        alert("Akun berhasil dihapus");
        navigate('/login');
      } else {
        alert(`Gagal menghapus akun: ${result.error}`);
      }
    }
  };

  return (
    <>
        {alert && (
          <AlertMessage
            message={alert.message}
            type={alert.type}
            onClose={() => setAlert(null)}
          />
        )}
      <div className="w-full py-10 px-16 mt-20 max-[780px]:px-8 max-[480px]:px-5">
        <div>
          <h1 className="text-white text-2xl font-lato font-bold max-[750px]:hidden mb-4">Profil Saya</h1>
          <div className="flex max-[750px]:flex-wrap max-[750px]:flex-col-reverse w-full gap-10">
            <div className="w-1/2 max-[750px]:w-full">
              <h1 className="text-white text-2xl font-lato font-bold min-[750px]:hidden mb-4">Profil Saya</h1>
              <div className="flex gap-5">
                <img src="/images/profile.png" alt="Profile" className="rounded-full w-[150px]" />
                <div className="flex flex-col gap-2 justify-center">
                  <Link to="#" className="w-max rounded-full border-[#3254FF] border max-[480px]:py-1 max-[480px]:text-sm flex items-center px-4 font-lato py-2 text-[#3254FF]">
                    Ubah Foto
                  </Link>
                  <div className="flex text-[#C1C2C4] gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m0-3-3-3m0 0-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75" />
                    </svg>
                    <span className="text-sm/7">Maksimal 2MB</span>
                  </div>
                </div>
              </div>
              <form onSubmit={handleSave}>
                <TextInput
                  id="name"
                  type="text"
                  label="Nama Lengkap"
                  name="name"
                  value={user.name}
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                />
                <TextInput
                  id="Email"
                  type="text"
                  label="Email"
                  name="Email"
                  value={user.email}
                  disabled
                />
                <TextInput
                  id="newPassword"
                  type="password"
                  label="Password Baru (opsional)"
                  name="newPassword"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <div className="flex gap-5">
                  <button type="submit" className="bg-[#0F1E93] mt-8 flex cursor-pointer items-center px-6 py-2 text-white font-lato font-bold rounded-full">
                    Simpan
                  </button>
                  <button type="button" onClick={handleDeleteAccount} className="bg-red-500 mt-8 flex cursor-pointer items-center px-6 py-2 text-white font-lato font-bold rounded-full">
                    Hapus
                  </button>
                </div>
              </form>
            </div>
            <div className="w-1/2 max-[750px]:w-full">
              <div className="bg-[#3D4142] rounded-2xl flex flex-col py-5 px-5">
                <div className="flex mb-4">
                  <div className="w-[15%] max-[1440px]:w-[20%] max-[1100px]:w-[30%] flex-shrink-0">
                    <img src="/images/Warning.png" alt="" className="w-full" />
                  </div>
                  <div className="flex-grow">
                    <h1 className="text-white text-2xl font-lato font-bold mb-4">Saat ini anda belum berlangganan</h1>
                    <p className="text-white text-xl font-lato">Dapatkan Akses Tak Terbatas ke Ribuan Film dan Series Kesukaan Kamu!</p>
                  </div>
                </div>
                <Link to="#" className="w-max ml-auto bg-[#2F3334] flex items-center px-6 py-2 text-white font-lato font-bold rounded-full">
                  Mulai Berlangganan
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-10">
        <MovieSlider movies={daftarSayaFilm} />
      </div>
    </>
  );
};

export default ProfilePage;
