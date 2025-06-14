import React from 'react';

import styles from './EditNameUser.module.scss';

const EditNameUser: React.FC = () => {
  return (
      <div className={styles.title}>
          <p>Имя: </p>
          <input type="text" placeholder="Изменить имя.."/>
      </div>
  );
};

export default EditNameUser;
