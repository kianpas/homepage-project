import Head from "next/head";
import { Fragment } from "react";

import Main from "../components/main/Main";

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>React Homepage</title>
        <meta name="description" content="React Homepage" />
      </Head>
     <Main/>
    </Fragment>
  );
};

export default HomePage;
