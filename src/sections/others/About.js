import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Title, Text, Span } from "../../components/Core";
import imgPhoto from "../../assets/image/jpg/talle-pic-small.jpg";
import imgSignLight from "../../assets/image/png/signature.png";

const LinkSocial = styled.a`
  color: ${({ theme }) => theme.colors.light} !important;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 13px;
  letter-spacing: 1.63px;
  transition: 0.4s;
  &:hover {
    color: ${({ theme }) => theme.colors.light} !important;
    transform: translateY(-5px);
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
                <img src={imgPhoto} alt="folio" className="img-fluid" />
              </div>
            </Col>
            <Col lg="6">
              <div className="pl-lg-4 pt-5 pt-lg-0">
                <Title color="light" variant="secSm">
                  Andrew Talle
                </Title>
                <Text
                  color="light"
                  className="mt-3 mt-lg-5"
                  css={`
                    line-height: 1.5;
                  `}
                >
                  Hey! I'm OG(original ginger) Andrew, a software developer based in Denver, CO.
                  Previously @IBM + @deepspacerobots.
                </Text>
                <Text color="light" className="mt-4">
                  I am currently on the hunt for my next opportunity. Available
                  for hire.
                </Text>
                <div className="mt-4">
                  <Text color="light">Email me at</Text>

                  <Text variant="p">
                    <a
                      href="mailto:hello@andrewtalle.io"
                      className="font-weight-bold"
                    >
                      <Span color="light">hello@andrewtalle.io</Span>
                    </a>
                  </Text>
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
                    className=" mr-3"
                  >
                    Twitter
                  </LinkSocial>
                  <LinkSocial
                    href="https://github.com/ogAndrew"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" mr-3"
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
