import React from 'react';

import Post from "../../components/Post/Post.tsx";
import styles from './HomePage.module.scss';
import UserfulService from "../../components/HomePageComponents/UserfulService/UserfulService.tsx";
import UsefulArticle from "../../components/HomePageComponents/UsefulArticle/UsefulArticle.tsx";

const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
        <div className={styles.section}>
            <Post/>
            <UserfulService/>
        </div>
        <div>
            <UsefulArticle/>
        </div>
    </div>
  );
};

export default HomePage;
