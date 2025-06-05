import React from 'react';

import Header from "./components/Header/Header.tsx";
import AppRoutes from "./AppRoutes/AppRoutes.tsx";
import Footer from "./components/Footer/Footer.tsx";

import styles from './App.module.scss';

const App: React.FC = () => {
    return (
        <div className={styles.container}>
            <Header />

            <div className={styles.main}>
                <AppRoutes />
            </div>

            <Footer />
        </div>
    );
};

export default App;
