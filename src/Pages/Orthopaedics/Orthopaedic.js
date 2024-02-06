import React from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import hip from "../../Assets/Images/hipjoint.png";
import arr from "../../Assets/Images/arrow_dir.png";
import jointpreserve from "../../Assets/Images/Ortho/jointpreserve.jpg";
import trauma from "../../Assets/Images/Ortho/trauma.jpg";
import spine from "../../Assets/Images/Ortho/spine.jpg";
import deformity from "../../Assets/Images/Ortho/deformity.jpg";
import illizarov from "../../Assets/Images/Ortho/illizarov.jpg";
import sports from "../../Assets/Images/Ortho/sports.jpg";
import nonunion from "../../Assets/Images/Ortho/nonunion.jpg";
import jointrepl from "../../Assets/Images/Ortho/ortho_jointreplacement.jpg";
import opthalmology from "../../Assets/Images/opthalmology.jpg";
import "./Orthopaedic.css";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Header from "../Header/Header";
import { useState } from "react";
import LoadSpinner from "../Loading_Spinner/LoadSpinner";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

function Orthopaedic() {
  const {t} = useTranslation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // This code will run when the component is mounted
    window.scrollTo(0, 0); // Reset scroll position to the top
  }, []);
  const navigateToOpthalmology = () => {
    setLoading(true); // Show loading component
    setTimeout(() => {
      navigate("/opthalmology"); // Simulate navigation delay
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
      <Helmet>
        <title>Orthopaedics</title>
        <link
          rel="canonical"
          href="https://www.chaitanyaorthoeye.com/orthopaedics"
        />
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
      {loading ? (
        <LoadSpinner />
      ) : (
        <>
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

          <div className="Orthomain_container">
            <div className="Orthoheader_cont"></div>
            <Row>
              <Col md={8}>
                <div>
                  <h1 className="ortho_heading">{t('ortho.mainHeading')}</h1>
                  <section className="orthosec1">
                  {t('ortho.subText1')}
                  </section>
                  <section className="orthosec2">
                  {t('ortho.subText2')}
                  </section>
                </div>
              </Col>
              <Col md={4} sm={12}>
                <Image src={hip} alt="hipjoint" className="ortho_hip" />
              </Col>
            </Row>
            <Row>
              <h1 className="ortho_servicehead">{t('ortho.servicesHead')}</h1>
            </Row>
            <Row
              style={{ width: "100%", display: "flex", flexDirection: "row" }}
            >
              <Col sm={12} md={6}>
                <a href="#joint_replace">
                  <Button variant="light" className="service_buttonOrth">
                  {t('ortho.jointReplacement')}
                    <span style={{ float: "right" }}>
                      <Image src={arr} className="arr_ortho_icon" />
                    </span>
                  </Button>
                </a>
                <a href="#joint_preserving">
                  <Button variant="light" className="service_buttonOrth">
                  {t('ortho.Joint_Preserving_Surgeries')}
                    <span style={{ float: "right" }}>
                      <Image src={arr} className="arr_ortho_icon" />
                    </span>
                  </Button>
                </a>
                <a href="#trauma&Accident">
                  <Button variant="light" className="service_buttonOrth">
                  {t('ortho.Trauma_Accident')}
                    <span style={{ float: "right" }}>
                      <Image src={arr} className="arr_ortho_icon" />
                    </span>
                  </Button>
                </a>

                <a href="#Deformity_Correction_Surgeries">
                  <Button variant="light" className="service_buttonOrth">
                  {t('ortho.Deformity_Correction_Surgeries')}
                    <span style={{ float: "right" }}>
                      <Image src={arr} className="arr_ortho_icon" />
                    </span>
                  </Button>
                </a>
              </Col>
              <Col sm={12} md={6}>
                <a href="#Non_Union_Surgeries">
                  <Button variant="light" className="service_buttonOrth">
                  {t('ortho.Non_union_Surgeries')}
                    <span style={{ float: "right" }}>
                      <Image src={arr} className="arr_ortho_icon" />
                    </span>
                  </Button>
                </a>
                <a href="#Illizarov_Surgeries">
                  <Button variant="light" className="service_buttonOrth">
                  {t('ortho.Illizarov_Surgeries')}
                    <span style={{ float: "right" }}>
                      <Image src={arr} className="arr_ortho_icon" />
                    </span>
                  </Button>
                </a>
                <a href="#Sports_Medicine&Keyhole_Services">
                  <Button variant="light" className="service_buttonOrth">
                  {t('ortho.Sport_Medicine_Arthroscope')}
                    <span style={{ float: "right" }}>
                      <Image src={arr} className="arr_ortho_icon" />
                    </span>
                  </Button>
                </a>
                {/* <a href="#Shoulder_Surgery">
                  {" "}
                  <Button variant="light" className="service_buttonOrth">
                    Shoulder{" "}
                    <span style={{ float: "right" }}>
                      <Image src={arr} className="arr_ortho_icon" />
                    </span>
                  </Button>
                </a>
                <a href="#Orthoscope">
                  <Button variant="light" className="service_buttonOrth">
                    Orthoscope{" "}
                    <span style={{ float: "right" }}>
                      <Image src={arr} className="arr_ortho_icon" />
                    </span>
                  </Button>
                </a> */}
              </Col>
            </Row>
            <Row className="ortho_service_intro" style={{}}>
              <Col md={9}>
                <section className="orthosec2">
                {t('ortho.serviceIntro')}
                </section>
              </Col>
              <Col md={3}>
                <div>
                  <Button
                    onClick={() => {
                      navigate("/book_an_appointment");
                    }}
                    variant="outline-dark"
                    className="service_button1"
                  >
                    {t('ortho.appointmentBtn')}
                  </Button>
                </div>
              </Col>
            </Row>
            <div id="joint_replace" className="sections_div">
              <h1 className="orthosect_heading"> {t('ortho.section1.Head')}</h1>
              <Row style={{ marginBottom: "52px" }}>
                <Col xs={12} md={6}>
                  <div className="orthosect_wrapper">
                    <div>
                      <section className="orthosec2">
                      {t('ortho.section1.Text1')}
                      </section>
                    </div>

                    <div>
                      <section className="orthosec2">
                      {t('ortho.section1.Text2')}
                      </section>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <Image
                    src={jointrepl}
                    alt="joint"
                    className="orthocentered_img"
                    rounded
                  />
                </Col>
              </Row>
              <Row>
                <h1 className="sec_subhead"> {t('ortho.section1.subHead1')}</h1>
              </Row>
              <Row className="orthosect_list1">
                <Col>
                  <div style={{ gap: "30px" }}>
                    <ul>
                      <li>
                        <p> {t('ortho.section1.ListItem1')}</p>
                      </li>
                      <li>
                        <p> {t('ortho.section1.ListItem2')}</p>
                      </li>
                      <li>
                        <p> {t('ortho.section1.ListItem3')}</p>
                      </li>

                      <li>
                        <p> {t('ortho.section1.ListItem4')}</p>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col>
                  <div style={{ gap: "40px" }}>
                    <ul>
                      <li>
                        <p> {t('ortho.section1.ListItem5')}</p>
                      </li>
                      <li>
                        <p> {t('ortho.section1.ListItem6')}</p>
                      </li>
                      <li>
                        <p> {t('ortho.section1.ListItem7')}</p>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
              <Row>
                <h1 className="sec_subhead"> {t('ortho.section1.SubHead2')}</h1>
              </Row>
              <Row className="orthosect_list1">
                <Col>
                  <div style={{ gap: "30px" }}>
                    <ul>
                      <li>
                        <p>
                        {t('ortho.section1.features1')}
                        </p>
                      </li>
                      <li>
                        <p> {t('ortho.section1.features2')}</p>
                      </li>
                      <li>
                        <p> {t('ortho.section1.features3')}</p>
                      </li>

                      <li>
                        <p>
                        {t('ortho.section1.features4')}
                        </p>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <hr />
          <div className="Orthomain_container">
            <div id="joint_preserving" className="sections_div">
              <h1 className="orthosect_heading">  {t('ortho.section2.Head')}</h1>
              <Row style={{ marginBottom: "52px" }}>
                <Col xs={12} md={6}>
                  <div className="orthosect_wrapper">
                    <div>
                      <section className="orthosec2">
                      {t('ortho.section2.Text1')}
                      </section>
                    </div>

                    <div>
                      <section className="orthosec2">
                      {t('ortho.section2.Text2')}
                      </section>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <Image
                    src={jointpreserve}
                    alt="joint"
                    className="orthocentered_img"
                    rounded
                  />
                </Col>
              </Row>
              <Row>
                <h1 className="sec_subhead">   {t('ortho.section2.subHead1')}</h1>
              </Row>
              <Row className="orthosect_list1">
                <Col>
                  <div style={{ gap: "30px" }}>
                    <ul>
                      <li>
                        <p>{t('ortho.section2.ListItem1')}</p>
                      </li>
                      <li>
                        <p>
                        {t('ortho.section2.ListItem2')}
                        </p>
                      </li>
                      <li>
                        <p>
                        {t('ortho.section2.ListItem3')}
                        </p>
                      </li>

                      <li>
                        <p>
                        {t('ortho.section2.ListItem4')}
                        </p>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <hr />
          <div className="Orthomain_container">
            <div id="trauma&Accident" className="sections_div">
              <h1 className="orthosect_heading">  {t('ortho.section3.Head')}</h1>
              <Row style={{ marginBottom: "52px" }}>
                <Col xs={12} md={6}>
                  <div className="orthosect_wrapper">
                    <div>
                      <section className="orthosec2">
                      {t('ortho.section3.Text1')}
                      </section>
                    </div>

                    <div>
                      <section className="orthosec2">
                      {t('ortho.section3.Text2')}
                      </section>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <Image
                    src={trauma}
                    alt="joint"
                    className="orthocentered_img"
                    rounded
                  />
                </Col>
              </Row>
              <Row>
                <h1 className="sec_subhead"> {t('ortho.section3.subHead1')}</h1>
              </Row>
              <Row className="orthosect_list1">
                <Col>
                  <div style={{ gap: "30px" }}>
                    <ul>
                      <li>
                        <p> {t('ortho.section3.ListItem1')}</p>
                      </li>
                      <li>
                        <p> {t('ortho.section3.ListItem2')}</p>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col>
                  <div style={{ gap: "40px" }}>
                    <ul>
                      <li>
                        <p> {t('ortho.section3.ListItem3')}</p>
                      </li>
                      <li>
                        <p> {t('ortho.section3.ListItem4')}</p>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
              <Row>
                <h1 className="sec_subhead"> {t('ortho.section3.subHead2')}</h1>
              </Row>
              <Row className="orthosect_list1">
                <Col>
                  <div style={{ gap: "40px" }}>
                    <ul>
                      <li>
                        <p>
                        {t('ortho.section3.features1')}
                        </p>
                      </li>
                      <li>
                        <p>
                        {t('ortho.section3.features2')}
                        </p>
                      </li>
                      <li>
                        <p>
                        {t('ortho.section3.features3')}
                        </p>
                      </li>

                      <li>
                        <p>
                        {t('ortho.section3.features4')}
                        </p>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </div>
          </div>

          <hr />
          <div className="Orthomain_container">
            <div id="Deformity_Correction_Surgeries" className="sections_div">
              <h1 className="orthosect_heading">
              {t('ortho.section4.Head')}
              </h1>
              <Row style={{ marginBottom: "52px" }}>
                <Col xs={12} md={6}>
                  <div className="orthosect_wrapper">
                    <div>
                      <section className="orthosec2">
                      {t('ortho.section4.Text1')}
                      </section>
                    </div>

                    <div>
                      <section className="orthosec2">
                      {t('ortho.section4.Text2')}
                      </section>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <Image
                    src={deformity}
                    alt="joint"
                    className="orthocentered_img"
                    rounded
                  />
                </Col>
              </Row>
              <Row>
                <h1 className="sec_subhead">  {t('ortho.section4.subHead1')}</h1>
              </Row>
              <Row className="orthosect_list1">
                <Col>
                  <div style={{ gap: "30px" }}>
                    <ul>
                      <li>
                        <p>
                        {t('ortho.section4.ListItem1')}
                        </p>
                      </li>
                      <li>
                        <p>
                        {t('ortho.section4.ListItem2')}
                        </p>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <hr />
          <div className="Orthomain_container">
            <div id="Non_Union_Surgeries" className="sections_div">
              <h1 className="orthosect_heading">{t('ortho.section5.Head')}</h1>
              <Row style={{ marginBottom: "52px" }}>
                <Col xs={12} md={6}>
                  <div className="orthosect_wrapper">
                    <div>
                      <section className="orthosec2">
                      {t('ortho.section5.Text1')}
                      </section>
                    </div>

                    <div>
                      <section className="orthosec2">
                      {t('ortho.section5.Text2')}
                      </section>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <Image
                    src={nonunion}
                    alt="joint"
                    className="orthocentered_img"
                    rounded
                  />
                </Col>
              </Row>
              <Row>
                <h1 className="sec_subhead">{t('ortho.section5.subHead1')}</h1>
              </Row>
              <Row className="orthosect_list1">
                <Col>
                  <div style={{ gap: "30px" }}>
                    <ul>
                      <li>
                        <p>
                        {t('ortho.section5.ListItem1')}
                        </p>
                      </li>
                      <li>
                        <p>
                        {t('ortho.section5.ListItem2')}
                        </p>
                      </li>
                      <li>
                        <p>
                        {t('ortho.section5.ListItem3')}
                        </p>
                      </li>
                      <li>
                        <p>
                        {t('ortho.section5.ListItem4')}
                        </p>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <hr />
          <div className="Orthomain_container">
            <div id="Illizarov_Surgeries" className="sections_div">
              <h1 className="orthosect_heading">{t('ortho.section6.Head')}</h1>
              <Row style={{ marginBottom: "52px" }}>
                <Col xs={12} md={6}>
                  <div className="orthosect_wrapper">
                    <div>
                      <section className="orthosec2">
                      {t('ortho.section6.Text1')}
                      </section>
                    </div>

                    <div>
                      <section className="orthosec2">
                      {t('ortho.section6.Text2')}
                      </section>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <Image
                    src={illizarov}
                    alt="joint"
                    className="orthocentered_img"
                    rounded
                  />
                </Col>
              </Row>
              <Row>
                <h1 className="sec_subhead">  {t('ortho.section6.subHead1')}</h1>
              </Row>
              <Row className="orthosect_list1">
                <Col>
                  <div style={{ gap: "30px" }}>
                    <ul>
                      <li>
                        <p>
                        {t('ortho.section6.ListItem1')}
                        </p>
                      </li>
                      <li>
                        <p>
                        {t('ortho.section6.ListItem2')}
                        </p>
                      </li>
                      <li>
                        <p>
                        {t('ortho.section6.ListItem3')}
                        </p>
                      </li>
                      <li>
                        <p>
                        {t('ortho.section6.ListItem4')}
                        </p>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <hr />
          <div className="Orthomain_container">
            <div id="Sports_Medicine&Keyhole_Services" className="sections_div">
              <h1 className="orthosect_heading">
              {t('ortho.section7.Head')}
              </h1>
              <Row style={{ marginBottom: "52px" }}>
                <Col xs={12} md={6}>
                  <div className="orthosect_wrapper">
                    <div>
                      <section className="orthosec2">
                      {t('ortho.section7.Text1')}
                      </section>
                    </div>

                    <div>
                      <section className="orthosec2">
                      {t('ortho.section7.Text2')}
                      </section>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <Image
                    src={sports}
                    alt="joint"
                    className="orthocentered_img"
                    rounded
                  />
                </Col>
              </Row>
              <Row>
                <h1 className="sec_subhead"> {t('ortho.section7.Head')}</h1>
              </Row>
              <Row className="orthosect_list1">
                <Col>
                  <div style={{ gap: "30px" }}>
                    <ul>
                      <li>
                        <p> {t('ortho.section7.ListItem1')}</p>
                      </li>
                      <li>
                        <p> {t('ortho.section7.ListItem2')}</p>
                      </li>
                      <li>
                        <p> {t('ortho.section7.ListItem3')} </p>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col>
                  <div style={{ gap: "30px" }}>
                    <ul>
                      <li>
                        <p> {t('ortho.section7.ListItem4')} </p>
                      </li>
                      <li>
                        <p> {t('ortho.section7.ListItem5')}</p>
                      </li>
                      <li>
                        <p> {t('ortho.section7.ListItem6')}</p>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
              <Row>
                <h1 className="sec_subhead"> {t('ortho.section7.subHead2')}</h1>
              </Row>
              <Row className="orthosect_list1">
                <Col>
                  <div style={{ gap: "30px" }}>
                    <ul>
                      <li>
                        <p>
                        {t('ortho.section7.features1')}
                        </p>
                      </li>
                      <li>
                        <p>
                        {t('ortho.section7.features2')}
                        </p>
                      </li>
                      <li>
                        <p>
                        {t('ortho.section7.features3')}
                        </p>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </div>
          </div>

          <div className="Orthomain_container">
            <div className="Otherspecs">
              <h1 className="orthospect_heading">   {t('ortho.section8.Head')}</h1>
              <Row style={{ marginBottom: "52px" }}>
                <Col sm={12} md={6}>
                  <div className="orthosect_wrapper">
                    <div>
                      <Image
                        src={opthalmology}
                        alt="joint"
                        className="scentered_img"
                        rounded
                      />
                    </div>

                    <div>
                      <h1 className="orthosect_heading"> {t('ortho.section8.subHead1')}</h1>
                      <section className="orthosec2">
                      {t('ortho.section8.text1')}
                      </section>
                    </div>
                    <div>
                      <Button
                        onClick={navigateToOpthalmology}
                        className="service_button1"
                        variant="outline-dark"
                      >
                        {t('ortho.section8.viewMore')}
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col sm={12} md={6}>
                  <div className="orthosect_wrapper">
                    <div>
                      <Image
                        src={spine}
                        alt="joint"
                        className="scentered_img"
                        rounded
                      />
                    </div>

                    <div>
                      <h1 className="orthosect_heading"> {t('ortho.section8.subHead2')}</h1>
                      <section className="orthosec2">
                      {t('ortho.section8.text2')}
                      </section>
                    </div>
                    <div>
                      <Button
                        onClick={navigateToSpine}
                        className="service_button1"
                        variant="outline-dark"
                      >
                         {t('ortho.section8.viewMore')}
                      </Button>
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

export default Orthopaedic;
