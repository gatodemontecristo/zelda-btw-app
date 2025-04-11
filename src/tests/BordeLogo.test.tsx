import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BordeLogo } from '../components';

describe('BordeLogo', () => {
  it('debería renderizar el logo con la clase correcta', () => {
    const { container } = render(<BordeLogo imgUrl="/path/to/img.png" />);
    const logo = container.querySelector('img');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveStyle('width: 40%');
    expect(logo).toHaveAttribute('src', '/path/to/img.png');
  });

  it('debería aplicar el tamaño correcto al logo', () => {
    const { container } = render(
      <BordeLogo imgUrl="/path/to/img.png" size={50} />,
    );
    const logo = container.querySelector('img');
    expect(logo).toHaveStyle('width: 50%');
  });

  it('has the gradient border and positioning styles', () => {
    render(<BordeLogo imgUrl="/path/to/img.png" />);
    const container = screen.getByRole('img').parentElement;
    expect(container).toHaveClass('flex');
    expect(container).toHaveClass('relative');
  });
  it('has gradient border and correct utility classes', () => {
    render(<BordeLogo imgUrl="/path/to/img.png" />);
    const gradientDiv = screen.getByTestId('gradient-border');

    expect(gradientDiv).toBeInTheDocument();

    expect(gradientDiv).toHaveClass('absolute');
    expect(gradientDiv).toHaveClass('gradient-border');
    expect(gradientDiv).toHaveClass('bg-gradient-to-r');
    expect(gradientDiv).toHaveClass('from-transparent');
    expect(gradientDiv).toHaveClass('to-transparent');
  });
});
