import React from 'react';

import EditDateUser from "../../components/EditProfilePageComponents/EditDateUser.tsx";
import EditImageUser from "../../components/EditProfilePageComponents/EditImage/EditImageUser.tsx";
import EditNameUser from "../../components/EditProfilePageComponents/EditName/EditNameUser.tsx";

import styles from './EditProfilePage.module.scss'

const EditProfilePag: React.FC = () => {

    return (
        <form className={styles.container}>
            <EditImageUser/>
            <EditNameUser />
            <EditDateUser/>
        </form>
    );
};

export default EditProfilePag;
