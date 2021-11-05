import Link from "next/link";
import { useState } from "react";
import classes from "./MainNavigation.module.css";

const MainNavigation = (props) => {
  const [sideMenu, setSideMenu] = useState(false);
  const menuHandler = () => {
    setSideMenu(true);
    if (sideMenu) {
      setSideMenu(false);
    }
  };

  return (
    <header
      className={
        sideMenu ? `${classes.header} ${classes.on}` : `${classes.header}`
      }
    >
      <div className={classes.logo}>Reindeer</div>
      <nav>
        <ul>
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="/about">ABOUT</Link>
          </li>
          <li>
            <Link href="/project">PROJECT</Link>
          </li>
          <li>
            <Link href="/roadmap">ROAD MAP</Link>
          </li>
          <li>
            <Link href="/hobby">HOBBY</Link>
          </li>
          <li>
            <Link href="/contact">CONTACT</Link>
          </li>
        </ul>
        <i className="bx bx-menu" onClick={menuHandler}></i>
      </nav>
    </header>
  );
};

export default MainNavigation;
