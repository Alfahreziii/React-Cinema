import { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../services/authService";
import { setUser, setAlert } from "../redux/userSlice";
import LoginInput from "../components/LoginInput";
import PasswordInput from "../components/PasswordInput";

const LoginPage = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await loginUser(form.email, form.password);
    
    if (result.success) {
      dispatch(setUser(result.user)); // Set user in Redux state
      navigate("/");  // Navigate to home
    } else {
      setError("Email atau password salah!");
      dispatch(setAlert({ message: "Login failed", type: "error" }));  // Set alert in Redux
    }
  };

  useEffect(() => {
    document.body.classList.add('login');
    return () => {
      document.body.classList.remove('login');
    };
  }, []);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="form-login items-center flex flex-col bg-[#181A1CD6] bg-opacity-[84%] w-[529px] max-[1300px]:w-[480px] max-[550px]:w-[90%] max-[500px]:px-5 px-10 rounded-[16px] py-8 my-40">
        <img src="/images/logo.png" alt="" className="w-[150px]" />
        <div className="mt-8">
          <h1 className="text-center text-4xl max-[1300px]:text-3xl text-white font-normal">Masuk</h1>
          <p className="text-white text-sm font-normal mt-2">Selamat datang kembali!</p>
        </div>

        <form onSubmit={handleSubmit} className="w-full"> 
          <LoginInput
            id="email"
            label="Email"
            name="email"
            placeholder="Masukkan Email"
            onChange={handleChange}
          />
          <PasswordInput
            id="password"
            label="Kata Sandi"
            name="password"
            placeholder="Masukkan Kata Sandi"
            onChange={handleChange}
          />
          {error && <p style={{ color: "red" }}>{error}</p>}
          <div className="flex max-[500px]:text-sm">
            <h1 className="text-[#C1C2C4] mt-3 mr-auto">Belum punya akun? <Link to="/register" className="text-white">Daftar</Link></h1>
            <NavLink to="#" className="mt-3 text-white">Lupa kata sandi?</NavLink>
          </div>

          <button type="submit" className="mt-8 font-semibold text-white bg-[#3D4142] border border-[#E7E3FC3B]/35 rounded-full flex justify-center items-center text-base max-[1300px]:text-sm h-[55px] w-full">
            Masuk
          </button>

          <h1 className="mx-auto text-[#9D9EA1] text-sm w-max my-2">Atau</h1>

          <NavLink to="#" className="w-full border rounded-full h-[45px] text-white border-[#E7E3FC3B]/35 placeholder-[#C1C2C4] px-5 text-lg pr-12 flex justify-center items-center">
            <img src="/images/google.png" alt="" className="w-[20px]" />
            <span className="text-white ml-5 max-[1300px]:text-sm">Masuk dengan Google</span>
          </NavLink>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
