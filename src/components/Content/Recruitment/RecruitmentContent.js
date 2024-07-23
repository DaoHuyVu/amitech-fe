import styled from "styled-components";
import Banner from "../../common/BannerWrapper";
import searchIcon from '../../../assets/icons/search-icon.png';
import Pagination from "../../common/Pagination";
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import imageBanner from '../../../assets/banner/tuyendung.png';
import {fetchRecruitment} from "../../../services/recruitmentService";

function JobCardItem({
  id, imgUrl, title, subtitle, quantity, salary, badge, date, badgeColor
}) {
  return (
      <JobCard>
        <a href={`/tuyen-dung/${id}`}
           style={{textDecoration: 'none', color: 'inherit'}}>

          <JobCardLeft>
            <JobCardImage src={imgUrl} alt={title}/>
            <JobCardDetails>
              <JobCardTitle>{title}</JobCardTitle>
              <JobCardSubtitle>{subtitle}</JobCardSubtitle>
              <JobCardInfo>
                <InfoItem>
                  <Icon src="soluong.png"/>
                  <InfoText>Số lượng: {quantity}</InfoText>
                </InfoItem>
                <InfoItem>
                  <Icon src="dola.png"/>
                  <InfoText>Mức lương: {salary}</InfoText>
                </InfoItem>
                <DateContainer>
                  <Icon src="calendar.png"/>
                  <InfoText>{date}</InfoText>
                </DateContainer>
              </JobCardInfo>
            </JobCardDetails>
          </JobCardLeft>
          <NewBadgeContainer>
            {badge && <NewBadge
                style={{backgroundColor: badgeColor}}>{badge}</NewBadge>}
          </NewBadgeContainer>
        </a>
      </JobCard>
  )
}

function Content() {

  const [recruitmentData, setRecruitmentData] = useState(
      {data: [], pagination: {}});

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchRecruitment();
      setRecruitmentData(data);
    };

    fetchData().then(r => console.log('Recruitment data fetched'));
  }, []);

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const jobsPerPage = 12;
  const totalPages = Math.ceil(recruitmentData.data.length / jobsPerPage);

  const currentJobs = recruitmentData.data.slice(
      (currentPage - 1) * jobsPerPage,
      currentPage * jobsPerPage);
  return (
      <Container>
        <HeaderBanner>
          <Banner
              imgSrc={imageBanner}
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
              {currentJobs.map((job, index) => (
                  <JobCardItem
                      id={job.id}
                      key={index}
                      imgUrl={job.imgUrl}
                      title={job.career}
                      subtitle={job.job_position}
                      quantity={job.quantity}
                      salary={job.salary}
                      date={job.date}
                      badge={job.badge}
                      badgeColor={job.badgeColor}
                  />
              ))}
            </JobList>
            <Pagination currentPage={currentPage} totalPages={totalPages}
                        onPageChange={handlePageChange}/>
          </JobsSection>
        </MainContent>
      </Container>);
}

export default Content;

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

const Icon = styled.img`
  width: 20px;
  height: 20px;
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
