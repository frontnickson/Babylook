import React from 'react';

// import { Link } from 'react-router-dom';
// import winterImage from '../../assets/images/top-year/winter-baby.png'

import styles from './TopPage.module.scss'

const list = [
    {
        id: 1,
        title: "Зима",
        link: "/top/winter"
    },
    {
        id: 2,
        title: "Весна",
        link: "/top/spring"
    },
    {
        id: 3,
        title: "Лето",
        link: "/top/summer"
    },
    {
        id: 4,
        title: "Осень",
        link: "/top/autumn"
    },
]

const TopPage: React.FC = () => {
    return (
        <div className={styles.container}>
            {list.map((element) => (
                <ul key={element.id}>
                    <li key={element.id} className={styles.list}>
                        <p>{element.title}</p>
                    </li>
                </ul>
            ))}
        </div>
    );
};

export default TopPage;