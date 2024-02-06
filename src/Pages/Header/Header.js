import React, { useState } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { TfiClose } from "react-icons/tfi";
import logo from "../../Assets/Images/Logo.png";
import { useTranslation } from "react-i18next";
import { Dropdown } from "react-bootstrap";

const Header = () => {
  const { t, i18n } = useTranslation(); 
  const changeLanguage = async (lng) => {
    await i18n.changeLanguage(lng);

    // Dynamically import translations for the selected language
    const translationModule = await import(`../../../public/locales/${lng}/translation.json`);
    i18n.addResourceBundle(lng, 'translation', translationModule.default, true, true);
  };
  const [Mobile, setMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isLngOpen, setIsLngOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = (event) => {
    event.stopPropagation();
    setIsOpen(!isOpen);
  };

  const toggleDropdowns = (event) => {
    event.stopPropagation();
    setIsLngOpen(!isLngOpen);
  };

  const closeMobileMenu = () => {
    setMobile(false);
  };

  const specialtiesDropdown = (
    <ul className="specialties-dropdown" onClick={closeMobileMenu}>
      <Link to="/orthopaedics" className="specialty-link">
        <li className="dropdown-li">{t('header.specialitiesddorth')}</li>
      </Link>
      <Link to="/opthalmology" className="specialty-link">
        <li className="dropdown-li">{t('header.specialitiesddoptha')}</li>
      </Link>
      <Link to="/spine" className="specialty-link">
        <li className="dropdown-li">{t('header.specialitiesddspine')}</li>
      </Link>
     
    </ul>
  );

  const languageDropdown =(
    <ul className="specialties-dropdown" onClick={closeMobileMenu}>
    <Link onClick={() => changeLanguage('en')} className="specialty-link">
      <li className="dropdown-li">{t('header.languageddeng')}</li>
    </Link>
    <Link onClick={() => changeLanguage('te')} className="specialty-link">
      <li className="dropdown-li">{t('header.languageddtel')}</li>
    </Link>
  </ul>
  );

  return (
    <>
    
      <div className="navbars" >
        <img
          alt="sri chaitanya hospitals"
          src={logo}
          onClick={() => navigate("/")}
          className="logo"
        />
        <div style={{ display: "flex", alignItems: "center" }}>
          {Mobile && (
            <ul
              className={Mobile ? "nav-links-mobile" : "nav-links"}
              onClick={closeMobileMenu}
            >
              <Link to="/about" className="about">
                <li className="normal-li">{t('header.about')}</li>
              </Link>
              <Link to="/insurance" className="insurance">
                <li className="normal-li">{t('header.insurance')}</li>
              </Link>

              <div className="specialties-dropdown-container">
                <Link onClick={toggleDropdown} className="specialities">
                  <li className="speciality normal-li">
                  {t('header.specialities')}
                    <MdOutlineArrowDropDown />
                  </li>
                </Link>
                {isOpen && specialtiesDropdown}
              </div>
              <div className="language-dropdown-container">
                <Link onClick={toggleDropdowns} className="specialities">
                  <li className="speciality normal-li">
                  {t('header.translate')}
                    <MdOutlineArrowDropDown />
                  </li>
                </Link>
                {isLngOpen && languageDropdown}
              </div>
             
             
              <Link to="/book_an_appointment" className="home">
                <li className="normal-li">{t('header.appointment')}</li>
              </Link>
            </ul>

          )}
          <div style={{ display: "flex", marginTop: "0vh" }}>
            <button
              className="mobile-menu-icon"
              onClick={() => setMobile(!Mobile)}
            >
              {Mobile ? (
                <TfiClose size={30} className="close-icon" />
              ) : (
                <RxHamburgerMenu size={30} className="ham-icon" />
              )}
            </button>
            <button
              variant="dark"
              className="btn-app"
              onClick={() => {
                navigate('/book_an_appointment');
              }}
            >
             {t('header.appointment')}
            </button>
          </div>
        <Dropdown drop="down-centered">
        <Dropdown.Toggle className="btn-app" id="dropdown-autoclose-true" >
        {t('language')}
        </Dropdown.Toggle>

        <Dropdown.Menu style={{outlineStyle:"none"}} className="specialties-dropdown">
          <Dropdown.Item  onClick={() => changeLanguage('en')}> {t('header.languageddeng')}</Dropdown.Item>
          <Dropdown.Item onClick={() => changeLanguage('te')}> {t('header.languageddtel')}</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
        </div>
      </div>
     
    </>
  );
};
export default Header;