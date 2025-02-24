import clsx from 'clsx';
import '../../../index.css';

export interface BasicButtonProps {
  /**
   * Label button
   */
  label?: string;
  /**
   * Font color button
   */
  fontButton?: string;
  /**
   * Image button
   */
  imgButton?: string;
  /**
   * Extra classname button
   */
  className?: string;
  /**
   * ClassName Icon
   */
  classButton?: string;
  /**
   * Click Button
   */
  fnClickButton: () => void;
}

export const BasicButton = ({
  label,
  fontButton = 'bg-black',
  imgButton,
  className,
  classButton,
  fnClickButton,
}: BasicButtonProps) => {
  return (
    <button
      onClick={fnClickButton}
      className={`rounded-full text-white flex flex-row font-bold shadow-lg ${fontButton} ${className} ease-in-out 
            hover:bg-white hover:text-black transform transition-all duration-300 gap-2 items-center justify-center`}
    >
      {imgButton && <img src={imgButton} className={clsx(classButton)}></img>}
      {label && <p>{label}</p>}
    </button>
  );
};
