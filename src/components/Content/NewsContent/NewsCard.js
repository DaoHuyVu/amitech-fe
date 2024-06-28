import * as React from "react";
import styled from "styled-components";

const NewsCard = ({category, title, description, link, image}) => (
    <NewsCardWrapper>
      <NewsImage src={image} alt={title} loading="lazy"/>
      <NewsContent>
        <NewsCategory>{category}</NewsCategory>
        <NewsTitle>{title}</NewsTitle>
        <ReadMoreLink href={link}>
          Xem chi tiết
          <span className="arrow"></span>
        </ReadMoreLink>
      </NewsContent>
    </NewsCardWrapper>
);
const NewsMainCard = ({category, title, description, link, image}) => (
    <NewsCardWrapper>
      <NewsImage src={image} alt={title} loading="lazy"/>
      <NewsContent>
        <NewsCategory>{category}</NewsCategory>
        <NewsTitle>{title}</NewsTitle>
        {description && <NewsDescription>{description}</NewsDescription>}
        <ReadMoreLink2 href={link}>
          Xem chi tiết
          <span className="arrow"></span>
        </ReadMoreLink2>
        <Pagination/>
      </NewsContent>
    </NewsCardWrapper>
);

const Pagination = () => (
    <PaginationWrapper>
      <PaginationDot active/>
      <PaginationDot/>
      <PaginationDot/>
    </PaginationWrapper>
);

function NewsSection() {
  const mainNews = {
    category: "Tin hoạt động của AMITECH",
    title: "Ứng dụng phần mềm iNERGY AMS20 trong quản lý năng lượng",
    description: "Trong khuôn khổ các hoạt động của triển lãm quốc tế công nghệ năng lượng - môi trường Hà Nội năm 2022, nhiều giải pháp công nghệ đã được giới thiệu đến các doanh nghiệp, trong đó có giải pháp về hệ thống phần mềm quản lý năng lượng...",
    link: "#",
    image: ""
  };

  const sideNews = [
    {
      category: "Tin hoạt động của AMITECH",
      title: "AMITECH trở thành đối tác chính thức của MITSUBISHI ELECTRIC VIETNAM",
      link: "#",
      image: ""
    },
    {
      category: "Tin hoạt động của AMITECH",
      title: "Quản lý năng lượng iNERGY",
      link: "#",
      image: ""
    }
  ];

  return (
      <NewsContainer>
        <MainNewsColumn>
          <NewsMainCard {...mainNews}/>
        </MainNewsColumn>
        <SideNewsColumn>
          {sideNews.map((news, index) => (
              <NewsCard key={index} {...news} />
          ))}
        </SideNewsColumn>
      </NewsContainer>
  );
}

const NewsContainer = styled.section`
  display: flex;
  gap: 20px;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }
`;

const MainNewsColumn = styled.article`
  flex: 2;
  display: flex;
  flex-direction: column;
  @media (max-width: 991px) {
    width: 100%;
    margin-top: 24px;
  }
`;

const SideNewsColumn = styled.aside`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 991px) {
    width: 100%;
    margin-top: 24px;
  }
`;

const NewsCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin-bottom: 24px;
`;

const NewsImage = styled.img`
  aspect-ratio: 1.79;
  object-fit: cover;
  width: 100%;
`;

const NewsContent = styled.div`
  position: relative;
  flex-grow: 1;
  flex-shrink: 0;
  min-height: 0;
  border-radius: 0 0 5px 5px;
  background-color: #f1f7ff;
  padding: 15px 22px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 991px) {
    padding: 15px 20px 24px;
  }
`;

const NewsCategory = styled.p`
  color: rgba(77, 77, 77, 0.7);
  text-transform: uppercase;
  font-weight: bold;
  margin: 0 0 8px;
`;

const NewsTitle = styled.h3`
  font-size: 1.2em;
  margin: 0 0 12px;
  color: #333;
`;

const NewsDescription = styled.p`
  font-size: 1em;
  color: #555;
  margin: 0 0 16px;
`;

const ReadMoreLink = styled.a`
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  margin-top: auto; /* Push link to the bottom */

  .arrow {
    margin-left: 5px;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #007bff;
  }

  &:hover {
    text-decoration: underline;
  }
`;
const ReadMoreLink2 = styled.a`
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
  display: inline-flex;
  align-items: center;

  .arrow {
    margin-left: 5px;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #007bff;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: flex-start; /* Align to the left */
  padding-top: 16px;
  margin-top: auto; /* Push pagination to the bottom */
`;

const PaginationDot = styled.span`
  width: 10px;
  height: 10px;
  margin: 0 5px;
  background-color: ${({ active }) => (active ? "#007bff" : "#ccc")};
  border-radius: 50%;
  display: inline-block;
`;

export default NewsSection;