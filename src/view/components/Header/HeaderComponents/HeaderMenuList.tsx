import React from 'react';
import {NavLink} from "react-router-dom";

const list = [
    {
        id: 1,
        name: "Главная",
        link: "/home"
    },
    {
        id: 2,
        name: "Мои посты",
        link: "/posts"
    },
    {
        id: 3,
        name: "Избранное",
        link: "/favorite"
    },
]

const HeaderMenuList: React.FC = () => {
    return (
        <>
            {list.map((item) => (
                <ul key={item.id}>
                    <li>
                        <NavLink to={item.link}>
                            <p style={{cursor: 'pointer'}}>{item.name}</p>
                        </NavLink>
                    </li>
                </ul>
            ))}
        </>
    );
};

export default HeaderMenuList;
