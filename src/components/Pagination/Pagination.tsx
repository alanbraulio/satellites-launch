import React from 'react';
import './Pagination.styles.scss';

interface PaginationProps {
  handlePreviousPage: () => void;
  handleNextPage: () => void;
  currentPage: number;
  totalPages: number;
}
export function Pagination({
  handlePreviousPage,
  handleNextPage,
  currentPage,
  totalPages,
}: PaginationProps): JSX.Element {
  return (
    <div className="pagination">
      <button onClick={handlePreviousPage} disabled={currentPage === 1}>
        Prev
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button onClick={handleNextPage} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
}
