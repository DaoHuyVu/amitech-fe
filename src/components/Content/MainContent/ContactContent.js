import * as React from "react";
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
  const contactInfo = [
    {
      title: "Trụ sở chính",
      details: "Tầng 4, Tòa nhà Sông Đà 9, Số 2 Nguyễn Hoàng, Mỹ Đình, Nam Từ Liêm, Hà Nội",
      imgSrc: "location.png",
    },
    {
      title: "Điện thoại",
      details: "024 22 33 55 66",
      imgSrc: "hotline.png",
    },
    {
      title: "Hotline",
      details: "0986 893 233",
      imgSrc: "hotline.png",
    },
    {
      title: "Email",
      details: "contact@amitech.vn",
      imgSrc: "email.png",
    },
  ];

  return (
      <>
        <div className="container max-w-full p-0">
          <section className="hero">
            <img loading="lazy" src="maskgroup.png"
                 className="hero-image w-screen"
                 alt=""/>
            <div className="hero-content">
              <h1 className="hero-title">Liên Hệ</h1>
              <p className="hero-subtitle">Hãy để đội ngũ tư vấn của AMITECH hỗ
                trợ bạn dù ở bất kỳ nơi đâu</p>
            </div>
          </section>

          <section className="contact-section">
            <article className="company-info">
              <h2 className="company-name">Công ty cổ phần Giải pháp Công nghệ
                Ami Việt Nam</h2>
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
              ></iframe>
            </div>
          </section>

          <section className="contact-form-section">
            <h2 className="form-title">Liên hệ với chúng tôi</h2>
            <p className="form-subtitle">Hãy gửi yêu cầu, chúng tôi sẽ phản hồi
              nhanh nhất có thể</p>
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

              <label htmlFor="detailsInput" className="visually-hidden"></label>
              <textarea className="textarea-field" id="detailsInput"
                        placeholder="Chi tiết yêu cầu"
                        aria-label="Chi tiết yêu cầu"/>

              <button className="submit-button" type="submit">Gửi yêu cầu
              </button>
            </form>
          </section>
        </div>

      </>
  );
}

export default Content;