import * as React from "react";
import "./NewsContent.css";

const ArticleCard = ({
  imageSrc,
  articleType,
  headline,
  description,
  linkText,
  iconSrc
}) => (
    <article className="article-card">
      <img loading="lazy" src={imageSrc} alt="" className="article-image"/>
      <img loading="lazy" src={iconSrc} alt=""
           className="article-icon"/> {/* Thêm dòng này */}
      <div className="article-content">
        <p className="article-type">{articleType}</p>
        <h3 className="article-headline">{headline}</h3>
        <p className="article-description">{description}</p>
        <div className="article-link">
          <a href="#" className="detail-link">
            {linkText}
          </a>
        </div>
      </div>
    </article>
);

export default function MyComponent() {

  const [selectedButton, setSelectedButton] = React.useState("Tất cả");

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  const articles = [
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/68c0fb937110d129f0309013a5c48ce0a62af9ef92817258fb4d2d762b48cb47?apiKey=2f548b4572fc4b419a5782ae61ad8ee5&",
      articleType: "Tin hoạt động của AMITECH",
      headline: "Ứng dụng phần mềm iNERGY AMS20 trong quản lý năng lượng",
      description:
          "Trong khuôn khổ các hoạt động của triển lãm quốc tế công nghệ năng lượng - môi trường Hà Nội năm 2022, nhiều giải pháp công nghệ đã được giới thiệu đến các doanh nghiệp, trong đó có giải pháp về hệ thống phần mềm quản lý năng lượng...",
      linkText: "Xem chi tiết",
      linkIcon: "",
      detailImageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/789e7105794ca0732c216df2d5a72e84361096c74d7931b41db85575fa92b6a1?apiKey=2f548b4572fc4b419a5782ae61ad8ee5&",
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/dc9c09bf5f9f3c0fa9e4659994d6a7c30d8733ce89b7c94bea8f3575628978a6?apiKey=2f548b4572fc4b419a5782ae61ad8ee5&",
      articleType: "Tin hoạt động của AMITECH",
      headline: "AMITECH trở thành đối tác chính thức của MITSUBISHI ELECTRIC VIETNAM",
      description: "",
      linkText: "Xem chi tiết",
      linkIcon: "",
      detailImageSrc: "",
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/dc9c09bf5f9f3c0fa9e4659994d6a7c30d8733ce89b7c94bea8f3575628978a6?apiKey=2f548b4572fc4b419a5782ae61ad8ee5&",
      articleType: "Tin hoạt động của AMITECH",
      headline: "Quản lý năng lượng iNERGY",
      description: "",
      linkText: "Xem chi tiết",
      linkIcon: "",
      detailImageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/465cccb402acef9657cac8c1a11810406ef011ce82614ad5c8609f92c569dd9b?apiKey=2f548b4572fc4b419a5782ae61ad8ee5&",
    },
  ];

  const latestNews = [
    {
      headline: "Tại sao cần xây dựng hệ thống phần mềm bảo trì, bảo dưỡng trong doanh nghiệp hiện nay?",
      articleType: "Tin tổng hợp"
    },
    {
      headline: "Chuyển đổi số cho doanh nghiệp: Tất cả những điều cần biết về chuyển đổi số",
      articleType: "Tin tổng hợp"
    },
    {
      headline: "Quản lý năng lượng là gì? Tìm hiểu chung về quản lý năng lượng",
      articleType: "Tin tổng hợp"
    },
    {
      headline: "Chúc mừng ngày Quốc tế phụ nữ",
      articleType: "Tin hoạt động của AMITECH"
    },
    {
      headline: "Review về các phần mềm quản lý công việc, giao việc phổ biến",
      articleType: "Tin tổng hợp"
    },
    {
      headline: "Du lịch Công ty năm 2022 tại Ninh Bình",
      articleType: "Tin hoạt động của AMITECH"
    },
  ];

  return (
      <>
        <section className="hero-section">
          <header className="hero-content">
            <div className="hero-overlay">
              <img loading="lazy"
                   src="/newscontent.png"
                   alt="Overlay" className="overlay-image"/>
              <div className="hero-text">
                <h2>Tin tức và sự kiện</h2>
                <p>Cập nhật những thông tin mới nhất</p>
              </div>
            </div>
          </header>
        </section>
        <nav className="navigation">
          <button
              className={`nav-item ${selectedButton === "Tất cả" ? "active"
                  : "outlined"}`}
              onClick={() => handleButtonClick("Tất cả")}
          >
            Tất cả
          </button>
          <button
              className={`nav-item ${selectedButton
              === "Tin hoạt động của AMITECH" ? "active" : "outlined"}`}
              onClick={() => handleButtonClick("Tin hoạt động của AMITECH")}
          >
            Tin hoạt động của AMITECH
          </button>
          <button
              className={`nav-item ${selectedButton === "Tin tổng hợp"
                  ? "active" : "outlined"}`}
              onClick={() => handleButtonClick("Tin tổng hợp")}
          >
            Tin tổng hợp
          </button>
        </nav>
        <main className="main-content">
          <section className="articles">
            <div className="article-main">
              <ArticleCard {...articles[0]} />
            </div>
            <div className="article-list">
              <ArticleCard {...articles[1]} />
              <ArticleCard {...articles[2]} />
            </div>
            <aside className="sidebar">
              <h3 className="sidebar-title">Tin mới nhất</h3>
              <ul className="news-list">
                {latestNews.map((news, index) => (
                    <li key={index} className="news-item">
                      <h4>{news.headline}</h4>
                      <p className="news-type">{news.articleType}</p>
                    </li>
                ))}
              </ul>
            </aside>
          </section>
        </main>
        <section className="gallery">
          <div className="gallery-grid">
            <figure className="gallery-item">
              <img loading="lazy"
                   src="https://cdn.builder.io/api/v1/image/assets/TEMP/45667d227cd493f0a9717f7d41f9e568167b9bef54383ba19a5e9085521a918b?apiKey=2f548b4572fc4b419a5782ae61ad8ee5&"
                   alt="AMITECH Activity" className="gallery-image"/>
              <figcaption className="gallery-caption">Tin hoạt động của
                AMITECH
              </figcaption>
            </figure>
            <figure className="gallery-item">
              <img loading="lazy"
                   src="https://cdn.builder.io/api/v1/image/assets/TEMP/e0227b0ce732c10188f058a0969d3608db0c0831de987defa402116424b914fd?apiKey=2f548b4572fc4b419a5782ae61ad8ee5&"
                   alt="AMITECH Activity" className="gallery-image"/>
              <figcaption className="gallery-caption">Tin hoạt động của
                AMITECH
              </figcaption>

            </figure>
            <figure className="gallery-item">
              <img loading="lazy"
                   src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e9c1c3302ae1d452364a7621b491fccf3327bb2d34235131012a89d7e8b96a2?apiKey=2f548b4572fc4b419a5782ae61ad8ee5&"
                   alt="Compilation" className="gallery-image"/>
              <figcaption className="gallery-caption">Tin tổng hợp</figcaption>
            </figure>
            <figure className="gallery-item">
              <img loading="lazy"
                   src="https://cdn.builder.io/api/v1/image/assets/TEMP/7560aaeb1fc659906d2df7db1e18f24a5b96a1d1c363dff6eb4732172d868554?apiKey=2f548b4572fc4b419a5782ae61ad8ee5&"
                   alt="AMITECH Activity" className="gallery-image"/>
              <figcaption className="gallery-caption">Tin hoạt động của
                AMITECH
              </figcaption>
            </figure>
          </div>
        </section>
        <footer className="footer">
          <nav role="navigation" aria-label="Pagination Navigation"
               className="pagination">
            <a href="#" className="pagination-link active">1</a>
            <a href="#" className="pagination-link">2</a>
            <a href="#" className="pagination-link">3</a>
            <a href="#" className="pagination-link">4</a>
            <a href="#" className="pagination-link">5</a>
            <span className="pagination-ellipsis">...</span>
            <a href="#" className="pagination-link">10</a>
            <a href="#" className="pagination-link">&gt;</a>
          </nav>
        </footer>
      </>
  );
}