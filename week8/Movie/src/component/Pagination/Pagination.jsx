import React from "react";
import * as t from "./styles";

export default function Pagination({ currentPage, onPageChange }) {
  const handleFirstPage = () => {
    alert("제일 첫번째 페이지입니다.");
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    } else if (currentPage === 1) {
      handleFirstPage();
    }
  };

  const handleNextPage = () => {
    onPageChange(currentPage + 1);
  };

  return (
    <t.PaginationContainer>
      <t.PageButton onClick={handlePreviousPage} gray={currentPage === 1}>
        <h4>&lt;</h4>
      </t.PageButton>
      <t.PageNumber>
        {" "}
        <h4>{currentPage}</h4>
      </t.PageNumber>
      <t.PageButton onClick={handleNextPage}>
        <h4>&gt;</h4>
      </t.PageButton>
    </t.PaginationContainer>
  );
}
