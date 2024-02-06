import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Intro.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function Intro() {
  const {t} = useTranslation();
  const navigate = useNavigate();
  useEffect(() => {
    // This code will run when the component is mounted
    window.scrollTo(0, 0); // Reset scroll position to the top
  }, []);
  return (
    <Container className="intro_container">
      <Row>
        <Col  md={10}>
          <h1 className="maintext_intro">{t('intro.mainHead1')}<br />{t('intro.mainHead2')}</h1>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col md={7} sm={12}>
          <h1 className="subtext_intro">{t('intro.subHead')}</h1>
          <p className="subtext_text">
          {t('intro.mainText')}
          </p>
        </Col>
        <Col md={5}>
          <Row>
            <Col>
              <h1>{t('intro.introCol1Text1')}</h1>
              <p>{t('intro.introCol1Text2')}</p>
            </Col>
            <Col>
              <h1>{t('intro.introCol2Text1')}</h1>
              <p>{t('intro.introCol2Text2')}</p>
            </Col>
          </Row>

          <Button onClick={()=>{navigate('/about')}} className="intro_btn" variant="outline-dark">
          {t('intro.introAboutBtn')}
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Intro;
