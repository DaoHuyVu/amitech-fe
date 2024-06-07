import * as React from "react";
import "./ContactContent.css"

function ContactDetails({title, details, icon}) {
  return (
      <div className={`contact-details ${icon}`}>
        <div className="contact-title">{title}</div>
        <div className="contact-info">{details}</div>
      </div>
  );
}

function Content() {
  const contactInfo = [
    {
      title: "Trụ sở chính",
      details: "Tầng 4, Tòa nhà Sông Đà 9, Số 2 Nguyễn Hoàng, Mỹ Đình, Nam Từ Liêm, Hà Nội",
      icon: "../../assets/icons/location.png" // thêm đường dẫn tới icon tương ứng
    },
    {title: "Điện thoại", details: "024 22 33 55 66", icon: "dienthoai.png"},
    {title: "Hotline", details: "0986 893 233", icon: "hotline.png"},
    {title: "Email", details: "contact@amitech.vn", icon: "email.png"},
  ];

  return (
      <>
        <div className="container">
          <section className="hero">
            <img loading="lazy"
                 src="maskgroup.png"
                 className="hero-image" alt=""/>
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
                                  details={info.details}/>
              ))}
            </article>
            <aside className="contact-image">
              <img loading="lazy"
                   src="image46.png"
                   className="contact-img" alt="Ami Vietnam Office"/>
            </aside>
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