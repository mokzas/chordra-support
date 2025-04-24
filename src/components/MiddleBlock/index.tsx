import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { MiddleBlockSection, Content, ContentWrapper, FeatureList, FeatureItem } from "./styles";

interface Feature {
  title: string;
  description: string;
}

interface MiddleBlockProps {
  title: string;
  content: string;
  button?: {
    title: string;
    color?: string;
  };
  features?: Feature[];
  t: TFunction;
}

const MiddleBlock = ({ title, content, button, features, t }: MiddleBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <MiddleBlockSection>
      <Slide direction="up" triggerOnce>
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
              {features && (
                <FeatureList>
                  {features.map((feature, index) => (
                    <FeatureItem key={index}>
                      <h4>{t(feature.title)}</h4>
                      <p>{t(feature.description)}</p>
                    </FeatureItem>
                  ))}
                </FeatureList>
              )}
              {button && (
                <Button name="submit" onClick={() => scrollTo("mission")} color={button.color}>
                  {t(button.title)}
                </Button>
              )}
            </Col>
          </ContentWrapper>
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);
