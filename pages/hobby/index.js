import Head from "next/head";
import { Fragment } from "react";
import Hobby from "../../components/main/Hobby";

const AboutPage = () => {
  return (
    <Fragment>
      <Head>
        <title>React Hobby</title>
        <meta name="description" content="hobby" />
      </Head>
      <Hobby />
    </Fragment>
  );
};

export default AboutPage;
