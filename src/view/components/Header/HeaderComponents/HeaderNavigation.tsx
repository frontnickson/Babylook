import React from 'react';

import HeaderButton from "./HeaderButton.tsx";
import HeaderMenuList from "./HeaderMenuList.tsx";
import HeaderNotification from "./HeaderNotification.tsx";

import styles from '../HeaderStyles/HeaderNavigation.module.scss';

const HeaderNavigation: React.FC = () => {
    return (
        <div className={styles.container}>
            <HeaderMenuList/>
            <HeaderNotification/>
            <HeaderButton/>
        </div>
    );
};

export default HeaderNavigation;
