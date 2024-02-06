import React, { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import dnalogo from "../../Assets/Images/muscleman.png";
import "./Home.css";
import Contact from "../Contact/Contact";
import Intro from "../Intro/Intro";
import Services from "../Services/Services";
import Doctors from "../Doctors/Doctors";
import Facilities from "../Facilities/Facilities";
import Footer from "../Footer/Footer";

import ScrollText from "../ScrollText/ScrollText";
// import Testmonial from "../Testmonials/Testmonial";
import Header from "../Header/Header";
import { Helmet } from "react-helmet";
import { lazy } from "react";
import { Suspense } from "react";
import Loading from "../Loading/Loading";
import { useTranslation } from "react-i18next";
const Scroll = lazy(() => import("../ScrollScreen/Scroll"));

function Home() {
  const { t } = useTranslation(); 
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const hasLoadedBefore = localStorage.getItem("hasLoadedBefore");
 // Function to set the flag in localStorage after 5 seconds
 const setFlagAfterDelay = () => {
  localStorage.setItem('hasLoadedBefore', true);
  setIsLoading(false); // Hide the loading component after setting the flag
};

if (!hasLoadedBefore) {
  // If it's the initial load, wait for 5 seconds before setting the flag
  setTimeout(setFlagAfterDelay, 10000);
} else {
  setIsLoading(false);
}
   
  }, []);
  
  useEffect(()=>{
    window.scrollTo(0, 0); // Reset scroll position to the top
  })
  return (
    <>
      <Helmet>
        <title>Home - Sri Chaitanya Hospital</title>
        <link rel="canonical" href="https://www.chaitanyaorthoeye.com/" />
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
      {isLoading && (
        <Loading />
      )} 
      {!isLoading && (
        <> 
         <Row style={{position:"sticky",top:"0",zIndex:"1000",backgroundColor:"#FFF8F1",padding:"0 3% 0 3%"}}>
        <Header />
      </Row>
          <div className="main_container">
          
            <Container fluid>
              <Row>
                <Col md={8}>
                  <div className="hero_cont_m">
                    <h1 className="main_heading">
                      {t('home.mainHeading')}
                    </h1>
                    <p className="main_text">
                    {t('home.mainText')}
                    </p>
                    {/* <Button
                variant="dark"
                onClick={() => {
                  navigate("/book_an_appointment");
                }}
                className="main_Btn"
              >
                Contact Us
              </Button> */}
                  </div>
                </Col>
                <Col md={4}>
                  <Image
                    className="heros"
                    src={dnalogo}
                    alt="dr.varun tanuku"
                    cover="true"
                  />
                </Col>
              </Row>
              <Row style={{marginTop:"50px"}}>
                <Contact />
              </Row>
              <Row>
                <Intro />
              </Row>
              <Row>
                <Services />
              </Row>
              <Doctors />
            </Container>
            <Facilities />
          </div>

          <div>
            <Suspense fallback={<div>Loading...</div>}>
              <Scroll />
            </Suspense>
          </div>
          <div style={{margin:"50px 0"}}>
            <ScrollText />
          </div>

          {/* <div className="main_container">
            <Testmonial />
          </div> */}

          <Footer />
        </>
      )}
    </>
  );
}

export default Home;
