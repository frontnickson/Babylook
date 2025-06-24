import React, { useState } from 'react';

import styles from './EditMonth.module.scss'

const list = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]

type EditMonthProps ={
    activeMonth: boolean;
}

const EditMonth: React.FC<EditMonthProps> = ({activeMonth}) => {

    console.log(activeMonth);
    
    const [editMonth, setEditMonth] = useState(false);
    const [month, setMonth] = useState("")

    // Activated month

    const handleSetMonth = () => {
        if (!editMonth) setEditMonth(true);
        else setEditMonth(false);
    }

    // Dispatch month

    const handleDispatchMonth = (e: React.MouseEvent<HTMLParagraphElement>) => {
        const target = e.target as HTMLParagraphElement;
        setMonth(target.innerText)
        setEditMonth(false);
    }

    return (
        <div className={styles.container} style={{ height: editMonth ? "100%" : "20px" }} onClick={handleSetMonth}>

            <div className={styles.form}>
                <p style={{ color: "grey" }}>{month ? month : "Месяц"}</p>

                {editMonth &&
                    (<div className={styles.selector}>
                        {list.map((item) => (
                            <p className={styles.selector_choose} key={item} onClick={handleDispatchMonth}>
                                {item}
                            </p>
                        ))}
                    </div>)
                }

            </div>

        </div>
    );
};

export default EditMonth;
