import '../../../index.css';

interface BasicButtonProps {
  /**
   * Label button
   */
  label: string;
  /**
   * Font color button
   */
  fontButton?: string;
}

export const BasicButton = ({
  label,
  fontButton = 'bg-black',
}: BasicButtonProps) => {
  return (
    <button
      className={`rounded-full text-white font-bold shadow-lg ${fontButton} ease-in-out 
            hover:bg-white hover:text-black transform transition-all duration-300 px-4 py-2 `}
    >
      {label}
    </button>
  );
};
