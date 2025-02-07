import { TailwindFontSize } from '../../../helpers';

export interface SubTitleProps {
  /**
   * Label subtitle
   */
  label: string;
  /**
   * Size subtitle
   */
  size?: TailwindFontSize;
}

export const SubTitle = ({ label, size = 'text-2xl' }: SubTitleProps) => {
  return <p className={`${size} font-hyllian text-zelda-water`}>{label}</p>;
};
