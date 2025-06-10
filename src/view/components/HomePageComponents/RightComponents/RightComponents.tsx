import React from 'react';
import Post from '../../Post/Post.tsx';

import styles from './RightComponents.module.scss'

const RightComponents: React.FC = () => {
    return (
        <div className={styles.container}>
            <Post />
        </div>
    );
};

export default RightComponents;