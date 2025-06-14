import React from 'react';
import EditDate from "./EditDate/EditDate.tsx";
import EditMonth from "./EditMonth/EditMonth.tsx";
import EditYear from "./EditYear/EditYear.tsx";

import styles from './EditDateUser.module.scss'

const EditDateUser: React.FC = () => {

    return (
        <div className={styles.container}>
            <p>Дата: </p>
            <EditDate/>
            <EditMonth/>
            <EditYear/>
        </div>
    );
};

export default EditDateUser;
