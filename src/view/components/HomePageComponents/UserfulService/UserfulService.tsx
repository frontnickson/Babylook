import React from 'react';

import analyzeIcon from '../../../assets/images/icon-service/Object.svg'

import styles from './UsefulArticle.module.scss'
import {Link} from "react-router-dom";

const UserfulService: React.FC = () => {
  return (
    <div className={styles.container}>
        <h2>Полезные сервисы</h2>
        <Link to="/analysis" className={styles.service}>
            <img src={analyzeIcon} alt="analyze"/>
            <h4>Анализ образа</h4>
        </Link>
    </div>
  );
};

export default UserfulService;
