import Head from "next/head";
import { Fragment } from "react";
import Project from "../../components/main/Project";

const ProjectPage = () => {
  return (
    <Fragment>
      <Head>
        <title>React about</title>
        <meta name="description" content="project" />
      </Head>
      <Project />
    </Fragment>
  );
};

export default ProjectPage;
