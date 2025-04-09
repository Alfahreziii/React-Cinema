import { BrowserRouter, Routes, Route } from "react-router-dom"

import LoginPage from "./pages/Login.jsx"
import RegisterPage from "./pages/Register.jsx"
import HomePage from "./pages/HomePage.jsx"
const Router = () => {

    return (
        <BrowserRouter>  
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/home" element={<HomePage />} />
            </Routes>
        </BrowserRouter>  
    )
};

export default Router;