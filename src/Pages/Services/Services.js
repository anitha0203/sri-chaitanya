import React from "react";
import { Accordion, Button, Col, Image, Row } from "react-bootstrap";
import ortho from "../../Assets/Images/ortho.png";
import optha from "../../Assets/Images/optha.png";
import spine from "../../Assets/Images/spine.png";

import "./Services.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Services() {
  const {t} = useTranslation();
    const navigate = useNavigate();
  return (
    <div className="service_container">
      <div>
        <Row>
          <h1 className="service_maintext">{t('services.mainHeading')}</h1>
        </Row>
        <Row>
          <Col sm={12}>
            <p className="service_text">
            {t('services.mainText')}
            </p>
          </Col>
        </Row>
      </div>
      <div style={{ width: "100%" }}>
        <Accordion>
          <div
            style={{ gap: "32px", display: "flex", flexDirection: "column" }}
          >
            <div>
              <Accordion.Item className="acordion_item" eventKey="0">
                <Accordion.Header bsPrefix className="acordion">
                  <h1 className="accord_maintext">{t('services.accordHead1')}</h1>
                </Accordion.Header>
                <Accordion.Body className="acordion_body">
                  <Row>
                    <Col>
                      <Row>
                        <p className="accord_subtext">
                        {t('services.accordText1')}
                        </p>
                      </Row>
                      <Button
                        onClick={() => {
                          navigate("/orthopaedics");
                        }}
                        className="viewmore_btn"
                        variant="outline-dark"
                      >
                      {t('services.viewServicesBtn')}
                      </Button>
                    </Col>
                    <Col md={6} sm={12}>
                      <Image
                        className="centered_imag"
                        src={ortho}
                        alt="ortho"
                      />
                    </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
            </div>

            <div>
              <Accordion.Item className="acordion_item" eventKey="1">
                <Accordion.Header bsPrefix className="acordion">
                  <h1 className="accord_maintext">{t('services.accordHead2')}</h1>
                </Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <Col>
                      <Row>
                        <p className="accord_subtext">
                        {t('services.accordText2')}
                        </p>
                      </Row>
                      <Button
                        onClick={() => {
                          navigate("/opthalmology");
                        }}
                        className="viewmore_btn"
                        variant="outline-dark"
                      >
                       {t('services.viewServicesBtn')}
                      </Button>
                    </Col>
                    <Col md={6} sm={12}>
                      <Image
                        className="centered_imag"
                        src={optha}
                        alt="ortho"
                      />
                    </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
            </div>

            <div>
              <Accordion.Item className="acordion_item" eventKey="2">
                <Accordion.Header bsPrefix className="acordion">
                  <h1 className="accord_maintext">{t('services.accordHead3')}</h1>
                </Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <Col>
                      <Row>
                        <p className="accord_subtext">
                        {t('services.accordText3')}
                        </p>
                      </Row>
                      <Button
                        onClick={() => {
                          navigate("/spine");
                        }}
                        className="viewmore_btn"
                        variant="outline-dark"
                      >
                      {t('services.viewServicesBtn')}
                      </Button>
                    </Col>
                    <Col md={6} sm={12}>
                      <Image
                        className="centered_imag"
                        src={spine}
                        fluid
                        alt="ortho"
                      />
                    </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
            </div>
          </div>
        </Accordion>
      </div>
    </div>
  );
}

export default Services;