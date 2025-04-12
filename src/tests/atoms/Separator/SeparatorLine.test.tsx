import { SeparatorLine } from '../../../components';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('SeparatorLine', () => {
  it('should render the img with the default styles and props', () => {
    const { container } = render(<SeparatorLine />);
    const line = container.querySelector('img');
    expect(line).toBeInTheDocument();
    expect(line).toHaveStyle('width: 20%');
    expect(line).toHaveAttribute('src', '../separator/arrow_separator.png');
  });

  it('should render the img with the props that we send it', () => {
    const { container } = render(
      <SeparatorLine version={'version02'} width={40} />,
    );
    const line = container.querySelector('img');
    expect(line).toBeInTheDocument();
    expect(line).toHaveStyle('width: 40%');
    expect(line).toHaveAttribute('src', '../separator/gold_separator.png');
  });

  it('has the center, positioning and extra styles', () => {
    render(<SeparatorLine className="mt-5" />);
    const container = screen.getByRole('img').parentElement;
    expect(container).toHaveClass('items-center');
    expect(container).toHaveClass('justify-center');
    expect(container).toHaveClass('flex');
    expect(container).toHaveClass('mt-5');
  });
});
