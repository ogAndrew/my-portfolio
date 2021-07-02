import React from "react";
import { rgba } from "polished";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Title, Text, Span, Box } from "../../components/Core";
import ContactForm from "../../components/ContactForm";
import { device } from "../../utils";
import myResume from "../../assets/Andrew-Talle_Resume.pdf";

const ContactCard = styled.div`
  border-radius: 10px;
  background-color: ${({ theme }) => rgba(theme.colors.primary, 0.1)};
  margin-top: 3rem;
  @media ${device.lg} {
    margin-top: 250px;
  }
`;

const Contact = ({ hero = true, bg = "dark", ...rest }) => {
  return (
    <>
      <Section hero={hero} bg={bg} {...rest}>
        <Container>
          <Row className="justify-content-center">
            <Col lg="6">
              <Box className="pr-lg-5">
                <Title color="light" variant="secSm" mb="2rem">
                  Let's Connect
                </Title>
                <ContactForm theme="dark" />
              </Box>
            </Col>
            <Col lg="5">
              <ContactCard className="p-5 ml-lg-5">
                <div>
                  <Text color="light">Email</Text>

                  <a
                    href="mailto:hello@andrewtalle.io"
                    className="font-weight-bold"
                  >
                    <Span color="primary">hello@andrewtalle.io</Span>
                  </a>
                </div>
                <div className="mt-5">
                  <Text color="light">Resume</Text>

                  <div>
                    <a
                      href={myResume}
                      className="font-weight-bold"
                      download="Talle_Resume.pdf"
                    >
                      <Span color="primary">Download PDF</Span>
                    </a>
                  </div>
                </div>
              </ContactCard>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default Contact;
