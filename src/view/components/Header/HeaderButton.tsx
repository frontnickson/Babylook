import React from 'react';

import icon from '../../assets/images/header-navigation/profile-icon-woman.svg'

import styles from './HeaderButton.module.scss';

const HeaderButton: React.FC = () => {
    return (
        <button className={styles.button}>
            <img src={icon} alt="profile"/>
            Профиль
        </button>
    );
};

export default HeaderButton;