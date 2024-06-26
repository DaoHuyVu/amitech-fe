import * as React from "react";
import styled from "styled-components";
import {useEffect, useState} from "react";

const Header = () => {

  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const checkScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return (
      <HeaderWrapper>
        <TopBar>
          <TopBarContent>
            <Logo src="logo-ami-2.png" alt="Company Logo"/>
            <SearchAndNav>
              <SearchBar>
                <SearchInput placeholder="Nhập nội dung tìm kiếm..."/>
                <SearchButton aria-label="Search">
                  <i className="fas fa-search" aria-hidden="true"></i>
                </SearchButton>
              </SearchBar>
              <LanguageSelector>
                <FlagIcon src="ellipse41.png" alt="Vietnam Flag"/>
                <LanguageText>Việt Nam</LanguageText>
              </LanguageSelector>
              <Divider/>
              <RecruitmentLink href="/recruitment">Tuyển dụng</RecruitmentLink>
            </SearchAndNav>
          </TopBarContent>
        </TopBar>
        <NavBar>
          <NavMenu>
            {navItems.map((item, index) => (
                <NavItem key={index} isActive={item.isActive}>
                  {item.text}
                  {item.hasDropdown && (
                      <img className="dropdown-icon" src="downbox1.png"
                           style={{marginLeft: '8px'}}></img>
                  )}
                </NavItem>
            ))}
          </NavMenu>
        </NavBar>
      </HeaderWrapper>
  );

};

const navItems = [
  {text: "trang chủ", isActive: false},
  {text: "Giới thiệu", isActive: false, hasDropdown: true},
  {text: "Dự án tiêu biểu", isActive: false},
  {text: "Giải pháp chuyển đổi số", isActive: false, hasDropdown: true},
  {text: "Thiết bị & sản phẩm công nghiệp", isActive: false, hasDropdown: true},
  {text: "tin tức và sự kiện", isActive: false},
  {text: "báo giá", isActive: false},
  {text: "liên hệ", isActive: false},
];

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
`;

const TopBar = styled.div`
  background-color: #00258b;
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 16px 60px;
  @media (max-width: 991px) {
    padding: 16px 20px;
  }
`;

const TopBarContent = styled.div`
  display: flex;
  width: 100%;
  max-width: 1447px;
  gap: 20px;
  justify-content: space-between;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const Logo = styled.img`
  aspect-ratio: 4.35;
  object-fit: contain;
  width: 190px;
  max-width: 100%;
`;

const SearchAndNav = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: space-between;
  margin: auto 0;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const SearchBar = styled.form`
  display: flex;
  position: relative; // Thêm dòng này
  border-radius: 5px;
  border: 1px solid #fff;
  overflow: hidden;
`;

const SearchInput = styled.input`
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.5);
  font-family: Roboto, sans-serif;
  font-size: 14px;
  padding: 8px;
  flex-grow: 1;
  padding-right: 32px;
  width: 20em;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  @media (max-width: 991px) {
    width: 100%;
  }
`;

const SearchButton = styled.button`
  background-color: #00c2ff;
  border: none;
  color: #fff;
  width: 32px;
  height: 39px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 0;
  border-radius: 0 5px 5px 0;
  background-image: url("/search.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 15px 15px;
`;

const LanguageSelector = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  color: #fff;
`;

const FlagIcon = styled.img`
  width: 18px;
  border-radius: 50%;
`;

const LanguageText = styled.span`
  font: 400 14px Roboto, sans-serif;
`;

const Divider = styled.div`
  width: 1px;
  height: 18px;
  background-color: #fff;
`;

const RecruitmentLink = styled.a`
  color: #fff;
  font: 400 14px Roboto, sans-serif;
  text-decoration: none;
`;

const NavBar = styled.nav`
  background-color: #002a9e;
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 24px 60px;
  @media (max-width: 991px) {
    padding: 24px 20px;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 100%;
  max-width: 1447px;
  @media (max-width: 991px) {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    flex-direction: column;
  }
`;

const NavItem = styled.li`
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  color: ${props => props.isActive ? '#00c2ff' : '#fff'};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .fas {
    margin-left: 5px;
  }
`;

export default Header;