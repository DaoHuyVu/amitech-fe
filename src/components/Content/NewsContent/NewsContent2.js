import * as React from "react";
import styled from "styled-components";
import Banner from "../../common/BannerWrapper";
import bannerImg from "../../../assets/banner/news.png";
import NewsCard from "./NewsCard";
import NewsGalleryItem from "./NewsGalleryItem";
import Image from "./image 223.png"

const NewsAndEventsSection = () => {

  const latestNews = [
    "Tại sao cần xây dựng hệ thống phần mềm bảo trì, bảo dưỡng trong doanh nghiệp hiện nay?",
    "Chuyển đổi số cho doanh nghiệp: Tất cả những điều cần biết về chuyển đổi số",
    "Quản lý năng lượng là gì? Tìm hiểu chung về quản lý năng lượng",
    "Chúc mừng ngày Quốc tế phụ nữ",
    "Review về các phần mềm quản lý công việc, giao việc phổ biến",
    "Du lịch Công ty năm 2022 tại Ninh Bình",
  ];

  const newsCategories = [
    { id: 1, name: "Tất cả" },
    { id: 2, name: "Tin hoạt động của AMITECH" },
    { id: 3, name: "Tin tổng hợp" },
  ];

  const newsGalleryItems = [
    { image: Image, category: 'Tin hoạt động của AMITECH', title: 'Chúc mừng ngày Quốc tế phụ nữ', time: ' 13/09/2023 13:54' },
    { image: Image, category: 'Tin hoạt động của AMITECH', title: 'Chúc mừng ngày Quốc tế phụ nữ', time: ' 13/09/2023 13:54' },
    { image: Image, category: 'Tin hoạt động của AMITECH', title: 'Chúc mừng ngày Quốc tế phụ nữ', time: ' 13/09/2023 13:54' },
    { image: Image, category: 'Tin hoạt động của AMITECH', title: 'Chúc mừng ngày Quốc tế phụ nữ', time: ' 13/09/2023 13:54' },
  ];

  const [activeCategory, setActiveCategory] = React.useState(1);
  const [currentPage, setCurrentPage] = React.useState(1);

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const handleReadMore = (newsId) => {
    console.log(`Read more clicked for news ID: ${newsId}`);
  };

  return (
      <StyledNewsAndEvents>
        <Banner
            imgSrc={bannerImg}
            title="Tin tức và sự kiện"
            description="Cập nhật thông tin mới nhất về hoạt động của AMITECH"
        />
        <CategoryNav>
          {newsCategories.map((category) => (
              <CategoryButton
                  key={category.id}
                  active={category.id === activeCategory}
                  onClick={() => handleCategoryClick(category.id)}
              >
                {category.name}
              </CategoryButton>
          ))}
        </CategoryNav>
        <MainContent>
          <NewsGrid>
            <NewsCard/>
            <LatestNewsSidebar>
              <SidebarTitle>tin mới nhất</SidebarTitle>
              {latestNews.map((news, index) => (
                  <React.Fragment key={index}>
                    <LatestNewsItem>{news}</LatestNewsItem>
                    <NewsCategory>Tin tổng hợp</NewsCategory>
                    {index < latestNews.length - 1 && <Divider />}
                  </React.Fragment>
              ))}
            </LatestNewsSidebar>
          </NewsGrid>
        </MainContent>
        <NewsGallery>
          {newsGalleryItems.map((item, index) => (
              <NewsGalleryItem
                  key={index}
                  image={item.image}
                  category={item.category}
                  title={item.title}
                  time={item.time}
              />
          ))}
        </NewsGallery>
        <Pagination>
          <PaginationButton active={currentPage === 1} onClick={() => handlePageClick(1)}>
            1
          </PaginationButton>
          <PaginationButton active={currentPage === 2} onClick={() => handlePageClick(2)}>
            2
          </PaginationButton>
          <PaginationButton active={currentPage === 3} onClick={() => handlePageClick(3)}>
            3
          </PaginationButton>
          <PaginationButton active={currentPage === 4} onClick={() => handlePageClick(4)}>
            4
          </PaginationButton>
          <PaginationButton active={currentPage === 5} onClick={() => handlePageClick(5)}>
            5
          </PaginationButton>
          <PaginationEllipsis>...</PaginationEllipsis>
          <PaginationButton active={currentPage === 10} onClick={() => handlePageClick(10)}>
            10
          </PaginationButton>
          <PaginationNext onClick={() => handlePageClick(currentPage + 1)}>&gt;</PaginationNext>
        </Pagination>
      </StyledNewsAndEvents>
  );
};

const StyledNewsAndEvents = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CategoryNav = styled.nav`
  display: flex;
  gap: 16px;
  margin-top: 72px;
  padding: 0 20px;
  @media (max-width: 991px) {
    flex-wrap: wrap;
    margin-top: 40px;
  }
`;

const CategoryButton = styled.button`
  color: ${(props) => (props.active ? "#fff" : "#006ce7")};
  background-color: ${(props) => (props.active ? "#006ce7" : "transparent")};
  border: 1px solid #006ce7;
  border-radius: 5px;
  padding: 14px 16px;
  cursor: pointer;
`;

const MainContent = styled.main`
  margin-top: 48px;
  width: 100%;
  max-width: 1416px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const NewsGrid = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

const NewsImage = styled.img`
  width: 100%;
  aspect-ratio: 1.79;
  object-fit: cover;
`;

const NewsCategory = styled.span`
  color: rgba(77, 77, 77, 0.7);
  text-transform: uppercase;
  font: 400 12px Roboto, sans-serif;
  margin-top: 15px;
`;

const NewsTitle = styled.h2`
  color: #4d4d4d;
  font: 700 24px/133% Roboto, sans-serif;
  margin-top: 15px;
`;


const LatestNewsSidebar = styled.aside`
  padding: 0 20px;
  @media (max-width: 991px) {
    width: 100%;
    margin-top: 40px;
  }
`;

const SidebarTitle = styled.h3`
  text-transform: uppercase;
  font: 900 30px BeVietNam, sans-serif;
  color: #4d4d4d;
`;

const LatestNewsItem = styled.h4`
  color: #4d4d4d;
  font: 550 1em/1.2em BeVietNam, sans-serif;
  text-align: justify;
  margin-top: 28px;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid rgba(77, 77, 77, 0.3);
  margin: 16px 0;
`;

const NewsGallery = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr); // Tạo ra 4 cột
  gap: 20px;
  margin-top: 72px;
  width: 100%;
  max-width: 1440px;
  padding: 0 20px;
  @media (max-width: 991px) {
    grid-template-columns: 1fr; // Trên màn hình nhỏ hơn, chỉ hiển thị 1 cột
    max-width: 100%;
    margin-top: 40px;
  }
`;

// const NewsGalleryItem = styled.article`
//   width: 25%;
//   @media (max-width: 991px) {
//     width: 100%;
//     margin-top: 24px;
//   }
// `;

const Pagination = styled.nav`
  display: flex;
  gap: 8px;
  margin-top: 33px;
  font-size: 20px;
  color: #4d4d4d;
  font-weight: 700;
`;

const PaginationButton = styled.button`
  font-family: Roboto, sans-serif;
  border-radius: 5px;
  border: 1px solid #d9d9d9;
  background-color: ${(props) => (props.active ? "#006ce7" : "transparent")};
  color: ${(props) => (props.active ? "#fff" : "#4d4d4d")};
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const PaginationEllipsis = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
`;

const PaginationNext = styled(PaginationButton)`
  width: auto;
  padding: 0 15px;
`;



export default NewsAndEventsSection;