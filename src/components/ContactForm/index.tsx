import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { ContactProps } from "./types";
import { ImgIcon } from "../../common/ImgIcon";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import Typography from '@mui/material/Typography';


import { ContactContainer, Para, } from "./styles";

const Contact = ({ title, content, id, t }: ContactProps) => {


  return (
    <ContactContainer id={id}>
      <Row
   
            justify="center"
            style={{ paddingTop: "2rem" }}
          >
            <Slide direction="left">
            <h6>Consult with Us!</h6>
            </Slide>
            </Row>
    <Row>
    <Col xs={24} xl={8} style={{ paddingLeft: "0rem" }}>
    <Slide direction="left">
  <ImgIcon src="newnew.png" width="350px" height="323px" />
  <CardContent>
    <Typography gutterBottom variant="h5" marginLeft={8} component="div">
    Irza Orvala Alfandi
    </Typography>
   
    <Para>
    Monday-Friday (09.00 - 17.00)
    </Para>
    <CardActions>
    <Row justify="space-between"   style={{ paddingLeft: "3.3rem" }}>

      <Button href="tel:081314091239"> 
      <LocalPhoneIcon>
      </LocalPhoneIcon>
      </Button>

      <Button href="https://api.whatsapp.com/send?phone=081314091239"> 
      <WhatsAppIcon>
      </WhatsAppIcon>
      </Button>

      <Button href="mailto:orvala9@gmail.com"> 
      <MailIcon>
      </MailIcon>
      </Button>

      </Row>
  </CardActions>
  </CardContent>
  </Slide>
    </Col>
    <Col xs={24} xl={8}>
 
    </Col>
 
    <Col xs={24} xl={8} style={{ paddingLeft: "0rem" }}>
    <Slide direction="right">
  <ImgIcon src="marisfoto.png" width="350px" height="323px" />
  <CardContent>
    <Typography gutterBottom variant="h5" marginLeft={11} component="div">
    Maris Khairah
    </Typography>
   
    <Para>
    Monday-Friday (09.00 - 17.00)
    </Para>
    <CardActions>
    <Row justify="space-between"   style={{ paddingLeft: "3.6rem" }}>

      <Button href="tel:081291001284"> 
      <LocalPhoneIcon>
      </LocalPhoneIcon>
      </Button>

      <Button href="https://api.whatsapp.com/send?phone=081291001284"> 
      <WhatsAppIcon>
      </WhatsAppIcon>
      </Button>

      <Button href="mailto:mariskhairah.24@gmail.com"> 
      <MailIcon>
      </MailIcon>
      </Button>

      </Row>
  </CardActions>
  </CardContent>
  </Slide>
    </Col>
  </Row>

        
   </ContactContainer>
  );
};

export default withTranslation()(Contact);

 