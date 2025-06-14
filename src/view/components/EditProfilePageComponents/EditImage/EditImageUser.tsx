import React from 'react';
import styles from "../../../pages/EditProfilePage/EditProfilePage.module.scss";
import imageProfile from "../../../assets/images/test-image-profile/woman2.png";

const EditImageUser: React.FC = () => {
  return (
      <div className={styles.image}>
        <img src={imageProfile} alt="image"/>
        <p>Выбрать фото</p>
      </div>
  );
};

export default EditImageUser;
