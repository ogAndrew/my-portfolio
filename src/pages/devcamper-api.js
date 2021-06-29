import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Button, Title, Text, Box } from "../components/Core";
import PageWrapper from "../components/PageWrapper";
import Contact from "../sections/common/Contact";
import imgWorkCover from "../assets/image/projects/devcamper/devcamper-docs.png";

import { device } from "../utils";

const WorkSingle = () => {
  return (
    <>
      <PageWrapper>
        <Section className="mt-lg-5">
          <Container>
            <Row>
              <Col lg="8">
                <Text variant="tag">Devcamper API</Text>
                <Title variant="secSm" className="my-4">
                  Node.js API for a hypothetical bootcamp directory
                </Title>
                <Text variant="tag" className="my-2">
                  Project Background
                </Text>
                <Text
                  variant="p"
                  css={`
                    max-width: 750px;
                  `}
                  className="my-2"
                >
                  This project comes from my desire to learn how to build APIs
                  in Node.js. It is the capstone project from Brad Travery’s
                  Node js API Masterclass.
                </Text>
                <Text
                  variant="p"
                  css={`
                    max-width: 750px;
                  `}
                >
                  Core functionalities include:
                  <ul
                    css={`
                      list-style: square;
                      margin-left: 2em;
                    `}
                  >
                    <li>
                      Bootcamps, Courses, Reviews, Users Collections all with
                      CRUD operations
                    </li>
                    <li>Field validation in the controllers</li>
                    <li>
                      Reusable logic for pagination, select, limit, and filter
                      on database queries for all collections
                    </li>
                    <li>
                      Authentication and Authorization for users depending on
                      assigned role
                    </li>
                    <li>Protected routes for only users that are admin</li>
                    <li>
                      Security to prevent cross site scripting, NoSQL
                      injections, rate limiting, http param pollution, etc.
                    </li>
                  </ul>
                </Text>
                <Text variant="p">
                  <Link to="http://143.198.157.97/">View live demo.</Link>
                </Text>
              </Col>
            </Row>
            <Row>
              <Col lg="8">
                {" "}
                <Text variant="tag" className="my-2">
                  Tech Specs
                </Text>
                <Text variant="p" className="my-2">
                  Node, Express, Mongoose, JWT, Helmet.js, MongoDB, MongoDB
                  Atlas, Digital Ocean, Postman, Nginx
                </Text>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col lg="4">
                <Text variant="tag">Project Type</Text>
                <Title variant="cardBig" className="mt-3">
                  Online Course
                </Title>
              </Col>
              <Col lg="4" className="mb-4 mb-lg-0">
                <Text variant="tag">Time</Text>
                <Title variant="cardBig" className="mt-3">
                  February 2021
                </Title>
              </Col>
              <Col lg="2">
                <Link to="https://github.com/ogAndrew/devcamper-api">
                  <Button arrowRight>Github</Button>
                </Link>
              </Col>
            </Row>
          </Container>
        </Section>

        <div className="mt-lg-3">
          <Container></Container>

          <Container
            fluid
            className="px-sm-5"
            css={`
              margin-top: 92px;
            `}
          >
            <img src={imgWorkCover} alt="" className="img-fluid w-100" />
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
