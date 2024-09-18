import * as React from "react";
import Layout from "../components/Layout";
import Home from "./home";

const IndexPage = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Shri Foods India</title>
