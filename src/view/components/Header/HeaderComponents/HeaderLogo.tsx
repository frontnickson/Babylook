import React from "react";
import { Link } from "react-router-dom";

import logo from "../../../assets/images/logo/logo.svg";

const HeaderLogo: React.FC = () => {
  return (
    <Link to="/home">
      <img src={logo} alt="logo" />
    </Link>
  );
};

export default HeaderLogo;
