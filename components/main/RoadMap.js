import Wrapper from "../ui/Wrapper";
import classes from "./RoadMap.module.css";

const RoadMap = () => {
  return (
    <Wrapper>
      <section className={classes.roadmap}>
        <article className={classes.card}>
          <img src="./images/photo-1.jpg" alt="" />
          <div className={classes.info}>
            <h1>Junior</h1>
            <p>
              신입 개발자로서 항상 공부하여 트렌드를 읽고 적극적으로 받아들이고
              신입에 어울리는 열정을 보여주고자 합니다. 또한 지금까지 배웠던
              자바, SQL, 자바스크립트 등의 기본기를 제대로 다지고 가는 과정이
              필요하다고 생각합니다.
            </p>
          </div>
        </article>
        <article className={classes.card}>
          <img src="./images/photo-2.jpg" alt="" />
          <div className={classes.info}>
            <h1>Mid-Level</h1>
            <p>
              신뢰감을 주는 중견 개발자로서 성장하여 회사에는 업무를 믿고 맡길
              수 있는, 동료에게는 같이 일하고 싶은 개발자로 성장하고 싶습니다.
              또한 기존의 익숙했던 언어, 도구를 넘어 새로운 것도 나의 것으로
              만들고 자신만의 프로그램을 만들 수 있는 단계에 오르고 싶습니다.
            </p>
          </div>
        </article>
        <article className={classes.card}>
          <img src="./images/photo-3.jpg" alt="" />
          <div className={classes.info}>
            <h1>Senior</h1>
            <p>
              프로젝트를 이끌고 다른 직원에게 도움을 줄 수 있는 수준으로
              성장하고 싶습니다. 시니어에게 가장 중요한 것은 실력도 실력이지만
              결과를 위해 협력을 만들어낼 수 있는 커뮤니케이션 능력이라고
              생각합니다.
            </p>
          </div>
        </article>
      </section>
    </Wrapper>
  );
};

export default RoadMap;
