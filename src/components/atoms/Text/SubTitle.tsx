import { TailwindFontSize } from '../../../helpers';
import clsx from 'clsx';

export interface SubTitleProps {
  /**
   * Label subtitle
   */
  label: string;
  /**
   * Size subtitle
   */
  size?: TailwindFontSize;
  className?: string;
  /**
   * Extra subtitle
   */
  secondaryTitle?: string;
}

export const SubTitle = ({
  label,
  size = 'text-2xl',
  className,
  secondaryTitle,
}: SubTitleProps) => {
  return (
    <div className="flex flex-col items-center">
      <p className={clsx('font-hyllian text-zelda-history', size, className)}>
        {label}
      </p>
      {secondaryTitle && (
        <p className=" text-zelda-history text-sm">{secondaryTitle}</p>
      )}
    </div>
  );
};
