import React from "react";

import HeaderLogo from "./HeaderLogo.tsx";
import HeaderNavigation from "./HeaderNavigation.tsx";

import styles from "../HeaderStyles/Header.module.scss";
import HeaderBurgerMenu from "./HeaderBurgerMenu.tsx";

const Header: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <header className={styles.container}>
                <HeaderLogo/>
                <HeaderNavigation/>
                <HeaderBurgerMenu/>
            </header>
        </div>
    );
};

export default Header;
