import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BoysComponents from '../components/HomePageComponents/BoysComponents/BoysComponents';

const HomeRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/home/boys" element={<BoysComponents />} />
        </Routes>
    );
};

export default HomeRoutes;