import React from "react";

import Header from "./components/Header/HeaderComponents/Header.tsx";
import AppRoutes from "./AppRoutes/AppRoutes.tsx";
import Footer from "./components/Footer/Footer.tsx";
import SideBar from "./components/HomePageComponents/SideBar/SideBar.tsx";

import styles from "./App.module.scss";

const App: React.FC = () => {
    return (
        <div className={styles.container}>
            <Header/>


            <div className={styles.main}>
                <SideBar/>
                <AppRoutes/>
            </div>

            <Footer/>
        </div>
    );
};

export default App;
