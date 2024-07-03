import React from "react";
import styled from "styled-components";

const JobDetailsContent = () => {
  return (
      <StyledJobDetails>
        <main className="job-details-container">
          <section className="job-overview">
            <nav className="breadcrumb">
              Trang chủ / Tuyển dụng /{" "}
              <span className="current-page">
              Vận hành hệ thống - DEVOPS (VHHT)
            </span>
            </nav>
            <h1 className="job-title">Vận hành hệ thống – DEVOPS (VHHT)</h1>
            <h2 className="section-title">Tổng quan công việc</h2>
            <p className="job-requirements">
              Tốt nghiệp Đại học các chuyên ngành liên quan đến CNTT. <br />
              Cấu hình, vận hành được các hệ thống middleware như Nginx, Tomcat, Apache, IIS. <br />
              Có kinh nghiệm sử dụng các database: MySQL, Oracle, MSSQL Server. <br />
              Có kinh nghiệm triển khai các hệ thống giám sát. <br />
              Có kinh nghiệm vận hành VMWare và Linux. <br />
              Có kiến thức basic về các hệ quản trị cơ sở dữ liệu. <br />
              Có kinh nghiệm vận hành Kubernetes, Docker, hiểu biết về CI/CD là lợi thế.
            </p>
            <h2 className="section-title">Mô tả công việc</h2>
          </section>
          <aside className="job-summary">
            <h2 className="section-title">Tổng quan công việc</h2>
            <ul className="job-details-list">
              <li>
                <span className="icon">$</span>
                Thu nhập: Thỏa thuận
              </li>
              <li>
                <span className="icon"></span>
                Số lượng: 01
              </li>
              <li>
                <span className="icon"></span>
                Hạn nộp hồ sơ: 30/11/2022
              </li>
              <li>
                <span className="icon"></span>
                Chức vụ: Nhân viên
              </li>
              <li>
                <span className="icon"></span>
                Địa điểm làm việc: Hà Nội
              </li>
            </ul>
          </aside>
        </main>
        <section className="job-description">
          <div className="description-content">
            <p className="description-item">
              Tham gia các dự án CNTT: Xây dựng môi trường, triển khai hệ thống phần mềm, đào tạo bàn giao vận hành hệ thống.
            </p>
            <ul className="description-list">
              <li>Quản lý, vận hành và giám sát các hệ thống phần mềm.</li>
              <li>Chẩn đoán và xử lý các sự cố hệ thống phát sinh.</li>
              <li>Phối hợp với đối tác và các bộ phận khác trong việc xử lý sự cố hệ thống.</li>
              <li>Xây dựng các hệ thống môi trường vận hành và kiểm thử.</li>
              <li>Xây dựng, quản lý và cải tiến quy trình vận hành hệ thống.</li>
              <li>Tham gia các dự án IOT.</li>
              <li>Xây dựng môi trường phát triển cho lập trình viên. Thiết lập CI/CD.</li>
            </ul>
            <h2 className="section-title">Quyền lợi được hưởng</h2>
            <p className="benefits">Lương (thoả thuận) từ ++ Up to $1.000/tháng.</p>
            <p className="benefits">
              Lương tháng 13. Thưởng các ngày lễ, tết, năm và các chế độ phúc lợi khác theo Luật lao động và chính sách của Công ty.
            </p>
            <ul className="benefits-list">
              <li>Được tham gia đầy đủ BHXH, BHYT theo quy định nhà nước.</li>
              <li>Được trang bị thiết bị làm việc tại Văn phòng (máy tính hoặc laptop).</li>
              <li>Thời gian làm việc T2 – T6, nghỉ T7 & CN. 12 ngày phép/năm.</li>
              <li>Hỗ trợ ăn trưa, gửi xe miễn phí tại VP; Được khám sức khỏe hàng năm.</li>
            </ul>
          </div>
          <aside className="contact-info">
            <h2 className="section-title">Thông tin liên hệ</h2>
            <div className="company-details">
              <h3 className="company-name">Công ty Cổ phần giải pháp Công nghệ Ami Việt Nam</h3>
              <ul className="contact-list">
                <li>
                  <span className="icon">$</span>
                  Ms. Hà – Phòng Hành chính nhân sự
                </li>
                <li>Hotline tuyển dụng: 0383346880</li>
                <li>Email: haly@amitech.vn</li>
              </ul>
            </div>
          </aside>
        </section>
        <p className="additional-benefits">
          Tham gia Teambuilding, Du lịch hàng năm cũng như các phong trào văn hóa – thể thao hàng tháng tại công ty.
        </p>
        <section className="application-process">
          <h2 className="section-title">Cách thức ứng tuyển</h2>
          <ul className="application-steps">
            <li>
              Ứng viên quan tâm vui lòng gửi CV về địa chỉ email{" "}
              <a href="mailto:haly@amitech.vn" className="email-link">haly@amitech.vn</a>
            </li>
            <li>
              Tiêu đề email: <strong>[Vị trí công việc]_[Họ và tên]</strong>
            </li>
          </ul>
          <p className="example">
            Ví dụ: <strong>[Lập trình viên]_ [Nguyen Van A]; [LTV]_ [Nguyen Van A]</strong>
          </p>
        </section>
        <section className="job-listings">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/e714a724359b8e9d7d50369b56284d7cd93885562918a699f871e089e4eac591?apiKey=2f548b4572fc4b419a5782ae61ad8ee5&" alt="Job listings banner" className="banner-image" />
          <div className="listings-container">
            <h2 className="section-title">Tuyển dụng</h2>
            <JobList jobs={jobsData} />
          </div>
        </section>
      </StyledJobDetails>
  );
};

const JobList = ({ jobs }) => (
    <ul className="job-list">
      {jobs.map((job, index) => (
          <JobListItem key={index} {...job} />
      ))}
    </ul>
);

const JobListItem = ({ image, category, title, quantity, salary, status, deadline }) => (
    <li className="job-item">
      <img src={image} alt={title} className="job-image" />
      <div className="job-info">
        <span className="job-category">{category}</span>
        <h3 className="job-title">{title}</h3>
        <div className="job-details">
          <span className="job-quantity">Số lượng: {quantity}</span>
          <span className="job-salary">
          <span className="icon">$</span>
          Mức lương: {salary}
        </span>
        </div>
      </div>
      {status && <span className={`job-status ${status.toLowerCase()}`}>{status}</span>}
      <div className="job-deadline">
        <span className="icon"></span>
        {deadline}
      </div>
    </li>
);

const jobsData = [
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/2d9ace6264a0bd308379b755f464f4942c07c6b96f7bd514e417b91ca6913e70?apiKey=2f548b4572fc4b419a5782ae61ad8ee5&",
    category: "Công nghệ thông tin",
    title: "Vận hành hệ thống – DEVOPS (VHHT)",
    quantity: "01",
    salary: "Thỏa thuận",
    status: "New",
    deadline: "30/11/2023"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/406b4339fa999da8dc2da0aa4e9a745d7d288af13b22738bfc88f5f082ed496e?apiKey=2f548b4572fc4b419a5782ae61ad8ee5&",
    category: "Thiết kế đồ họa",
    title: "Nhân viên thiết kế",
    quantity: "01",
    salary: "Thỏa thuận",
    deadline: "30/10/2023"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/52fee5589fce64ee103c1297d5503ceadcf8a405c40cc6a07509c4418736e486?apiKey=2f548b4572fc4b419a5782ae61ad8ee5&",
    category: "Công nghệ thông tin",
    title: "Senior/Leader Magento Developer",
    quantity: "01",
    salary: "Thỏa thuận",
    deadline: "30/11/2023"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ceb01feb6f1381e0fbc9840af0cf63e6a4985f18b78d5b932355386d0e48c0aa?apiKey=2f548b4572fc4b419a5782ae61ad8ee5&",
    category: "Nhân sự",
    title: "Thực tập sinh tuyển dụng",
    quantity: "01",
    salary: "Thỏa thuận",
    deadline: "30/11/2023"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/2fb328dc6c7aaba2e33ab40d8fe6d4948fa8cc73754845369308dff0b2ad99d6?apiKey=2f548b4572fc4b419a5782ae61ad8ee5&",
    category: "Bán hàng/Kinh doanh",
    title: "Nhân viên kinh doanh",
    quantity: "01",
    salary: "10tr - 15tr",
    deadline: "30/11/2023"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/f87a1ce187535151f1de343d69ce09367eb9de5226fd6df41f220a5a2edf3096?apiKey=2f548b4572fc4b419a5782ae61ad8ee5&",
    category: "Công nghệ thông tin",
    title: "Vận hành hệ thống – DEVOPS (VHHT)",
    quantity: "01",
    salary: "Thỏa thuận",
    status: "Hot",
    deadline: "30/11/2023"
  }
];

const StyledJobDetails = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Roboto, sans-serif;

  .job-details-container {
    align-self: center;
    display: flex;
    width: 100%;
    max-width: 1440px;
    padding: 0 20px;
    gap: 20px;
    justify-content: space-between;

    @media (max-width: 991px) {
      max-width: 100%;
      flex-wrap: wrap;
    }
  }

  .job-overview {
    display: flex;
    flex-direction: column;
    font-size: 16px;
    color: #4d4d4d;
    font-weight: 700;

    @media (max-width: 991px) {
      max-width: 100%;
    }
  }

  .breadcrumb {
    color: rgba(77, 77, 77, 0.7);
    font-weight: 400;
    line-height: 24px;

    @media (max-width: 991px) {
      max-width: 100%;
    }
  }

  .current-page {
    color: #4d4d4d;
  }

  .job-title {
    margin-top: 42px;
    font: 32px/134% Roboto, sans-serif;

    @media (max-width: 991px) {
      max-width: 100%;
      margin-top: 40px;
    }
  }

  .section-title {
    font-family: Roboto, sans-serif;
    line-height: 150%;
    margin-top: 24px;

    @media (max-width: 991px) {
      max-width: 100%;
    }
  }

  .job-requirements {
    font-weight: 400;
    line-height: 30px;
    margin-top: 19px;

    @media (max-width: 991px) {
      max-width: 100%;
    }
  }

  .job-summary {
    border-radius: 5px;
    background-color: #f4f9ff;
    align-self: start;
    display: flex;
    margin-top: 52px;
    padding-bottom: 26px;
    flex-direction: column;

    @media (max-width: 991px) {
      max-width: 100%;
      margin-top: 40px;
    }
  }

  .job-summary .section-title {
    border-radius: 5px 5px 0 0;
    background-color: #006ce7;
    color: #fff;
    padding: 18px 16px;
    font: 700 24px/100% Roboto Condensed, sans-serif;

    @media (max-width: 991px) {
      max-width: 100%;
      padding-right: 20px;
    }
  }

  .job-details-list {
    list-style-type: none;
    padding: 0;
    margin: 26px 0 0 16px;
    font-size: 18px;

    @media (max-width: 991px) {
      margin-left: 10px;
    }
  }

  .job-details-list li {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  .icon {
    color: #006ce7;
    font-weight: 900;
    margin-right: 10px;
  }

  .job-description {
    display: flex;
    gap: 20px;
    margin-top: 16px;

    @media (max-width: 991px) {
      flex-direction: column;
    }
  }

  .description-content {
    flex: 1;
    font-size: 16px;
    color: #4d4d4d;
    font-weight: 400;
    line-height: 150%;

    @media (max-width: 991px) {
      max-width: 100%;
    }
  }

  .description-list {
    padding-left: 20px;
    line-height: 30px;
  }

  .benefits, .benefits-list {
    margin-top: 15px;
  }

  .contact-info {
    flex: 0 0 35%;
    border-radius: 5px;
    background-color: #f4f9ff;
    padding-bottom: 24px;

    @media (max-width: 991px) {
      max-width: 100%;
      margin-top: 40px;
    }
  }

  .contact-info .section-title {
    border-radius: 5px 5px 0 0;
    background-color: #006ce7;
    color: #fff;
    padding: 19px 16px;
    font: 700 24px/100% Roboto Condensed, sans-serif;

    @media (max-width: 991px) {
      max-width: 100%;
      padding-right: 20px;
    }
  }

  .company-details {
    padding: 29px 16px 0;

    @media (max-width: 991px) {
      max-width: 100%;
      padding-right: 20px;
    }
  }

  .company-name {
    color: #4d4d4d;
    font: 700 18px/150% Roboto Condensed, sans-serif;
  }

  .contact-list {
    list-style-type: none;
    padding: 0;
    margin-top: 26px;
    font: 400 18px/49px Roboto Condensed, sans-serif;
    color: #4d4d4d;
  }

  .additional-benefits {
    color: #4d4d4d;
    margin-top: 12px;
    font: 400 16px/150% Roboto, sans-serif;

    @media (max-width: 991px) {
      max-width: 100%;
    }
  }

  .application-process {
    margin-top: 32px;

    @media (max-width: 991px) {
      max-width: 100%;
    }
  }

  .application-steps {
    color: #4d4d4d;
    font: 400 16px/30px Roboto, sans-serif;
    padding-left: 20px;
  }

  .email-link {
    color: #006ce7;
    text-decoration: none;
  }

  .example {
    color: #4d4d4d;
    font: 400 16px/30px Roboto, sans-serif;
    margin-top: 11px;

    @media (max-width: 991px) {
      max-width: 100%;
    }
  }

  .job-listings {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;
    min-height: 766px;
    margin-top: 79px;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 76px 60px;

    @media (max-width: 991px) {
      max-width: 100%;
      margin-top: 40px;
      padding: 0 20px;
    }
  }

  .banner-image {
    position: absolute;
    inset: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  .listings-container {
    position: relative;
    display: flex;
    margin-bottom: 35px;
    width: 100%;
    max-width: 1440px;
    flex-direction: column;

    @media (max-width: 991px) {
      max-width: 100%;
    }
  }

  .listings-container .section-title {
    color: #4d4d4d;
    text-align: center;
    text-transform: uppercase;
    align-self: center;
    font: 900 30px Roboto, sans-serif;
  }

  .job-list {
    list-style-type: none;
    padding: 0;
    margin-top: 33px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;

    @media (max-width: 991px) {
      grid-template-columns: 1fr;
    }
  }

  .job-item {
    border-radius: 5px;
    background-color: #fff;
    padding: 16px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  .job-image {
    width: 148px;
    height: 112px;
    object-fit: cover;
    margin-right: 20px;
  }

  .job-info {
    flex: 1;
  }

  .job-category {
    font: 400 12px Roboto, sans-serif;
    color: rgba(77, 77, 77, 0.7);
  }

  .job-title {
    color: #4d4d4d;
    margin-top: 16px;
    font: 700 20px/140% Roboto, sans-serif;
  }

  .job-details {
    display: flex;
    justify-content: space-between;
    margin-top: 13px;
    font-size: 16px;
  }

  .job-quantity, .job-salary {
    display: flex;
    align-items: center;
    color: rgba(77, 77, 77, 0.7);
    font-weight: 400;
  }

  .job-status {
    font-family: Roboto, sans-serif;
    border-radius: 2px;
    font-weight: 700;
    padding: 5px 9px;
    margin-left: auto;
  }

  .job-status.new {
    background-color: #00c2ff;
    color: #fff;
  }

  .job-status.hot {
    background-color: #f00;
    color: #fff;
  }

  .job-deadline {
    display: flex;
    align-items: center;
    color: rgba(77, 77, 77, 0.7);
    font-weight: 400;
    margin-top: 10px;
  }
`;

export default JobDetailsContent;