import * as React from "react";
import "./QuoteContent.css";
import BannerWrapper from "../../common/BannerWrapper";
import imageBanner from "../../../assets/banner/lienhe.png";
import { useTranslation } from "react-i18next";

function QuoteRequestForm() {
  const {t} = useTranslation()
  return (
      <>
        <BannerWrapper
            imgSrc={imageBanner}
            title={t('page.quote.title')}
            description={t('page.quote.description')}
        />
        <section className="quote-section">
          <div className="form-background">
            <img loading="lazy" src="background.png"
                 alt="Background for Form Section" className="form-bg-img"/>
            <div className="form-container">
              <div className="form-image-column">
                <img loading="lazy" src="gircontactl3.png"
                     alt="Form Related " className="form-image"/>
              </div>
              <div className="form-fields-column">
                <form className="quote-form">
                  <div className="form-inputs-container">
                    <div className="form-group">
                      <input type="text" id="name" name="name"
                             className="form-input" placeholder={t('form.fields.ho-ten')}
                             required/>
                    </div>
                    <div className="form-group">
                      <input type="tel" id="phone" name="name"
                             className="form-input"
                             placeholder={t('form.fields.so-dien-thoai')}
                             required/>
                    </div>
                    <div className="form-group">
                      <input type="email" id="email" name="name"
                             className="form-input" placeholder={t('form.fields.email')}
                             required/>
                    </div>
                    <div className="form-group">
                      <input type="text" id="company" className="form-input"
                             name="name" placeholder={t('form.fields.cong-ty')}/>
                    </div>
                    <div className="form-group">
                      <input type="text" id="interest" className="form-input"
                             required name="name"
                             placeholder={t('form.fields.linh-vuc-quan-tam')}/>
                    </div>
                    <div className="form-group">
                      <textarea id="message" className="form-input" rows="4"
                                name="name" placeholder={t('form.fields.noi-dung')}></textarea>
                    </div>
                    <button type="submit" className="form-submit">
                      {t('form.fields.gui-yeu-cau')}
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