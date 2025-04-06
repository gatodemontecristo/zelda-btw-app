import { render, screen, fireEvent } from '@testing-library/react';
import { BasicButton } from '../components/atoms/Button/BasicButton';

describe('BasicButton', () => {
  it('renders label and calls click handler', () => {
    const handleClick = jest.fn();
    render(<BasicButton label="Click me" fnClickButton={handleClick} />);

    const button = screen.getByText('Click me');
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalled();
  });
});
