import Wrapper from "../ui/Wrapper";
import classes from "./Project.module.css";
import ProjectItem from "./ProjectItem";

const ProjectData = [
  {
    name: "미니 프로젝트",
    img: "/images/miniproject.jpg",
    link: "https://github.com/kianpas/MiniProject",
  },
  {
    name: "세미 프로젝트",
    img: "/images/semiproject.jpg",
    link: "https://github.com/kianpas/frogmarket",
  },
  {
    name: "파이널 프로젝트",
    img: "/images/finalproject.png",
    link: "https://github.com/kianpas/final-pjt-upmu",
  },
  {
    name: "홈페이지 프로젝트",
    img: "/images/homeproject.jpg",
    link: "https://github.com/kianpas/kianpas.github.io",
  },
  {
    name: "Yelp Camp",
    img: "/images/yelpcamp.png",
    link: "https://github.com/kianpas/YelpCamp",
  },
  {
    name: "React Homepage",
    img: "/images/reacthome.png",
    link: "https://github.com/kianpas/homepage-project",
  },
  {
    name: "React MeetUp",
    img: "/images/reacthome.png",
    link: "https://github.com/kianpas/homepage-project",
  },
];

const Project = () => {
  return (
    <Wrapper>
      <div className={classes.list}>
        {ProjectData.map((data) => (
          <ProjectItem data={data} />
        ))}
      </div>
    </Wrapper>
  );
};

export default Project;
