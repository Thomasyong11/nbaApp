import React from "react";
import { Link } from "react-router-dom";
import style from "./header.module.css";
import FontAwesome from "react-fontawesome";
import SideNav from "./SideNav/sidenav";

const Header = (props) => {
  const navBars = () => {
    return (
      <div className={style.bars}>
        <FontAwesome
          name="bars"
          onClick={props.onOpenNav}
          style={{
            color: "#dfdfdf",
            padding: "10px",
            cursor: "pointer",
          }}
        />
      </div>
    );
  };
  const logo = () => {
    return (
      <Link to="/" className={style.logo}>
        <img alt="nba logo" src="/images/nba_logo.png" />
      </Link>
    );
  };
  return (
    <header className={style.header}>
      <SideNav {...props} />
      <div className={style.headerOpt}>
        {navBars()}
        {logo()}
      </div>
    </header>
  );
};

export default Header;
