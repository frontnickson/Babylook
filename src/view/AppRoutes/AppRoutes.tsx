import React from 'react';
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage.tsx";
import ProfilePage from "../pages/ProfilePage/ProfilePage.tsx";

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
        </Routes>
    );
};

export default AppRoutes;
