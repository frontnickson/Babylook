import React from 'react';

import styles from './ProfileSearchPost.module.scss'

const ProfileSearchPost: React.FC = () => {
  return (
    <>
      <input type="text" placeholder='Найти пост...' className={styles.search}/>
    </>
  );
};

export default ProfileSearchPost;
