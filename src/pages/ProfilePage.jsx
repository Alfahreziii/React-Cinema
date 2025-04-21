import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TextInput from '../components/TextInput';
import MovieSlider from "../components/MovieSlider";
import daftarSayaFilm from "../data/daftarSayaFilm"
import { updateUser, deleteUserById } from "../services/authService";

const ProfilePage = () => {
    const [user, setUser] = useState({ name: "", email: "", password: "" });

    const handleSave = (e) => {
        e.preventDefault();

        updateUser(user);
        alert("Profil berhasil diperbarui!");
    };  

    const handleDeleteAccount = () => {
        const confirmDelete = window.confirm("Yakin ingin menghapus akun ini?");
        if (confirmDelete) {
          deleteUserById(user.id);
          alert("Akun berhasil dihapus");
          window.location.href = "/login";
        }
      };
      

    useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        setUser({
        id: parsedUser.id,
        name: parsedUser.name || "",
        email: parsedUser.email || "",
        password: parsedUser.password || ""
        });
    }
    }, []);

    return (
        <>
        <div className="w-full py-10 px-16 mt-20 max-[780px]:px-8 max-[480px]:px-5">
            <div>
                <h1 className="text-white text-2xl font-lato font-bold max-[750px]:hidden mb-4">Profil Saya</h1>
                <div className="flex max-[750px]:flex-wrap max-[750px]:flex-col-reverse w-full gap-10">
                    <div className="w-1/2 max-[750px]:w-full">
                    <h1 className="text-white text-2xl font-lato font-bold min-[750px]:hidden mb-4">Profil Saya</h1>
                        <div className="flex gap-5">
                            <img src="/images/profile.png" alt="" className="rounded-full w-[150px]"/>
                            <div className="flex flex-col gap-2 justify-center">
                                <Link to="#" className="w-max rounded-full border-[#3254FF] border max-[480px]:py-1 max-[480px]:text-sm flex items-center px-4 font-lato py-2 text-[#3254FF]">
                                    Ubah Foto
                                </Link>
                                <div className="flex text-[#C1C2C4] gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
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
                                icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 text-white">
                                    <path d="m2.695 14.762-1.262 3.155a.5.5 0 0 0 .65.65l3.155-1.262a4 4 0 0 0 1.343-.886L17.5 5.501a2.121 2.121 0 0 0-3-3L3.58 13.419a4 4 0 0 0-.885 1.343Z" />
                                </svg>
                                }
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
                            id="password"
                            type="password"
                            label="Kata Sandi"
                            name="password"
                            value={user.password}
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                            icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 text-white">
                                <path d="m2.695 14.762-1.262 3.155a.5.5 0 0 0 .65.65l3.155-1.262a4 4 0 0 0 1.343-.886L17.5 5.501a2.121 2.121 0 0 0-3-3L3.58 13.419a4 4 0 0 0-.885 1.343Z" />
                            </svg>}
                            />
                            <div className="flex gap-5">
                                <button type='submit' className="bg-[#0F1E93] mt-8 flex items-center px-6 max-[480px]:px-5 py-2 max-[480px]:py-1 text-center text-white font-lato font-bold rounded-full max-[480px]:text-sm">Simpan</button>
                                <button type='button' onClick={handleDeleteAccount} className="bg-red-500 mt-8 flex items-center px-6 max-[480px]:px-5 py-2 max-[480px]:py-1 text-center text-white font-lato font-bold rounded-full max-[480px]:text-sm">Hapus</button>
                            </div>
                        </form>
                    </div>
                    <div className="w-1/2 max-[750px]:w-full">
                        <div className="bg-[#3D4142] rounded-2xl flex flex-col py-5 px-5">
                            <div className="flex mb-4">
                                <div className="w-[15%] max-[1440px]:w-[20%] max-[1100px]:w-[30%] flex-shrink-0">
                                    <img src="/images/Warning.png" alt="" className="w-full"/>
                                </div>
                                <div className="flex-grow">
                                    <h1 className="text-white text-2xl max-[1150px]:text-xl font-lato font-bold mb-4">Saat ini anda belum berlangganan</h1>
                                    <p className="text-white text-xl max-[1150px]:text-base font-lato">Dapatkan Akses Tak Terbatas ke Ribuan Film dan Series Kesukaan Kamu!</p>
                                </div>
                            </div>
                            <Link to="#" className="w-max ml-auto bg-[#2F3334] flex items-center px-6 max-[480px]:px-5 py-2 max-[480px]:py-1 text-center text-white font-lato font-bold rounded-full max-[480px]:text-sm">
                                Mulai Berlangganan
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div className="mb-10">
            <MovieSlider movies={daftarSayaFilm}/>
        </div>
        </>
    );
}    

export default ProfilePage;