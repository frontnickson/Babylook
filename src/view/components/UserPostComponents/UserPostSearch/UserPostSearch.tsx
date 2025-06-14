import React from 'react';

import styles from './UserPostSearch.module.scss';

const UserPostSearch: React.FC = () => {
  return (
    <>
        <input type="text" placeholder="Поиск постов..." className={styles.search}/>
    </>
  );
};

export default UserPostSearch;
