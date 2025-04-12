import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Pagination } from '../../../components';
describe('Pagination', () => {
  const defaultProps = {
    currentPage: 2,
    maxPage: 5,
    onNext: jest.fn(),
    onPrev: jest.fn(),
    onJump: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders all page buttons', () => {
    render(<Pagination {...defaultProps} />);
    for (let i = 1; i <= defaultProps.maxPage; i++) {
      expect(screen.getByText(i.toString())).toBeInTheDocument();
    }
  });

  it('highlights the current page button', () => {
    render(<Pagination {...defaultProps} />);
    const currentPageButton = screen.getByText(
      defaultProps.currentPage.toString(),
    );
    expect(currentPageButton.className).toMatch(/bg-zelda-history/);
    expect(currentPageButton.className).toMatch(/text-white/);
  });

  it('calls onJump with the correct page when a page number is clicked', () => {
    render(<Pagination {...defaultProps} />);
    const pageButton = screen.getByText('4');
    fireEvent.click(pageButton);
    expect(defaultProps.onJump).toHaveBeenCalledWith(4);
  });

  it('calls onPrev when the previous button is clicked', () => {
    render(<Pagination {...defaultProps} />);
    const prevButton = screen.getAllByRole('button')[0]; // First button
    fireEvent.click(prevButton);
    expect(defaultProps.onPrev).toHaveBeenCalled();
  });

  it('disables the previous button on first page', () => {
    render(<Pagination {...defaultProps} currentPage={1} />);
    const prevButton = screen.getAllByRole('button')[0];
    expect(prevButton).toBeDisabled();
  });

  it('calls onNext when the next button is clicked', () => {
    render(<Pagination {...defaultProps} />);
    const nextButton = screen.getAllByRole('button').pop()!;
    fireEvent.click(nextButton);
    expect(defaultProps.onNext).toHaveBeenCalled();
  });

  it('disables the next button on last page', () => {
    render(<Pagination {...defaultProps} currentPage={5} />);
    const nextButton = screen.getAllByRole('button').pop()!;
    expect(nextButton).toBeDisabled();
  });
});
