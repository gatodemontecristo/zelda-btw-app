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
}

export const SubTitle = ({
  label,
  size = 'text-2xl',
  className,
}: SubTitleProps) => {
  return (
    <p className={clsx('font-hyllian text-zelda-history', size, className)}>
      {label}
    </p>
  );
};
