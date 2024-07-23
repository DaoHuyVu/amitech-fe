import * as React from "react";
import styled from "styled-components";

const ContactInfo = ({icon, title, content}) => (
    <ContactInfoWrapper>
      <ContactIcon src={icon} alt={title}/>
      <ContactDetails>
        <ContactTitleWrapper>
          <ContactTitle>{title}</ContactTitle>
        </ContactTitleWrapper>
        <ContactContent>{content}</ContactContent>
      </ContactDetails>
    </ContactInfoWrapper>
);

const FooterLink = ({text, link}) => (
    <FooterLinkItem href={link}>
      <img src="/choose.png" alt="" style={{marginRight: '10px'}} />
      {text}
    </FooterLinkItem>
);

function Footer() {
  const contactInfo = [
    {
      icon: "/location.png",
      title: "Trụ sở chính",
      content: "Tầng 4, Tòa nhà Sông Đà 9, Số 2 Nguyễn Hoàng, Mỹ Đình, Nam Từ Liêm, Hà Nội"
    },
    {icon: "/dienthoai.png", title: "Điện thoại", content: "024 22 33 55 66"},
    {icon: "/hotline.png", title: "Hotline", content: "0 986 893 233"},
    {icon: "/email.png", title: "Email", content: "contact@amitech.vn"}
  ];

  const footerLinks = [
    {text:"Giới thiệu", link:"/gioi-thieu"},
    {text: "Giải pháp chuyển đổi số", link: "/giai-phap-chuyen-doi-so"},
    {text: "Thiết bị và sản phẩm công nghiệp", link: "/thiet-bi-san-pham-cong-nghiep"},
    {text: "Báo giá", link: "/bao-gia"},
    {text:"Tuyển dụng", link:"/tuyen-dung"},
    {text:"Cam kết", link: "/cam-ket"},
    {text:"Chính sách bảo mật", link: "/chinh-sach-bao-mat"},
  ];

  return (
      <FooterWrapper>
        <FooterContent>
          <FooterMain>
            <CompanyInfoSection>
              <LogoWrapper>
                <Logo
                    src="/logo-ami-2.png"
                    alt="Company Logo"/>
                <ContactInfo key={0} {...contactInfo[0]} />
              </LogoWrapper>
              <div>
                {contactInfo.slice(1).map((info, index) => (
                    <ContactInfo key={index} {...info} />
                ))}
              </div>
            </CompanyInfoSection>
            <LinksSection>
              <LinkColumn>
                {footerLinks.slice(0, 4).map((link, index) => (
                    <FooterLink key={index} text={link.text} link={link.link}/>
                ))}
              </LinkColumn>
              <LinkColumn>
                {footerLinks.slice(4).map((link, index) => (
                    <FooterLink key={index} text={link.text} link={link.link}/>
                ))}
              </LinkColumn>
            </LinksSection>
          </FooterMain>
        </FooterContent>
        <Copyright>Copy right by Amitech 2023</Copyright>
      </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  background-color: #001a6c;
  display: flex;
  width: 100%;
  padding-top: 72px;
  flex-direction: column;
  @media (max-width: 991px) {
    max-width: 100%;
    width: 100%;
  }
`;

const FooterContent = styled.div`
  align-self: center;
  width: 100%;
  max-width: 1379px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const FooterMain = styled.div`
  display: flex;
  gap: 20px;
  margin-top: -2rem;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }
`;

const CompanyInfoSection = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 10px;
  margin-right: 30px;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const LogoWrapper = styled.div`
  margin-bottom: 30px;
`;

const Logo = styled.img`
  aspect-ratio: 4.35;
  object-fit: contain;
  width: 226px;
  max-width: 100%;
`;

const ContactInfoWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
  margin-top: 25px;
  @media (max-width: 991px) {
    margin-bottom: 10px;
  }
`;
const ContactTitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const ContactIcon = styled.img`
  margin-top:5px;
  justify-content: center;
  margin-right: 10px;
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactTitle = styled.h3`
  font-family: 'BeVietNam', sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: #fff;
  margin: 0 0 5px;
`;

const ContactContent = styled.p`
  font-family: BeVietNam, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #fff;
  margin: 0;
`;

const LinksSection = styled.section`
  display: flex;
  width: 40%;
  margin-top: 20px;
  gap: 40px;
  @media (max-width: 991px) {
    width: 100%;
    margin-top: 40px;
  }
`;

const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const FooterLinkItem = styled.a`
  color: #fff;
  font: 400 16px/42px BeVietNam, sans-serif;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Copyright = styled.div`
  background-color: #09084d;
  margin-top: 2rem;
  width: 100%;
  color: #fff;
  padding: 18px 60px;
  font: 400 16px/150% BeVietNam, sans-serif;
  text-align: center;
  @media (max-width: 991px) {
    margin-top: 40px;
    padding: 18px 20px;
  }
`;

export default Footer;