import Head from "next/head";
import { Fragment } from "react";
import Project from "../../components/main/Project";

const ProjectPage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>React about</title>
        <meta name="description" content="project" />
      </Head>
      <Project projects={props.projects}/>
    </Fragment>
  );
};

export const getStaticProps = () => {
  const ProjectData = [
    {
      id: "01",
      name: "미니 프로젝트",
      img: "/images/miniproject.jpg",
      link: "https://github.com/kianpas/MiniProject",
    },
    {
      id: "02",
      name: "세미 프로젝트",
      img: "/images/semiproject.jpg",
      link: "https://github.com/kianpas/frogmarket",
    },
    {
      id: "03",
      name: "파이널 프로젝트",
      img: "/images/finalproject.png",
      link: "https://github.com/kianpas/final-pjt-upmu",
    },
    {
      id: "04",
      name: "홈페이지 프로젝트",
      img: "/images/homeproject.jpg",
      link: "https://github.com/kianpas/kianpas.github.io",
    },
    {
      id: "05",
      name: "Yelp Camp",
      img: "/images/yelpcamp.png",
      link: "https://github.com/kianpas/YelpCamp",
    },
    {
      id: "06",
      name: "React Homepage",
      img: "/images/reacthome.png",
      link: "https://github.com/kianpas/homepage-project",
    },
    {
      id: "07",
      name: "React MeetUp",
      img: "/images/meetup.png",
      link: "https://github.com/kianpas/meetup-project",
    },
  ];
  return {
    props: {
      projects: ProjectData.map((data) => ({
        id: data.id,
        name: data.name,
        img: data.img,
        link: data.link,
      })),
    },
  };
};

export default ProjectPage;
