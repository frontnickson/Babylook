import React from 'react';

import UserPostSearch from "./UserPostSearch/UserPostSearch.tsx";
import UserPostFilter from "./UserPostFilter/UserPostFilter.tsx";
import styles from './UserPostComponents.module.scss'

const UserPostComponents: React.FC = () => {
    return (
        <div className={styles.container}>
            <UserPostSearch/>
            <UserPostFilter/>
        </div>
    );
};

export default UserPostComponents;
