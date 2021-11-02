import { Fragment, useEffect } from "react";
import classes from "./Main.module.css";


const Main = () => {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    console.log(vh);
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  return (
    <div className={classes.wrapper}>
      <section className={classes.home}>
        <article>
          <h1>
            <span>Hello!</span>
          </h1>
          <h2>
            <span>I'm Lee Un San</span>
          </h2>
          <p>안녕하세요! 제 홈페이지에 오신걸 환영합니다!</p>
        </article>
      </section>
    </div>
  );
};

export default Main;
