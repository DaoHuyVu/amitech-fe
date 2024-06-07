import PropTypes from "prop-types";
import React from "react";
import "./Footer.css";


export const Footer = ({ logoAmi = "logo-ami-2.png", href ,chooseIcon = "choose.png", locationS="location.png",
                           phoneIcon="dienthoai.png", hotlineIcon="hotline.png",emailIcon="email.png"}) => {
    return (
        <div className="component">
            <div className="overlap">
                <p className="text-wrapper-c">Copy right by Amitech 2023</p>
            </div>
            <img className="logo-ami" alt="Logo ami" src={logoAmi}/>
            <p className="gi-i-thi-u-gi-i-ph-p">
                <a href="https://example.com/introduction" target="_blank"
                   style={{color: 'inherit', textDecoration: 'none'}}>
                    <img className="icon" src={chooseIcon} alt="Icon"/> Giới thiệu
                </a>
                <br/>
                <a href="https://example.com/solution" target="_blank"
                   style={{color: 'inherit', textDecoration: 'none'}}>
                    <img className="icon" src={chooseIcon} alt="Icon"/> Giải pháp chuyển đổi số
                </a>
                <br/>
                <a href="https://example.com/product" target="_blank"
                   style={{color: 'inherit', textDecoration: 'none'}}>
                    <img className="icon" src={chooseIcon} alt="Icon"/> Thiết bị và sản phẩm công nghiệp
                </a>
                <br/>
                <a href="https://example.com/quote" target="_blank" style={{color: 'inherit', textDecoration: 'none'}}>
                    <img className="icon" src={chooseIcon} alt="Icon"/> Báo giá
                </a>
            </p>
            <p className="tuy-n-d-ng-h-nh-nh">
                <a href="/" target="_blank" style={{color: 'inherit', textDecoration: 'none'}}>
                    <img className="icon" src={chooseIcon} alt="Icon"/> Tuyển dụng
                </a>
                <br/>
                <a href="" target="_blank" style={{color: 'inherit', textDecoration: 'none'}}>
                    <img className="icon" src={chooseIcon} alt="Icon"/> Hình ảnh hoạt động
                </a>
                <br/>
                <a href="" target="_blank" style={{color: 'inherit', textDecoration: 'none'}}>
                    <img className="icon" src={chooseIcon} alt="Icon"/> Cam kết
                </a>
                <br/>
                <a href="" target="_blank" style={{color: 'inherit', textDecoration: 'none'}}>
                    <img className="icon" src={chooseIcon} alt="Icon"/> Chính sách bảo mật
                </a>
            </p>
            <div className="label">
                <img className="location-icon" src={locationS} alt="Location Icon"/>
                <div className="text-wrapper">Trụ sở chính</div>
            </div>
            <div className="contact-info">
                <div className="phone">
                    <img className="phone-icon" src={phoneIcon} alt="Phone Icon"/>
                    <div className="phone-text">Điện thoại</div>
                    <div className="phone-number">024 22 33 55 66</div>
                </div>

                <div className="hotline">
                    <img className="hotline-icon" src={hotlineIcon} alt="Hotline Icon"/>
                    <div className="hotline-text">Hotline</div>
                    <div className="hotline-number">0986 893 233</div>
                </div>

                <div className="email">
                    <img className="email-icon" src={emailIcon} alt="Email Icon"/>
                    <div className="email-text">Email</div>
                    <div className="email-address">contact@amitech.vn</div>
                </div>

            </div>
            <p className="p">Tầng 4, Tòa nhà Sông Đà 9, Số 2 Nguyễn Hoàng, Mỹ Đình, Nam Từ Liêm, Hà Nội</p>

        </div>
    );
};

Footer.propTypes = {
    logoAmi: PropTypes.string,
    chooseIcon: PropTypes.string,
    locationS: PropTypes.string,
    href: PropTypes.string,
};
