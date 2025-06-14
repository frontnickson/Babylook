import React from 'react';

import styles from './UserPosts.module.scss'
import Post from "../../components/Post/Post.tsx";
import UserPostComponents from "../../components/UserPostComponents/UserPostComponents.tsx";

const UserPosts: React.FC = () => {
    return (
        <div className={styles.container}>
            <UserPostComponents/>
            <Post/>
        </div>
    );
};

export default UserPosts;
