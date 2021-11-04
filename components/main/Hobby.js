import Wrapper from "../ui/Wrapper";
import classes from "./Hobby.module.css";

const Hobby = (params) => {
  return (
    <Wrapper>
      <div className={classes.hobby}>
        <section>
          <h1>MUSIC</h1>
        </section>
        <section className={classes["cover-container"]}>
          <article className={classes.cover}>
            <img src="/images/ewf.jpg" />
            <h2>FUNK</h2>
          </article>
          <article className={classes.cover}>
            <img src="/images/acdc.jpg" />
            <h2>ROCK</h2>
          </article>
          <article className={classes.cover}>
            <img src="/images/jb.jpg" />
            <h2>SOUL</h2>
          </article>
        </section>
        <section className={classes.hobbytxt}>
          <h2>Oldies But Goodies</h2>
          <p>오래되고 단순한 음악. 하지만 그러기에 신나는 음악.</p>
        </section>
      </div>
    </Wrapper>
  );
};
export default Hobby;
