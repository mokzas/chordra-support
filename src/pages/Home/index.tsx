import { lazy } from "react";
import { Link } from "react-router-dom";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
// import AboutContent from "../../content/AboutContent.json";
// import MissionContent from "../../content/MissionContent.json";
// import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import styled from "styled-components";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const LinksContainer = styled.div`
  margin: 2rem 0;
  text-align: center;
`;

const StyledLink = styled(Link)`
  display: block;
  margin: 1rem 0;
  color: #1890ff;
  text-decoration: none;
  font-size: 1rem;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ExternalLink = styled.a`
  display: block;
  margin: 1rem 0;
  color: #1890ff;
  text-decoration: none;
  font-size: 1rem;
  
  &:hover {
    text-decoration: underline;
  }
`;

const EmailLink = styled.a`
  display: block;
  margin: 1rem 0;
  color: #1890ff;
  text-decoration: none;
  font-size: 1rem;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        direction="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="Chordra_purple.svg"
        id="intro"
      />
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        features={MiddleBlockContent.features}
      />
      {/* <ContentBlock
        direction="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="graphs.svg"
        id="about"
      />
      <ContentBlock
        direction="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="product-launch.svg"
        id="mission"
      />
      <ContentBlock
        direction="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="waving.svg"
        id="product"
      /> */}
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        form={ContactContent.form}
        id="contact"
      />
      <LinksContainer>
        {ContactContent.links.map((link, index) => (
          link.url.startsWith('http') ? (
            <ExternalLink key={index} href={link.url} target="_blank" rel="noopener noreferrer">
              {link.title}
            </ExternalLink>
          ) : (
            <StyledLink key={index} to={link.url}>
              {link.title}
            </StyledLink>
          )
        ))}
        <EmailLink href={`mailto:${ContactContent.email}`}>
          📧 {ContactContent.email}
        </EmailLink>
      </LinksContainer>
    </Container>
  );
};

export default Home;
