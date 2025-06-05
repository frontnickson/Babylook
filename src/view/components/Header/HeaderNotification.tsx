import React from "react";
import { Link } from "react-router-dom";

import icon from "../../assets/images/header-navigation/mingcute_notification-line.svg";

import styles from "./HeaderNotification.module.scss";

const HeaderNotification: React.FC = () => {
  return (
    <div className={styles.container}>
      <Link to="/notifications">
        <img src={icon} alt="notification" />
      </Link>
    </div>
  );
};

export default HeaderNotification;
