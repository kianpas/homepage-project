import classes from "./Wrapper.module.css";
import { useEffect } from "react";
const Wrapper = (props) => {
  useEffect(() => {
    let vh = window.innerHeight * 0.0095;
    console.log(vh);
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  return <div className={classes.wrapper}>{props.children}</div>;
};

export default Wrapper;
