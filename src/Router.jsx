import { BrowserRouter, Routes, Route } from "react-router-dom"

import LoginPage from "./pages/Login.jsx"
import RegisterPage from "./pages/Register.jsx"
import HomePage from "./pages/HomePage.jsx"
import Layout from "./components/Layout.jsx";
const Router = () => {

    return (
        <BrowserRouter>  
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />

                <Route path="home" element={<Layout />}>
                    <Route index element={<HomePage />}/>
                </Route>
            </Routes>
        </BrowserRouter>  
    )
};

export default Router;