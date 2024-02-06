import React from "react";
import { Card, Col, Image, Row } from "react-bootstrap";
import varun from "../../Assets/Images/varun.png";
import alekhya from "../../Assets/Images/alekhya.png";
import "./Doctors.css";
import { useTranslation } from "react-i18next";

function Doctors() {
  const {t} = useTranslation();
  const doctorsData = [
    {
      name: t('doctors.card1name'),
      specialization: t('doctors.card1Specialization'),
      image: varun,
      hoverText: (
        <ul>
          <li className="doc_spec_bullets">
          {t('doctors.card1List1')}
          </li>

          <li className="doc_spec_bullets">
          {t('doctors.card1List2')}
          </li>

          <li className="doc_spec_bullets">
          {t('doctors.card1List3')}
          </li>

          <li className="doc_spec_bullets">
          {t('doctors.card1List4')}
          </li>
        </ul>
      ),
    },
    {
      name: t('doctors.card2name'),
      specialization: t('doctors.card2Specialization'),
      image: alekhya,
      hoverText: (
        <ul>
          <li className="doc_spec_bullets">
          {t('doctors.card2List1')}
          </li>

          <li className="doc_spec_bullets">
          {t('doctors.card2List1')}
          </li>
        </ul>
      ),
    },
    // Add more doctors as needed
  ];

  return (
    <div className="doctors_container">
      <div>
        <h1 className="doct_maintext">{t('doctors.mainHeading')}</h1>
      </div>

      <Row style={{ padding: "15px" }}>
        {doctorsData.map((doctor, index) => (
          <Col md={6} key={index}>
            <Card className="card1" data-text={doctor.hoverText}>
              <div className="img_doccont">
                <Image
                  className="centered_imags"
                  src={doctor.image}
                  alt={doctor.name}
                />
                <div className="image-overlay">{doctor.hoverText}</div>
              </div>
            </Card>

            <div className="centered_text">
              <h4 className="doct_name">
                {doctor.name} <span id="doc_specialization">{doctor.specialization}</span>
              </h4>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Doctors;