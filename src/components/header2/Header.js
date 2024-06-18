import React, { useState, useEffect } from "react";
import './Header.css';
import { Link } from "react-router-dom";

function MyComponent() {
  const navItems = [
    {name: 'Trang chủ'},
    {name: 'Giới thiệu', hasDropdown: true},
    {name: 'Dự án tiêu biểu'},
    {name: 'Giải pháp chuyển đổi số', hasDropdown: true},
    {name: 'Thiết bị & sản phẩm công nghiệp', hasDropdown: true},
    {name: 'Tin tức và sự kiện'},
    {name: 'Báo giá'},
    {name: 'Liên hệ'},
  ];

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const topBarHeight = document.querySelector('.top-bar').offsetHeight;
      if (window.scrollY > topBarHeight) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
      <>
        <header>
          <div className="flex flex-col w-full">
            <div className="top-bar">
              <img src="logo-ami-2.png" alt="Company Logo" className="logo"/>
              <form className="search-form">
                <input type="text" placeholder="Nhập nội dung tìm kiếm..." aria-label="Nhập nội dung tìm kiếm..." className="search-input"/>
                <button type="submit" className="search-button"></button>
              </form>
              <div className="location">
                <img src="ellipse41.png" alt="User Country" className="country-flag"/>
                <span className="country-name">Việt Nam</span>
                <img className="dropdown-icon" src="downbox1.png" onClick={() => setDropdownOpen(!isDropdownOpen)}></img>
                {isDropdownOpen && (
                    <div className="dropdown-content">
                      <img src="ellipse41.png" alt="English Flag"/>
                      <a href="#en">English</a>
                    </div>
                )}
              </div>
              <nav className="secondary-nav">
                <span className="divider"/>
                <a href="#recruitment" className="nav-link">Tuyển dụng</a>
              </nav>
            </div>
            <nav className={`main-nav ${isFixed ? 'fixed-main-nav' : ''}`}>
              {navItems.map((item, index) => (
                  <a href={`#${item.name.toLowerCase().replace(/\s/g, '-')}`} className="main-nav-link" key={index}>
                    {item.name}
                    {item.hasDropdown && (
                        <img className="dropdown-icon" src="downbox1.png"></img>
                    )}
                  </a>
              ))}
            </nav>
          </div>
        </header>
      </>
  );
}

export default MyComponent;
