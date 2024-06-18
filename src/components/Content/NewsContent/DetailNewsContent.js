import * as React from "react";

function MyComponent() {
  const articles = [
    {
      date: "Thứ Ba, 15/08/2023",
      text: "Chúc mừng ngày Quốc tế phụ nữ",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/c50f5a5b254d1bb2dc42e374102f67a3c4e510a85dbdcd112b5e3b1cc60279a6?apiKey=2f548b4572fc4b419a5782ae61ad8ee5&",
    },
    {
      date: "Thứ Ba, 15/08/2023",
      text: "Du lịch Công ty năm 2022 tại Ninh Bình",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/44b130e5a61063b8e86bb698aebf8c17df5f5bf193b285021bf900c9243451c1?apiKey=2f548b4572fc4b419a5782ae61ad8ee5&",
    },
    {
      date: "Thứ Ba, 15/08/2023",
      text:
          "Tại sao cần xây dựng hệ thống phần mềm bảo trì, bảo dưỡng trong doanh nghiệp hiện nay?",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/f5c0f1c580c9444627bc4fc54a639abe31cf74037b5c683adca0dfdbc7075ad0?apiKey=2f548b4572fc4b419a5782ae61ad8ee5&",
    },
    {
      date: "Thứ Ba, 15/08/2023",
      text: "Team Building 2022 – MAKE THE BIGGER BOX, TOGETHER!",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/f6b11b7a72adfb2c834bacbbc3217be21b026a5917e2f194c8af77c17dd822f7?apiKey=2f548b4572fc4b419a5782ae61ad8ee5&",
    },
  ];

  const renderArticle = (article, index) => (
      <article key={index} className="related-article">
        <img loading="lazy" src={article.image} alt={article.text} className="related-article-image" />
        <time className="related-article-date">{article.date}</time>
        <h3 className="related-article-title">{article.text}</h3>
      </article>
  );

  return (
      <>
        <section className="hero-section">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e99d0c18d8f3b0eeefc34dd0d65326c52273baefc3f3844c39dca23d35136c6e?apiKey=2f548b4572fc4b419a5782ae61ad8ee5&" alt="Hero Image" className="hero-image" />
          <div className="hero-content">
            <div className="breadcrumb">
              <a href="#" className="breadcrumb-item">Trang chủ</a> /
              <a href="#" className="breadcrumb-item">Tin tức</a> /
              <span className="breadcrumb-current">Ứng dụng phần mềm iNERGY AMS20 trong quản lý năng lượng</span>
            </div>
            <div className="hero-text">
              <h2 className="hero-title">Ứng dụng phần mềm iNERGY AMS20 trong quản lý năng lượng</h2>
              <time className="hero-date">Thứ Ba, 15/08/2023</time>
            </div>
          </div>
        </section>
        <main className="main-content">
          <article className="main-article">
            <p>Trong khuôn khổ các hoạt động của triển lãm quốc tế công nghệ năng lượng - môi trường Hà Nội năm 2022, nhiều giải pháp công nghệ đã được giới thiệu đến các doanh nghiệp, trong đó có giải pháp về hệ thống phần mềm quản lý năng lượng iNERGY AMS20 của Công ty cổ phần Giải pháp Công nghệ AMI Việt Nam.</p>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/247067d04f2444d78da1f8670e817659f37bfe6957d9b45b84f6bb64b1141b42?apiKey=2f548b4572fc4b419a5782ae61ad8ee5&" alt="" className="main-article-image" />
            <h3 className="subsection-title">AMITECH tham gia hội chợ ENTECH 2023</h3>
            <p>Năng lượng đóng một vai trò quan trọng trong đời sống, việc quản lý năng lượng sẽ mang lại nhiều lợi ích cho người dùng cũng như các doanh nghiệp. Việc quản lý năng lượng là điều cần thiết, giúp chủ động giám sát, kiểm soát năng lượng một cách có tổ chức, có hệ thống, đảm bảo những yêu cầu về kinh tế và môi trường.</p>
            <p>Hiện nay, nhiều công ty trên khắp các lĩnh vực đã và đang áp dụng quản lý năng lượng để cắt giảm chi phí vận hành. Những yêu cầu và thông lệ cụ thể khác nhau theo từng lĩnh vực, tuy nhiên những nguyên tắc cốt lõi vẫn giữ nguyên bao gồm 4 bước: thu thập – phân tích – tối ưu – giám sát. Trong đó, hệ thống phần mềm quản lý năng lượng iNERGY AMS20 cũng vận hành theo nguyên tắc này.</p>
            <p>Cụ thể, iNERGY AMS20 là một phần mềm hướng hến mục tiêu tiết kiệm năng lượng, giảm thiểu phát thảo cũng như bảo vệ môi trường, hướng đến sản xuất xanh. Các lợi ích mà phần mềm quản lý này mang lại bao gồm: tính toán tiềm năng tiết kiệm năng lượng; tự động phân tích và báo cáo; tiết kiệm chi phí sử dụng năng lượng; phù hợp tiêu chuẩn ISO 50001; bảo mật dữ liệu; tích hợp đa nền tảng…</p>
            <p>Xét về tính năng, iNergy AMS20 có khả năng kết nối tới nhiều nền tảng dữ liệu khác nhau bao gồm iNERGY Monitor, các hệ SCADA, BMS hay các Cơ sở dữ liệu khác nhau có trong tổ chức. Ngoài ra người dùng có thể nhập dữ liệu về năng lượng bằng tay hoặc nhập file excel. Không cần thêm công cụ, phần mềm bổ xung nào phải cài đặt thêm trên thiết bị người dùng (điện thoại, máy tính, laptop, máy tính bảng,..) đều có thể dễ dàng truy cập và giám sát mọi lúc mọi nơi.</p>
            <p>Từ những dữ liệu được thu thập, iNERGY AMS20 tự động thực hiện các phân tích xem xét năng lượng theo tiêu chuẩn ISO 50001 bao gồm:</p>
            <ul>
              <li>Phân tích năng lượng tiêu thụ trọng điểm</li>
              <li>Phân tích khu vực sử dụng năng lượng trọng điểm</li>
              <li>Tính toán tiềm năng, giải pháp tiết kiệm năng lượng</li>
              <li>Lập kế hoạch thực hiện giải pháp tiết kiệm năng lượng,...</li>
            </ul>
            <p>Ưu điểm của iNERGY AMS20 là tự động tính toán tiềm năng tiết kiệm năng lượng, từ đó thiết lập được mục tiêu, chỉ tiêu. Tự động tìm kiếm các biện pháp tiết kiệm năng lượng và cơ hội cải tiến phù hợp nhất với tổ chức, từ các đề xuất trong quá trình xem xét năng lượng, do đó tạo thành các mục tiêu cải tiến.</p>
            <p>Bên cạnh đó, thiết lập và tự động hóa việc giám sát các chỉ số hiệu quả sử dụng năng lượng. Tự động cảnh báo về bất kỳ sai lệch hoặc không phù hợp nào giúp đơn vị đưa ra các hành động khắc phục và phòng ngừa. Dựa trên dữ liệu năng lượng và các biến tác động iNERGY AMS20 tự động phân tích tính toán đường cơ sở năng lượng một cách chính xác…</p>
            <p>Ngoài ra, hệ thống còn có các tính năng truy vấn và trích xuất báo cáo mọi lúc, mọi nơi và dự báo năng lượng tiêu thụ trong tương lai; cung cấp dữ liệu và các báo cáo về tiêu thụ năng lượng; tính toán phân tích hiệu quả đầu tư giải pháp tiết kiệm năng lượng, giúp đơn vị quản lý tạo lập hồ sơ thực hiện các giải pháp kỹ thuật tiết kiệm năng lượng…</p>
            <p>Việc ứng dụng các hệ thống quản lý năng lượng nói riêng và các giải pháp công nghệ tiên tiến trong ngành công nghiệp năng lượng nói chung sẽ góp phần nâng cao chất lượng cũng như giúp tiết kiệm một phần năng lượng, phù hợp với mục tiêu phát triển bền vững của thế giới.</p>
          </article>
          <p className="source">Nguồn: https://khcncongthuong.vn/</p>
        </main>
        <section className="related-articles-section">
          <div className="related-articles-wrapper">{articles.map(renderArticle)}</div>
        </section>

        <style jsx>{`
        .header {
          background-color: #00258b;
          padding: 16px 60px;
          display: flex;
          justify-content: center;
        }
        @media (max-width: 991px) {
          .header {
            padding: 0 20px;
          }
        }
        .header-content {
          display: flex;
          align-items: center;
          width: 100%;
          max-width: 1447px;
          justify-content: space-between;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .header-content {
            flex-wrap: wrap;
          }
        }
        .logo {
          width: 190px;
          aspect-ratio: 4.35;
        }
        .search-form {
          display: flex;
          align-items: center;
          border: 1px solid #fff;
          border-radius: 5px;
          overflow: hidden;
        }
        .search-input {
          padding: 8px;
          border: none;
          color: rgba(255, 255, 255, 0.5);
          font-family: Roboto, sans-serif;
        }
        .search-button {
          background-color: #00c2ff;
          color: #fff;
          border: 1px solid #fff;
          padding: 0 9px;
          font-weight: bold;
          cursor: pointer;
        }
        .menu {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #fff;
        }
        .flag-icon {
          width: 18px;
          border-radius: 50%;
        }
        .flag-text {
          font-size: 14px;
        }
        .dropdown-icon {
          font-weight: bold;
        }
        .main-navigation {
          background-color: #002a9e;
          padding: 24px 60px;
          font-size: 16px;
          text-transform: uppercase;
          display: flex;
          justify-content: center;
        }
        @media (max-width: 991px) {
          .main-navigation {
            padding: 0 20px;
          }
        }
        .nav-content {
          display: flex;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .nav-content {
            flex-wrap: wrap;
          }
        }
        .nav-item {
          color: #fff;
          font-weight: bold;
          text-decoration: none;
        }
        .highlight {
          color: #00c2ff;
        }
        .hero-section {
          position: relative;
          height: 230px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .hero-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        .hero-content {
          background-color: rgba(0, 0, 0, 0.6);
          padding: 18px 60px 80px;
          display: flex;
          flex-direction: column;
          align-items: start;
        }
        @media (max-width: 991px) {
          .hero-content {
            padding: 0 20px;
          }
        }
        .breadcrumb {
          display: flex;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 8px;
        }
        .breadcrumb-item {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          margin-right: 5px;
        }
        .breadcrumb-current {
          color: rgba(255, 255, 255, 1);
        }
        .hero-text {
          color: #fff;
          text-align: center;
        }
        .hero-title {
          font-size: 24px;
          text-transform: uppercase;
        }
        .hero-date {
          margin-top: 19px;
          font-size: 16px;
        }
        .main-content {
          padding: 0 60px;
          margin-top: 52px;
          color: #4d4d4d;
          text-align: justify;
          font-family: Roboto, sans-serif;
        }
        @media (max-width: 991px) {
          .main-content {
            padding: 0 20px;
          }
        }
        .main-article {
          max-width: 960px;
          margin: 0 auto;
        }
        .main-article-image {
          width: 100%;
          margin-top: 28px;
          aspect-ratio: 1.79;
        }
        .subsection-title {
          margin-top: 19px;
          font-size: 16px;
          text-align: center;
        }
        .source {
          margin-top: 19px;
          color: rgba(77, 77, 77, 1);
        }
        .related-articles-section {
          background-color: #f5f5f5;
          padding: 40px 60px;
          margin-top: 76px;
        }
        @media (max-width: 991px) {
          .related-articles-section {
            padding: 0 20px;
          }
        }
        .related-articles-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .related-article {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 24px;
          max-width: 960px;
          width: 100%;
          text-align: center;
          color: #4d4d4d;
          font-family: Roboto, sans-serif;
        }
        .related-article-image {
          width: 100%;
          aspect-ratio: 1.79;
        }
        .related-article-date {
          margin-top: 18px;
          font-size: 12px;
          color: rgba(77, 77, 77, 0.7);
        }
        .related-article-title {
          margin-top: 15px;
          font-size: 20px;
          font-weight: bold;
        }
        .site-footer {
          background-color: #001a6c;
          padding: 72px 60px;
          color: #fff;
          display: flex;
          flex-direction: column;
        }
        @media (max-width: 991px) {
          .site-footer {
            /*
            .align-items: stretch;
            */
          gap: 0;
        }
        .footer-container {
          display: flex;
          max-width: 1379px;
          margin: 0 auto;
        }
        @media (max-width: 991px) {
          .footer-container {
            flex-direction: column;
            align-items: stretch;
          }
        }
        .footer-column {
          flex: 1;
          margin: 0 20px;
        }
        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding: 20px;
          background-color: #002258;
          border-radius: 5px;
        }
        .contact-item {
          display: flex;
          align-items: start;
          gap: 20px;
        }
        .contact-image {
          width: 50px;
          height: 50px;
        }
        .contact-title {
          font-size: 18px;
          font-weight: bold;
        }
        .contact-info {
          font-size: 16px;
        }
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin: 20px 0;
        }
        .footer-link {
          color: #fff;
          font-size: 16px;
          text-decoration: none;
        }
        .footer-bottom {
          margin-top: 20px;
          text-align: center;
          padding: 18px 60px;
          background-color: #09084d;
        }
        .visually-hidden {
          position: absolute;
          width: 1px;
          height: 1px;
          margin: -1px;
          padding: 0;
          overflow: hidden;
          border: 0;
          clip: rect(0, 0, 0, 0);
          clip-path: inset(50%);
          white-space: nowrap;
        }
        }
      `}</style>
      </>
  );
}

export default MyComponent;