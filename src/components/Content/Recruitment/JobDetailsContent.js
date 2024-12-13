import React from "react";
import styled from "styled-components";
import {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import {
  FaDollarSign,
  FaUserAlt,
  FaCalendarAlt,
  FaBriefcase,
  FaMapMarkerAlt,
  FaPhoneAlt
} from 'react-icons/fa';
import {MdEmail, MdManageAccounts} from "react-icons/md";
import {baseAPI} from "../../../services/Authorization";

const JobDetailsContent = () => {

  const {id} = useParams(); // Retrieve the job ID from the URL
  const [jobDetails, setJobDetails] = useState(
      {recruitment_details: {data: []}});

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        // Use the retrieved ID to fetch specific job details
        const response = await baseAPI.get(`/recruitments/${id}?populate=*`,);
        setJobDetails(response.data.data.attributes);
      } catch (error) {
        console.error("Failed to fetch job details:", error);
      }
    };

    fetchJobDetails();
  }, [id]);

  const renderTextWithLineBreaks = (text) => {
    return text.split('\n').map((line, index, array) => (
        <React.Fragment key={index}>
          {line}
          {index < array.length - 1 && <br/>}
        </React.Fragment>
    ));
  };

  const findDetail = (index) => {
    // Kiểm tra xem mảng có đủ phần tử không
    if (index < jobDetails.recruitment_details.data.length) {
      const detailText = jobDetails.recruitment_details.data[index]?.attributes.Job_overview
          || '';
      return renderTextWithLineBreaks(detailText);
    }
    return ''; // Trả về chuỗi rỗng nếu không tìm thấy
  };

  return (
      <StyledJobDetails>
        <div className="job-details-container">
          <div className="breadcrumbs">
            <a href="/">Trang chủ</a> /
            <a href="/tuyen-dung">Tuyển dụng</a>/
            {jobDetails.job_position}
          </div>
          <h1 className="namecv">{jobDetails.job_position}</h1>

          <div className="content">
            <div className="left-content">
              <section className="job-overview">
                <h2 className="section-title">Tổng quan công việc</h2>
                <p>{findDetail(0)}</p>
              </section>
              <section className="job-description">
                <h2 className="section-title">Mô tả công việc</h2>
                <p>{findDetail(1)}</p>

              </section>
              <section className="job-benefits">
                <h2 className="section-title">Quyền lợi được hưởng</h2>
                <p>{findDetail(2)}</p>

              </section>
              <section className="application-process">
                <h2 className="section-title">Cách thức ứng tuyển</h2>
                <p>Ứng viên quan tâm vui lòng gửi CV về địa chỉ email <a
                    href="mailto:hai@amivntech.vn">hai@amivntech.vn</a></p>
                <p>Tiêu đề email: [Vị trí ứng tuyển_Họ và tên]</p>
                <p>VD: [Lập trình viên_Nguyen Van A]</p>
              </section>
            </div>
            <div className="right-content">
              <section className="job-summary">
                <h2 className="summary-title">Tổng quan công việc</h2>
                <p><FaDollarSign/> Thu nhập: {jobDetails.salary}</p>
                <p><FaUserAlt/> Số lượng: {jobDetails.quantity}</p>
                <p><FaCalendarAlt/> Hạn nộp hồ sơ: {jobDetails.date}</p>
                <p><FaBriefcase/> Chức vụ: {jobDetails.position || 'Nhân viên'}
                </p>
                <p><FaMapMarkerAlt/> Địa điểm làm việc: {jobDetails.location
                    || 'Hà Nội'}</p>
              </section>
              <section className="contact-info">
                <h2 className="summary-title">Thông tin liên hệ</h2>
                <p><strong>Công ty Cổ phần giải pháp Công nghệ Ami Việt
                  Nam</strong></p>
                <p><MdManageAccounts/> Hà – Phòng Hành chính nhân sự</p>
                <p><FaPhoneAlt/> Hotline tuyển dụng: 0383346880</p>
                <p><MdEmail/> Email: haly@amitech.vn</p>
              </section>
            </div>
          </div>
        </div>
      </StyledJobDetails>
  );
};

const StyledJobDetails = styled.div`
  .job-details-container {
    max-width: 1490px;
    margin: 0 auto;
    padding: 20px;
    color: black;

    @media (width: 767px) {
      display: flex;
      flex-direction: column;
    }
  }


  .job-title {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .content {
    display: flex;
    justify-content: space-between;

    @media (width: 767px) {
      display: none;
    }
  }

  .left-content {
    width: 60%;
  }

  .right-content {
    width: 30%;
  }

  .section-title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .job-overview ul,
  .job-description ul,
  .job-benefits ul {
    list-style-type: disc;
    padding-left: 20px;
  }

  .job-overview ul li,
  .job-description ul li,
  .job-benefits ul li {
    margin-bottom: 10px;
  }

  .application-process p {
    margin-bottom: 10px;
  }

  .job-summary,
  .contact-info {
    background-color: #f0f4f8;
    border: 1px solid #d1d9e6;
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 20px;
  }

  .summary-title,
  .contact-title {
    background-color: #007bff;
    color: white;
    padding: 10px 15px;
    border-radius: 8px 8px 0 0;
    font-size: 18px;
    font-weight: bold;
    margin: -20px -20px 20px -20px;
  }

  .job-summary p,
  .contact-info p {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    font-size: 16px;
  }

  .job-summary p svg,
  .contact-info p svg {
    margin-right: 10px;
    color: #007bff;
  }

  .contact-info p {
    font-size: 16px;
    margin-bottom: 10px;
  }

  strong {
    font-weight: bold;
  }

  a {
    color: #007bff;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  .breadcrumbs {
    display: flex;
    align-items: center;
    gap: 8px; /* Adjust the gap as needed */
  }

  .breadcrumbs a,
  .breadcrumbs .breadcrumb-item { /* Ensure consistent styling */
    color: #000; /* Change to your desired color */
    text-decoration: none; /* Removes underline from links */
    font-size: 16px; /* Ensure consistent font size */
    line-height: 1.5; /* Ensure consistent line height */
  }

  .breadcrumbs a:hover,
  .breadcrumbs .breadcrumb-item:hover {
    text-decoration: underline; /* Optional: underline on hover for better UX */
  }

  .namecv {
    color: #4D4D4D;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 43px; /* 134.375% */;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

export default JobDetailsContent;