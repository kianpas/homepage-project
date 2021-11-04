import Head from "next/head";
import { Fragment } from "react";
import Contact from "../../components/main/Contact";

const AboutPage = () => {
  return (
    <Fragment>
      <Head>
        <title>React Contact</title>
        <meta name="description" content="contact" />
        <link
          href="https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css"
          rel="stylesheet"
        ></link>
      </Head>
      <Contact />
    </Fragment>
  );
};

export default AboutPage;
