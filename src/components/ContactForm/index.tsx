import { Row, Col, Divider } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { ContactProps } from "./types";
import { SvgIcon } from "../../common/SvgIcon";
import { ImgIcon } from "../../common/ImgIcon";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Block from "../Block";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';


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
  <ImgIcon src="irzacontact.png" width="350px" height="323px" />
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

    
        {/* <Box sx={{ width: '100%' }}>
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
     <Grid item xs={12}>
      <Grid container justifyContent="center">
        <Slide direction="left">
  <SvgIcon src="developer.svg" width="350px" height="150px" />
  <CardContent>
    <Typography gutterBottom variant="h5" marginLeft={2} component="div">
    Irza Orvala Alfandi
    </Typography>
    <Typography variant="h6" marginLeft={11}>
    </Typography>
    <Para>
    Monday-Friday (09.00 - 17.00)
    </Para>
    <CardActions>
    
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
  </CardActions>
  </CardContent>
  </Slide>
  
        </Grid>
        </Grid>

        <Grid item xs={12}>
      <Grid container justifyContent="center">
        <Slide direction="left">
  <SvgIcon src="developer.svg" width="350px" height="150px" />
  <CardContent>
    <Typography gutterBottom variant="h5" marginLeft={2} component="div">
    Irza Orvala Alfandi
    </Typography>
    <Typography variant="h6" marginLeft={11}>
    </Typography>
    <Para>
    Monday-Friday (09.00 - 17.00)
    </Para>
    <CardActions>
    
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
  </CardActions>
  </CardContent>
  </Slide>
  
        </Grid> 
        </Grid>
        </Grid>  
        </Box> */}
        
   </ContactContainer>
  );
};

export default withTranslation()(Contact);

 {/* <Slide direction="right">
          <SvgIcon src="developer.svg" width="350px" height="150px" />
          <Card sx={{ maxWidth: 345 }}>
        
      <CardContent>
        <Typography gutterBottom variant="h5" marginLeft={10} component="div">
        Maris Khairah
        </Typography>
        <Typography variant="h6" marginLeft={11}>


        </Typography>
        <Para>
        Monday-Friday (09.00 - 17.00)
        </Para>
      </CardContent>
      <CardActions>
        
      <Row justify="space-between" align="middle"   style={{ paddingLeft: "3.7rem" }}>
      <Col lg={3}>

        <Button href="tel:081314091239"> 
        <LocalPhoneIcon>
        </LocalPhoneIcon>
        </Button>
        </Col>


        <Col lg={3}>
        <Button href="https://api.whatsapp.com/send?phone=081314091239"> 
        <WhatsAppIcon>
        </WhatsAppIcon>
        </Button>
        </Col>


        <Col lg={3}>
        <Button href="mailto:orvala9@gmail.com"> 
        <MailIcon>
        </MailIcon>
        </Button>
        </Col>


              </Row>
             </CardActions>
            </Card>
           </Slide> */}