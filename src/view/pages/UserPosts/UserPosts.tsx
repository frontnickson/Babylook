import React from 'react';

import styles from './UserPosts.module.scss'
import Post from "../../components/Post/Post.tsx";

const UserPosts: React.FC = () => {
  return (
    <div className={styles.container}>
          <Post/>
    </div>
  );
};

export default UserPosts;
