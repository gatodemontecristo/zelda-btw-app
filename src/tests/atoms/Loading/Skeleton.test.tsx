// src/tests/Skeleton.test.tsx
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Skeleton } from '../../../components';

describe('Skeleton', () => {
  it('renderiza correctamente el tipo circle con clases extra', () => {
    const { container } = render(
      <Skeleton type="circle" extraClass="w-10 h-10" />,
    );

    const div = container.firstChild as HTMLElement;

    expect(div).toBeInTheDocument();
    expect(div).toHaveClass(
      'bg-zelda-rock',
      'animate-pulse',
      'rounded-full',
      'w-10',
      'h-10',
    );
  });

  it('renderiza correctamente el tipo rect con clases extra', () => {
    const { container } = render(
      <Skeleton type="rect" extraClass="w-20 h-5" />,
    );

    const div = container.firstChild as HTMLElement;

    expect(div).toBeInTheDocument();
    expect(div).toHaveClass(
      'bg-zelda-rock',
      'animate-pulse',
      'rounded',
      'w-20',
      'h-5',
    );
  });
});
