import React, {useState} from 'react';
import EditDay from "./EditDate/EditDay.tsx";
import EditMonth from "./EditMonth/EditMonth.tsx";
import EditYear from "./EditYear/EditYear.tsx";

import styles from './EditDateUser.module.scss'

const EditDateUser: React.FC = () => {

    // const [activeDay, setActiveDay] = useState(false);
    const [activeMonth, setActiveMonth] = useState(false);
    // const [activeYear, setActiveYear] = useState(false);

    const handleActiveMonth = () => {
        if (!activeMonth) setActiveMonth(true);
        else setActiveMonth(false);
    }    

    return (
        <div className={styles.container}>
            <p>Дата: </p>
            <EditDay onActiveMonth={handleActiveMonth}/>
            <EditMonth activeMonth={activeMonth}/>
            <EditYear/>
        </div>
    );
};

export default EditDateUser;
