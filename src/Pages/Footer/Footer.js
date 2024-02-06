import React from "react";
import { Container, Image } from "react-bootstrap";
import "./Footer.css";
import insta from "../../Assets/Images/insta.png";
import watsapp from "../../Assets/Images/watsapp.png";
import fb from "../../Assets/Images/fb.png";
import email from "../../Assets/Images/email.png";
import phone from "../../Assets/Images/phone.png";
import { FiArrowUpRight } from "react-icons/fi";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  const phoneNumber = "08819224455"; 
  const emailAddress = "chaitanyaortho1989@gmail.com"; 

  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };
  return (
    <div className="footer_container">
      <Container fluid>
        <div className="stylingCon">
          <div className="fir_div">
            <div className="get_touch_cont">
              <h3 className="get_toch">{t('footer.getTouch')}</h3>{" "}
              <span>
                <FiArrowUpRight className="arrow_img" size={105} />
              </span>
            </div>
            <div style={{ marginTop: "64px" }}>
              <h3 className="footer_subtext">
              {t('footer.subHeading')}
              </h3>
              <p id="p"> {t('footer.addresstext1')}</p>
              <p id="p">{t('footer.addresstext2')}</p>
              <p id="p">{t('footer.addresstext3')}</p>
            </div>
          </div>
          <div className="sec_div">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "60%",
              }}
            >
              <div>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <Image
                    style={{
                      marginTop: "50px",
                      height: "40px",
                      cursor: "pointer",
                    }}
                    fluid
                    src={fb}
                    alt="facebook"
                  />
                </a>
              </div>
              <div>
                <a
                  href="https://instagram.com/sri_chaitanya_ortho_eye_?igshid=YTQwZjQ0NmI0OA=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <Image
                    style={{
                      marginTop: "50px",
                      height: "40px",
                      cursor: "pointer",
                    }}
                    src={insta}
                    alt="instagram"
                  />
                </a>
              </div>
              <div>
                <Image
                  style={{
                    marginTop: "50px",
                    height: "40px",
                    cursor: "pointer",
                  }}
                  src={watsapp}
                  alt="whatsapp"
                />
              </div>
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "23px",
                    height: "32px",
                    marginRight: "20px",
                   
                  }}
                >
                  <Image onClick={handlePhoneClick}  style={{ cursor: "pointer",marginTop:"20px"}} src={phone} alt="phone" />
                </div>
                <div>
                  <p id="p">08819-224455</p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "23px",
                    height: "23px",
                    marginRight: "20px",
                  }}
                ></div>
                <div>
                  {" "}
                  <p id="p"> 08819-224456</p>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "23px",
                  height: "23px",
                  marginRight: "20px",
                }}
              >
                {" "}
                <Image style={{ cursor: "pointer"}}  onClick={handleEmailClick} src={email} alt="Email" />
              </div>
              <div>
                {" "}
                <p id="p3">chaitanyaortho1989@gmail.com</p>
              </div>
            </div>

            <p id="p1">© 2023 All Rights Reserved</p>
          </div>
        </div>
      </Container>
     
    </div>
  );
}

export default Footer;
