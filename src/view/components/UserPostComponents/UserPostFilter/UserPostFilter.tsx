import React from 'react';

const listMonth = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабр",]
const listYear = [2024, 2025, 2026, 2027, 2028, 2029, 2030]

import styles from './UserPostFilter.module.scss'

const UserPostFilter: React.FC = () => {
  return (
    <div className={styles.container}>

      <select className={styles.select}>
        {listMonth.map((element) => (
          <option>{element}</option>
        ))}
      </select>

      <select className={styles.select}>
        {listYear.map((element) => (
          <option>{element}</option>
        ))}
      </select>

      <button className={styles.button}>Сбросить фильтры</button>
    </div>
  );
};

export default UserPostFilter;
