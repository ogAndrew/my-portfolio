import React from "react";
import { Element } from "react-scroll";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/landing-main/Hero";
import Works from "../sections/landing-main/Works";
import Contact from "../sections/landing-main/Contact";

const IndexPage = () => {
  return (
    <>
      <PageWrapper>
        <Hero />
        <Element name="works" id="works">
          <Works />
        </Element>

        <Contact />
      </PageWrapper>
    </>
  );
};
export default IndexPage;
