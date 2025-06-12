import React from 'react';
import {Link} from "react-router-dom";


import styles from './UsefulArticle.module.scss';

const UsefulArticle: React.FC = () => {
  return (
    <Link to="/home" className={styles.container}>
        <div className={styles.title}>
            <h2>Как подобрать одежду ребенку?</h2>
            <svg width="50" height="50" viewBox="0 0 106 106" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.5 53C0.5 63.3835 3.57907 73.5339 9.34785 82.1674C15.1166 90.801 23.316 97.5301 32.9091 101.504C42.5022 105.477 53.0582 106.517 63.2422 104.491C73.4262 102.466 82.7808 97.4654 90.1231 90.1231C97.4654 82.7808 102.466 73.4262 104.491 63.2422C106.517 53.0582 105.477 42.5022 101.504 32.9091C97.5301 23.316 90.801 15.1166 82.1674 9.34785C73.5339 3.57907 63.3835 0.5 53 0.5C39.0761 0.5 25.7226 6.03123 15.8769 15.8769C6.03123 25.7226 0.5 39.0761 0.5 53ZM23 49.25H68.5625L47.6375 28.2237L53 23L83 53L53 83L47.6375 77.6487L68.5625 56.75H23V49.25Z"/>
            </svg>
        </div>
    </Link>
  );
};

export default UsefulArticle;
