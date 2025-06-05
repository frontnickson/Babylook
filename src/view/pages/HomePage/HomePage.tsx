import React from 'react';

import SideBar from '../../components/HomePageComponents/SideBar/SideBar';
import RightComponents from '../../components/HomePageComponents/RightComponents/RightComponents';

import styles from './HomePage.module.scss'

const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <SideBar />
      <RightComponents />
    </div>
  );
};

export default HomePage;
