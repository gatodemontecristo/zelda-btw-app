import React from 'react';
import clsx from 'clsx';
import { nanoid } from 'nanoid';

import { SpecialSize, TailwindZeldaColor } from '../../../helpers';
import { useMediaQuery } from 'react-responsive';

interface ButtonGroupProps {
  options: { label: string; value: string; imgUrl?: string }[];
  selectedValue?: string;
  onChange: (value: string) => void;
  color?: TailwindZeldaColor | string;
  size?: SpecialSize;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  options,
  selectedValue,
  onChange,
  size = 'base',
}) => {
  const getColorButton = () => {
    return 'bg-blue-900';
  };
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  return (
    <div
      className="inline-flex flex-wrap rounded-md justify-center shadow-sm md:gap-0 gap-2"
      role="group"
    >
      {options.map((option, index) => (
        <button
          key={nanoid()}
          type="button"
          className={clsx(
            'text-' + size,
            'md:px-6 px-3 md:py-3 py-2 font-medium flex flex-row gap-2 justify-center items-center ',
            selectedValue === option.value
              ? ` text-white ` + getColorButton()
              : 'bg-white text-gray-700 hover:bg-gray-100',
            index === 0 ? 'rounded-l-md' : '',
            index === options.length - 1 ? 'rounded-r-md' : '',
            index > 0 && 'border-l-0',
            isMobile && 'rounded-md',
          )}
          onClick={() => onChange(option.value)}
        >
          {option.label}
          {option.imgUrl && (
            <img
              src={option.imgUrl}
              className="md:size-[60px] size-[40px]"
              alt="Button group image"
            ></img>
          )}
        </button>
      ))}
    </div>
  );
};
