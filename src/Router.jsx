import { BrowserRouter, Routes, Route } from "react-router-dom"

import LoginPage from "./pages/Login.jsx"
import RegisterPage from "./pages/Register.jsx"
import HomePage from "./pages/HomePage.jsx"
import Layout from "./components/Layout.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import SeriesPage from "./pages/SeriesPage.jsx";
const Router = () => {

    return (
        <BrowserRouter>  
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />

                <Route path="/" element={ <ProtectedRoute><Layout /></ProtectedRoute>}>
                    <Route index element={<HomePage />}/>
                    <Route path="profile" element={<ProfilePage />} />
                    <Route path="series" element={<SeriesPage />} />
                </Route>
            </Routes>
        </BrowserRouter>  
    )
};

export default Router;