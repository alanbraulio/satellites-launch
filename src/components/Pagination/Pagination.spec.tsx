import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Pagination } from './Pagination';

describe('Pagination Component', () => {
  it('should renders the component with previous and next buttons', () => {
    const handlePreviousPage = jest.fn();
    const handleNextPage = jest.fn();

    render(
      <Pagination
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        currentPage={1}
        totalPages={5}
      />
    );

    const prevButton = screen.getByText('Prev');
    const nextButton = screen.getByText('Next');

    expect(prevButton).toBeTruthy();
    expect(nextButton).toBeTruthy();
  });

  it('should disables the previous button on the first page', () => {
    const handlePreviousPage = jest.fn();
    const handleNextPage = jest.fn();

    render(
      <Pagination
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        currentPage={1}
        totalPages={5}
      />
    );

    const prevButton = screen.getByText('Prev');

    expect(prevButton).toHaveProperty('disabled', true);
  });

  it('should disables the next button on the last page', () => {
    const handlePreviousPage = jest.fn();
    const handleNextPage = jest.fn();

    render(
      <Pagination
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        currentPage={5}
        totalPages={5}
      />
    );

    const nextButton = screen.getByText('Next');

    expect(nextButton).toHaveProperty('disabled', true);
  });

  it('calls the previous and next page handlers when buttons are clicked', () => {
    const handlePreviousPage = jest.fn();
    const handleNextPage = jest.fn();

    render(
      <Pagination
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        currentPage={3}
        totalPages={5}
      />
    );

    const prevButton = screen.getByText('Prev');
    const nextButton = screen.getByText('Next');

    fireEvent.click(prevButton);
    fireEvent.click(nextButton);

    expect(handlePreviousPage).toHaveBeenCalledTimes(1);
    expect(handleNextPage).toHaveBeenCalledTimes(1);
  });
});
