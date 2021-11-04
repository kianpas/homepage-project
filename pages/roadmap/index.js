import Head from "next/head";
import { Fragment } from "react";
import RoadMap from "../../components/main/RoadMap";

const AboutPage = () => {
  return (
    <Fragment>
      <Head>
        <title>React RoadMap</title>
        <meta name="description" content="roadmap" />
      </Head>
      <RoadMap />
    </Fragment>
  );
};

export default AboutPage;
