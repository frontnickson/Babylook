import React from 'react';
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage.tsx";

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/home" element={<HomePage />} />
        </Routes>
    );
};

export default AppRoutes;
