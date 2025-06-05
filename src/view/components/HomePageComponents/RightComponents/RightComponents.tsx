import React from 'react';
import LastPosts from '../LastPosts/LastPosts';

import styles from './RightComponents.module.scss'

const RightComponents: React.FC = () => {
    return (
        <div className={styles.container}>
            <LastPosts />
        </div>
    );
};

export default RightComponents;