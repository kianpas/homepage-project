
import Wrapper from "../ui/Wrapper";
import classes from "./Main.module.css";

const Main = () => {
  
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default Main;
