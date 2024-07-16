import * as React from "react";
import styled from "styled-components";
import Banner from "../../common/BannerWrapper";
import bannerImg from "../../../assets/banner/news.png";
import NewsCard from "./NewsCard";
import NewsGalleryItem from "./NewsGalleryItem";
import {fetchNews} from "../../../services/newsService";
import {useEffect, useState} from "react";
import Pagination from "../../common/Pagination";

const NewsAndEventsSection = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [latestNews, setLatestNews] = useState([]);
  const [activeCategory, setActiveCategory] = React.useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const newsPerPage = 8; // Số lượng tin tức trên mỗi trang

  const newsCategories = [
    {id: 1, name: "Tất cả"},
    {id: 2, name: "Tin hoạt động của AMITECH"},
    {id: 3, name: "Tin tổng hợp"},
  ];

  useEffect(() => {
    const loadNews = async () => {
      const fetchedNews = await fetchNews();
      setNewsItems(fetchedNews);
      // Giả sử tin tức được tìm nạp được sắp xếp theo ngày, giảm dần
      setLatestNews(fetchedNews.slice(0, 7)); // Điều chỉnh số lượng nếu cần
    };

    loadNews().then(r => console.log('News data fetched'));
  }, []);

  // Xử lý khi click vào danh mục
  const handleCategoryClick = async (categoryId) => {
    setActiveCategory(categoryId); // Update the active category state

    // Lọc tin tức theo danh mục
    const filteredNews = await fetchNews(categoryId === 1 ? ''
        : newsCategories.find(category => category.id === categoryId).name);
    setNewsItems(filteredNews); // Update the state with the fetched news items
  };

  // Tính toán tổng số trang
  const totalPages = Math.ceil(newsItems.length / newsPerPage);

  // Lấy ra tin tức cho trang hiện tại
  const currentNews = newsItems.slice(
      (currentPage - 1) * newsPerPage,
      currentPage * newsPerPage
  );

  // Xử lý khi thay đổi trang
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
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
                    <a href={`/tin-tuc-va-su-kien/${news.id}`}>
                      <LatestNewsItem>{news.title}</LatestNewsItem>
                    </a>
                    <NewsCategory>{news.category}</NewsCategory>
                    {index < latestNews.length - 1 && <Divider/>}
                  </React.Fragment>
              ))}
            </LatestNewsSidebar>
          </NewsGrid>
        </MainContent>
        <NewsGallery>
          {currentNews.map((item, index) => (
              <NewsGalleryItem
                  key={index}
                  category={item.category}
                  title={item.title}
                  time={item.createdAt}
                  image={item.imgUrl}
                  id={item.id}
              />
          ))}
        </NewsGallery>
        <Pagination currentPage={currentPage} totalPages={totalPages}
                    onPageChange={handlePageChange}/>
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

export default NewsAndEventsSection;