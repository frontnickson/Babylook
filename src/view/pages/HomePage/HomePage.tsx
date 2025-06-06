import React from 'react';

import SideBar from '../../components/HomePageComponents/SideBar/SideBar';
import RightComponents from '../../components/HomePageComponents/RightComponents/RightComponents';

import styles from './HomePage.module.scss'
import LastPosts from '../../components/HomePageComponents/LastPosts/LastPosts';

const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <SideBar />
      <LastPosts/>
    </div>
  );
};

export default HomePage;
