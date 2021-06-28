import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Button, Title, Text, Box } from "../components/Core";
import PageWrapper from "../components/PageWrapper";
import Contact from "../sections/common/Contact";
import imgWorkCover from "../assets/image/projects/destiny-chooser/darkness-rising.png";

import { device } from "../utils";

const WorkSingle = () => {
  return (
    <>
      <PageWrapper>
        <Container
          fluid
          className="px-sm-5"
          css={`
            margin-top: 92px;
          `}
        >
          <img src={imgWorkCover} alt="" className="img-fluid w-100" />
        </Container>
        <Section className="mt-lg-5">
          <Container>
            <Row>
              <Col lg="8">
                <Text variant="tag">Destiny Chooser</Text>
                <Title variant="secSm" className="my-4">
                  A Star Wars themed dark side toggle{" "}
                </Title>
                <Text variant="lg" className="my-2">
                  Project Background
                </Text>
                <Text
                  variant="p"
                  css={`
                    max-width: 750px;
                  `}
                >
                  This is a fun side project I came up with after learning how
                  to implement a global dark/light mode switcher, which reminded
                  me of the dark side of the force. Users are able to toggle
                  between Sith or Jedi characters each time they “choose their
                  destiny" with the toggle bar. This project gave me a chance to
                  practice my CSS skills: building the app mobile-first, styling
                  card components, using overlay for navigation, and
                  implementing the toggler from scratch.
                </Text>
              </Col>
            </Row>
            <Row>
              <Col lg="8">
                {" "}
                <Text variant="lg" className="my-2">
                  Tech Specs
                </Text>
                <Text variant="p" className="my-2">
                  Vanilla JS (v1), React(v2), Heroku, Github Pages
                </Text>
              </Col>
            </Row>
          </Container>
        </Section>
        <div className="mt-lg-3">
          <Container>
            <Row>
              <Col lg="4" className="mb-4 mb-lg-0">
                <Text variant="tag">Project Type</Text>
                <Title variant="cardBig" className="mt-3">
                  Personal
                </Title>
              </Col>
              <Col lg="4" className="mb-4 mb-lg-0">
                <Text variant="tag">Time</Text>
                <Title variant="cardBig" className="mt-3">
                  January 2021
                </Title>
              </Col>
              <Col lg="2">
                <Link to="https://ogandrew.github.io/destiny-chooser/">
                  <Button arrowRight>Live Demo</Button>
                </Link>
              </Col>
              <Col lg="2">
                <Link to="https://github.com/ogAndrew/jedi-sith">
                  <Button arrowRight>Github</Button>
                </Link>
              </Col>
            </Row>
          </Container>
        </div>

        <Box py={4}>
          <Contact />
        </Box>
      </PageWrapper>
    </>
  );
};
export default WorkSingle;
