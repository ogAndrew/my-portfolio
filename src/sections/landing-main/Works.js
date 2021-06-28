import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import Masonry from "react-masonry-component";
import {
  Title,
  Section,
  Box,
  Text,
  ButtonOutline,
  ListNav,
} from "../../components/Core";
import { mainWorks } from "../../data";
import { useWindowSize } from "../../hooks";
import { breakpoints } from "../../utils";
import RotateImg from "../../components/RotateImg";

const WorkCard = styled(Box)``;
const WorkText = styled(Box)``;

const Grid = (props) => {
  const size = useWindowSize();

  const masonryOptions = {
    transitionDuration: 1000,
  };

  return size.width < breakpoints.lg ? (
    <Masonry
      options={masonryOptions}
      className={"masonry-grid row"}
      {...props}
    />
  ) : (
    <Row {...props} />
  );
};

const Works = () => {
  const [items, setItems] = useState([]);
  const [activeLink, setActiveLink] = useState("*");

  useEffect(() => {
    setItems(mainWorks);
  }, []);

  const filterBy = (cat) => {
    if (cat === "*") {
      setActiveLink("*");
      setItems(mainWorks);
    } else {
      const filteredItems = mainWorks.filter((item) => {
        console.log(item);
        return item.categories.indexOf(cat) !== -1;
      });
      setActiveLink(cat);
      setItems(filteredItems);
    }
  };

  return (
    <>
      {/* <!-- Works Area --> */}
      <Section className="position-relative">
        <Container>
          <Box mb="2.5rem" ml="-1.75rem">
            <ListNav className="nav">
              <li className="nav-item">
                <a
                  className={`nav-link font-weight-bold text-uppercase ${
                    activeLink === "*" ? "active" : null
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    filterBy("*");
                  }}
                >
                  All works
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link font-weight-bold text-uppercase ${
                    activeLink === "react" ? "active" : null
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    filterBy("react");
                  }}
                >
                  React
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link font-weight-bold text-uppercase ${
                    activeLink === "node" ? "active" : null
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    filterBy("node");
                  }}
                >
                  Node.js
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link font-weight-bold text-uppercase ${
                    activeLink === "vanilla-js" ? "active" : null
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    filterBy("vanilla js");
                  }}
                >
                  Vanilla JS
                </a>
              </li>
            </ListNav>
          </Box>
        </Container>

        <Container>
          <Grid>
            {items.map((item, index) => (
              <Col lg="4" md="6" key={index} className="filtr-item">
                <WorkCard className="position-relative" mb="30px">
                  <RotateImg link={item.link} imgSrc={item.thumbnail} />
                  <Box pt="2.125rem">
                    <WorkText className="overflow-hidden text-center">
                      <Text variant="tag" mb="0.5rem">
                        {item.categories[0]}
                      </Text>
                      <Title variant="cardLg">
                        <Link to={item.link}>{item.brand} </Link>
                      </Title>
                    </WorkText>
                  </Box>
                </WorkCard>
              </Col>
            ))}
          </Grid>
          <Box pt="3rem" className="text-center">
            <ButtonOutline>Load more works</ButtonOutline>
          </Box>
        </Container>
      </Section>
    </>
  );
};

export default Works;
