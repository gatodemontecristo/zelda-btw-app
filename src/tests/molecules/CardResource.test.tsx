const mockNavigate = jest.fn();
jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useNavigate: () => mockNavigate,
}));

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { MemoryRouter } from 'react-router-dom';
import { CardResource } from '../../components';

describe('CardResource Component', () => {
  const mockResource = {
    id: 1,
    name: 'Hyrule Herb',
    image: '/path/to/image.jpg',
    common_locations: ['Hyrule Field', 'Faron Grasslands'],
    dlc: false,
    category: 'Herb',
    description: 'A cooking ingredient found in the wild.',
    drops: ['Hyrule Herb Leaf'],
  };

  beforeEach(() => {
    mockNavigate.mockClear();
  });

  test('renders the component with resource data', () => {
    const { container } = render(
      <MemoryRouter>
        <CardResource resource={mockResource} />
      </MemoryRouter>,
    );

    expect(screen.getByText('Hyrule Herb')).toBeInTheDocument();
    expect(
      screen.getByText('Hyrule Field, Faron Grasslands'),
    ).toBeInTheDocument();
    const image = container.querySelector('img');
    expect(image).toHaveAttribute('src', '/path/to/image.jpg');
    expect(image).toHaveAttribute('alt', '');
  });

  test('calls navigate function when the button is clicked', () => {
    render(
      <MemoryRouter>
        <CardResource resource={mockResource} />
      </MemoryRouter>,
    );

    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(mockNavigate).toHaveBeenCalledWith('/detail/1');
  });
});
