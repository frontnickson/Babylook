import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "../../../../data/store/store.ts";
import {addDay} from "../../../../data/slices/userSlice.ts";


const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

import styles from './EditDate.module.scss';


const EditDate: React.FC = () => {

    const dispatch = useDispatch();
    const [editDay, setEditDay] = useState(false);
    const [activeDay, setActiveDay] = useState(false);
    const day = useSelector((state: RootState) => state.user.profile.date.day);

    return (
        <div className={styles.container}
             style={{height: editDay ? "100%" : "20px"}}
             onClick={() => {
                 if (!editDay) setEditDay(true);
                 else setEditDay(false);
             }}>
            <div className={styles.form}>

                <p style={{color: "grey"}}>{activeDay ? day : "День"}</p>

                {editDay && (
                    <div className={styles.selector}>
                        {list.map((item) => (
                            <p
                                className={styles.selector_choose}
                                key={item}
                                onClick={(e: React.MouseEvent<HTMLParagraphElement>) => {
                                    const target = e.target as HTMLParagraphElement;
                                    dispatch(addDay(target.textContent));
                                    setActiveDay(true);
                                }}>
                                {item}
                            </p>
                        ))}
                    </div>
                )}

            </div>
        </div>
    );
};

export default EditDate;
