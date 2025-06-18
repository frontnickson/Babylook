import React from 'react';

import Post from "../../components/Post/Post.tsx";
import styles from './FavoritesPage.module.scss'

const FavoritesPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Post />
    </div>
  );
};

export default FavoritesPage;
