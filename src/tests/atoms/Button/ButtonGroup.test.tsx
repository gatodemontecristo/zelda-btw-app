import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ButtonGroup } from '../../../components';

describe('ButtonGroup', () => {
  const options = [
    { label: 'Option 1', value: '1', imgUrl: 'https://via.placeholder.com/40' },
    { label: 'Option 2', value: '2' },
  ];

  it('renders all buttons', () => {
    render(<ButtonGroup options={options} onChange={() => {}} />);
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
  });

  it('calls onChange with the correct value when a button is clicked', () => {
    const handleChange = jest.fn();
    render(<ButtonGroup options={options} onChange={handleChange} />);

    fireEvent.click(screen.getByText('Option 2'));
    expect(handleChange).toHaveBeenCalledWith('2');
  });

  it('applies selected styles to the selected button', () => {
    render(
      <ButtonGroup options={options} onChange={() => {}} selectedValue="1" />,
    );
    const selectedButton = screen.getByText('Option 1');
    expect(selectedButton.className).toMatch(/text-white/);
    expect(selectedButton.className).toMatch(/bg-blue-900/);
  });

  it('renders image if imgUrl is provided', () => {
    render(<ButtonGroup options={options} onChange={() => {}} />);
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', 'https://via.placeholder.com/40');
  });
});
