import React, { useEffect } from "react";
import "./Insurance.css";
import icon1 from "../../Assets/Images/Insurance/icon1.png";
import icon2 from "../../Assets/Images/Insurance/icon2.png";
import icon3 from "../../Assets/Images/Insurance/icon3.png";
import icon4 from "../../Assets/Images/Insurance/icon4.png";
import icon5 from "../../Assets/Images/Insurance/icon5.png";
import icon6 from "../../Assets/Images/Insurance/icon6.png";
import icon7 from "../../Assets/Images/Insurance/icon7.png";
import icon8 from "../../Assets/Images/Insurance/icon8.png";
import icon9 from "../../Assets/Images/Insurance/icon9.png";
import icon10 from "../../Assets/Images/Insurance/icon10.png";

import icon11 from "../../Assets/Images/Insurance/icon11.png";
import icon12 from "../../Assets/Images/Insurance/icon12.png";
import icon13 from "../../Assets/Images/Insurance/icon13.png";
import icon14 from "../../Assets/Images/Insurance/icon14.png";
import icon15 from "../../Assets/Images/Insurance/icon15.png";
import icon16 from "../../Assets/Images/Insurance/icon16.png";
import icon17 from "../../Assets/Images/Insurance/icon17.png";
import icon18 from "../../Assets/Images/Insurance/icon18.png";
import icon19 from "../../Assets/Images/Insurance/icon19.png";
import icon20 from "../../Assets/Images/Insurance/icon20.png";

import icon21 from "../../Assets/Images/Insurance/icon21.png";
import icon22 from "../../Assets/Images/Insurance/icon22.png";
import icon23 from "../../Assets/Images/Insurance/icon23.png";
import icon24 from "../../Assets/Images/Insurance/icon24.png";
import icon25 from "../../Assets/Images/Insurance/icon25.png";
import icon26 from "../../Assets/Images/Insurance/icon26.png";
import icon27 from "../../Assets/Images/Insurance/icon27.png";
import icon28 from "../../Assets/Images/Insurance/icon28.png";
import icon29 from "../../Assets/Images/Insurance/icon29.png";
import icon30 from "../../Assets/Images/Insurance/icon30.png";
import icon31 from "../../Assets/Images/Insurance/icon31.png";
import icon32 from "../../Assets/Images/Insurance/icon32.png";
import icon33 from "../../Assets/Images/Insurance/icon33.png";

import shield from "../../Assets/Images/Insurance/insu_shield.png";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

function Insurance() {
  const { t } = useTranslation();
  useEffect(() => {
    // This code will run when the component is mounted
    window.scrollTo(0, 0); // Reset scroll position to the top
  }, []);
  const navigate = useNavigate();
  const imageSources = [
    icon1,
    icon2,
    icon3,
    icon4,
    icon5,
    icon6,
    icon7,
    icon8,
    icon9,
    icon10,
    icon11,
    icon12,
    icon13,
    icon14,
    icon15,
    icon16,
    icon17,
    icon18,
    icon19,
    icon20,
    icon21,
    icon22,
    icon23,
    icon24,
    icon25,
    icon26,
    icon27,
    icon28,
    icon29,
    icon30,
  ];
  return (
    <>
     <Helmet>
        <title>
          Insurance
        </title>
        <link rel="canonical" href="https://www.chaitanyaorthoeye.com/Insurance" />
        <meta
          name="description"
          content="Get the best Orthopeadician for your health with Sri chaitanya hospitals.,sri chaitanya orthopaedic & eye hospital"
        />
          <meta
          name="keywords"
          content="sri chaitanya orthopaedic & eye hospital,sri chaitanya hospital tanuku,sri chaitanya eye hospital in tanuku,dr. krishna reddy hospital,dr. krishna reddy orthopedic & eye hospital tanuku,sri chaitanya orthopedic and eye hospital tanuku
                    ,best orthopedic doctor in tanuku,best orthopaedic hospital in tanuku,best eye hospital near me,eye hospital near me,eye clinic near me,best hospital in tanuku for bone surgeries
                    ,tanuku top orthopaedic & opthalmology hospital,best hospital in tanuku for joint pain
                    ,orthopedic & opthalmology specialist tanuku,
                      Best Orthopaedic hospital in tanuku,orthopedic & opthalmology specialist tanuku, dr.krishna reddy hospital,"
        />
        <meta name="author" content="Sri chaitanya Hospitals tanuku" />
        <meta name="robots" content="index, follow" />
         <html lang="en" />
      </Helmet>
      <div style={{position:"sticky",top:"0",zIndex:"1000",backgroundColor:"#FFF8F1",padding:"0 3% 0 3%"}}>
        <Header />
        </div>
    <div className="insurance_container">
    
      <div className="insu1_cont">

        <Container fluid>
          <Row>
            <Col sm={12} md={8}>
              <h1 className="insu_headings">
                {t('insurance.mainHeading')}
              </h1>
              <p className="insu_p">
              {t('insurance.mainText')}
              </p>
            </Col>
            <Col sm={12} md={4}>
              <Image src={shield} alt="shield" fluid className="centerd-img" />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="insu2_cont">
        <div>
          <h1 className="insu2_headings"> {t('insurance.subHeading1')}</h1>
        </div>
        <div className="image-grid">
          {imageSources.map((image, index) => (
            <div key={index} className="image-cell">
              <Image className="imgs" src={image} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      <div className="insu3_cont">
        <div>
          <h1 className="insu3_headings"> {t('insurance.subHeading2')}</h1>
        </div>
        <div>
          <Button
            onClick={() => {
              navigate("/book_an_appointment");
            }}
            variant="outline-dark"
            className="service_buttons1"
          >
            {t('insurance.buttonContact')}
          </Button>
        </div>
      </div>
      <div className="insu4_cont">
        <Row className="insucard_container">
          <Col md={4}>
            <Card className="card_insurance">
              <Row className="insuicon_contact">
                <div className="img_backs">
                  <Image className="centeraed_imgs" src={icon31} alt="varun" />
                </div>
              </Row>
              <Row className="insu_group">
                <h2 className="insura_card_h2"> {t('insurance.cardHeading1')}</h2>
                <div className="insu_content">
                {t('insurance.cardText1')}
                </div>
              </Row>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="card_insurance">
              <Row className="insuicon_contact">
                <div className="img_backs">
                  <Image className="centeraed_imgs" src={icon32} alt="varun" />
                </div>
              </Row>
              <Row className="insu_group">
                <h2 className="insura_card_h2"> {t('insurance.cardHeading2')}</h2>
                <div className="insu_content">
                {t('insurance.cardText2')}
                </div>
              </Row>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="card_insurance">
              <Row className="insuicon_contact">
                <div className="img_backs">
                  <Image className="centeraed_imgs" src={icon33} alt="varun" />
                </div>
              </Row>
              <Row className="insu_group">
                <h2 className="insura_card_h2"> {t('insurance.cardHeading3')}</h2>
                <div className="insu_content">
                {t('insurance.cardText3')}
                </div>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
      <div className="insurance_container">
        <ul className="insu5_cont_ul">
          <li>
            <p className="insu_p1">
            {t('insurance.cardListText1')}
            </p>
          </li>
          <li>
            <p className="insu_p1">
            {t('insurance.cardListText2')}
            </p>
          </li>
          <li>
            <p className="insu_p1">
            {t('insurance.cardListText3')}
            </p>
          </li>
        </ul>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Insurance;
