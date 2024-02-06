import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./Spine.css";
import { Button, Col, Image, Row } from "react-bootstrap";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import spine from "../../Assets/Images/Ortho/spine.jpg";
import ortho from "../../Assets/Images/Ortho/shoulder.jpg";
import opth from "../../Assets/Images/opthalmology.jpg";
import LoadSpinner from "../Loading_Spinner/LoadSpinner";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

function Spine() {
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
  const navigateToOphthalmology = () => {
    setLoading(true); // Show loading component
    setTimeout(() => {
      navigate("/opthalmology"); // Simulate navigation delay
      setLoading(false); // Hide loading component after navigation
    }, 2000); // Adjust the delay as needed
  };
  return (
    <>
     <Helmet>
        <title>Spine</title>
        <link
          rel="canonical"
          href="https://www.chaitanyaorthoeye.com/Spine"
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
              zIndex: "100",
              backgroundColor: "#FFF8F1",
              padding: "0 3% 0 3%",
            }}
          >
            <Header />
          </div>
          <div className="Spine_container">
            <div className="spine-bottom">
           
            </div>
            <h3 className="spine-heading">{t('spine.mainHeading')}</h3>
            <Row style={{ marginBottom: "20px" }}>
              <Col xs={12} md={6}>
                <div style={{}}>
                  {" "}
                 
                  <div>
                    <section className="spine-text">
                    {t('spine.subText1')}
                    </section>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={6}>
                <Image src={spine} alt="joint" className="spine_img" fluid  rounded />
              </Col>
            </Row>
            <Row>
              <h1 className="spine_sec_subhead">{t('spine.servicesHead')}</h1>
            </Row>
            <Row style={{ margin: "20px 0 0 0" }}>
              <Col>
                <div style={{ gap: "10px" }}>
                  <ul>
                    <li>
                      <p>{t('spine.ListItem1')}</p>
                    </li>
                    <li>
                      <p>{t('spine.ListItem2')}</p>
                    </li>
                    <li>
                      <p>{t('spine.ListItem3')}</p>
                    </li>

                    <li>
                      <p>{t('spine.ListItem4')}</p>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
          <div>
            <div className="Orthomain_container">
              <div className="Otherspecs">
                <h1 className="spect_heading">{t('spine.servicesHead')}</h1>
                <Row style={{ marginBottom: "52px" ,height:"100%"}}>
                  <Col sm={12} md={6}>
                    <div className="spine_intro">
                      <div className="scentered_img">
                        <Image
                          src={ortho}
                          alt="joint"
                          className="scentered_img"
                          rounded
                        />
                      </div>

                      <div>
                        <h1 className="spinesect_heading">{t('spine.section1.subHead1')}</h1>
                        <section className="spine_sec2">
                        {t('spine.section1.text1')}
                        </section>
                      </div>
                      <div>
                        <Button
                          onClick={navigateToOrthopaedics}
                          className="service_button1"
                          variant="outline-dark"
                        >
                          {t('spine.section1.viewMore')}
                        </Button>
                      </div>
                    </div>
                  </Col>
                  <Col sm={12} md={6}>
                    <div className="spine_intro">
                      <div className="scentered_img">
                        <Image
                          src={opth}
                          alt="joint"
                          className="scentered_img"
                          rounded
                        />
                      </div>

                      <div>
                        <h1 className="spinesect_heading">{t('spine.section1.subHead2')}</h1>
                        <section className="spine_sec2">
                        {t('spine.section1.text2')}
                        </section>
                        <div>
                          <Button
                            onClick={navigateToOphthalmology}
                            className="service_button1"
                            variant="outline-dark"
                          >
                            {t('spine.section1.viewMore')}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>{" "}
        </>
      )}

      <Footer />
    </>
  );
}

export default Spine;
