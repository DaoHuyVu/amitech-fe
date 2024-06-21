import React from 'react';
import styled from 'styled-components';

const PaginationContainer = styled.nav`
  align-self: center;
  display: flex;
  margin-top: 32px;
  gap: 8px;
  font-size: 20px;
  font-weight: 700;
  justify-content: center;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const PageNumber = styled.span`
  background-color: ${props => props.active ? '#006ce7' : 'transparent'};
  border-radius: 5px;
  color: ${props => props.active ? '#fff' : '#006ce7'};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  cursor: pointer;
  margin-bottom: 50px;
`;

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
      <PaginationContainer>
        {Array.from({length: totalPages}, (_, i) => i + 1).map(pageNumber => (
            <PageNumber
                key={pageNumber}
                active={currentPage === pageNumber}
                onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </PageNumber>
        ))}
      </PaginationContainer>
  );
};

export default Pagination;