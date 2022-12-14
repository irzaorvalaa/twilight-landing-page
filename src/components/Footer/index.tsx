import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import {
  FooterSection,
  Twilight,
  LogoContainer,
  Para,
  Language
} from "./styles";

const Footer = ({ t }: any) => {
  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={4} >
              <Language>{t("Address")}</Language>
              <Para>Komplek Royal Palace Saharjo</Para>
              <Para>Blok A</Para>
              <Para>No 55-56</Para>
              <Para>Jakarta Selatan</Para>
            </Col> 
          </Row>
    
          <Row
            justify="center"
            style={{ paddingTop: "2rem" }}
          >
             <LogoContainer>
             <Twilight>{t("Copyright © 2023. Twilight Teams. All Rights Reserved.")}</Twilight>
              </LogoContainer>
      
            </Row>
            </Container>
          </FooterSection>  
             
    </>
  );
};

export default withTranslation()(Footer);
