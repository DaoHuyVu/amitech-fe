import React, {useState} from "react";
import styled, {createGlobalStyle} from "styled-components";
import Banner from "../../common/BannerWrapper";
import Pagination from "../../common/Pagination";
import imageBanner from "../../../assets/banner/giaiphap.png";

const DigitalSolutionsPage = () => {
  const solutions = [
    {
      title: "Quản lý năng lượng - INERGY",
      description: "Phần mềm thông minh, chuyên nghiệp, hiện đại được tư vấn thiết kế bởi các chuyên gia Quản lý Năng lượng, hỗ trợ công...Phần mềm thông minh, chuyên nghiệp, hiện đại được tư vấn thiết kế bởi các chuyên gia Quản lý Năng lượng, hỗ trợ công...",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/6b8f9504d6fadc925db6bb44e7563cf93ffe7dfbb20a03b1e5fbd4c1a51ddafc?apiKey=2f548b4572fc4b419a5782ae61ad8ee5&"
    },
    {
      title: "Giám sát máy sản xuất - AMWorking",
      description: "Phần mềm thông minh, chuyên nghiệp, hiện đại được tư vấn thiết kế bởi các chuyên gia Quản lý Năng lượng, hỗ trợ công...Phần mềm thông minh, chuyên nghiệp, hiện đại được tư vấn thiết kế bởi các chuyên gia Quản lý Năng lượng, hỗ trợ công...",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/b044c2c33501a28d1b6cf2ed79cb134a762e958d87c2c10b10ba8ce8c3c749b5?apiKey=2f548b4572fc4b419a5782ae61ad8ee5&"
    },
    {
      title: "Giám sát điều khiển thiết bị phụ trợ",
      description: "Phần mềm thông minh, chuyên nghiệp, hiện đại được tư vấn thiết kế bởi các chuyên gia Quản lý Năng lượng, hỗ trợ công...Phần mềm thông minh, chuyên nghiệp, hiện đại được tư vấn thiết kế bởi các chuyên gia Quản lý Năng lượng, hỗ trợ công...",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/2247f7b16b979e73039ace5613e9290d7742f3eb2b82074ea399d8f11cb1cdac?apiKey=2f548b4572fc4b419a5782ae61ad8ee5&"
    },
    {
      title: "Cổng thông tin điện tử - AMI.Portal",
      description: "Phần mềm thông minh, chuyên nghiệp, hiện đại được tư vấn thiết kế bởi các chuyên gia Quản lý Năng lượng, hỗ trợ công...Phần mềm thông minh, chuyên nghiệp, hiện đại được tư vấn thiết kế bởi các chuyên gia Quản lý Năng lượng, hỗ trợ công...",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/5f2633f377bf34166bcbfc712fd68ec7dc94c05fbdb5145573d061e418b34443?apiKey=2f548b4572fc4b419a5782ae61ad8ee5&"
    },
    {
      title: "Quản lý 5S - AMI.5S",
      description: "Phần mềm thông minh, chuyên nghiệp, hiện đại được tư vấn thiết kế bởi các chuyên gia Quản lý Năng lượng, hỗ trợ công...Phần mềm thông minh, chuyên nghiệp, hiện đại được tư vấn thiết kế bởi các chuyên gia Quản lý Năng lượng, hỗ trợ công...",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/3636b6a03e4d2ea90682900787cdce3074f6ca57b182790b345f7ff249be871f?apiKey=2f548b4572fc4b419a5782ae61ad8ee5&"
    },
    {
      title: "Quản lý kho - AMI.S",
      description: "Phần mềm thông minh, chuyên nghiệp, hiện đại được tư vấn thiết kế bởi các chuyên gia Quản lý Năng lượng, hỗ trợ công...Phần mềm thông minh, chuyên nghiệp, hiện đại được tư vấn thiết kế bởi các chuyên gia Quản lý Năng lượng, hỗ trợ công...",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/180d21fb3c86555e9c7291d3a7746eab4dfb23d1e34b935a3420b112994d7b19?apiKey=2f548b4572fc4b419a5782ae61ad8ee5&"
    },
    {
      title: "Quản lý kho - AMI.S 2",
      description: "Phần mềm thông minh, chuyên nghiệp, hiện đại được tư vấn thiết kế bởi các chuyên gia Quản lý Năng lượng, hỗ trợ công...Phần mềm thông minh, chuyên nghiệp, hiện đại được tư vấn thiết kế bởi các chuyên gia Quản lý Năng lượng, hỗ trợ công...",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/180d21fb3c86555e9c7291d3a7746eab4dfb23d1e34b935a3420b112994d7b19?apiKey=2f548b4572fc4b419a5782ae61ad8ee5&"
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const perPage = 6;
  const totalPages = Math.ceil(solutions.length / perPage);

  const currentSolution = solutions.slice((currentPage - 1) * perPage,
      currentPage * perPage);

  return (
      <main className="digital-solutions">
        <Banner
            imgSrc={imageBanner}
            title="GIẢI PHÁP CHUYỂN ĐỔI SỐ"
            description="Cung cấp các giải pháp chuyển đổi số hàng đầu"
        />
        <section className="solutions-grid">
          {currentSolution.map((solution, index) => (
              <SolutionCard key={index} {...solution}
                            isReversed={index % 2 !== 0}/>
          ))}
        </section>
        <Pagination currentPage={currentPage} totalPages={totalPages}
                    onPageChange={handlePageChange}/>
      </main>
  );
};

const SolutionCard = ({title, description, imageSrc, isReversed}) => (
    <article className={`solution-card ${isReversed ? 'reversed' : ''}`}>
      <img src={imageSrc} alt="" className="solution-image"/>
      <div className="solution-content">
        <h2 className="solution-title">{title}</h2>
        <p className="solution-description">{description}</p>
        <a href="#" className="solution-link">
          Xem chi tiết
          <span className="icon-arrow-right">
            <i className="fas fa-arrow-right"/>
          </span>
        </a>
      </div>
    </article>
);

const GlobalStyle = createGlobalStyle`
  body {
    font-family: BeVietNam, sans-serif;
    line-height: 1.5;
    color: #4d4d4d;
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;

const StyledDigitalSolutions = styled.div`
  .digital-solutions {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .hero {
    background-color: rgba(0, 0, 0, 0.6);
    width: 100%;
    color: #fff;
    text-align: center;
    padding: 78px 60px;

    @media (max-width: 991px) {
      padding: 40px 20px;
    }
  }

  .hero-title {
    text-transform: uppercase;
    font: 550 32px/1.41 BeVietNam, sans-serif;
  }

  .hero-subtitle {
    margin-top: 22px;
    font: 400 20px/1.2 BeVietNam, sans-serif;
  }

  .solutions-grid {
    margin-top: 72px;
    width: 100%;
    max-width: 1440px;

    @media (max-width: 991px) {
      margin-top: 40px;
    }
  }

  .solution-card {
    display: flex;
    gap: 20px;
    margin-bottom: 32px;

    @media (max-width: 991px) {
      flex-direction: column;
    }

    &.reversed {
      flex-direction: row-reverse;

      @media (max-width: 991px) {
        flex-direction: column;
      }
    }
  }

  .solution-image {
    width: 50%;
    object-fit: cover;

    @media (max-width: 991px) {
      width: 100%;
    }
  }

  .solution-content {
    width: 50%;
    background-color: #f4f9ff;
    border-radius: 5px;
    padding: 31px 33px 80px;

    @media (max-width: 991px) {
      width: 100%;
      padding: 20px;
    }
  }

  .solution-title {
    color: #4d4d4d;
    text-transform: uppercase;
    font: 550 30px BeVietNam, sans-serif;
  }

  .solution-description {
    color: rgba(77, 77, 77, 0.7);
    margin-top: 18px;
    font-weight: 400;
    line-height: 24px;
  }

  .solution-link {
    color: #00c2ff;
    font-weight: 700;
    text-decoration: none;
    display: inline-block;
    margin-top: 22px;
  }

  .icon-arrow-right::before {
    content: "";
    font-family: "Font Awesome 6 Free", sans-serif;
    font-weight: 900;
    font-size: 12px;
    margin-left: 5px;
  }

  .pagination {
    display: flex;
    gap: 8px;
    margin-top: 72px;
    font-size: 20px;
    font-weight: 700;

    @media (max-width: 991px) {
      margin-top: 40px;
    }
  }

  .pagination-button {
    font-family: Roboto, sans-serif;
    border-radius: 5px;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: 1px solid #d9d9d9;
    background-color: transparent;
    color: #4d4d4d;

    &.active {
      background-color: #006ce7;
      color: #fff;
      border: none;
    }
  }
`;

export default function App() {
  return (
      <>
        <GlobalStyle/>
        <StyledDigitalSolutions>
          <DigitalSolutionsPage/>
        </StyledDigitalSolutions>
      </>
  );
}