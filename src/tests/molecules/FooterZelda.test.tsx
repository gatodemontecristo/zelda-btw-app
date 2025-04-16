// src/tests/molecules/FooterZelda.test.tsx
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FooterZelda } from '../../components';

describe('FooterZelda Component', () => {
  const author = 'Link';
  const location = 'Hyrule';
  const className = 'custom-class';

  test('renders FooterZelda with author, location and className', () => {
    render(
      <FooterZelda author={author} location={location} className={className} />,
    );

    const container = screen.getByText(author).parentElement;
    expect(container).toHaveClass(
      'flex flex-col py-15 items-center justify-center bg-black w-full',
    );
    expect(container).toHaveClass(className);
    expect(screen.getByText(author)).toBeInTheDocument();
    expect(screen.getByText(location)).toBeInTheDocument();
  });

  test('renders FooterZelda.Button correctly', () => {
    render(
      <FooterZelda
        author={author}
        location={location}
        button={
          <FooterZelda.Button label="Click Me" fnClickButton={() => {}} />
        }
      />,
    );

    expect(
      screen.getByRole('button', { name: 'Click Me' }),
    ).toBeInTheDocument();
  });

  test('renders FooterZelda.Social with social and website items', () => {
    const social = [
      { link: 'https://twitter.com', name: 'twitter' },
      { link: 'https://switch.com', isDefault: true },
    ];
    const website = [{ link: 'https://zelda.com', name: 'zelda' }];

    render(
      <FooterZelda
        author={author}
        location={location}
        social={<FooterZelda.Social social={social} website={website} />}
      />,
    );

    expect(screen.getByText('Social :')).toBeInTheDocument();
    expect(screen.getByText('twitter')).toBeInTheDocument();

    const items = screen.getAllByTestId('social-item');
    expect(items).toHaveLength(3);
    expect(items[1].querySelector('img')).toHaveAttribute(
      'src',
      '../social/nintendo-switch.svg',
    );

    expect(screen.getByText('Websites :')).toBeInTheDocument();
    expect(screen.getByText('zelda')).toBeInTheDocument();
  });
});
