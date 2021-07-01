import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Title, Text, Span } from "../../components/Core";
import imgPhoto from "../../assets/image/jpg/happy-andrew-sm.jpg";

const LinkSocial = styled.a`
  color: ${({ theme }) => theme.colors.light} !important;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 13px;
  letter-spacing: 1.63px;
  transition: 0.4s;
  &:hover {
    color: ${({ theme }) => theme.colors.primary} !important;
    transform: translateY(-5px);
  }
`;

const EmailLink = styled(Text)`
  color: ${({ theme }) => theme.colors.light} !important;
  &:hover {
    color: ${({ theme }) => theme.colors.primary} !important;
  }
`;

const About = ({ hero = true, bg = "dark", ...rest }) => {
  return (
    <>
      <Section hero={hero} bg={bg} {...rest}>
        <Container>
          <Row className="align-items-center">
            <Col lg="6">
              <div>
                <img
                  src={imgPhoto}
                  alt="andrew with wife"
                  className="img-fluid"
                />
              </div>
            </Col>
            <Col lg="6">
              <div className="pl-lg-4 pt-5 pt-lg-0">
                <Title color="light" variant="secSm">
                  <a
                    href="https://www.youtube.com/watch?v=rEq1Z0bjdwc"
                    target="_blank"
                  >
                    Hello there!
                  </a>
                </Title>
                <Text
                  color="light"
                  className="mt-3 mt-lg-5"
                  css={`
                    line-height: 1.5;
                  `}
                >
                  I’m Andrew, but my friends call me OG (original ginger). I’m a
                  finance major turned software developer currently based in
                  Denver, CO. Previously @IBM and @deepspacerobots.
                </Text>
                <Text
                  color="light"
                  className="mt-4 mt-lg-4"
                  css={`
                    line-height: 1.5;
                  `}
                >
                  When I’m not in the terminal, you can find me outdoors with my
                  wife, Amanda, or working on my golf swing.
                </Text>

                <Text color="light" className="mt-4">
                  I'm currently on the hunt for my next opportunity. If you
                  would like to connect (or grab a coffee) please don't
                  hesitate to reach out!
                </Text>
                <div className="mt-4">
                  <Text color="light">Email me at</Text>

                  <EmailLink variant="p">
                    {" "}
                    <a
                      href="mailto:hello@andrewtalle.io"
                      className="font-weight-bold"
                    >
                      <Span>hello@andrewtalle.io</Span>
                    </a>
                  </EmailLink>
                </div>

                <div className="mt-5 d-flex">
                  <LinkSocial
                    href="https://www.linkedin.com/in/andrewtalle/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-3"
                  >
                    LinkedIn
                  </LinkSocial>
                  <LinkSocial
                    href="https://twitter.com/andrewtalle"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-3"
                  >
                    Twitter
                  </LinkSocial>
                  <LinkSocial
                    href="https://github.com/ogAndrew"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-3"
                  >
                    GitHub
                  </LinkSocial>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default About;
