import React, { useEffect, useState } from "react";
import emailjs from 'emailjs-com';
import hall from "../../Assets/Images/final-pics/contact2.png";
import { Button, Col, Container, Form, Image, Row, Toast, ToastContainer } from "react-bootstrap";
import "./Appointment.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Helmet } from "react-helmet";
import AppointmentImages from "../Appointment-images/AppointmentImages";
import { useTranslation } from "react-i18next";

function Appointment() {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);
  const [showB, setShowB] = useState(false);
  const toggleShow = () => setShow(!show);
  const toggleShowB = () => setShow(!showB);
  const [validated, setValidated] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    specialty: "", // Set a default value
    message: "",
  });

  useEffect(() => {
    // This code will run when the component is mounted
    window.scrollTo(0, 0); // Reset scroll position to the top
  }, []);
  // Handle form input changes

  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
  
    // Validation logic
    let errorMessage = "";
    switch (name) {
      case "firstName":
      case "lastName":
        if (!/^[a-zA-Z]*$/.test(value)) {
          errorMessage = "Only letters are allowed.";
        }
        break;
      case "phone":
        if (!/^\d{0,10}$/.test(value)) {
          errorMessage = "Enter a valid Indian phone number.";
        }
        break;
      case "email":
        if(/^[\\w.-]+@[\\w.-]+\\.[a-zA-Z]{2,}$/.test(value)) {
          errorMessage = "Invalid email address.";
        }
        break;
      case "date":
        // Add specific validation for the "date" field if needed
        break;
      case "time":
        // Add specific validation for the "time" field if needed
        break;
      // Add more cases for other fields if needed
  
      default:
        break;
    }
  
    // Set errors in the error state
    setFormErrors({
      ...formErrors,
      [name]: errorMessage,
    });
  
    // If there's an error, do not update the form data
    if (errorMessage) {
      return;
    }


    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
      return;
    }
    setValidated(true);
    // You can perform any actions here, e.g., sending the data to a server
    console.log(formData); // Display the form data in the console
    emailjs.send(
      'service_vwn9wjq', // Service ID
      'template_vhd43mi', // Template ID
      {
        to_name: 'Chaitanyaorthoeyes.com', // Use the appropriate fields from your template
        from_name: formData.firstName + ' ' + formData.lastName,
        phone: formData.phone,
        email: formData.email,
        date: formData.date,
        time: formData.time,
        specialty: formData.specialty,
        message: formData.message,
      },
      'ggHV2gLLgsw3D2rDn' // User ID
    )
      .then((response) => {
        console.log('Email sent successfully:', response);
        setShow(true);
        // Optionally, reset the form data after successful submission
        setFormData({
          // reset your form fields
        });
      })
      .catch((error) => {
        setShowB(true);
        console.error('Email sending failed:', error);
      });
 

    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      date: "",
      time: "",
      specialty: "",
      message: "",
    });
    
  };

  return (
    <>
      <Helmet>
        <title>Book an Appointment</title>
        <link
          rel="canonical"
          href="https://www.chaitanyaorthoeye.com/book_an_appointment"
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
      <div  style={{
              position: "sticky",
              top: "0",
              zIndex: "100",
              backgroundColor: "#FFF8F1",
              padding: "0 3% 0 3%",
            }}>
 <Header />
      </div>
      <div className="appointment_container">
       
        <h1 className="app_heading">{t('appointment.mainHeading')}</h1>
        <div className="app_sub_p">
          <p className="app_text_p">
          {t('appointment.mainText')}
          </p>
        </div>

        <Container fluid={true}>
          <ToastContainer position="top-center">
        <Toast bg="success" show={show} onClose={toggleShow}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Form Submitted</strong>
            <small>just now</small>
          </Toast.Header>
          <Toast.Body>Your form has been sent successfully!</Toast.Body>
        </Toast>
        <Toast bg="danger" show={showB} onClose={toggleShowB}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Form Submission Failed</strong>
            <small>just now</small>
          </Toast.Header>
          <Toast.Body>Your form submission has failed Try Again!</Toast.Body>
        </Toast>
        </ToastContainer>
          <Row style={{ padding: "12px"}}>
            <Col sm={12} md={6}>
              <Form noValidate validated={validated}  onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Form.Group as={Col} md controlId="formGridFirstName">
                    <Form.Label className="label">{t('appointment.form.firstName')}</Form.Label>
                    <Form.Control
                      className="Control"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      type="text"
                      placeholder={t('appointment.form.firstNameHolder')}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                    {t('appointment.form.firstNameErrorMsg')}
                      </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} md controlId="formGridLastName">
                    <Form.Label className="label">{t('appointment.form.lastname')}</Form.Label>
                    <Form.Control
                      className="Control"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      type="text"
                      placeholder={t('appointment.form.lastNameHolder')}
                      required
                    />
                      <Form.Control.Feedback type="invalid">
                      {t('appointment.form.lastnameErrorMsg')}
                      </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} md controlId="formGridPhone">
                    <Form.Label className="label">{t('appointment.form.phone')}</Form.Label>
                    <Form.Control
                      className="Control"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      type="tel"
                      placeholder="+91 "
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                    {t('appointment.form.phoneErrorMsg')}
                      </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} md controlId="formGridEmail">
                    <Form.Label className="label">{t('appointment.form.email')}</Form.Label>
                    <Form.Control
                      className="Control"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      type="email"
                      placeholder={t('appointment.form.emailHolder')}
                      required
                    />
                       <Form.Control.Feedback type="invalid">
                       {t('appointment.form.emailErrorMsg')}
                      </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} md controlId="formGridDate">
                    <Form.Label className="label">{t('appointment.form.date')}</Form.Label>
                    <Form.Control
                      className="Control"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      type="date"
                      placeholder="DD/MM/YYYY"
                      required
                    />
                     <Form.Control.Feedback type="invalid">
                     {t('appointment.form.dateErrorMsg')}
                      </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} md controlId="formGridTime">
                    <Form.Label className="label"> {t('appointment.form.time')}</Form.Label>
                    <Form.Control
                      className="Control"
                      type="time"
                      name="time"
                      onChange={handleInputChange}
                      value={formData.time}
                      placeholder="00:00 AM"
                      required
                    />
                     <Form.Control.Feedback type="invalid">
                     {t('appointment.form.timeErrorMsg')}
                      </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Select
                      className="Control"
                      name="specialty"
                      value={formData.specialty}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="orthopaedics"> {t('appointment.form.value1')}</option>
                      <option value="opthalmology">{t('appointment.form.value2')}</option>
                      <option value="spine">{t('appointment.form.value3')}</option>
                    </Form.Select>
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridMessage">
                  <Form.Label className="label">Message</Form.Label>
                  <Form.Control
                    className="Control"
                    as="textarea"
                    rows={8}
                    placeholder= {t('appointment.form.messageHolder')}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    style={{ height: "300px" }}
                  />
                </Form.Group>
                <Button className="Control1" variant="dark" type="submit">
                {t('appointment.form.submit')}
                </Button>
              </Form>
            </Col>
            <Col
              style={{
                objectFit: "cover",
                height: "auto",
                overflow: "hidden",
                margin: "0px",
              }}
              sm={12}
              md={6}
            >
              
              <AppointmentImages/>
            </Col>
          </Row>
          <div className="app_card">
            <Row>
              <Col sm={12} md={8} className="app_card_map1">
                <Row>
                  <Col>
                    <h1 className="app_addr_h">{t('appointment.cardContactNumber')}</h1>
                    <p className="app_addr_p">08819 - 229585</p>
                    <p className="app_addr_p">08819 - 229586</p>
                  </Col>
                  <Col>
                    <h1 className="app_addr_h">{t('appointment.cardcontactEmailLabel')}</h1>
                    <p className="app_addr_p">{t('appointment.cardcontactEmail')}</p>
                  </Col>
                </Row>
                <Row>
                  <h1 className="app_addr_h">{t('appointment.cardcontactAddLabel')}</h1>
                  <p className="app_addr_p">
                  {t('appointment.cardcontactAdd1')}
                  </p>
                </Row>
              </Col>
              <Col sm={12} md={4}>
                <div className="app_card_map2">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.398909398748!2d81.67487247515075!3d16.756817684026867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37b7ef9d5faf79%3A0xfbb872df9b28c5a!2sSri%20Chaitanya%20Orthopaedic%20%26%20Eye%20Hospital%20(Formerly%20Dr.%20Krishna%20Reddy%20Hospital)!5e0!3m2!1sen!2sin!4v1698836357529!5m2!1sen!2sin"
                    width="400"
                    height="300"
                    style={{
                      borderRadius: "24px",
                      border: "1px solid var(--neutral-1000, #A1A4AC)",
                    }}
                    title="Google Map of Sri Chaitanya hospitals"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <div className="hallimage-container">
        <Image src={hall}  className="centered-img" />
        <div className="centered-text">
          <h2 className="hall_text">{t('appointment.commitmentHead')}</h2>
          <p className="hall_text_p">
          {t('appointment.commitmentText')}
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Appointment;