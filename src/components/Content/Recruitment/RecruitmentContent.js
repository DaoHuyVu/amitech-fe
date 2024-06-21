import * as React from "react";
import styled from "styled-components";
import Banner from "../../common/BannerWrapper";
import searchIcon from '../../../assets/icons/search-icon.png';
import Pagination from "../../common/Pagination";
import {useState} from "react";

function JobCardItem({
  imgUrl, title, subtitle, quantity, salary, badge, date, badgeColor
}) {
  return (<JobCard>
    <JobCardLeft>
      <JobCardImage src={imgUrl} alt={title}/>
      <JobCardDetails>
        <JobCardTitle>{title}</JobCardTitle>
        <JobCardSubtitle>{subtitle}</JobCardSubtitle>
        <JobCardInfo>
          <InfoItem>
            <Icon></Icon>
            <InfoText>Số lượng: {quantity}</InfoText>
          </InfoItem>
          <InfoItem>
            <Icon>$</Icon>
            <InfoText>Mức lương: {salary}</InfoText>
          </InfoItem>
          <DateContainer>
            <Icon></Icon>
            <InfoText>{date}</InfoText>
          </DateContainer>
        </JobCardInfo>
      </JobCardDetails>
    </JobCardLeft>
    <NewBadgeContainer>
      {badge && <NewBadge
          style={{backgroundColor: badgeColor}}>{badge}</NewBadge>}
    </NewBadgeContainer>
  </JobCard>);
}

function MyComponent() {

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const jobsPerPage = 12;
  const totalPages = Math.ceil(JobListContent.length / jobsPerPage);

  const currentJobs = JobListContent.slice((currentPage - 1) * jobsPerPage,
      currentPage * jobsPerPage);
  return (<Container>
    <HeaderBanner>
      <Banner
          imgSrc="maskgroup-tbspcn.png"
          title="Cơ hội việc làm tại AMITECH"
          description="Trở thành một phần của AMITECH và nắm bắt cơ hội tạo dựng nghề nghiệp tương lai vững chắc"
      />
    </HeaderBanner>
    <MainContent>
      <Filters>
        <FilterLabel>Tìm kiếm công việc</FilterLabel>
        <FilterLabel>Vị trí</FilterLabel>
      </Filters>
      <JobSearchContainer>
        <JobSearchForm>
          <SearchIconContainer>
            <SearchIcon src={searchIcon} alt="Search"/>
            <JobSearchInput type="text" id="jobSearch"
                            placeholder="Nhập tên công việc...."
                            aria-label="Nhập tên công việc...."/>
          </SearchIconContainer>
          <SearchButton>Tìm việc làm</SearchButton>
        </JobSearchForm>
        <FilterDropdown>
          <DropdownSelect>
            <option value="">Tất cả</option>
            <option value="">Nhân viên thiết kế</option>
            <option value="">Senior/Leader Magento Developer</option>
            <option value="">Thực tập sinh tuyển dụng</option>
            <option value="">Nhân viên kinh doanh</option>
          </DropdownSelect>
        </FilterDropdown>
      </JobSearchContainer>
      <JobsSection>
        <JobList>
          {currentJobs.map((job) => (<JobCardItem
              key={job.id}
              imgUrl={job.imgUrl}
              title={job.title}
              subtitle={job.subtitle}
              quantity={job.quantity}
              salary={job.salary}
              badge={job.badge}
              date={job.date}
              badgeColor={job.badgeColor}
          />))}
        </JobList>
        <Pagination currentPage={currentPage} totalPages={totalPages}
                    onPageChange={handlePageChange}/>
      </JobsSection>
    </MainContent>
  </Container>);
}

export default MyComponent;

const JobListContent = [{
  id: 1,
  imgUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/2d9ace6264a0bd308379b755f464f4942c07c6b96f7bd514e417b91ca6913e70?apiKey=2f548b4572fc4b419a5782ae61ad8ee5&",
  title: "Công nghệ thông tin",
  subtitle: "Vận hành hệ thống – DEVOPS (VHHT)",
  quantity: "01",
  salary: "Thỏa thuận",
  badge: "New",
  date: "30/11/2023",
  badgeColor: "#00c2ff",
}, {
  id: 2,
  imgUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/406b4339fa999da8dc2da0aa4e9a745d7d288af13b22738bfc88f5f082ed496e?apiKey=2f548b4572fc4b419a5782ae61ad8ee5&",
  title: "Thiết kế đồ họa",
  subtitle: "Nhân viên thiết kế",
  quantity: "01",
  salary: "Thỏa thuận",
  date: "30/10/2023",
}, {
  id: 3,
  imgUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/52fee5589fce64ee103c1297d5503ceadcf8a405c40cc6a07509c4418736e486?apiKey=2f548b4572fc4b419a5782ae61ad8ee5&",
  title: "Công nghệ thông tin",
  subtitle: "Senior/Leader Magento Developer",
  quantity: "01",
  salary: "Thỏa thuận",
  date: "30/11/2023",
}, {
  id: 4,
  imgUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/ceb01feb6f1381e0fbc9840af0cf63e6a4985f18b78d5b932355386d0e48c0aa?apiKey=2f548b4572fc4b419a5782ae61ad8ee5&",
  title: "Nhân sự",
  subtitle: "Thực tập sinh tuyển dụng",
  quantity: "01",
  salary: "Thỏa thuận",
  date: "30/11/2023",
}, {
  id: 5,
  imgUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/2fb328dc6c7aaba2e33ab40d8fe6d4948fa8cc73754845369308dff0b2ad99d6?apiKey=2f548b4572fc4b419a5782ae61ad8ee5&",
  title: "Bán hàng/Kinh doanh",
  subtitle: "Nhân viên kinh doanh",
  quantity: "01",
  salary: "10tr - 15tr",
  date: "30/11/2023",
}, {
  id: 6,
  imgUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/f87a1ce187535151f1de343d69ce09367eb9de5226fd6df41f220a5a2edf3096?apiKey=2f548b4572fc4b419a5782ae61ad8ee5&",
  title: "Công nghệ thông tin",
  subtitle: "Vận hành hệ thống – DEVOPS (VHHT)",
  quantity: "01",
  salary: "Thỏa thuận",
  badge: "Hot",
  date: "30/11/2023",
  badgeColor: "#f00",
}, {
  id: 7,
  imgUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/f87a1ce187535151f1de343d69ce09367eb9de5226fd6df41f220a5a2edf3096?apiKey=2f548b4572fc4b419a5782ae61ad8ee5&",
  title: "Công nghệ thông tin",
  subtitle: "Vận hành hệ thống – DEVOPS (VHHT)",
  quantity: "01",
  salary: "Thỏa thuận",
  badge: "Hot",
  date: "30/11/2023",
  badgeColor: "#f00",
}, {
  id: 8,
  imgUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/f87a1ce187535151f1de343d69ce09367eb9de5226fd6df41f220a5a2edf3096?apiKey=2f548b4572fc4b419a5782ae61ad8ee5&",
  title: "Công nghệ thông tin",
  subtitle: "Vận hành hệ thống – DEVOPS (VHHT)",
  quantity: "01",
  salary: "Thỏa thuận",
  badge: "Hot",
  date: "30/11/2023",
  badgeColor: "#f00",
}, {
  id: 9,
  imgUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/f87a1ce187535151f1de343d69ce09367eb9de5226fd6df41f220a5a2edf3096?apiKey=2f548b4572fc4b419a5782ae61ad8ee5&",
  title: "Công nghệ thông tin",
  subtitle: "Vận hành hệ thống – DEVOPS (VHHT)",
  quantity: "01",
  salary: "Thỏa thuận",
  badge: "Hot",
  date: "30/11/2023",
  badgeColor: "#f00",
}, {
  id: 10,
  imgUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/f87a1ce187535151f1de343d69ce09367eb9de5226fd6df41f220a5a2edf3096?apiKey=2f548b4572fc4b419a5782ae61ad8ee5&",
  title: "Công nghệ thông tin",
  subtitle: "Vận hành hệ thống – DEVOPS (VHHT)",
  quantity: "01",
  salary: "Thỏa thuận",
  badge: "Hot",
  date: "30/11/2023",
  badgeColor: "#f00",
}
  , {
    id: 11,
    imgUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/f87a1ce187535151f1de343d69ce09367eb9de5226fd6df41f220a5a2edf3096?apiKey=2f548b4572fc4b419a5782ae61ad8ee5&",
    title: "Công nghệ thông tin",
    subtitle: "Vận hành hệ thống – DEVOPS (VHHT)",
    quantity: "01",
    salary: "Thỏa thuận",
    badge: "Hot",
    date: "30/11/2023",
    badgeColor: "#f00",
  }
  , {
    id: 12,
    imgUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/f87a1ce187535151f1de343d69ce09367eb9de5226fd6df41f220a5a2edf3096?apiKey=2f548b4572fc4b419a5782ae61ad8ee5&",
    title: "Công nghệ thông tin",
    subtitle: "Vận hành hệ thống – DEVOPS (VHHT)",
    quantity: "01",
    salary: "Thỏa thuận",
    badge: "Hot",
    date: "30/11/2023",
    badgeColor: "#f00",
  }
  , {
    id: 13,
    imgUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/f87a1ce187535151f1de343d69ce09367eb9de5226fd6df41f220a5a2edf3096?apiKey=2f548b4572fc4b419a5782ae61ad8ee5&",
    title: "Công nghệ thông tin",
    subtitle: "Vận hành hệ thống – DEVOPS (VHHT)",
    quantity: "01",
    salary: "Thỏa thuận",
    badge: "Hot",
    date: "30/11/2023",
    badgeColor: "#f00",
  }
];

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderBanner = styled.header`
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  color: #fff;
  text-align: center;
  justify-content: center;
  width: 100%;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const MainContent = styled.main`
  justify-content: center;
  display: flex;
  margin-top: 72px;
  width: 100%;
  max-width: 1440px;
  flex-direction: column;
  margin-bottom: 50px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Filters = styled.section`
  display: flex;
  max-width: 100%;
  gap: 20px;
  font-size: 16px;
  color: #4d4d4d;
  font-weight: 700;
  text-transform: uppercase;
  width: 100%;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const FilterLabel = styled.p`
  font-family: Roboto, sans-serif;
  flex-grow: 1;
  margin-bottom: 5px;
  width: 50%;
`;

const JobSearchContainer = styled.section`
  display: flex;
  margin-top: 13px;
  width: 100%;
  gap: 20px;
  justify-content: space-between;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const JobSearchForm = styled.form`
  display: flex;
  background-color: #fff;
  border: 1px solid rgba(217, 217, 217, 1);
  border-radius: 5px;
  gap: 20px;
  flex-grow: 1;
  padding: 5px 14px;
  width: 50%;
  justify-content: space-between;
  @media (max-width: 991px) {
    flex-wrap: wrap;
    width: 100%;
  }
`;

const SearchIconContainer = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const JobSearchInput = styled.input`
  border: none;
  color: rgba(48, 48, 48, 0.3);
  flex-grow: 1;
  font: 400 16px Roboto, sans-serif;
`;

const SearchButton = styled.button`
  border-radius: 5px;
  background: linear-gradient(270deg, #006ce7 0%, #002a9e 100%);
  color: #fff;
  padding: 13px 16px;
  font: 700 16px Roboto, sans-serif;
`;

const FilterDropdown = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  background-color: #fff;
  border: 1px solid rgba(217, 217, 217, 1);
  border-radius: 5px;
  padding: 19px 16px;
  font: 400 16px Roboto, sans-serif;
  width: 50%;
  justify-content: space-between;
  @media (max-width: 991px) {
    padding-right: 20px;
    width: 100%;
  }
`;

const DropdownSelect = styled.select`
  border: none; /* loai bo vien */
  background: transparent; /* loai bo nen */
  font: 400 16px Roboto, sans-serif;
  outline: none; /* loai bo vien xanh khi focus */
  width: 100%;
`;

const JobsSection = styled.section`
  margin-top: 32px;
  @media (max-width: 991px) {
    margin-top: 24px;
  }
`;

const JobList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
  @media (max-width: 991px) {
    gap: 0px;
  }
`;

const JobCard = styled.article`
  display: flex;
  background-color: #f4f9ff;
  border-radius: 5px;
  padding: 16px;
  width: calc(50% - 10px);
  box-sizing: border-box;
  position: relative;
  @media (max-width: 991px) {
    padding: 8px;
    flex-direction: column;
    margin-top: 24px;
    width: 100%;
  }
`;

const JobCardLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
  @media (max-width: 991px) {
    flex-direction: column;
    width: 100%;
  }
`;

const JobCardImage = styled.img`
  aspect-ratio: 1.32;
  width: 148px;
  object-fit: cover;
  @media (max-width: 991px) {
    margin-top: 16px;
  }
`;

const JobCardDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const JobCardTitle = styled.h3`
  color: rgba(77, 77, 77, 0.7);
  font: 400 12px Roboto, sans-serif;
`;

const JobCardSubtitle = styled.p`
  color: #4d4d4d;
  font: 700 20px/140% Roboto, sans-serif;
  margin-top: 16px;
`;

const SearchIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const JobCardInfo = styled.div`
  display: flex;
  gap: 20px;
  font-size: 16px;
  justify-content: space-between;
  margin-top: 13px;
  flex-direction: row;
`;

const InfoItem = styled.div`
  display: flex;
  gap: 8px;
`;

const Icon = styled.span`
  font-family: "VNFont Regular", sans-serif;
  font-weight: 900;
  color: rgba(77, 77, 77, 0.70);
`;

const InfoText = styled.span`
  font-family: Roboto, sans-serif;
  font-weight: 400;
  color: rgba(77, 77, 77, 0.70);
`;

const NewBadgeContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  gap: 24px;
  align-items: flex-start;
  min-height: 50px;
  position: absolute; /* de o tren job card */
  right: 0;
  top: 0;
  margin: 10px;
  @media (max-width: 991px) {
  }
`;

const NewBadge = styled.span`
  align-self: end;
  background-color: #00c2ff;
  border-radius: 2px;
  color: #fff;
  font-weight: 700;
  padding: 5px 7px;
`;

const DateContainer = styled.div`
  display: flex;
  gap: 8px;
  color: rgba(77, 77, 77, 0.7);
  font-weight: 400;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;
