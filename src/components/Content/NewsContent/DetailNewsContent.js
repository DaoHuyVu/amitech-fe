import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import BannerWrapper from "../../common/BannerWrapper";
import {fetchNewsDetail} from "../../../services/newsService";
import styled from "styled-components";

function DetailNewsContent() {
  const {id} = useParams();
  const [newsDetail, setNewsDetail] = useState(null);

  useEffect(() => {
    const loadNewsDetail = async () => {
      const detail = await fetchNewsDetail(id);
      setNewsDetail(detail);
    };

    loadNewsDetail();
  }, [id]);

  if (!newsDetail) {
    return <div>Loading...</div>;
  }

  const renderDetailItem = (item) => {
    switch (item.type) {
      case "quote":
        return (
            <StyledBlockquote>
              {item.children.map((child, index) => (
                  <React.Fragment key={index}>
                    {child.text.split("\n").map((textSegment, segmentIndex) => (
                        <React.Fragment key={segmentIndex}>
                          {textSegment}
                          {segmentIndex < child.text.split("\n").length - 1 &&
                              <br/>}
                        </React.Fragment>
                    ))}
                  </React.Fragment>
              ))}
            </StyledBlockquote>
        );
      case "image":
        return (
            <StyledImg
                src={item.image.url}
                alt={item.image.alternativeText || "News image"}
            />
        );
      case "paragraph":
        return (
            <StyledParagraph>
              {item.children.map((child, index) => (
                  // Split the text by \n and map over it to render each segment
                  <React.Fragment key={index}>
                    {child.text.split("\n").map((textSegment, segmentIndex) => (
                        <React.Fragment key={segmentIndex}>
                          {textSegment}
                          {segmentIndex < child.text.split("\n").length - 1 &&
                              <br/>}
                        </React.Fragment>
                    ))}
                  </React.Fragment>
              ))}
            </StyledParagraph>
        );

      case "heading":
        return (
            <h2>
              {item.children.map((child, index) => (
                  <React.Fragment key={index}>
                    {child.text.split("\n").map((textSegment, segmentIndex) => (
                        <React.Fragment key={segmentIndex}>
                          {textSegment}
                          {segmentIndex < child.text.split("\n").length - 1 &&
                              <br/>}
                        </React.Fragment>
                    ))}
                  </React.Fragment>
              ))}
            </h2>
        );
      default:
        return null;
    }
  };

  return (
      <>
        <BannerWrapper
            imgSrc={newsDetail.imgUrl}
            title={newsDetail.title}
            description={newsDetail.description}
        />
        <DetailContainer>
          <DetailText>
            {newsDetail.detail ? newsDetail.detail.map((item, index) => (
                <React.Fragment key={index}>{renderDetailItem(
                    item)}</React.Fragment>
            )) : <h1>No details available.</h1>}
          </DetailText>
        </DetailContainer>
      </>
  );
}

const StyledBlockquote = styled.blockquote`
  padding: 20px;
  margin: 20px 0;
  background-color: #f9f9f9;
  border-left: 5px solid #ccc;
`;

const StyledImg = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  margin: 20px auto;
`;

const StyledParagraph = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin: 1rem 0;
  text-align: justify;
`;

const DetailContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const DetailText = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 70rem;
  width: 100%;
  color: #333;

`;

export default DetailNewsContent;