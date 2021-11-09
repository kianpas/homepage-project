import Head from "next/head";
import { Fragment } from "react";
import About from "../../components/main/About";

const AboutPage = () => {
  return (
    <Fragment>
      <Head>
        <title>React about</title>
        <meta name="description" content="about" />
      </Head>
      <About />
    </Fragment>
  );
};

export default AboutPage;
