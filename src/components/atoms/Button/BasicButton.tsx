import '../../../index.css';

interface BasicButtonProps {
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
}

export const BasicButton = ({
  label,
  fontButton = 'bg-black',
  imgButton,
  className,
}: BasicButtonProps) => {
  return (
    <button
      className={`rounded-full text-white flex flex-row font-bold shadow-lg ${fontButton} ${className} ease-in-out 
            hover:bg-white hover:text-black transform transition-all duration-300 px-4 py-2 `}
    >
      {label && <p>{label}</p>}
      {imgButton && <img src={imgButton} className="size-[30px]"></img>}
    </button>
  );
};
