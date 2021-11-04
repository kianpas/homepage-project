import Head from "next/head";
import { Fragment } from "react";
import About from "../../components/main/About";

const AboutPage = () => {
  return (
    <Fragment>
      <Head>
        <title>React about</title>
        <meta name="description" content="about" />
        <link
          href="https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css"
          rel="stylesheet"
        ></link>
      </Head>
      <About />
    </Fragment>
  );
};

export default AboutPage;
