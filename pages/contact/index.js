import Head from "next/head";
import { Fragment } from "react";
import Contact from "../../components/main/Contact";

const AboutPage = () => {
  return (
    <Fragment>
      <Head>
        <title>React Contact</title>
        <meta name="description" content="contact" />
      </Head>
      <Contact />
    </Fragment>
  );
};

export default AboutPage;
