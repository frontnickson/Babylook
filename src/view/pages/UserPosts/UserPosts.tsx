import React from 'react';
import Post from "../../components/Post/Post.tsx";
import UserPostNavigation from '../../components/UserPostComponents/UserPostNavigation.tsx';

import styles from './UserPosts.module.scss'

const UserPosts: React.FC = () => {
    return (
        <div className={styles.container}>
            <UserPostNavigation/>
            <Post/>
        </div>
    );
};

export default UserPosts;
