import React from 'react';
import "./ContactContent.css"
import BannerWrapper from "../../common/BannerWrapper";
import styled from "styled-components";
import imageBanner from "../../../assets/banner/lienhe.png";
import { useTranslation } from 'react-i18next';

function ContactDetails({title, details, imgSrc}) {
  return (
      <div className={`flex items-center space-x-2`}>
        <div className="flex">
          <Title $imgSrc={imgSrc}>{title}</Title>
        </div>
        <div className="contact-info">{details}</div>
      </div>
  );
}

function Content() {
  const {t} = useTranslation()
  const contactInfo = [
    {
      title: t('page.contact.label.tru-so-chinh'),
      details: t('text.address'),
      imgSrc: "location.png",
    },
    {
      title: t('page.contact.label.dien-thoai'),
      details: "024 22 33 55 66",
      imgSrc: "hotline.png",
    },
    {
      title: t('page.contact.label.hotline'),
      details: "0986 893 233",
      imgSrc: "hotline.png",
    },
    {
      title: t('page.contact.label.email'),
      details: "contact@amitech.vn",
      imgSrc: "email.png",
    },
  ];

  return (
      <>
        <BannerWrapper
            imgSrc={imageBanner}
            title={t('page.contact.title')}
            description={t('page.contact.label.description')}
        />
        <div className="contact-container max-w-full p-0">
          <section className="contact-section">
            <article className="company-info">
              <h2 className="company-name">{t('text.company-name')}</h2>
              {contactInfo.map((info, index) => (
                  <ContactDetails key={index} title={info.title}
                                  details={info.details}
                                  imgSrc={info.imgSrc}/>
              ))}
            </article>
            <div className="contact-image">
              <iframe
                  className="contact-img"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1862.0436873520816!2d105.7766756415367!3d21.029189646173116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454afa4c1ae5b%3A0x581fa138c631ac30!2zU8O0bmcgxJDDoCBKU0MgOQ!5e0!3m2!1svi!2s!4v1717752484932!5m2!1svi!2s"
                  width="600"
                  height="450"
                  allowFullScreen=""
                  loading="lazy"
                  title="Google Map"
              ></iframe>
            </div>
          </section>

          <section className="contact-form-section">
            <h2 className="form-title">{t('common.lien-he-voi-chung-toi')}</h2>
            <p className="form-subtitle">{t('common.hay-gui-yeu-cau')}</p>
            <form className="contact-form">
              <label htmlFor="nameInput" className="visually-hidden"></label>
              <input className="input-field" type="text" id="nameInput"
                     placeholder={t('form.fields.ho-ten')} aria-label="Họ tên" required/>

              <label htmlFor="phoneInput" className="visually-hidden"></label>
              <input className="input-field" type="tel" id="phoneInput"
                     placeholder={t('form.fields.so-dien-thoai')} aria-label="Số điện thoại"
                     required/>

              <label htmlFor="emailInput"
                     className="visually-hidden"></label>
              <input className="input-field" type="email" id="emailInput"
                     placeholder={t('form.fields.email')} aria-label="Email" required/>

              <label htmlFor="detailsInput" className="visually-hidden"></label>
              <textarea className="textarea-field" id="detailsInput"
                        placeholder={t('form.fields.noi-dung')}
                        aria-label="Chi tiết yêu cầu"/>

              <button className="submit-button" type="submit">{t('form.fields.gui-yeu-cau')}
              </button>
            </form>
          </section>
        </div>

      </>
  );
}

const Title = styled.div`
  font-weight: 700;
  margin-top: 20px;
  font-family: "VNFont", sans-serif;
  font-size: 15px;
  background-repeat: no-repeat;
  background-position: left center;
  padding-left: 30px;
  background-image: url(${props => props.$imgSrc});
`;

export default Content;