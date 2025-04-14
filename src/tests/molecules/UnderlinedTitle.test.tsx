import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import UnderlinedTitle from '../../components/molecules/UnderlinedTitle';

describe('UnderlinedTitle Component', () => {
  test('renders the component with children', () => {
    render(
      <UnderlinedTitle>
        <h1>Test Title</h1>
      </UnderlinedTitle>,
    );

    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  test('applies custom className', () => {
    render(
      <UnderlinedTitle className="custom-class">
        <h1>Test Title</h1>
      </UnderlinedTitle>,
    );

    const container = screen.getByText('Test Title').parentElement;
    expect(container).toHaveClass('custom-class');
  });

  test('renders the SeparatorLine and SubTitle components', () => {
    render(
      <UnderlinedTitle>
        <UnderlinedTitle.Title
          label="Main Title"
          secondaryTitle="Test Subtitle"
        ></UnderlinedTitle.Title>
        <UnderlinedTitle.Separator />
      </UnderlinedTitle>,
    );

    expect(screen.getByText('Main Title')).toBeInTheDocument();
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
