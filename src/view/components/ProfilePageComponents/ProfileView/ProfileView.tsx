import React from "react";

import imageProfile from "../../../assets/images/test-image-profile/woman2.png";

import styles from "./ProfileView.module.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../../../data/store/store.ts";

const list = [
    {
        id: 1,
        count: 0,
        title: "Друзей",
    },
    {
        id: 2,
        count: 0,
        title: "Лайков",
    },
    {
        id: 3,
        count: 0,
        title: "Подписчиков",
    },
    {
        id: 4,
        count: 0,
        title: "Подписок",
    },
    {
        id: 5,
        count: 0,
        title: "Постов",
    },
];

const ProfileView: React.FC = () => {
    
    const name = useSelector((state: RootState) => state.user.profile.firstName);
    const nickName = useSelector((state: RootState) => state.user.profile.nickname);
    const city = useSelector((state: RootState) => state.user.profile.location);

    return (
        <div className={styles.container}>
            <img src={imageProfile} alt="image" />

            <div className={styles.title}>
                <ul>
                    <li className={styles.title_list}>
                        <h1>{name ? name : "Name"}</h1>
                        <p>{nickName ? nickName : "Nickname"}</p>
                        <p>г.{city ? city : "City"}</p>
                    </li>
                </ul>
                <Link to="/edit">
                    <p className={styles.title_button}>Изменить профиль</p>
                </Link>
            </div>

            <div className={styles.info}>
                {list.map((item) => (
                    <ul>
                        <li>
                            <h3>{item.count}</h3>
                            <p>{item.title}</p>
                        </li>
                    </ul>
                ))}
            </div>
        </div>
    );
};

export default ProfileView;
