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
              <Para>Patra Jasa Office Tower</Para>
              <Para>17th Floor</Para>
              <Para>Jl. Gatot Subroto, Kuningan</Para>
              <Para>Setia Budi, Jakarta Selatan</Para>
              <Para>12950</Para>
            </Col>  
          </Row>
          </Container>
          <Row
            justify="center"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
             <LogoContainer>
             <Twilight>{t("Copyright © 2022. Twilight Teams. All Rights Reserved.")}</Twilight>
              </LogoContainer>
      
            </Row>
        
          </FooterSection>  
             
    </>
  );
};

export default withTranslation()(Footer);
