import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Button, Title, Text, Box } from "../components/Core";
import PageWrapper from "../components/PageWrapper";
import Contact from "../sections/common/Contact";
import imgWorkCover from "../assets/image/projects/zip-finder/zip-finder-card.png";

import { device } from "../utils";

const WorkSingle = () => {
  return (
    <>
      <PageWrapper>
        <Section className="mt-lg-5">
          <Container>
            <Row>
              <Col lg="8">
                <Text variant="tag">Zip Finder</Text>
                <Title variant="secSm" className="my-4">
                  Vanilla Js Coding Challenge
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
                  This project fetches data from the Zippopotomus API using a
                  user driven input. The app then renders detailed information
                  about the geographic region that zip code represents.
                </Text>
                <Text variant="p">
                  <Link
                    to="https://ogandrew.github.io/zip-finder/"
                    target="_blank"
                  >
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
                  HTML, CSS, JavaScript
                </Text>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col lg="4" className="mb-4 mb-lg-0">
                <Text variant="tag">Project Type</Text>
                <Title variant="cardBig" className="mt-3">
                  Coding Challenge
                </Title>
              </Col>
              <Col lg="4" className="mb-4 mb-lg-0">
                <Text variant="tag">Time</Text>
                <Title variant="cardBig" className="mt-3">
                  March 2021
                </Title>
              </Col>

              <Col lg="2">
                <Link
                  to="https://github.com/ogAndrew/zip-finder"
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
