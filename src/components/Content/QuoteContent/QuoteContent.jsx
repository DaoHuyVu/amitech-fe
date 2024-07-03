import * as React from "react";
import "./QuoteContent.css";
import BannerWrapper from "../../common/BannerWrapper";
import imageBanner from "../../../assets/banner/lienhe.png";

function QuoteRequestForm() {
  return (
      <>
        <BannerWrapper
            imgSrc={imageBanner}
            title={"BÁO GIÁ"}
            description={"Lựa chọn giải pháp phù hợp với nhu cầu của bạn và nhận báo giá miễn phí"}
        />
        <section className="quote-section">
          <div className="form-background">
            <img loading="lazy" src="background.png"
                 alt="Background for Form Section" className="form-bg-img"/>
            <div className="form-container">
              <div className="form-image-column">
                <img loading="lazy" src="gircontactl3.png"
                     alt="Form Related Image" className="form-image"/>
              </div>
              <div className="form-fields-column">
                <form className="quote-form">
                  <div className="form-inputs-container">
                    <div className="form-group">
                      <input type="text" id="name" name="name"
                             className="form-input" placeholder="Họ tên *"
                             required/>
                    </div>
                    <div className="form-group">
                      <input type="tel" id="phone" name="name"
                             className="form-input"
                             placeholder="Số điện thoại *"
                             required/>
                    </div>
                    <div className="form-group">
                      <input type="email" id="email" name="name"
                             className="form-input" placeholder="Email *"
                             required/>
                    </div>
                    <div className="form-group">
                      <input type="text" id="company" className="form-input"
                             name="name" placeholder="Công ty"/>
                    </div>
                    <div className="form-group">
                      <input type="text" id="interest" className="form-input"
                             required name="name"
                             placeholder="Lĩnh vực quan tâm *"/>
                    </div>
                    <div className="form-group">
                      <textarea id="message" className="form-input" rows="4"
                                name="name" placeholder="Nội dung *"></textarea>
                    </div>
                    <button type="submit" className="form-submit">
                      Gửi yêu cầu
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </>
  );
}

export default QuoteRequestForm;