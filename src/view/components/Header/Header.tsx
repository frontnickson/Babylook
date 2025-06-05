import React from "react";

import HeaderLogo from "./HeaderLogo.tsx";
import HeaderNavigation from "./HeaderNavigation.tsx";

import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.container}>
        <HeaderLogo />
        <HeaderNavigation />
      </header>
    </div>
  );
};

export default Header;
