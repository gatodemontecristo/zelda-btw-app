import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MainBackground } from '../components';

describe('MainBackground', () => {
  it('debería renderizar el logo con la clase correcta', () => {
    const { container } = render(<MainBackground />);
    const logo = container.querySelector('img');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '../background/zelda_botw.webp');
  });

  it('renders default background image when no image prop is passed', () => {
    render(<MainBackground />);
    const img = screen.getByAltText('Background') as HTMLImageElement;
    expect(img).toBeInTheDocument();
    expect(img.src).toContain('zelda_botw.webp');
  });

  it('renders background image version2 when specified', () => {
    render(<MainBackground image="version2" />);
    const img = screen.getByAltText('Background') as HTMLImageElement;
    expect(img.src).toContain('zelda_botw_2.jpg');
  });

  it('renders background image version3 when specified', () => {
    render(<MainBackground image="version3" />);
    const img = screen.getByAltText('Background') as HTMLImageElement;
    expect(img.src).toContain('zelda_botw_3.jpg');
  });

  it('renders children correctly', () => {
    render(
      <MainBackground>
        <p>Test child</p>
      </MainBackground>,
    );
    expect(screen.getByText('Test child')).toBeInTheDocument();
  });

  it('applies correct shadow size and gradient color', () => {
    const { container } = render(
      <MainBackground shadowSize="md" color="#123456" />,
    );

    const gradientDiv = container.querySelector('div[style]') as HTMLElement;
    expect(gradientDiv).toBeInTheDocument();
    expect(gradientDiv.style.height).toBe('50%');
  });
});
