import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { SubTitle } from '../../../components';

describe('SubTitle', () => {
  it('should render the label with the default styles and props', () => {
    const { container } = render(<SubTitle label="Test" />);
    const paragraph = container.querySelector('p');
    expect(paragraph).toHaveTextContent('Test');
    expect(paragraph).toHaveClass('font-hyllian text-zelda-history text-2xl');
  });

  it('should render the label with the props that we send it', () => {
    const { container } = render(<SubTitle label="Test" size="text-lg" />);
    const paragraph = container.querySelector('p');
    expect(paragraph).toHaveClass('text-lg');
  });

  it('should render the label with the styles that we send it', () => {
    const { container } = render(
      <SubTitle label="Test" className="text-red-500" />,
    );
    const paragraph = container.querySelector('p');
    expect(paragraph).toHaveClass('text-red-500');
  });

  it('should render the label with the styles that we send it', () => {
    const { container } = render(
      <SubTitle label="First title" secondaryTitle="Second title" />,
    );
    const paragraphs = container.querySelectorAll('p');
    expect(paragraphs.length).toBeGreaterThanOrEqual(2);
    expect(paragraphs[0]).toHaveTextContent('First title');
    expect(paragraphs[1]).toHaveTextContent('Second title');
  });
});
