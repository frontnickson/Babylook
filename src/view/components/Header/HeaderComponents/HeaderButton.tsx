import React from 'react';
import {Link} from "react-router-dom";
import icon from '../../../assets/images/header-navigation/profile-icon-woman.svg'

import styles from '../HeaderStyles/HeaderButton.module.scss';

const HeaderButton: React.FC = () => {
    return (
        <Link to="/profile">
            <button className={styles.button}>
                <img src={icon} alt="profile"/>
                Профиль
            </button>
        </Link>
    );
};

export default HeaderButton;