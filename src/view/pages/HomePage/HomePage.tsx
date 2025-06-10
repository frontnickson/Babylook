import React from 'react';

import Post from "../../components/Post/Post.tsx";
import styles from './HomePage.module.scss';
import UsefulArticle from "../../components/HomePageComponents/UsefulArticle/UsefulArticle.tsx";

const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
        <Post/>
        <UsefulArticle/>
    </div>
  );
};

export default HomePage;
