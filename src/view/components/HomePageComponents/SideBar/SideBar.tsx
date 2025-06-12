import React from 'react';
import { Link } from 'react-router-dom';

import styles from './SideBar.module.scss'

const list = [
    {
        id: 1,
        name: "Топ образов",
        link: "/top"
    },
    {
        id: 2,
        name: "Тренды",
        link: "/trends"
    },
    {
        id: 3,
        name: "Полезные статьи",
        link: "/article"
    },
    {
        id: 4,
        name: "Рейтинг стилистов",
        link: "/rating"
    },
    {
        id: 5,
        name: "Для мальчиков",
        link: "/boys"
    },
    {
        id: 6,
        name: "Для девочек",
        link: "/girl"
    },
    {
        id: 7,
        name: "Обсуждение",
        link: "/discussion"
    },
]

const SideBar: React.FC = () => {
    return (
        <div className={styles.container}>
            {list.map(item => (
                <ul key={item.id}>
                    <li>
                        <Link to={item.link}>
                            <p>{item.name}</p>
                        </Link>
                    </li>
                </ul>
            ))}
        </div>
    );
};

export default SideBar;