import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Paragraph } from '../../../components';

describe('Paragraph', () => {
  it('should render the children with the default styles and props', () => {
    const { container } = render(
      <Paragraph>
        <p>Test</p>
      </Paragraph>,
    );
    const paragraph = container.querySelector('p');
    expect(paragraph).toHaveTextContent('Test');
    expect(paragraph).toHaveClass('italic font-light p-4 md:w-[60%] w-[80%]');
  });

  it('should render the children with the props that we send it', () => {
    const { container } = render(
      <Paragraph className="text-red-500">
        <p>Test</p>
      </Paragraph>,
    );
    const paragraph = container.querySelector('p');
    expect(paragraph).toHaveClass('text-red-500');
  });

  it('should render the children with the styles that we send it', () => {
    const { container } = render(
      <Paragraph className="text-lg">
        <p>Test</p>
      </Paragraph>,
    );
    const paragraph = container.querySelector('p');
    expect(paragraph).toHaveClass('text-lg');
  });
});
