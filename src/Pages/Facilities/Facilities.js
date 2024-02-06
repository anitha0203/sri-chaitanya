import React from "react";
import { Carousel, Col, Image, Row } from "react-bootstrap";

import icu from "../../Assets/Images/final-pics1/emergency.png";
import waiting from "../../Assets/Images/final-pics1/waitinghall.png";
import pharmacy from "../../Assets/Images/final-pics1/pharmacy.JPG";
import orroom from "../../Assets/Images/final-pics1/operation-theatre.JPG";
import ward from "../../Assets/Images/final-pics1/inpatient-ward.JPG";
import optic from "../../Assets/Images/final-pics1/opticalstore.jpeg";
import "./Facilities.css";
import { useTranslation } from "react-i18next";

function Facilities() {
  const {t} = useTranslation();
  return (
    <div style={{ marginBottom: "50px" }}>
      <div>
        <h1 className="facilitiy_maintext">{t('facilities.mainHeading')}</h1>
      </div>
      <Carousel
        data-bs-theme="dark"
        interval={1800}
        controls={false}
        style={{ margin: "0px" }}
      >
        <Carousel.Item className="fcarousel_Cont">
          <Row>
            <Col md={5} sm={12}>
              <div>
                <Image
                 rounded
                 fluid
                  className="img-fluida"
                  src={icu}
                  alt="ICU at chaitanya hospitals"
                />
              </div>
            </Col>
            <Col md={7}>
              {" "}
              {/* Adjust the column size */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  gap: "20px",
                  padding: "25px",
                }}
              >
                <div>
                  {" "}
                  <h2 className="facility_heading">{t('facilities.carouselItem1Head')}</h2>
                </div>
                <div>
                  <p className="facility_subtext">
                  {t('facilities.carouselItem1Text')}
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item className="fcarousel_Cont">
          <Row>
            <Col sm={12} md={5}>
              <div>
                <Image
                  rounded
                  fluid
                  className="img-fluida"
                  src={waiting}
                  alt="waiting hall at chaitanya hospitals"
                />
              </div>
            </Col>
            <Col md={7} sm={12}>
              {" "}
              {/* Adjust the column size */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  gap: "20px",
                  padding: "25px",
                }}
              >
                <div>
                  {" "}
                  <h2 className="facility_heading">{t('facilities.carouselItem2Head')}</h2>
                </div>

                <div>
                  <p className="facility_subtext">
                  {t('facilities.carouselItem2Text')}
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item className="fcarousel_Cont">
          <Row>
            <Col md={5}>
              <div>
                <Image
                  rounded
                  fluid
                  className="img-fluida"
                  src={ward}
                  alt="Ward rooms at chaitanya hospitals"
                />
              </div>
            </Col>
            <Col md={7} sm={12}>
              {" "}
              {/* Adjust the column size */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  gap: "20px",
                  padding: "25px",
                }}
              >
                <div>
                  {" "}
                  <h2 className="facility_heading">{t('facilities.carouselItem3Head')}</h2>
                </div>
                <div>
                  <p className="facility_subtext">
                  {t('facilities.carouselItem3Text')}
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Carousel.Item>

        <Carousel.Item className="fcarousel_Cont">
          <Row>
            <Col md={5} sm={12}>
              <div>
                <Image
                  fluid
                  rounded
                  className="img-fluida"
                  src={orroom}
                  alt="Operation theater at chaitanya hospitals"
                />
              </div>
            </Col>
            <Col md={7} sm={12}>
              {" "}
              {/* Adjust the column size */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  gap: "20px",
                  padding: "25px",
                }}
              >
                <div>
                  {" "}
                  <h2 className="facility_heading">{t('facilities.carouselItem4Head')}</h2>
                </div>
                <div>
                  <p className="facility_subtext">
                  {t('facilities.carouselItem4Text')}
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Carousel.Item>

        <Carousel.Item className="fcarousel_Cont">
          <Row>
            <Col md={5} sm={12}>
              <div>
                <Image
                  rounded
                  fluid
                  className="img-fluida"
                  src={pharmacy}
                  alt="pharmacy at chaitanya hospitals"
                />
              </div>
            </Col>
            <Col md={7} sm={12}>
              {" "}
              {/* Adjust the column size */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  gap: "20px",
                  padding: "25px",
                }}
              >
                <div>
                  {" "}
                  <h2 className="facility_heading">{t('facilities.carouselItem5Head')}</h2>
                </div>
                <div>
                  <p className="facility_subtext">
                  {t('facilities.carouselItem5Text')}
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Carousel.Item>

        <Carousel.Item className="fcarousel_Cont">
          <Row>
            <Col md={5}>
              <div>
                <Image
                  rounded
                  fluid
                  className="img-fluida"
                  src={optic}
                  alt="Ward rooms at chaitanya hospitals"
                />
              </div>
            </Col>
            <Col md={7} sm={12}>
              {" "}
              {/* Adjust the column size */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  gap: "20px",
                  padding: "25px",
                }}
              >
                <div>
                  {" "}
                  <h2 className="facility_heading">{t('facilities.carouselItem6Head')}</h2>
                </div>
                <div>
                  <p className="facility_subtext">
                  {t('facilities.carouselItem6Text')}
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Facilities;