import React from 'react';
import { PaginationProps } from '@/types';

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalCount, pageSize, onPageChange }) => {
  const pageNumbers: number[] = [];
  for (let i = 1; i <= Math.ceil(totalCount / pageSize); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination flex items-center justify-center mt-5">
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={`mx-1 px-3 py-1 rounded ${
            currentPage === number ? 'bg-red-500 text-white' : 'bg-white text-red-500'
          }`}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
