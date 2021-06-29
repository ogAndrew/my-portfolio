import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, LinkContact } from "../../components/Core";
import bgFooter from "../../assets/image/png/subscribe-pattern.png";

const SectionStyled = styled(Section)`
  &.pattern::before {
    position: absolute;
    bottom: -150px;
    content: "";
    width: 120%;
    height: 150%;
    background: url(${bgFooter}) bottom center no-repeat;
    background-size: cover;
    z-index: -1;
  }
`;

const Contact = ({ pattern = true }) => {
  return (
    <>
      {/* <!-- Hero Area --> */}
      <SectionStyled
        className={`position-relative ${pattern ? "pattern" : ""}`}
      >
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col lg="11" xl="10" className="text-center">
              <Box>
                <Title variant="secSm">
                  Like my projects? Let's connect! I'm currently available
                  for hire.
                </Title>

                <Box
                  className="text-center d-flex justify-content-center"
                  mt={["3rem", null, "4rem"]}
                >
                  <div className="d-flex flex-column flex-lg-row justify-content-center">
                    <LinkContact
                      href="mailto:hello@andrewtalle.io"
                      target="_blank"
                      className="mb-2 mb-lg-0"
                    >
                      hello@andrewtalle.io
                    </LinkContact>
                    <span className="divider mx-2 mx-lg-4 d-none d-lg-block">
                      |
                    </span>
                    <LinkContact
                      href="https://www.linkedin.com/in/andrewtalle/"
                      target="_blank"
                    >
                      linkedin
                    </LinkContact>
                  </div>
                </Box>
              </Box>
            </Col>
          </Row>
        </Container>
      </SectionStyled>
    </>
  );
};

export default Contact;
