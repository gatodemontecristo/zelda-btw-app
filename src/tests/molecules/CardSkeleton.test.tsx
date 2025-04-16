import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CardSkeleton } from '../../components';

describe('CardSkeleton.test Component', () => {
  test('renders CardSkeleton with default props', () => {
    render(<CardSkeleton className="custom-class" />);

    const skeletons = screen.getAllByTestId('skeleton');

    expect(skeletons).toHaveLength(4);
    expect(skeletons[0].className).toContain('rounded-full');
    expect(skeletons[1].className).toContain('rounded');
    expect(skeletons[2].className).toContain('rounded');
    expect(skeletons[3].className).toContain('rounded-full');
  });

  test('renders CardSkeleton with custom className', () => {
    const { container } = render(<CardSkeleton className="custom-class" />);
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper).toHaveClass('flex');
    expect(wrapper).toHaveClass('flex-col');
    expect(wrapper).toHaveClass('items-center');
    expect(wrapper).toHaveClass('custom-class');
  });
});
