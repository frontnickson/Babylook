import React from 'react';

// import image from '../../assets/images/top-year/winter-baby.png'
import styles from './TopPage.module.scss'
import {useNavigate} from "react-router-dom";

const list = [
    {
        id: 1,
        title: "Зима",
        link: "/top/winter",
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

    const navigate = useNavigate();

    const handleLink = (link: string) => {
        navigate(link)
    }

    return (
        <div className={styles.container}>
            <ul>
                {list.map((item) => (
                    <li key={item.id} className={styles.list} onClick={() => {
                        handleLink(item.link)
                    }}>
                        <h1>{item.title}</h1>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TopPage;