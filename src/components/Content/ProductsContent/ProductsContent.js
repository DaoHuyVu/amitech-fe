import * as React from "react";
import styled from 'styled-components';
import Pagination from "../../common/Pagination";
import { useLocation } from "react-router-dom";

function ProductComponent() {
  const {state} = useLocation()
  const [selectedButton, setSelectedButton] = React.useState(state !== null ? state.category : "Tất cả");
  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  const [currentPage, setCurrentPage] = React.useState(1);
  const productsPerPage = 4; // Số lượng sản phẩm trên mỗi trang

  const allProducts = [
    {
      id: 1,
      name: "Product 1",
      description: "Description for product 1",
      price: 100,
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/88ca7c29822f2a2cd33ff5b0d645119efaf228fb8c46e422fe15e911647bae89?apiKey=2f548b4572fc4b419a5782ae61ad8ee5&"
    },
    {
      id: 2,
      name: "Thiết bị giám sát điện",
      description: "Description for product 2",
      price: 200,
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/88ca7c29822f2a2cd33ff5b0d645119efaf228fb8c46e422fe15e911647bae89?apiKey=2f548b4572fc4b419a5782ae61ad8ee5&"
    },
    {
      id: 3,
      name: "Thiết bị giám sát khí nén",
      description: "Description for product 3",
      price: 300,
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/88ca7c29822f2a2cd33ff5b0d645119efaf228fb8c46e422fe15e911647bae89?apiKey=2f548b4572fc4b419a5782ae61ad8ee5&"
    },
    {
      id: 4,
      name: "Thiết bị giám sát tiêu thụ nước",
      description: "Description for product 4",
      price: 400,
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/88ca7c29822f2a2cd33ff5b0d645119efaf228fb8c46e422fe15e911647bae89?apiKey=2f548b4572fc4b419a5782ae61ad8ee5&"
    },
    {
      id: 5,
      name: "Thiết bị giám sát điện",
      description: "Description for product 5",
      price: 400,
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/88ca7c29822f2a2cd33ff5b0d645119efaf228fb8c46e422fe15e911647bae89?apiKey=2f548b4572fc4b419a5782ae61ad8ee5&"
    },
  ];

  // Tính số lượng trang
  const totalPages = Math.ceil(allProducts.length / productsPerPage);

  // Lấy các sản phẩm cho trang hiện tại
  const currentProducts = allProducts
  .filter(
      product => selectedButton === "Tất cả" || product.name === selectedButton)
  .slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);

  // Hàm để thay đổi trang
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
      <GridContainer>
        <HeaderSection>
          <ImageWrapper>
            <LazyImage alt="" src="maskgroup-tbspcn.png"/>
            <SectionContainer>
              <SectionContent>
                <SectionTitle>Thiết bị và sản phẩm công nghiệp</SectionTitle>
                <SectionDescription>
                  Cung cấp các thiết bị và sản phẩm công nghiệp giúp hỗ trợ hoạt
                  động tiết kiệm Năng lượng trong doanh nghiệp
                </SectionDescription>
              </SectionContent>
            </SectionContainer>
          </ImageWrapper>
        </HeaderSection>
        <MainContainer>
          <TabContainer>
            <Tab active={selectedButton === "Tất cả"}
                 onClick={() => handleButtonClick("Tất cả")}>
              Tất cả
            </Tab>
            <Tab active={selectedButton === "Thiết bị giám sát điện"}
                 onClick={() => handleButtonClick("Thiết bị giám sát điện")}>
              Thiết bị giám sát điện
            </Tab>
            <Tab active={selectedButton === "Thiết bị giám sát khí nén"}
                 onClick={() => handleButtonClick("Thiết bị giám sát khí nén")}>
              Thiết bị giám sát khí nén
            </Tab>
            <Tab active={selectedButton === "Thiết bị giám sát tiêu thụ nước"}
                 onClick={() => handleButtonClick(
                     "Thiết bị giám sát tiêu thụ nước")}>
              Thiết bị giám sát tiêu thụ nước
            </Tab>
          </TabContainer>
          <ProductCategories>
            {currentProducts.map((product, index) => (
                <CategoryColumn key={index}>
                  {/* ... hiển thị thông tin sản phẩm ... */}
                  <CategoryContainer>
                    <CategoryImage alt={product.name}
                                   src={product.imageUrl}/>
                    <CategoryDescription>
                      <CategoryTitle>{product.name}</CategoryTitle>
                      <CategoryText>{product.description}</CategoryText>
                    </CategoryDescription>
                  </CategoryContainer>
                </CategoryColumn>
            ))}
          </ProductCategories>
          <Pagination currentPage={currentPage} totalPages={totalPages}
                      onPageChange={handlePageChange}/>
        </MainContainer>
      </GridContainer>
  );
}

export default ProductComponent;


const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const HeaderSection = styled.header`
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  width: 100%;
  flex-direction: column;
  color: #fff;
  text-align: center;
  justify-content: center;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  position: relative;
  min-height: 150px;
  justify-content: center;
  overflow: hidden;
`;

const LazyImage = styled.img`
  position: absolute;
  inset: 0;
  height: 150px;
  width: 100%;
  object-fit: cover;
  object-position: center;
  filter: brightness(0.5);
`;

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  justify-content: center;
  position: relative;
`;

const SectionContent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-height: 150px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const SectionTitle = styled.h2`
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  //font: 700 32px/141% Roboto, -apple-system, Roboto, Helvetica,"VNFont Regular", sans-serif;
  font-family: "VNFont", sans-serif;
  font-size: 32px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const SectionDescription = styled.p`
  margin-top: 16px;
  font: 400 20px/120% Roboto, -apple-system, Roboto, Helvetica, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const MainContainer = styled.main`
  align-self: center;
  display: flex;
  margin-top: 72px;
  width: 100%;
  max-width: 1440px;
  flex-direction: column;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const TabContainer = styled.nav`
  display: flex;
  justify-content: center;
  gap: 16px;
  font-size: 16px;
  color: #006ce7;
  font-weight: 700;
  padding: 0 20px;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const Tab = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 14px 16px;
  color: #006ce7;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 30px;
  ${(props) => props.active && `
    background-color: #006ce7;
    color: #fff;
  `}
  ${(props) => !props.active && `
    border: 1px solid rgba(0, 108, 231, 1);
  `}
`;

const ProductCategories = styled.section`
  display: flex;
  flex-wrap: wrap; // Thêm dòng này
  margin-top: 48px;
  padding: 0 20px;
  gap: 20px;
  margin-bottom: 50px;
  margin-left: 67px;
  @media (max-width: 991px) {
    margin-top: 40px;
    flex-direction: column;
  }
`;

const CategoryColumn = styled.div`
  flex-basis: 315px;
  display: flex;
  flex-direction: column;
  margin-right: 3px;
  width: 100%;
  @media (max-width: 991px) {
    width: 100%;
    flex-basis: 100%;
  }
`;

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const CategoryImage = styled.img`
  aspect-ratio: 1.33;
  width: 100%;
  flex-grow: 1;
  object-position: center;
  max-width: 100%;
  @media (max-width: 991px) {
    margin-top: 24px;
  }
`;

const CategoryDescription = styled.div`
  border-radius: 0 0 5px 5px;
  background-color: #666;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 19px 16px;
  text-transform: uppercase;
  width: 100%;
  @media (max-width: 991px) {
    padding-right: 20px;
  }
`;

const CategoryTitle = styled.h3`
  color: rgba(255, 255, 255, 0.7);
  font: 400 12px Roboto, sans-serif;
`;

const CategoryText = styled.p`
  color: #fff;
  margin-top: 12px;
  font: 550 1em/2em BeVietNam, -apple-system, Roboto, Helvetica, sans-serif;
`;