import "antd/dist/antd.css";
import PropTypes from "prop-types";
import Head from "next/head";
import React from "react";
React.useLayoutEffect = React.useEffect;

const NodeBird = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8"></meta>
        <title>NodeBird</title>
      </Head>
      <Component></Component>
    </>
  );
};

NodeBird.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default NodeBird;
