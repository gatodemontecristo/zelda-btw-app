// filepath: /Users/pc/Documents/Proyectos REACT (2025)/project_zelda_btw/project-zelda-btw/src/components/atoms/ButtonGroup.tsx
import React from 'react';
import clsx from 'clsx';
import { nanoid } from 'nanoid';
import { SpecialSize, TailwindZeldaColor } from '../../../helpers';

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
  color = 'blue-500',
  size = 'base',
}) => {
  return (
    <div className="inline-flex rounded-md shadow-sm" role="group">
      {options.map((option, index) => (
        <button
          key={nanoid()}
          type="button"
          className={clsx(
            'text-' + size,
            'px-6 py-3 font-medium flex flex-row gap-2 jusntify-center items-center',
            selectedValue === option.value
              ? `bg-${color} text-white`
              : 'bg-white text-gray-700 hover:bg-gray-100',
            index === 0 ? 'rounded-l-md' : '',
            index === options.length - 1 ? 'rounded-r-md' : '',
            index > 0 && 'border-l-0',
          )}
          onClick={() => onChange(option.value)}
        >
          {option.label}
          {option.imgUrl && (
            <img src={option.imgUrl} className="size-[60px]"></img>
          )}
        </button>
      ))}
    </div>
  );
};
