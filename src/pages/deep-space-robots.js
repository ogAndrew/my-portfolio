import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Button, Title, Text, Box } from "../components/Core";
import PageWrapper from "../components/PageWrapper";
import Contact from "../sections/common/Contact";
import imgWorkCover from "../assets/image/projects/deep-space/deep-space-landing.png";
import unitelifeLanding from "../assets/image/projects/deep-space/hindi-landing.png";
import manOnBike from "../assets/image/projects/deep-space/man-on-bike.png";
import ybOne from "../assets/image/projects/deep-space/YB-01.png";
import ybTwo from "../assets/image/projects/deep-space/YB-02.png";

import { device } from "../utils";

const WorkSingle = () => {
  return (
    <>
      <PageWrapper>
        <Section
          className="mt-lg-5"
          css={`
            padding-bottom: 20px;
          `}
        >
          <Container>
            <Row>
              <Col lg="8">
                <Text variant="tag">Deep Space Robots</Text>
                <Title variant="secSm" className="my-4">
                  Three months, three MVPs
                </Title>

                <Text
                  variant="p"
                  css={`
                    max-width: 750px;
                  `}
                >
                  I was hired as a contract software developer for Deep Space
                  Robots – a creative agency based in Dallas, Texas – where I
                  worked on development for multiple client MVP platforms using
                  the MERN stack. I collaborated with a small design team to
                  transform Figma wireframes into production-ready code at
                  lighting fast speed!
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
                  Node.js, Express.js, React, Heroku, Strapi, Ruby on Rails,
                  PostreSQL, Square API
                </Text>
              </Col>
            </Row>
            <Row className="my-4">
              <Col lg="4" className="mb-4 mb-lg-0">
                <Text variant="tag">Project Type</Text>
                <Title variant="cardBig" className="mt-3">
                  Client Work
                </Title>
              </Col>
              <Col lg="4" className="mb-4 mb-lg-0">
                <Text variant="tag">Time</Text>
                <Title variant="cardBig" className="mt-3">
                  Spring 2021
                </Title>
              </Col>

              <Col lg="2">
                <Link to="https://www.deepspacerobots.com/">
                  <Button arrowRight>Client Website</Button>
                </Link>
              </Col>
            </Row>
            <Row>
              <Col lg="6" className="my-5">
                <img
                  src={ybOne}
                  alt="Unite Life Landing Page"
                  css={`
                    width: 100%;
                  `}
                />
              </Col>
              <Col lg="6" className="my-5">
                <img
                  src={ybTwo}
                  alt=""
                  css={`
                    width: 100%;
                  `}
                />
              </Col>
            </Row>
            <Row>
              <Col lg="6" className="mb-5">
                <img
                  src={unitelifeLanding}
                  alt="Unite Life Landing Page"
                  css={`
                    width: 100%;
                  `}
                />
              </Col>
              <Col lg="6" className="mb-5">
                <img
                  src={manOnBike}
                  alt="User profile page example"
                  css={`
                    width: 100%;
                  `}
                />
              </Col>
            </Row>
          </Container>
        </Section>

        <Box py={4}>
          <Contact />
        </Box>
      </PageWrapper>
    </>
  );
};
export default WorkSingle;
