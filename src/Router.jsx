import { BrowserRouter, Routes, Route } from "react-router-dom"
import { lazy } from "react";

const LoginPage = lazy(() => import ("./pages/Login.jsx"));
const RegisterPage= lazy(() => import ("./pages/Register.jsx"));
const HomePage = lazy(() => import ("./pages/HomePage.jsx"));
const Layout = lazy(() => import ("./components/Layout.jsx"));
const ProfilePage = lazy(() => import ("./pages/ProfilePage.jsx"));
const ProtectedRoute = lazy(() => import ("./components/ProtectedRoute.jsx"));
const SeriesPage = lazy(() => import ("./pages/SeriesPage.jsx"));

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