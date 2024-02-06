import React, { useEffect } from "react";
import "./About.css";
import hosp from "../../Assets/Images/final-pics/hospital.JPG";
import krish1 from "../../Assets/Images/About/krishnareddy1.jpg";
import { RiCloseLine } from "react-icons/ri";
import { RxPlus } from "react-icons/rx";
import {
  Accordion,
  AccordionContext,
  Card,
  Col,
  Image,
  Row,
  useAccordionButton,
} from "react-bootstrap";
import { useContext } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Helmet } from "react-helmet";
import img_1 from "../../Assets/Images/About/img-1-last.jpeg"
import img_2 from "../../Assets/Images/About/img-2-last.jpeg"
import img_3 from "../../Assets/Images/About/img-3-last.jpeg"
import img_4 from "../../Assets/Images/About/img-4-last.jpeg"
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation(); 
  useEffect(() => {
    // This code will run when the component is mounted
    window.scrollTo(0, 0); // Reset scroll position to the top
  }, []);

  function ContextAwareToggle({ children, eventKey, callback }) {
    const { activeEventKey } = useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(
      eventKey,
      () => callback && callback(eventKey)
    );

    const isCurrentEventKey = activeEventKey === eventKey;

    return (
      <div
        style={{
          padding: "0px",
          border: "none",
          cursor: "pointer",
          display: "flex",
          margin: "0 35px 0 0",
          backgroundColor: "none",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={decoratedOnClick}
      >
        {isCurrentEventKey ? (
          <RiCloseLine size={36} color="#FAFBFC" />
        ) : (
          <RxPlus size={36} color="#FAFBFC" />
        )}
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>About Us</title>
        <link rel="canonical" href="https://www.chaitanyaorthoeye.com/About" />
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
      <div className="about_container">
       
      
        <div className="about1_cont">
          <Row>
            <Col sm={12} md={6}>
              <div>
              <h1 className="about_head1">{t('about.mainHeading')}</h1>
              </div>
              <div>
              <p className="about1_text_p">
              {t('about.mainText1')}
              
              </p>
              <p className="about1_text_p">
             
                <i>"{t('about.mainText2')}"</i>
              </p>
              </div>
            </Col>
            <Col sm={12} md={6}>
            <div>
          <Image className="about_img_cont" src={hosp} alt="hospital" />
        </div>
             
            </Col>
          </Row>
        </div>
        <div>
       
        </div>
        <div className="about3_cont">
          <Row>
            <Col sm={12} md={6} style={{maxHeight:"960px"}}>
            <Image
                    src={krish1}
                    fluid="true"
                    alt="doctor Krishnareddy"
                    style={{width: "767px",maxHeight:"960px",objectFit:"cover" }} // Adjust the zIndex to control the image stacking
                  />
             
            </Col>
            <Col>
              <h1 className="about3_head"> {t('about.3rdHeading')}</h1>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <div>
                  <p className="about3_p_text">
                  {t('about.3rdMainText1')}
                  </p>
                </div>
                <div>
                  <p className="about3_p_text">
                  {t('about.3rdMainText2')}
                  </p>
                </div>
                <div>
                  <p className="about3_p_text">
                  {t('about.3rdMainText3')}
                  </p>
                </div>
                <div>
                  <p className="about3_p_text">
                  {t('about.3rdMainText4')}
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="about4_cont">
          <Row>
            <Col style={{alignItems:"center",display:"flex",justifyContent:"center",height:"auto"}} sm={12} md={5}>
            <div >
              <h1 className="about_head1"> {t('about.4thHeading')}</h1>
              </div>
            </Col>
            <Col md={7} sm={12}>
              <div className="about4_grid_wrapper">
                <div style={{borderTop:"2px solid #24AAE1",margin:"5px 0"}}>
                <h2 className="about4_sub_text"> {t('about.4thsubHeading1')}</h2>
                  <p className="about4_sub_text_p">
                  {t('about.4thsubText1')}
                  </p>
                </div>

                <div style={{borderTop:"2px solid #24AAE1",margin:"5px 0"}}>
                <h2 className="about4_sub_text">{t('about.4thsubHeading2')}</h2>
                  <p className="about4_sub_text_p">
                  {t('about.4thsubText2')}
                  </p>
                </div>

                <div style={{borderTop:"2px solid #24AAE1",margin:"5px 0"}}>
                <h2 className="about4_sub_text">{t('about.4thsubHeading3')}</h2>
                  <p className="about4_sub_text_p">
                  {t('about.4thsubText3')}
                  </p> 
                </div>

              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="about5_cont">
        <div className="about_container">
          <Accordion defaultActiveKey="0">
            <Card.Header
              style={{
                backgroundColor: "#3E3E3E",
                borderBottom: "1px solid var(--neutral-100, #FAFBFC)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  margin: "20px 0 27px 0",
                }}
              >
                <h1 className="about_accord_heading"> {t('about.accordionHeading1')}</h1>
                <ContextAwareToggle eventKey="0"></ContextAwareToggle>
              </div>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body className="about_accord_body">
              {t('about.accordionBody1')}
                
              </Card.Body>
            </Accordion.Collapse>

            <Card.Header
              style={{
                backgroundColor: "#3E3E3E",
                borderBottom: "1px solid var(--neutral-100, #FAFBFC)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  margin: "20px 0 27px 0",
                }}
              >
                <h1 className="about_accord_heading">{t('about.accordionHeading2')}</h1>
                <ContextAwareToggle eventKey="1"></ContextAwareToggle>
              </div>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="about_accord_body">
              {t('about.accordionBody2')}
              </Card.Body>
            </Accordion.Collapse>
          </Accordion>
        </div>
      </div>
      <div className="about6-cont">
        <div className="grid1" >
          
            <Image
              src={img_1}
              rounded
              fluid="true"
              className="img-fluid grimg1"
            />
          
         
            <Image
              src={img_2}
              fluid="true"
              className="img-fluid grimg2"
              rounded
            />
         
        </div>
        <div className="grid2" >
         
            <Image
              src={img_3}
              fluid="true"
              className="grimg3"
              rounded
            />
          
        
            <Image
              src={img_4}
              fluid="true"
              className="grimg4"
              rounded
            />
         
          
        </div>
      </div>
      {/* <div className="about_container">
        <Testmonial />
      </div> */}

      <Footer />
    </>
  );
}

export default About;