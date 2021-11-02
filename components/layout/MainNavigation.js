import Link from "next/link";
import classes from "./MainNavigation.module.css";

const MainNavigation = (props) => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>홈페이지</div>
      <nav>
        <ul>
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="/about">ABOUT</Link>
          </li>
          <li>
            <Link href="">PROJECT</Link>
          </li>
          <li>
            <Link href="">ROAD MAP</Link>
          </li>
          <li>
            <Link href="">CONTACT</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
