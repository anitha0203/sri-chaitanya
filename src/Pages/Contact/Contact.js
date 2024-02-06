import React from "react";
import { Card, Col, Image, Row } from "react-bootstrap";
import lord1 from "../../Assets/Images/locatioin_con.png";
import lord2 from "../../Assets/Images/timings_icon.png";
import lord3 from "../../Assets/Images/call_icon.png";
import "./Contact.css";
import { useTranslation } from "react-i18next";

function Contact() {
  const {t} = useTranslation();
   return (
    <div>
      <Row className="card_container">
        <Col md={4} >
          <Card className="card_contact">
          <Row className="icon_contact">
              <div className="img_back">
            <Image className="centeraed_imgs" src={lord1} alt='varun'/>
            </div>
            </Row>
            <Row className="contact_group">
              <h2 className="contact_h2">{t('contact.card1Heading')}</h2>
              <div className="contact_content">
                <section className="contact_content">{t('contact.card1Text1')}</section>
                <section className="contact_content">{t('contact.card1Text2')}</section>
                <section className="contact_content">{t('contact.card1Text3')}</section>
              </div>
              <p className="contact_link">{t('contact.card1Text4')}</p>
            </Row>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="card_contact">
            <Row className="icon_contact">
              <div className="img_back">
            <Image className="centeraed_imgs" src={lord3} alt='varun'/>
            </div>
            </Row>
            <Row className="contact_group">
              <h2 className="contact_h2">{t('contact.card2Heading')}</h2>
              <div className="contact_content">
                <section className="contact_content">{t('contact.card2Text1')}</section>
                <p className="contact_content">{t('contact.card2Text2')}</p>
              </div>
              <label className="contact_label">{t('contact.card2Text3Label')}</label>
              <p className="contact_links">{t('contact.card2Text3')}</p>
            </Row>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="card_contact">
          <Row className="icon_contact">
              <div className="img_back">
            <Image className="centeraed_imgs" src={lord2} alt='varun'/>
            </div>
            </Row>
            <Row className="contact_group">
              <h2 className="contact_h2">{t('contact.card3Heading')}</h2>
              <div className="contact_content">
                <section className="contact_content">{t('contact.card3Text1')}</section>
                <section className="contact_content">{t('contact.card3Text2')}</section>
                <p className="contact_content">{t('contact.card3Text3')}</p>
              </div>
              <p className="contact_links">{t('contact.card3Text4')}</p>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Contact;
