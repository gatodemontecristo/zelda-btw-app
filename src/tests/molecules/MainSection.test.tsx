import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MainSection from '../../components/molecules/MainSection';

describe('MainSection Component', () => {
  test('renders MainSection with children', () => {
    render(
      <MainSection>
        <div>Test Content</div>
      </MainSection>,
    );

    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  test('renders MainSection.Logo with props', () => {
    render(<MainSection.Logo imgUrl="/logo.png" />);

    const logo = screen.getByRole('img', { name: 'Logo' });
    expect(logo).toHaveAttribute('src', '/logo.png');
    expect(logo).toHaveClass('relative z-10');
  });

  test('renders MainSection.Title with text', () => {
    render(<MainSection.Title label="Test Title"></MainSection.Title>);

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Title')).toHaveClass(
      'font-hyllian text-zelda-history text-2xl',
    );
  });

  test('renders MainSection.Separator', () => {
    render(<MainSection.Separator />);

    const separator = screen.getByRole('img', { name: 'Separator Line' });
    expect(separator).toBeInTheDocument();
    expect(separator).toHaveAttribute(
      'src',
      '../separator/arrow_separator.png',
    );
  });
  test('renders MainSection.Background', () => {
    render(
      <MainSection image="version2">
        <div>Test Background</div>
      </MainSection>,
    );

    const background = screen.getByRole('img', { name: 'Background' });
    expect(background).toBeInTheDocument();
    expect(background).toHaveAttribute('src', '../background/zelda_botw_2.jpg');
  });
});
