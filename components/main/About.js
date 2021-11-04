import Wrapper from "../ui/Wrapper";
import classes from "./About.module.css";

const About = () => {
  return (
    <Wrapper>
      <section className={classes.introduce}>
        <div className={classes.pic}>
          <img src="/images/이운산.jpg" alt="" />
        </div>
        <article>
          <div className={classes.about}>
            <h1>ABOUT ME</h1>
            <h2>Wannabe Developer</h2>
            <p>
              현재 공부하고 있는 개발자 지망생 이운산입니다. <br />
              어렸을 때 작은 상을 받은 계기로 개발자의 꿈을 꾸었으나 꿈은 꿈,
              현실은 현실이라는 생각에 개발의 꿈을 한켠에 미루어 두었습니다.
              하지만 어느 순간 더 이상 미루면 평생 후회할 것이라는 생각에 2020년
              12월부터 본격적인 교육을 받기 시작했습니다. <br />
              <br />
              물론 코드, 개발의 길은 쉬운 일이 아니었습니다. 그러나 항상
              무언가를 만들어내는 과정과 결과를 창출하는데 큰 흥미를 느끼는
              저에게 있어서 코딩은 결과를 만들어내기 위한 하나의 즐거운
              모험이라고 생각합니다. 이러한 마음을 언제나 가지고, 항상 긍정적인
              자세로 업무에 임할 수 있는 개발자가 되고자 합니다.
            </p>
          </div>
          <div className={classes.progress}>
            <h3>Current Progress</h3>
          </div>
          <div className={classes["icon-panel"]}>
            <div>
              <i class="bx bxs-coffee"></i>
              <span>JAVA</span>
            </div>
            <div>
              <i class="bx bxs-data"></i>
              <span>ORACLE</span>
            </div>
            <div>
              <i class="bx bxl-html5"></i>
              <span>HTML5</span>
            </div>
            <div>
              <i class="bx bxl-css3"></i>
              <span>CSS3</span>
            </div>
            <div>
              <i class="bx bxl-javascript"></i>
              <span>JS</span>
            </div>
            <div>
              <i class="bx bxl-jquery"></i>
              <span>jQuery</span>
            </div>
            <div>
              <i class="bx bxl-spring-boot"></i>
              <span>SPRING</span>
            </div>
          </div>
          <p className={classes.github}>
            <i class="bx bxl-github"></i>
            <span>
              <a href="https://github.com/kianpas">GO TO GITHUB</a>
            </span>
          </p>
          <p className={classes.github}>
            <i class="bx bxs-note"></i>
            <span>
              <a href="https://wood-bird-d9d.notion.site/2593947faddd44588573e2d92e6f0262">
                GO TO NOTION
              </a>
            </span>
          </p>
        </article>
      </section>
    </Wrapper>
  );
};

export default About;
