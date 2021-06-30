import React, { useContext } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import GlobalContext from "../../context/GlobalContext";
import { Title, ButtonIcon, Section, Box, Text } from "../../components/Core";
import bgHeroPattern from "../../assets/image/webp/hero-pattern.webp";

import imgL from "../../assets/image/jpg/talle-pic-crop.jpg";

const SectionStyled = styled(Section)`
  &::before {
    position: absolute;
    top: 0;
    content: "";
    width: 100%;
    height: 120%;
    background: url(${bgHeroPattern}) top center no-repeat;
    background-size: cover;
    z-index: -1;
  }
`;

const Hero = () => {
  const gContext = useContext(GlobalContext);

  return (
    <>
      {/* <!-- Hero Area --> */}
      <SectionStyled hero className="position-relative">
        <Container>
          <Box pb="40px">
            <img
              src={imgL}
              alt=""
              css={`
                border-radius: 50rem !important;
                width: 20%;
              `}
              p
            />
          </Box>
          <Row className="align-items-lg-end">
            <Col lg="9" sm="12" className="mb-5 mb-lg-0">
              <Box>
                <Title variant="hero">I'm Andrew, a software developer</Title>
              </Box>
              <Text variant="lg" className="mt-5">
                Previously{" "}
                <a
                  href="https://twitter.com/IBM?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                  target="_blank"
                >
                  @IBM
                </a>{" "}
                and{" "}
                <a href="https://twitter.com/deepspacerobots" target="_blank">
                  @deepspacerobots.
                </a>
              </Text>
            </Col>
            <Col lg="3" sm="12">
              <Box pl="1.25rem">
                <ButtonIcon
                  onClick={(e) => {
                    e.preventDefault();
                    gContext.toggleContact();
                  }}
                >
                  Let's Connect
                </ButtonIcon>
              </Box>
            </Col>
          </Row>
          <Row></Row>
        </Container>
      </SectionStyled>
    </>
  );
};

export default Hero;
