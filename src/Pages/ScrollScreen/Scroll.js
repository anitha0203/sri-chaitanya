import React, {  useLayoutEffect } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import lady from "../../Assets/Images/final-pics/patient-care.JPG";
import ladyorthodoc from "../../Assets/Images/final-pics/qual-sup.JPG";
import ladynurse from "../../Assets/Images/final-pics/staff.JPG";

import "./Scroll.css";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger);

function Scroll() {
  const {t} = useTranslation();
const scrollRef =useRef();

  useLayoutEffect(() => {
    // Select all screen divs
    const sections = gsap.utils.toArray([".screen1", ".screen2", ".screen3"]);

    const animation = gsap.timeline({
      scrollTrigger: {
        trigger: scrollRef.current,
        start: "top top+=1",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => `+=${sections.length * 100}%`, // Adjust this value as needed
      }
    });
    sections.forEach((section, index) => {
      animation.to(section, {
        xPercent: -100 * index,
        ease: "none",
      });
    });

   
    return () => {
      if (animation.current) {
        animation.current.kill();
        animation.current.clear();
      }
    
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });
    };
  }, []);

  return (
    <div className="containers" ref={scrollRef}>
      {/* screen1 */}
      <section className="screena screen1">
        <Row className="image_card_scroll">
          <Col sm={12} md={5}>
            <div>
              <p className="scroll_p">{t('scrollScreen.screen1Heading')}</p>
              <h1 className="scroll_head">{t('scrollScreen.screen1SubText')}</h1>
              <p className="scroll_sub">
              {t('scrollScreen.screen1Text')}
              </p>
            </div>
          </Col>
          <Col md={7} sm={12}>
            <Image
              rounded
              className="centered_img"
              src={lady}
              alt="lady_patient"
            />
          </Col>
        </Row>
      </section>

      {/* screen12 */}
      <section className="screena screen2">
        <Row className="image_card_scroll">
          <Col sm={12} md={5}>
            <div>
              <p className="scroll_p">{t('scrollScreen.screen2Heading')}</p>
              <h1 className="scroll_head">{t('scrollScreen.screen2SubText')}</h1>
              <p className="scroll_sub">
              {t('scrollScreen.screen2Text')}
              </p>
            </div>
          </Col>
          <Col md={7} sm={12}>
            <Image
              rounded
              className="centered_img"
              src={ladyorthodoc}
              alt="lady_patient"
            />
          </Col>
        </Row>
      </section>

      {/* screen3 */}
      <section className="screena screen3">
        <Row className="image_card_scroll">
          <Col sm={12} md={5}>
            <div>
              <p className="scroll_p">{t('scrollScreen.screen3Heading')}</p>
              <h1 className="scroll_head">{t('scrollScreen.screen3SubText')}</h1>
              <p className="scroll_sub">
              {t('scrollScreen.screen3Text')}
              </p>
            </div>
          </Col>
          <Col md={7} sm={12}>
            <Image
              rounded
              className="centered_img"
              src={ladynurse}
              alt="lady_patient"
            />
          </Col>
        </Row>
      </section>
    </div>
  );
}

export default Scroll;
