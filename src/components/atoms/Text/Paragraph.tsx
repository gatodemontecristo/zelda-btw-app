import clsx from 'clsx';
import { TailwindZeldaColor } from '../../../helpers';
import React, { ReactElement } from 'react';

interface ParagraphProps {
  /**
   * Children <p> elements
   */
  children?:
    | ReactElement<HTMLParagraphElement>
    | ReactElement<HTMLParagraphElement>[];
  /**
   * Font color
   */
  color?: TailwindZeldaColor;
  /**
   * Font size
   */
  size?: 'base' | 'lg' | 'xl';
}
export const Paragraph = ({
  children,
  color = 'zelda-sand',
  size = 'base',
}: ParagraphProps) => {
  return (
    <div className="flex flex-col text-center items-center justify-center w-full gap-3 z-40">
      {React.Children.map(children, (child) =>
        child
          ? React.cloneElement(child, {
              className: clsx(
                'italic font-light p-4 w-[60%]',
                'text-' + color,
                'text-' + size,
              ),
            })
          : null,
      )}
    </div>
  );
};
