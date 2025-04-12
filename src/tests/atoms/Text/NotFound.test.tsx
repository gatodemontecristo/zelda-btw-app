import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { NotFound } from '../../../components';

describe('NotFound', () => {
  it('should render the img and text with the default styles and props', () => {
    const { container } = render(<NotFound imgUrl={'/path/to/img.png'} />);
    const img = container.querySelector('img');
    const text = container.querySelector('p');
    expect(img).toHaveAttribute('src', '/path/to/img.png');
    expect(text).toHaveTextContent('Not Found Link 404');
  });

  it('should render the img with the props that we send it', () => {
    const { container } = render(
      <NotFound imgUrl={'/path/to/img.png'} size={50} />,
    );
    const img = container.querySelector('img');
    expect(img).toHaveStyle('width: 50%');
  });

  it('should render the title with the styles that we send it', () => {
    const { container } = render(
      <NotFound imgUrl={'/path/to/img.png'} classNameTitle={'text-lg'} />,
    );
    const text = container.querySelector('p');
    expect(text).toHaveClass('text-lg');
    expect(text).toHaveClass('font-hyllian');
  });
});
