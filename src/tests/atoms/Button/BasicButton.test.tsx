import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // Import jest-dom matchers
import { BasicButton } from '../../../components/atoms/Button/BasicButton';

describe('BasicButton', () => {
  it('debería renderizar el botón con el label', () => {
    render(<BasicButton label="Haz clic aquí" fnClickButton={() => {}} />);

    // Verificar que el texto del botón esté presente
    expect(screen.getByText('Haz clic aquí')).toBeInTheDocument();
  });

  it('debería renderizar el botón con una imagen cuando se pasa la propiedad imgButton', () => {
    render(
      <BasicButton
        label="Con imagen"
        imgButton="/path/to/img.png"
        fnClickButton={() => {}}
      />,
    );

    // Verificar que la imagen esté en el documento
    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', '/path/to/img.png');
  });

  it('debería ejecutar la función fnClickButton cuando se hace clic', () => {
    const mockFn = jest.fn();
    render(<BasicButton label="Botón de prueba" fnClickButton={mockFn} />);

    // Simular un clic en el botón
    fireEvent.click(screen.getByText('Botón de prueba'));

    // Verificar que la función haya sido llamada
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('debería aplicar las clases CSS pasadas en className y classButton', () => {
    const { container } = render(
      <BasicButton
        label="Botón con clases"
        imgButton="/path/to/img.png"
        className="bg-red-500"
        classButton="w-10 h-10"
        fnClickButton={() => {}}
      />,
    );

    // Verificar que las clases CSS se apliquen correctamente
    expect(container.firstChild).toHaveClass('bg-red-500');
    expect(container.querySelector('img')).toHaveClass('w-10 h-10');
  });
});
