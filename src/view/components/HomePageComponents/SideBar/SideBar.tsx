import React from 'react';
import { Link } from 'react-router-dom';

import styles from './SideBar.module.scss'

const list = [
    {
        id: 1,
        name: "Для мальчиков",
        link: "/boys"
    },
    {
        id: 2,
        name: "Для девочек",
        link: "/boys"
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