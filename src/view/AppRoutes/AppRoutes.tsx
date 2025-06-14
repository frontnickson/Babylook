import React from 'react';
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage.tsx";
import ProfilePage from "../pages/ProfilePage/ProfilePage.tsx";
import UserPosts from "../pages/UserPosts/UserPosts.tsx";
import FavoritesPage from "../pages/FavoritesPage/FavoritesPage.tsx";
import AuthorizationPage from "../pages/AuthorizationPage/AuthorizationPage.tsx";
import EditProfilePage from "../pages/EditProfilePage/EditProfilePage.tsx";

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/edit" element={<EditProfilePage />} />
            <Route path="/posts" element={<UserPosts />} />
            <Route path="/favorite" element={<FavoritesPage />} />
            <Route path="/authorization" element={<AuthorizationPage />} />
        </Routes>
    );
};

export default AppRoutes;
