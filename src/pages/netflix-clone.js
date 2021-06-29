import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Button, Title, Text, Box } from "../components/Core";
import PageWrapper from "../components/PageWrapper";
import Contact from "../sections/common/Contact";
import imgWorkCover from "../assets/image/projects/netflix/netflix-cover.png";

import { device } from "../utils";

const WorkSingle = () => {
  return (
    <>
      <PageWrapper>
        <Section className="mt-lg-5">
          <Container>
            <Row>
              <Col lg="8">
                <Text variant="tag">Netflix Clone</Text>
                <Title variant="secSm" className="my-4">
                  The app that taught me how magical component libraries are{" "}
                </Title>
                <Text variant="tag" className="my-2">
                  Project Background
                </Text>
                <Text
                  variant="p"
                  css={`
                    max-width: 750px;
                  `}
                >
                  I built this Netflix clone using React and Firebase as my
                  capstone project for Scrimba’s Front-End Developer Career Path
                  program. I learned about and utilized CSS styled components to
                  create a component library within the app. This allowed me to
                  reuse components across multiple pages to keep the code super
                  DRY!
                </Text>
                <Text variant="p">
                  <Link to="https://netflix-andrew.web.app/#">
                    View live demo.
                  </Link>
                </Text>
              </Col>
            </Row>
            <Row>
              <Col lg="8">
                {" "}
                <Text variant="tag" className="mt-4 my-2">
                  Tech Specs
                </Text>
                <Text variant="p" className="my-2">
                  React, Hooks, Context, Portals, Styled Components, Google
                  Firebase, Jest, & React Testing Library
                </Text>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col lg="4" className="mb-4 mb-lg-0">
                <Text variant="tag">Project Type</Text>
                <Title variant="cardBig" className="mt-3">
                  Scrimba Capstone
                </Title>
              </Col>
              <Col lg="4" className="mb-4 mb-lg-0">
                <Text variant="tag">Time</Text>
                <Title variant="cardBig" className="mt-3">
                  October 2020
                </Title>
              </Col>

              <Col lg="2">
                <Link to="https://github.com/ogAndrew/netflix-clone">
                  <Button arrowRight>Github</Button>
                </Link>
              </Col>
            </Row>
          </Container>
        </Section>
        <Container
          fluid
          className="px-sm-5"
          css={`
            margin-top: 92px;
          `}
        >
          <img src={imgWorkCover} alt="" className="img-fluid w-100" />
        </Container>

        <Box py={4}>
          <Contact />
        </Box>
      </PageWrapper>
    </>
  );
};
export default WorkSingle;
