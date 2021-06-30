import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Button, Title, Text, Box } from "../components/Core";
import PageWrapper from "../components/PageWrapper";
import Contact from "../sections/common/Contact";
import imgWorkCover from "../assets/image/projects/launch-tracker/launch-landing.png";

import { device } from "../utils";

const WorkSingle = () => {
  return (
    <>
      <PageWrapper>
        <Section className="mt-lg-5">
          <Container>
            <Row>
              <Col lg="8">
                <Text variant="tag">NASA Launch Tracker</Text>
                <Title variant="secSm" className="my-4">
                  To infinity and beyond with Node.js{" "}
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
                  This is a hypothetical app to help schedule launches for NASA
                  to exoplanets outside our solar system. The app uses data from
                  NASA on exoplanets implemented using Node streams as well as
                  the SpaceX API to get all upcoming and past launches. The API
                  was built using MVC design pattern and has routes for
                  Launches, Planets, and Users collections.
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
                  Node, Express, React, Jest, Mongoose, MongoDB, MongoDB Atlas,
                  Postman, AWS, Docker, Google Oauth, CI, CD
                </Text>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col lg="4" className="mb-4 mb-lg-0">
                <Text variant="tag">Project Type</Text>
                <Title variant="cardBig" className="mt-3">
                  Online Course
                </Title>
              </Col>
              <Col lg="4" className="mb-4 mb-lg-0">
                <Text variant="tag">Time</Text>
                <Title variant="cardBig" className="mt-3">
                  Ongoing
                </Title>
              </Col>

              <Col lg="2">
                <Link
                  to="https://github.com/ogAndrew/nasa-project"
                  target="_blank"
                >
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
