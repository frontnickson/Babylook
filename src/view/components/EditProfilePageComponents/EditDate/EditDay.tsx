import React, {useState} from 'react';

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

import styles from './EditDate.module.scss';

type EditDayProps = {
    onActiveMonth: () => void;
};

const EditDay: React.FC<EditDayProps> = ({onActiveMonth}) => {

    const [editDay, setEditDay] = useState(false);
    const [day, setDay] = useState("")

    // Activated day

    const handleSetDay = () => {
        if (!editDay) setEditDay(true);
        else setEditDay(false);
    }

    // Dispatch day

    const handleDispatchDay = (e: React.MouseEvent<HTMLParagraphElement>) => {
        const target = e.target as HTMLParagraphElement;
        setDay(target.innerText)
        onActiveMonth();
    }

    return (
        <div className={styles.container} style={{height: editDay ? "100%" : "20px"}} onClick={handleSetDay}>

            <div className={styles.form}>

                <p style={{color: "grey"}}>{day ? day : "День"}</p>

                {editDay && (
                    <div className={styles.selector}>
                        {list.map((item) => (
                            <p className={styles.selector_choose} key={item} onClick={handleDispatchDay}>
                                {item}
                            </p>
                        ))}
                    </div>
                )}

            </div>

        </div>
    );
};

export default EditDay;
