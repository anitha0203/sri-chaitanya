import React from "react";
import { useEffect } from "react";
import arr from "../../Assets/Images/arrow_dir.png";
import spects from "../../Assets/Images/Optha/spects.png";
import cataract from "../../Assets/Images/Optha/cataract.jpg";
import paceoem from "../../Assets/Images/Optha/phacoemulsification.jpg";
import lasik from "../../Assets/Images/Optha/lasik.jpg";
import icl from "../../Assets/Images/Optha/icls.jpg";
import pytergium from "../../Assets/Images/Optha/pytegrium.jpg";
import retinalinj from "../../Assets/Images/Optha/retinal_t.jpeg";
import botox from "../../Assets/Images/Optha/botox.jpg";
import clc from "../../Assets/Images/Optha/contact_lens.jpg";
import ortho from "../../Assets/Images/Ortho/shoulder.jpg";
import spine from "../../Assets/Images/Ortho/spine.jpg";
import { Button, Col, Image, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Opthalmology.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { useState } from "react";
import LoadSpinner from "../Loading_Spinner/LoadSpinner";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

function Opthalmology() {
  const {t} = useTranslation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // This code will run when the component is mounted
    window.scrollTo(0, 0); // Reset scroll position to the top
  }, []);
  const navigateToOrthopaedics = () => {
    setLoading(true); // Show loading component
    setTimeout(() => {
      navigate("/orthopaedics"); // Simulate navigation delay
      setLoading(false); // Hide loading component after navigation
    }, 2000); // Adjust the delay as needed
  };
  const navigateToSpine = () => {
    setLoading(true); // Show loading component
    setTimeout(() => {
      navigate("/spine"); // Simulate navigation delay
      setLoading(false); // Hide loading component after navigation
    }, 2000); // Adjust the delay as needed
  };
  return (
    <>
      {loading ? (
        <LoadSpinner />
      ) : (
        <>
          <Helmet>
            <title>Opthalmology</title>
            <link
              rel="canonical"
              href="https://www.chaitanyaorthoeye.com/opthalmology"
            />
            <meta
          name="description"
          content="Get the best ophthalmologist for your health with Sri chaitanya hospitals.,sri chaitanya orthopaedic & eye hospital"
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

          <div
            style={{
              position: "sticky",
              top: "0",
              zIndex: "1000",
              backgroundColor: "#FFF8F1",
              padding: "0 3% 0 3%",
            }}
          >
            <Header />
          </div>

          <div className="Opthamain_container">
            <div className="Opthoheader_cont"></div>
            <Row>
              <Col md={8}>
                <div>
                  <h1 className="optha_heading">{t('optha.mainHeading')}</h1>
                  <section className="opthasec1">
                  {t('optha.subText1')}
                  </section>
                </div>
              </Col>
              <Col md={4} sm={12}>
                <Image
                  src={spects}
                  alt="spectacles"
                  fluid
                  className="optha_spects"
                />
              </Col>
            </Row>
            <Row>
              <h1 className="optha_servicehead">{t('optha.servicesHead')}</h1>
            </Row>
            <Row
              style={{ width: "100%", display: "flex", flexDirection: "row" }}
            >
              <Col xs={12} md={6}>
                <a href="#Cataract_Surgery">
                  <Button variant="light" className="service_buttonOpt">
                  {t('optha.Cataract_Surgery')}
                    <span style={{ float: "right" }}>
                      <Image src={arr} className="arr_optha_icon" />
                    </span>
                  </Button>
                </a>
                <a href="#Phacoemulsification">
                  <Button variant="light" className="service_buttonOpt">
                  {t('optha.Phacoemulsification')}
                    <span style={{ float: "right" }}>
                      <Image src={arr} className="arr_optha_icon" />
                    </span>
                  </Button>
                </a>
                <a href="#LASIK">
                  <Button variant="light" className="service_buttonOpt">
                  {t('optha.Lasik')}
                    <span style={{ float: "right" }}>
                      <Image src={arr} className="arr_optha_icon" />
                    </span>
                  </Button>
                </a>
                <a href="#icls">
                  {" "}
                  <Button variant="light" className="service_buttonOpt">
                  {t('optha.Implantable_Collamer_Lens')}
                    <span style={{ float: "right" }}>
                      <Image src={arr} className="arr_optha_icon" />
                    </span>
                  </Button>
                </a>
              </Col>
              <Col xs={12} md={6}>
                <a href="#Pterygium">
                  <Button variant="light" className="service_buttonOpt">
                  {t('optha.Pterygium')}
                    <span style={{ float: "right" }}>
                      <Image src={arr} className="arr_optha_icon" />
                    </span>
                  </Button>
                </a>
                <a href="#Retinal_Injection">
                  <Button variant="light" className="service_buttonOpt">
                  {t('optha.Retinal_Injection')}
                    <span style={{ float: "right" }}>
                      <Image src={arr} className="arr_optha_icon" />
                    </span>
                  </Button>
                </a>
                <a href="#Botox_Treatments">
                  <Button variant="light" className="service_buttonOpt">
                  {t('optha.Botox_Treatments')}
                    <span style={{ float: "right" }}>
                      <Image src={arr} className="arr_optha_icon" />
                    </span>
                  </Button>
                </a>
                <a href="#Contact_Lens_Clinic">
                  {" "}
                  <Button variant="light" className="service_buttonOpt">
                  {t('optha.Contact_Lens_Clinic')}
                    <span style={{ float: "right" }}>
                      <Image src={arr} className="arr_optha_icon" />
                    </span>
                  </Button>
                </a>
              </Col>
            </Row>
            <Row className="opthasect_intro">
              <Col md={9} sm={12}>
                <section className="opthasec2">
                {t('optha.serviceIntro')}
                </section>
              </Col>
              <Col md={3}>
                <div style={{ marginTop: "15px" }}>
                  <Button
                    onClick={() => {
                      navigate("/book_an_appointment");
                    }}
                    variant="outline-dark"
                    className="service_button1"
                  >
                     {t('optha.appointmentBtn')}
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
          <hr />
          <div className="Opthamain_container">
            <div id="Cataract_Surgery" className="sections_divoptha">
              <h1 className="sect_heading">   {t('optha.section1.Head')}</h1>
              <Row style={{ marginBottom: "32px" }}>
                <Col xs={12} md={6}>
                  <div className="opthasect_wrapper">
                    <div>
                      <section className="opthasec2">
                      {t('optha.section1.Text1')}
                      </section>
                    </div>

                    <div>
                      <section className="opthasec2">
                      {t('optha.section1.Text2')}
                      </section>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <Image
                    src={cataract}
                    alt="joint"
                    className="centered_img"
                    rounded
                  />
                </Col>
              </Row>
            </div>
          </div>
          <hr />
          <div className="Opthamain_container">
            <div id="Phacoemulsification" className="sections_divoptha">
              <h1 className="sect_heading"> {t('optha.section2.Head')}</h1>
              <Row style={{ marginBottom: "32px" }}>
                <Col xs={12} md={6}>
                  <div className="opthasect_wrapper">
                    <div>
                      <section className="opthasec2">
                      {t('optha.section2.Text1')}
                      </section>
                    </div>

                    <div>
                      <section className="opthasec2">
                      {t('optha.section2.Text2')}
                      </section>
                    </div>
                    <div>
                      <section className="opthasec2">
                      {t('optha.section2.Text3')}
                      </section>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <Image
                    src={paceoem}
                    alt="joint"
                    className="centered_img"
                    rounded
                  />
                </Col>
              </Row>
              <Row>
                <h1 className="sec_subhead">{t('optha.section2.subHead1')}</h1>
              </Row>
              <Row className="optha_list_sec" style={{}}>
                <Col>
                  <div style={{ gap: "20px" }}>
                    <ul>
                      <li>
                        <p>
                        {t('optha.section2.ListItem1')}
                        </p>
                      </li>
                      <li>
                        <p>
                        {t('optha.section2.ListItem2')}
                        </p>
                      </li>
                      <li>
                        <p>
                        {t('optha.section2.ListItem3')}
                        </p>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <hr />
          <div className="Opthamain_container">
            <div id="LASIK" className="sections_divoptha">
              <h1 className="sect_heading">  {t('optha.section3.Head')}</h1>
              <Row style={{ marginBottom: "32px" }}>
                <Col xs={12} md={6}>
                  <div className="opthasect_wrapper">
                    <div>
                      <section className="opthasec2">
                      {t('optha.section3.Text1')}
                      </section>
                    </div>

                    <div>
                      <section className="opthasec2">
                      {t('optha.section3.Text2')}
                      </section>
                    </div>
                    <div>
                      <section className="opthasec2">
                      {t('optha.section3.Text3')}
                      </section>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <Image
                    src={lasik}
                    alt="joint"
                    className="centered_img"
                    rounded
                  />
                </Col>
              </Row>
            </div>
          </div>
          <hr />
          <div className="Opthamain_container">
            <div id="icls" className="sections_divoptha">
              <h1 className="sect_heading">
              {t('optha.section4.Head')}
              </h1>
              <Row style={{ marginBottom: "32px" }}>
                <Col xs={12} md={6}>
                  <div className="opthasect_wrapper">
                    <div>
                      <section className="opthasec2">
                      {t('optha.section4.Text1')}
                      </section>
                    </div>

                    <div>
                      <section className="opthasec2">
                      {t('optha.section4.Text2')}
                      </section>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <Image
                    src={icl}
                    alt="joint"
                    className="centered_img"
                    rounded
                  />
                </Col>
              </Row>
            </div>
          </div>
          <hr />
          <div className="Opthamain_container">
            <div id="Pterygium" className="sections_divoptha">
              <h1 className="sect_heading">  {t('optha.section5.Head')}</h1>
              <Row style={{ marginBottom: "32px" }}>
                <Col xs={12} md={6}>
                  <div className="opthasect_wrapper">
                    <div>
                      <section className="opthasec2">
                      {t('optha.section5.Text1')}
                      </section>
                    </div>

                    <div>
                      <section className="opthasec2">
                      {t('optha.section5.Text2')}
                      </section>
                    </div>
                    <div>
                      <section className="opthasec2">
                      {t('optha.section5.Text3')}
                      </section>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <Image
                    src={pytergium}
                    alt="joint"
                    className="centered_img"
                    rounded
                  />
                </Col>
              </Row>
            </div>
          </div>
          <hr />
          <div className="Opthamain_container">
            <div id="Retinal_Injection" className="sections_divoptha">
              <h1 className="sect_heading"> {t('optha.section6.Head')}</h1>
              <Row style={{ marginBottom: "32px" }}>
                <Col xs={12} md={6}>
                  <div className="opthasect_wrapper">
                    <div>
                      <section className="opthasec2">
                      {t('optha.section6.Text1')}
                      </section>
                    </div>

                    <div>
                      <section className="opthasec2">
                      {t('optha.section6.Text2')}
                      </section>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <Image
                    src={retinalinj}
                    alt="joint"
                    className="centered_img"
                    rounded
                  />
                </Col>
              </Row>
            </div>
          </div>
          <hr />
          <div className="Opthamain_container">
            <div id="Botox_Treatments" className="sections_divoptha">
              <h1 className="sect_heading"> {t('optha.section7.Head')}</h1>
              <Row style={{ marginBottom: "32px" }}>
                <Col xs={12} md={6}>
                  <div className="opthasect_wrapper">
                    <div>
                      <section className="opthasec2">
                      {t('optha.section7.Text1')}
                      </section>
                    </div>
                    <div>
                      <section className="opthasec2">
                      {t('optha.section7.Text2')}
                      </section>
                    </div>
                    <div>
                      <section className="opthasec2">
                      {t('optha.section7.Text3')}
                      </section>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <Image
                    src={botox}
                    alt="joint"
                    className="centered_img"
                    rounded
                  />
                </Col>
              </Row>
            </div>
          </div>
          <hr />
          <div className="Opthamain_container">
            <div id="Contact_Lens_Clinic" className="sections_divoptha">
              <h1 className="sect_heading">  {t('optha.section8.Head')}</h1>
              <Row style={{ marginBottom: "32px" }}>
                <Col xs={12} md={6}>
                  <div className="opthasect_wrapper">
                    <div>
                      <section className="opthasec2">
                      {t('optha.section8.Text1')}
                      </section>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <Image
                    src={clc}
                    alt="joint"
                    className="centered_img"
                    rounded
                  />
                </Col>
              </Row>
            </div>
          </div>
          <hr />
          <div className="Orthomain_container">
            <div className="Otherspecs">
              <h1 className="ospect_heading">{t('optha.section9.Head')}</h1>
              <Row style={{ marginBottom: "32px" }}>
                <Col sm={12} md={6}>
                  <div className="opthasect_wrapper">
                    <div className="opthasect_img_conts">
                      <Image
                        src={ortho}
                        alt="joint"
                        className="scentered_img"
                        rounded
                      />
                    </div>

                    <div>
                      <h1 className="sect_heading">{t('optha.section9.subHead1')}</h1>
                      <section className="orthosec2">
                      {t('optha.section9.text1')}
                      </section>
                    </div>
                    <div>
                      <Button
                        onClick={navigateToOrthopaedics}
                        className="service_button1"
                        variant="outline-dark"
                      >
                       {t('optha.section9.viewMore')}
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col sm={12} md={6}>
                  <div className="opthasect_wrapper">
                    <div className="opthasect_img_conts">
                      <Image
                        src={spine}
                        alt="joint"
                        className="scentered_img"
                        rounded
                      />
                    </div>

                    <div>
                      <h1 className="sect_heading">{t('optha.section9.subHead2')}</h1>
                      <section className="orthosec2">
                      {t('optha.section9.text2')}
                      </section>
                      <div>
                        <Button
                          onClick={navigateToSpine}
                          className="service_button1"
                          variant="outline-dark"
                        >
                        {t('optha.section9.viewMore')}
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </>
      )}
      <Footer />
    </>
  );
}

export default Opthalmology;
