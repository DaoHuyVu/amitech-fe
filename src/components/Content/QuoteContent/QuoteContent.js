import React, {useState, useEffect} from 'react';
import "./ContactContent.css"

function ContactDetails({title, details, imgSrc}) {
  return (
      <div className={`flex items-center space-x-2`}>
        <img src={imgSrc} alt={title}/>
        <div>
          <div className="contact-title">{title}</div>
          <div className="contact-info">{details}</div>
        </div>
      </div>
  );
}

function Content() {
  return (
      <>
        <div className="container max-w-full p-0">
          <section className="hero">
            <img loading="lazy" src="maskgroup.png"
                 className="hero-image w-screen"
                 alt=""/>
            <div className="hero-content">
              <h1 className="hero-title">BÁO GIÁ</h1>
              <p className="hero-subtitle">Lựa chọn giải pháp phù hợp với nhu cầu của bạn và nhận báo giá miễn phí</p>
            </div>
          </section>

          <section className="contact-form-section">
            <form className="contact-form">
              <label htmlFor="nameInput" className="visually-hidden"></label>
              <input className="input-field" type="text" id="nameInput"
                     placeholder="Họ tên *" aria-label="Họ tên" required/>

              <label htmlFor="phoneInput" className="visually-hidden"></label>
              <input className="input-field" type="tel" id="phoneInput"
                     placeholder="Số điện thoại *" aria-label="Số điện thoại"
                     required/>

              <label htmlFor="emailInput"
                     className="visually-hidden"></label>
              <input className="input-field" type="email" id="emailInput"
                     placeholder="Email *" aria-label="Email" required/>

              <label htmlFor="companyInput" className="visually-hidden"></label>
              <input className="input-field" type="text" id="companyInput"
                     placeholder="Tên công ty" aria-label="Tên công ty"/>

              <label htmlFor="QtInput" className="visually-hidden"></label>
              <input className="input-field" type="text" id="QtInput"
                     placeholder="Lĩnh vực quan tâm *" aria-label="Lĩnh vực quan tâm"
                     required/>

              <label htmlFor="NDInput" className="visually-hidden"></label>
              <textarea className="input-field" id="NDInput"
                        placeholder="Nội dung *" aria-label="Nội dung"
                        required/>

              <button className="submit-button" type="submit">Gửi yêu cầu
              </button>
            </form>
          </section>
        </div>

      </>
  );
}

export default Content;