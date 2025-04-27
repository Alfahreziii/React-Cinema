import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, setAlert } from '../redux/userSlice';
import { getCurrentUserProfile, updateUserProfile, changeUserPassword, deleteAccount } from "../services/authService";
import AlertMessage from '../components/AlertMessage';
import TextInput from '../components/TextInput';

const ProfilePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, alert } = useSelector((state) => state.user);
  const [newPassword, setNewPassword] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      const profile = await getCurrentUserProfile();
      if (profile) {
        dispatch(setUser({
          name: profile.displayName || '',
          email: profile.email || '',
          password: ''
        }));
      }
    };

    fetchUser();
  }, [navigate, dispatch]);

  const handleSave = async (e) => {
    e.preventDefault();
    let updateProfileResult = { success: false };

    updateProfileResult = await updateUserProfile({ displayName: user.name });

    if (updateProfileResult.success) {
      if (newPassword) {
        const passwordResult = await changeUserPassword(newPassword);
        if (passwordResult.success) {
          dispatch(setAlert({ message: "Profil dan password berhasil diperbarui", type: "success" }));
        } else {
          dispatch(setAlert({ message: `Gagal mengubah password: ${passwordResult.error}`, type: "error" }));
        }
      } else {
        dispatch(setAlert({ message: "Profil berhasil diperbarui", type: "success" }));
      }

      setNewPassword('');
    } else {
      dispatch(setAlert({ message: `Gagal memperbarui profil: ${updateProfileResult.error}`, type: "error" }));
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
          onClose={() => dispatch(setAlert(null))}
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
                  <button
                    onClick={handleSave}
                    className="w-max rounded-full border-[#3254FF] border max-[480px]:py-1 max-[480px]:text-sm flex items-center px-4 font-lato py-2 text-[#3254FF]"
                  >
                    Ubah Foto
                  </button>
                </div>
              </div>
              <form onSubmit={handleSave}>
                <TextInput
                  id="name"
                  type="text"
                  label="Nama Lengkap"
                  name="name"
                  value={user.name}
                  onChange={(e) => dispatch(setUser({ ...user, name: e.target.value }))}
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
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
