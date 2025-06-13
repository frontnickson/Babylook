import React from 'react';

import ProfileSearchPost from "../../components/ProfilePageComponents/ProfileSearchPost/ProfileSearchPost.tsx";
import ProfileView from "../../components/ProfilePageComponents/ProfileView/ProfileView.tsx";

import styles from './ProfilePage.module.scss'
import Post from "../../components/Post/Post.tsx";

const ProfilePage: React.FC = () => {
    return (
        <div className={styles.container}>
            <ProfileView/>
            <ProfileSearchPost/>
            <Post/>
        </div>
    );
};

export default ProfilePage;
