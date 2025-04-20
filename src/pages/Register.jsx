import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { registerUser } from "../services/authService"; 
import LoginInput from '../components/LoginInput';
import PasswordInput from '../components/PasswordInput';


const RegisterPage = () => {
    const [form, setForm] = useState({ name: "", email: "", password: "" });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      registerUser(form.name, form.email, form.password);
    };
    
    useEffect(() => {
      document.body.classList.add('register');
      return () => {
        document.body.classList.remove('register');
      };
    }, []);

    return (
      <div className="w-full h-full flex justify-center items-center">
        <div className="items-center flex flex-col bg-[#181A1CD6] bg-opacity-[84%] w-[529px] max-[1300px]:w-[480px] max-[550px]:w-[90%] max-[500px]:px-5 px-10 rounded-[16px] py-8 my-40">
          <img src="/images/logo.png" alt="" className="w-[150px]" />
          <div className="mt-8">
              <h1 className="text-center max-[1300px]:text-3xl text-4xl font-lato text-white font-normal">Daftar</h1>
              <p className="font-lato text-white text-sm font-normal mt-2">Selamat datang</p>
          </div>
          <form onSubmit={handleSubmit} className="w-full">
              <LoginInput
                id="username"
                label="Username"
                name="name"
                placeholder="Masukkan Username"
                onChange={handleChange}
              />
              <LoginInput
                id="Email"
                label="Email"
                name="email"
                placeholder="Masukkan Email"
                onChange={handleChange}
              />
              <PasswordInput
                id="password"
                label="Password"
                name="password"
                placeholder="Masukkan kata sandi"
                onChange={handleChange}
              />
{/* 
              <PasswordInput
                id="confirmPassword"
                label="Konfirmasi kata sandi"
                placeholder="Masukkan kata sandi"
                onChange={handleChange}
              /> */}

              <h1 className="text-[#C1C2C4] mt-3 font-lato mr-auto max-[500px]:text-sm">Sudah punya akun? <Link to="/" class="text-white">Masuk</Link></h1>

              <button type='submit' className="mt-8 font-lato font-semibold text-white bg-[#3D4142] border border-[#E7E3FC3B]/35 rounded-full flex justify-center items-center text-base max-[1300px]:text-sm h-[55px] w-full">
                  Daftar
              </button>

              <h1 className="mx-auto text-[#9D9EA1] text-sm w-max my-2">Atau</h1>
              
              <NavLink to="#" className="w-full border rounded-full h-[45px] text-white border-[#E7E3FC3B]/35 placeholder-[#C1C2C4] px-5 text-lg pr-12 flex justify-center items-center">
                  <img src="/images/google.png" alt="" className="w-[20px]" />
                  <span className="font-lato text-white ml-5 max-[1300px]:text-sm">Masuk dengan Google</span>
              </NavLink>
            </form>
        </div>
      </div>
    )
  };
  
  export default RegisterPage;
  